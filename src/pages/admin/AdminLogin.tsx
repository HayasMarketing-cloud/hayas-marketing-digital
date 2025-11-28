import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, ShieldCheck, AlertCircle, UserPlus, LogIn } from 'lucide-react';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const { signIn, signUp } = useAuth();
  const { isAdmin, isAuthenticated, isLoading: adminLoading, authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin';

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
      if (!email || !password) {
        setError('Por favor, completa todos los campos');
        setIsLoading(false);
        return;
      }

      if (isSignUp) {
        if (password !== confirmPassword) {
          setError('Las contraseñas no coinciden');
          setIsLoading(false);
          return;
        }

        if (password.length < 6) {
          setError('La contraseña debe tener al menos 6 caracteres');
          setIsLoading(false);
          return;
        }

        const { error: signUpError } = await signUp(email, password);

        if (signUpError) {
          if (signUpError.message?.includes('User already registered')) {
            setError('Este email ya está registrado. Intenta iniciar sesión.');
          } else {
            setError(signUpError.message || 'Error al crear la cuenta');
          }
          setIsLoading(false);
          return;
        }

        toast.success('Cuenta creada correctamente. Contacta al administrador para obtener permisos.');
        setIsSignUp(false);
        setConfirmPassword('');
      } else {
        const { error: signInError } = await signIn(email, password);

        if (signInError) {
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
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('Error inesperado. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

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
            {isSignUp ? (
              <UserPlus className="h-8 w-8 text-primary" />
            ) : (
              <ShieldCheck className="h-8 w-8 text-primary" />
            )}
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">
              {isSignUp ? 'Crear Cuenta' : 'Panel de Administración'}
            </CardTitle>
            <CardDescription className="mt-2">
              {isSignUp 
                ? 'Crea una cuenta para solicitar acceso de administrador'
                : 'Accede con tus credenciales de administrador'
              }
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

            {!isSignUp && isAuthenticated && !isAdmin && !adminLoading && (
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
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                required
              />
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  autoComplete="new-password"
                  required
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || adminLoading}
            >
              {isLoading || adminLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isSignUp ? 'Creando cuenta...' : 'Verificando...'}
                </>
              ) : (
                <>
                  {isSignUp ? <UserPlus className="mr-2 h-4 w-4" /> : <LogIn className="mr-2 h-4 w-4" />}
                  {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setConfirmPassword('');
              }}
              className="text-sm text-primary hover:underline transition-colors"
            >
              {isSignUp 
                ? '¿Ya tienes cuenta? Inicia sesión'
                : '¿No tienes cuenta? Regístrate'
              }
            </button>
            
            <div>
              <a 
                href="/es" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Volver al sitio web
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
