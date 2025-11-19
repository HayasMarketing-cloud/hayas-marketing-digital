import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';

const ContactSection = () => {
  const { language } = useLanguageNavigation();
  const { t } = useTranslation();

  return (
    <section id="contacto" className="section-normal bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border border-border/20 bg-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-foreground">
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      {t('forms.name')}
                    </label>
                    <Input id="name" placeholder={t('contact.form.placeholder.name')} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      {t('forms.email')} *
                    </label>
                    <Input id="email" type="email" placeholder={t('contact.form.placeholder.email')} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    {t('forms.company')}
                  </label>
                  <Input id="company" placeholder={t('contact.form.placeholder.company')} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    {t('forms.message')}
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.placeholder.message')} 
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full py-6" size="lg">
                  {t('contact.form.sendRequest')}
                </Button>
              </form>
              
              <div className="text-center text-xs text-muted-foreground space-y-2 mt-6 pt-6 border-t border-border/20">
                <p>
                  {t('contact.privacy')}{' '}
                  <a href={`/${language}/aviso-legal`} className="text-primary hover:underline">AEPD</a>.
                </p>
                
                <div className="flex justify-center space-x-4 pt-2">
                  <a href={`/${language}/politica-privacidad`} className="text-primary hover:underline">
                    {t('forms.privacyPolicy')}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a href={`/${language}/aviso-legal`} className="text-primary hover:underline">
                    {t('footer.legal')}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact.contactInfo')}</h3>
                <p className="text-gray-600 mb-8">
                  {t('contact.contactDescription')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/10">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a href="https://wa.me/34656908615" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      656 908 615
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/10">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hola@hayas.es" className="text-primary hover:underline">
                      hola@hayas.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-border/10">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('forms.phone')}</h4>
                    <a href="tel:+34656908615" className="text-primary hover:underline">
                      +34 656 908 615
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
