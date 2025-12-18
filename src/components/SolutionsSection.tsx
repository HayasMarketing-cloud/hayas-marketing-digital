
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Heart, TrendingUp } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';

const SolutionsSection = () => {
  const { language } = useLanguageNavigation();
  const { t } = useTranslation();

  const solutions = [
    {
      id: 1,
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: t('solutions.impulsa.title'),
      description: t('solutions.impulsa.description'),
      includes: t('solutions.impulsa.includes'),
      href: language === 'en' ? '/en/solutions/boost-your-brand' : '/es/soluciones/impulsa-tu-marca'
    },
    {
      id: 2,
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t('solutions.conecta.title'),
      description: t('solutions.conecta.description'),
      includes: t('solutions.conecta.includes'),
      href: language === 'en' ? '/en/solutions/connect-with-customers' : '/es/soluciones/conecta-con-tus-clientes'
    },
    {
      id: 3,
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('solutions.activa.title'),
      description: t('solutions.activa.description'),
      includes: t('solutions.activa.includes'),
      href: language === 'en' ? '/en/solutions/activate-sales' : '/es/soluciones/activa-tus-ventas'
    }
  ];

  return (
    <section id="soluciones" className="section-normal bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-4">
            {language === 'es' ? (
              <>Nuestras <span className="text-gradient-primary">Soluciones</span></>
            ) : (
              <>Our <span className="text-gradient-primary">Solutions</span></>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit group-hover:bg-hayas-200 transition-colors">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-hayas-600 transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                    {solution.description}
                  </p>
                  <div className="text-sm text-gray-500 border-t pt-3">
                    <span className="font-medium">{t('solutions.relatedServices')}</span>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                      {solution.includes.split('•').map((item, idx) => (
                        <li key={idx} className="text-sm">{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gradient-primary text-white"
                  asChild
                >
                  <Link to={`${solution.href}#top`}>
                    {t('solutions.learnMore')}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
