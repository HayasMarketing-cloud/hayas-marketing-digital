import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { hasError: true, message: error instanceof Error ? error.message : String(error) };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Log detallado para depuración
    // Nota: Podemos enviar a backend si se requiere en el futuro
    // eslint-disable-next-line no-console
    console.error("ReactErrorBoundary", { error, info });
  }

  handleReload = () => {
    // Forzar recarga limpia
    window.location.replace(window.location.href);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full rounded-xl border bg-background shadow-corporate p-6 text-foreground">
            <h1 className="text-2xl font-semibold mb-2">Se produjo un error</h1>
            <p className="text-sm opacity-80 mb-4">
              Ha ocurrido un problema al cargar la página. Hemos registrado el error para
              poder revisarlo.
            </p>
            {this.state.message && (
              <pre className="text-xs bg-muted/40 rounded-md p-3 overflow-auto mb-4">
                {this.state.message}
              </pre>
            )}
            <div className="flex gap-3">
              <button onClick={this.handleReload} className="px-4 py-2 rounded-md border shadow-sm transition-colors hover:opacity-90">
                Recargar página
              </button>
              <a href="/" className="px-4 py-2 rounded-md border shadow-sm transition-colors hover:opacity-90">
                Ir al inicio
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
