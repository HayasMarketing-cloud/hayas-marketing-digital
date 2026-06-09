import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const isEN = language === 'en';

  const t = {
    invalidEmail: isEN ? 'Invalid email' : 'Email inválido',
    invalidEmailDesc: isEN ? 'Please enter a valid email.' : 'Por favor, introduce un email válido.',
    successTitle: isEN ? 'Subscription successful!' : '¡Suscripción exitosa!',
    successDesc: isEN
      ? "You'll soon receive our first email with exclusive content."
      : 'Pronto recibirás nuestro primer email con contenido exclusivo.',
    joinedTitle: isEN ? "You're part of the community!" : '¡Ya eres parte de la comunidad!',
    joinedDesc: isEN
      ? 'Thanks for subscribing. Check your inbox to confirm.'
      : 'Gracias por suscribirte. Revisa tu email para confirmar la suscripción.',
    joinedSub: isEN
      ? "You'll soon receive exclusive content on digital marketing, customer management and applied AI."
      : 'Pronto recibirás contenido exclusivo sobre marketing digital, gestión de clientes e IA aplicada.',
    heading: isEN ? 'Stay up to date with our latest insights' : 'Mantente al día con nuestros últimos insights',
    bodyPrefix: isEN ? 'Be the first to read our new articles and tips on ' : 'Recibe antes que nadie nuestros nuevos artículos y consejos sobre ',
    bodyMid: isEN ? ', ' : ', ',
    bodyJoin: isEN ? ' and ' : ' e ',
    bodySuffix: isEN ? ' applied to both areas.' : ' a ambas áreas.',
    marketing: isEN ? 'digital marketing' : 'marketing digital',
    crm: isEN ? 'customer management' : 'gestión de clientes',
    ai: isEN ? 'applied artificial intelligence' : 'inteligencia artificial aplicada',
    placeholder: isEN ? 'you@email.com' : 'tu@email.com',
    submit: isEN ? 'Subscribe' : 'Suscribirme',
    submitting: isEN ? 'Subscribing...' : 'Suscribiendo...',
    noSpamPrefix: isEN ? 'No spam. Unsubscribe anytime. Review our ' : 'No spam. Cancela cuando quieras. Revisa nuestra ',
    privacyPolicy: isEN ? 'privacy policy' : 'política de privacidad',
    privacyFooter: isEN
      ? 'At Hayas we protect your privacy and data. We adhere to the Digital Pact for an ethical use of information. More info: '
      : 'En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital para un uso ético de la información. Más info: ',
    privacyTitle: isEN ? 'Privacy Policy' : 'Política de Privacidad',
    legalTitle: isEN ? 'Legal Notice' : 'Aviso Legal',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: t.invalidEmail,
        description: t.invalidEmailDesc,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: t.successTitle,
        description: t.successDesc,
      });
    }, 1000);
  };

  const { getRoute } = useLocalizedRoutes();

  if (isSubscribed) {
    return (
      <section className="section-normal bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border border-border/20 bg-card">
              <CardContent className="text-center p-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {t.joinedTitle}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.joinedDesc}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.joinedSub}
                </p>

                <div className="text-center text-xs text-muted-foreground space-y-2 mt-6 pt-6 border-t border-border/20">
                  <p>
                    {t.privacyFooter}
                    <Link to={getRoute('legalNotice')} className="text-primary hover:underline">AEPD</Link>.
                  </p>

                  <div className="flex justify-center space-x-4 pt-2">
                    <Link to={getRoute('privacyPolicy')} className="text-primary hover:underline">
                      {t.privacyTitle}
                    </Link>
                    <span className="text-muted-foreground">|</span>
                    <Link to={getRoute('legalNotice')} className="text-primary hover:underline">
                      {t.legalTitle}
                    </Link>
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
                  {t.heading}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-muted-foreground mb-6 text-center">
                {t.bodyPrefix}
                <strong>{t.marketing}</strong>{t.bodyMid}
                <strong>{t.crm}</strong>{t.bodyJoin}
                <strong>{t.ai}</strong>
                {t.bodySuffix}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={t.placeholder}
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
                    {isLoading ? t.submitting : t.submit}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  {t.noSpamPrefix}
                  <Link to={getRoute('privacyPolicy')} className="text-primary hover:underline">
                    {t.privacyPolicy}
                  </Link>.
                </p>
              </form>

              <div className="text-center text-xs text-muted-foreground space-y-2 mt-6 pt-6 border-t border-border/20">
                <p>
                  {t.privacyFooter}
                  <Link to={getRoute('legalNotice')} className="text-primary hover:underline">AEPD</Link>.
                </p>

                <div className="flex justify-center space-x-4 pt-2">
                  <Link to={getRoute('privacyPolicy')} className="text-primary hover:underline">
                    {t.privacyTitle}
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link to={getRoute('legalNotice')} className="text-primary hover:underline">
                    {t.legalTitle}
                  </Link>
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
