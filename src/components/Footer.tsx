import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Users, Linkedin, Youtube, MessageSquare, Mail, MapPin } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
  showKitSection?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  showKitSection = false
}) => {
  const { language } = useLanguageNavigation();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Hayas Marketing</h3>
            <p className="mb-4">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/hayasmarketing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hayas_marketing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/HayasMarketing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/hayasmarketing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/c/HayasEsMarketingNatural" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@hayas_marketing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.discoverSolution')}</h3>
            <ul className="space-y-3">
            <li><Link to={`/${language}/soluciones/impulsa-tu-marca`} className="hover:text-secondary transition-colors">{t('footer.impulsa-tu-marca')}</Link></li>
            <li><Link to={`/${language}/soluciones/conecta-con-tus-clientes`} className="hover:text-secondary transition-colors">{t('footer.conecta-con-tus-clientes')}</Link></li>
            <li><Link to={`/${language}/soluciones/activa-tus-ventas`} className="hover:text-secondary transition-colors">{t('footer.activa-tus-ventas')}</Link></li>
            <li><Link to={`/${language}/soluciones/ia-marketing`} className="hover:text-secondary transition-colors">{t('footer.ia-marketing')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.featuredServices')}</h3>
            <ul className="space-y-2">
            <li><Link to={`/${language}/servicios/creacion-marca`} className="hover:text-secondary transition-colors text-sm">{t('footer.creacion-marca')}</Link></li>
            <li><Link to={`/${language}/servicios/diseno-web`} className="hover:text-secondary transition-colors text-sm">{t('footer.diseno-web')}</Link></li>
            <li><Link to={`/${language}/servicios/implantacion-crm`} className="hover:text-secondary transition-colors text-sm">{t('footer.implantacion-crm')}</Link></li>
            <li><Link to={`/${language}/servicios/automatizacion-procesos-ventas`} className="hover:text-secondary transition-colors text-sm">{t('footer.automatizacion-comercial')}</Link></li>
            <li><Link to={`/${language}/servicios/seo-posicionamiento`} className="hover:text-secondary transition-colors text-sm">{t('footer.seo-posicionamiento')}</Link></li>
            <li><Link to={`/${language}/servicios/captacion-leads-clientes`} className="hover:text-secondary transition-colors text-sm">{t('footer.captacion-leads')}</Link></li>
            <li><Link to={`/${language}/servicios/email-marketing-automatizaciones`} className="hover:text-secondary transition-colors text-sm">{t('footer.email-marketing')}</Link></li>
            <li><Link to={`/${language}/servicios/consultoria-estrategica-analitica`} className="hover:text-secondary transition-colors text-sm">{t('footer.consultoria-estrategica')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${language}/casos-exito`} className="hover:text-secondary transition-colors text-sm">{t('footer.caseStudies')}</Link></li>
              <li><Link to={`/${language}/blog`} className="hover:text-secondary transition-colors text-sm">{t('footer.blogGuides')}</Link></li>
              <li><Link to={`/${language}/servicios`} className="hover:text-secondary transition-colors text-sm">{t('footer.allServices')}</Link></li>
              <li><Link to={`/${language}/nosotros`} className="hover:text-secondary transition-colors text-sm">{t('footer.aboutUs')}</Link></li>
              <li><Link to={`/${language}/contacto`} className="hover:text-secondary transition-colors text-sm">{t('footer.contact')}</Link></li>
              <li><Link to={`/${language}/agendar-reunion`} className="hover:text-secondary transition-colors text-sm">{t('footer.scheduleConsultation')}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:hola@hayas.es" className="hover:text-secondary transition-colors text-sm">hola@hayas.es</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-secondary" />
              <a href="https://wa.me/34656908615" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-sm">656 908 615</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm">{t('footer.officeLocation')}</span>
            </div>
          </div>
        </div>
        
        {/* Priority CTAs Section - Solo en Home */}
        {showKitSection && <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Agentes de transformación digital a través de los Fondos Next Generation de la Unión Europea</h3>
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <img src="/lovable-uploads/e3910419-c73c-4448-a631-ed5f0eff61fe.png" alt="Agentes oficiales - Gobierno de España, Red.es, Kit Digital, Financiado por la Unión Europea" width={400} height={48} className="h-12 max-w-full" style={{ aspectRatio: '400/48' }} />
                </div>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-xl">
                Programa de subvenciones para autónomos y empresas españolas. <span className="text-white font-bold text-xl">Disponible hasta el próximo 31 de octubre de 2025</span>
              </p>
            </div>
          </div>}
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p>{t('footer.rights')}</p>
          </div>
          <div className="flex space-x-6">
            <Link to={`/${language}/legal/aviso-legal`} className="hover:text-secondary transition-colors">{t('footer.legal')}</Link>
            <Link to={`/${language}/legal/politica-privacidad`} className="hover:text-secondary transition-colors">{t('footer.privacy')}</Link>
            <Link to={`/${language}/legal/terminos-servicio`} className="hover:text-secondary transition-colors">{t('footer.terms')}</Link>
            <Link to={`/${language}/legal/politica-cookies`} className="hover:text-secondary transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;