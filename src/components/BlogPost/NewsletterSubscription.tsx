import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border border-border/20 bg-card">
              <CardContent className="text-center p-8">
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
                
                {/* Footer de privacidad estándar */}
                <div className="text-center text-xs text-muted-foreground space-y-2 mt-6 pt-6 border-t border-border/20">
                  <p>
                    En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
                    para un uso ético de la información. Más info:{' '}
                     <a href="/es/aviso-legal" className="text-primary hover:underline">AEPD</a>.
                  </p>
                  
                  <div className="flex justify-center space-x-4 pt-2">
                     <a href="/es/politica-privacidad" className="text-primary hover:underline">
                      Política de Privacidad
                    </a>
                    <span className="text-muted-foreground">|</span>
                     <a href="/es/aviso-legal" className="text-primary hover:underline">
                      Aviso Legal
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-normal bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border border-border/20 bg-card">
            <CardHeader className="pb-6">
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl font-bold text-foreground">
                  Mantente al día con nuestros últimos insights
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-muted-foreground mb-6 text-center">
                Recibe antes que nadie nuestros nuevos artículos y consejos sobre{' '}
                <strong>marketing digital</strong>, <strong>gestión de clientes</strong> e{' '}
                <strong>inteligencia artificial aplicada</strong> a ambas áreas.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
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
                    className="whitespace-nowrap px-8"
                    size="lg"
                  >
                    {isLoading ? 'Suscribiendo...' : 'Suscribirme'}
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Cancela cuando quieras. Revisa nuestra{' '}
                   <a href="/es/politica-privacidad" className="text-primary hover:underline">
                    política de privacidad
                  </a>.
                </p>
              </form>
              
              {/* Footer de privacidad estándar */}
              <div className="text-center text-xs text-muted-foreground space-y-2 mt-6 pt-6 border-t border-border/20">
                <p>
                  En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
                  para un uso ético de la información. Más info:{' '}
                  <a href="/es/aviso-legal" className="text-primary hover:underline">AEPD</a>.
                </p>
                
                <div className="flex justify-center space-x-4 pt-2">
                  <a href="/es/politica-privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a href="/es/aviso-legal" className="text-primary hover:underline">
                    Aviso Legal
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;