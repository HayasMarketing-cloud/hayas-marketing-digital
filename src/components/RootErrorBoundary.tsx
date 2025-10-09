import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[RootErrorBoundary] Error capturado:', error);
    return { 
      hasError: true, 
      error,
      errorInfo: error.stack || error.message
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[RootErrorBoundary] Error details:', {
      error: error.toString(),
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-lg w-full text-center space-y-6 p-8 bg-card border border-border rounded-lg shadow-lg">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-destructive">
                Error crítico
              </h1>
              <p className="text-lg text-muted-foreground">
                La aplicación no pudo iniciarse correctamente
              </p>
            </div>
            
            {this.state.errorInfo && (
              <details className="text-left bg-muted p-4 rounded text-xs overflow-auto max-h-40">
                <summary className="cursor-pointer font-semibold mb-2">
                  Detalles técnicos
                </summary>
                <pre className="whitespace-pre-wrap break-words">
                  {this.state.errorInfo}
                </pre>
              </details>
            )}
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                Recargar página
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  window.location.reload();
                }}
                className="px-6 py-3 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors text-sm"
              >
                Limpiar datos y recargar
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RootErrorBoundary;
