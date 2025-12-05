import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Container } from './Container';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8 animate-fade-up">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-poppins font-bold text-piko-black mb-4">
                  Oops! Something went wrong
                </h1>
                <p className="text-lg text-piko-medium-grey mb-8">
                  We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
                </p>
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                    <p className="text-sm font-mono text-red-800 break-all">
                      {this.state.error.message}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-piko-purple text-white rounded-full font-medium transition-all duration-300 hover:bg-piko-plum hover:shadow-lg"
                >
                  <RefreshCw size={20} />
                  Try Again
                </button>
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-piko-purple text-piko-purple rounded-full font-medium transition-all duration-300 hover:bg-piko-purple hover:text-white"
                >
                  <Home size={20} />
                  Go to Homepage
                </button>
              </div>

              <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-piko-medium-grey mb-4">Need immediate help?</p>
                <a
                  href="/contact"
                  className="text-piko-purple hover:text-piko-plum font-medium transition-colors"
                >
                  Contact our support team
                </a>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
