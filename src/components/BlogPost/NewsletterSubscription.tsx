import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, introduce un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular suscripción (aquí integrarías con tu servicio real)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: "¡Suscripción exitosa!",
        description: "Pronto recibirás nuestro primer email con contenido exclusivo.",
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="section-normal bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-sm border border-border p-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              ¡Ya eres parte de la comunidad!
            </h3>
            <p className="text-muted-foreground mb-4">
              Gracias por suscribirte. Revisa tu email para confirmar la suscripción.
            </p>
            <p className="text-sm text-muted-foreground">
              Pronto recibirás contenido exclusivo sobre marketing digital, gestión de clientes e IA aplicada.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-normal bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-sm border border-border p-8">
          <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
          
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Mantente al día con nuestros últimos insights
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Recibe antes que nadie nuestros nuevos artículos y consejos sobre{' '}
            <strong>marketing digital</strong>, <strong>gestión de clientes</strong> e{' '}
            <strong>inteligencia artificial aplicada</strong> a ambas áreas.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? 'Suscribiendo...' : 'Suscribirme'}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Cancela cuando quieras. Revisa nuestra{' '}
            <a href="/politica-privacidad" className="text-primary hover:underline">
              política de privacidad
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;