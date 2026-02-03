import  { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';

declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileWidgetProps {
  sitekey: string;
  onVerify: (token: string) => void;
  onError?: (error?: any) => void;
  onExpire?: () => void;
}

export interface TurnstileWidgetRef {
  reset: () => void;
  getResponse: () => string | null;
  isReady: () => boolean;
}

export const TurnstileWidget = forwardRef<TurnstileWidgetRef, TurnstileWidgetProps>(({
  sitekey,
  onVerify,
  onError,
  onExpire,
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const scriptLoadedRef = useRef<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  const reset = () => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
        setErrorState(null);
      } catch (error) {
        console.error('Turnstile reset error:', error);
      }
    } else {
      initializeWidget();
    }
  };

  const getResponse = (): string | null => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        return window.turnstile.getResponse(widgetIdRef.current);
      } catch (error) {
        console.error('Turnstile getResponse error:', error);
      }
    }
    return null;
  };

  const isReady = (): boolean => {
    return scriptLoadedRef.current && isInitialized && !errorState;
  };

  useImperativeHandle(ref, () => ({
    reset,
    getResponse,
    isReady,
  }));

  const initializeWidget = () => {
    if (!containerRef.current || !window.turnstile) {
      console.error('Turnstile: Container or turnstile not ready');
      return;
    }

    try {
      const container = containerRef.current;
      
      if (!sitekey || sitekey.trim() === '') {
        const error = new Error('Turnstile sitekey is missing or empty');
        console.error('Turnstile error:', error);
        if (onError) onError(error);
        setErrorState('Missing sitekey');
        return;
      }

      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }

      container.innerHTML = '';

      const currentHostname = window.location.hostname;
      
      if (currentHostname === 'localhost' || currentHostname === '127.0.0.1') {
        console.warn('Turnstile: Running on localhost - make sure localhost is added to allowed domains in Cloudflare dashboard');
      }

      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: sitekey.trim(),
        callback: (token: string) => {
          console.log('Turnstile verification successful');
          onVerify(token);
          setErrorState(null);
        },
        'error-callback': (errorCode: string) => {
          let errorMessage = 'Verification failed';
          
          switch (errorCode) {
            case '110200':
              errorMessage = 'Invalid domain. Please check your Cloudflare Turnstile settings.';
              break;
            case '110201':
              errorMessage = 'Invalid sitekey.';
              break;
            case '110202':
              errorMessage = 'Widget expired.';
              break;
            case '110203':
              errorMessage = 'Challenge expired.';
              break;
            case '110204':
              errorMessage = 'Network error.';
              break;
            case '110205':
              errorMessage = 'Timeout.';
              break;
            case '110206':
              errorMessage = 'Unknown error.';
              break;
          }
          
          console.error(`Turnstile error ${errorCode}:`, errorMessage);
          
          if (onError) {
            onError({ code: errorCode, message: errorMessage });
          }
          
          setErrorState(errorMessage);
          widgetIdRef.current = null;
        },
        'expired-callback': () => {
          console.log('Turnstile verification expired');
          if (onExpire) onExpire();
          setErrorState('Verification expired');
          widgetIdRef.current = null;
        },
        theme: 'light',
        size: 'normal',
        action: 'waiting-list',
        execution: 'render',
        language: 'auto',
        'refresh-expired': 'auto',
        retry: 'auto',
        'retry-interval': 8000,
      });
      
      setIsInitialized(true);
      setErrorState(null);
      console.log('Turnstile widget initialized');
      
    } catch (error) {
      console.error('Turnstile render error:', error);
      if (onError) onError(error);
      setErrorState('Failed to initialize widget');
      setIsInitialized(false);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const loadTurnstileScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (scriptLoadedRef.current && window.turnstile) {
          resolve();
          return;
        }

        if (document.querySelector('script[src*="challenges.cloudflare.com"]')) {
          const checkInterval = setInterval(() => {
            if (window.turnstile) {
              clearInterval(checkInterval);
              scriptLoadedRef.current = true;
              resolve();
            }
          }, 100);

          setTimeout(() => {
            clearInterval(checkInterval);
            if (!window.turnstile) {
              reject(new Error('Turnstile script failed to load'));
            }
          }, 10000);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          scriptLoadedRef.current = true;
          console.log('Turnstile script loaded');
          resolve();
        };
        
        script.onerror = () => {
          const error = new Error('Failed to load Turnstile script. Check your network connection.');
          console.error('Turnstile script load error:', error);
          reject(error);
        };
        
        document.head.appendChild(script);
      });
    };

    loadTurnstileScript()
      .then(() => {
        setTimeout(() => {
          if (window.turnstile) {
            initializeWidget();
          }
        }, 300);
      })
      .catch((error) => {
        console.error('Turnstile initialization error:', error);
        if (onError) onError(error);
        setErrorState('Failed to load verification');
      });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (error) {
          console.error('Turnstile cleanup error:', error);
        }
      }
      widgetIdRef.current = null;
      setIsInitialized(false);
    };
  }, [sitekey]);

  if (!sitekey || sitekey.trim() === '') {
    return (
      <div className="turnstile-error text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 text-sm">Turnstile sitekey is not configured.</p>
        <p className="text-red-500 text-xs mt-1">Please check your environment variables.</p>
      </div>
    );
  }

  if (errorState) {
    return (
      <div className="turnstile-container">
        <div ref={containerRef} className="turnstile-widget" />
        <div className="turnstile-error text-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg mt-2">
          <p className="text-yellow-700 text-sm">{errorState}</p>
          <button
            onClick={reset}
            className="mt-2 px-4 py-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-xs rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="turnstile-widget" />;
});

TurnstileWidget.displayName = 'TurnstileWidget';