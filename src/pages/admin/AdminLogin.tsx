import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signIn } = useAuth();
  const { isAdmin, isAuthenticated, isLoading: adminLoading, authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from location state or default to /admin
  const from = (location.state as any)?.from?.pathname || '/admin';

  // Redirect if already authenticated as admin
  useEffect(() => {
    if (!authLoading && !adminLoading && isAuthenticated && isAdmin) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, isAdmin, authLoading, adminLoading, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Basic validation
      if (!email || !password) {
        setError('Por favor, completa todos los campos');
        setIsLoading(false);
        return;
      }

      const { error: signInError } = await signIn(email, password);

      if (signInError) {
        // Handle specific error messages
        if (signInError.message?.includes('Invalid login credentials')) {
          setError('Credenciales incorrectas. Verifica tu email y contraseña.');
        } else if (signInError.message?.includes('Email not confirmed')) {
          setError('Email no confirmado. Revisa tu bandeja de entrada.');
        } else {
          setError(signInError.message || 'Error al iniciar sesión');
        }
        setIsLoading(false);
        return;
      }

      toast.success('Sesión iniciada correctamente');
      // The useEffect will handle the redirect once admin status is confirmed
    } catch (err) {
      console.error('Login error:', err);
      setError('Error inesperado. Por favor, intenta de nuevo.');
      setIsLoading(false);
    }
  };

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 px-4">
      <Card className="w-full max-w-md shadow-xl border-border/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Panel de Administración</CardTitle>
            <CardDescription className="mt-2">
              Accede con tus credenciales de administrador
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Show message if authenticated but not admin */}
            {isAuthenticated && !isAdmin && !adminLoading && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Tu cuenta no tiene permisos de administrador.
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@hayasmarketing.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                autoComplete="current-password"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || adminLoading}
            >
              {isLoading || adminLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verificando...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a 
              href="/es" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Volver al sitio web
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
