import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileWidgetProps {
  sitekey: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({
  sitekey,
  onVerify,
  onError,
  onExpire,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="challenges.cloudflare.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = initializeWidget;
      document.head.appendChild(script);
    } else {
      if (window.turnstile) {
        initializeWidget();
      }
    }

    function initializeWidget() {
      if (containerRef.current && window.turnstile) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey,
          callback: onVerify,
          'error-callback': onError,
          'expired-callback': onExpire,
          theme: 'light',
          size: 'normal',
        });
      }
    }

    return () => {
    
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [sitekey, onVerify, onError, onExpire]);

  return <div ref={containerRef} className="turnstile-widget" />;
};