import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import { 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Users, 
  Building2, 
  TrendingUp,
  CheckCircle,
  Zap,
  Globe,
  Target,
  BarChart3,
  Bot,
  Mail,
  MessageCircle,
  Star,
  Shield,
  Smartphone,
  Apple,
  Phone
} from 'lucide-react';

// FAQ data
const faqItems = [
  {
    question: "¿Cuál es la principal diferencia entre HubSpot y Go High Level?",
    answer: "HubSpot es ideal para empresas B2B medianas y grandes con procesos complejos, mientras que Go High Level está optimizado para PYMEs y emprendedores que buscan una solución todo-en-uno más económica y centrada en automatización multicanal."
  },
  {
    question: "¿Cuál es más fácil de usar para un equipo sin experiencia técnica?",
    answer: "HubSpot tiene una curva de aprendizaje más suave y una interfaz más intuitiva. Go High Level es más completo pero requiere mayor tiempo de adaptación inicial, aunque centraliza todas las funciones en una sola plataforma."
  },
  {
    question: "¿Qué CRM ofrece mejor relación calidad-precio?",
    answer: "Para PYMEs y emprendedores, Go High Level ofrece más funcionalidades por menos precio. Para empresas medianas y grandes con necesidades específicas de B2B, HubSpot justifica su precio con funcionalidades avanzadas y ecosistema robusto."
  },
  {
    question: "¿Puedo migrar de uno a otro sin perder datos?",
    answer: "Sí, ambas plataformas permiten importación/exportación de datos. En Hayas gestionamos migraciones completas garantizando que no se pierda información crítica durante el proceso de transición."
  },
  {
    question: "¿Cuál tiene mejor soporte al cliente?",
    answer: "Ambos ofrecen soporte 24/7 en planes pagos. HubSpot cuenta con HubSpot Academy y una comunidad más amplia. Go High Level tiene soporte directo muy receptivo y una comunidad activa de usuarios especializados."
  }
];

const ComparativaHubSpotGoHighLevel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/soluciones/conecta-con-tus-clientes" className="hover:text-primary">Conecta con tus clientes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">HubSpot vs Go High Level</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              HubSpot vs Go High Level: <span className="text-gradient-primary">¿qué CRM elegir para tu negocio?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comparamos las dos plataformas líderes para que descubras cuál encaja mejor con las necesidades de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/solicitar-consulta" className="flex items-center gap-2">
                  👉 Solicita tu asesoría gratuita
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1: Introducción */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              En el ecosistema digital actual, elegir un CRM adecuado puede marcar la diferencia en la productividad de un equipo y en la relación con los clientes.
              Aquí comparamos <strong>HubSpot</strong>, referente global con más de 258.000 empresas en 135 países, y <strong>Go High Level</strong>, una plataforma emergente que ha ganado popularidad con su enfoque "todo en uno" para marketing y ventas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: ¿Para quién es cada CRM? */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Para quién es cada <span className="text-gradient-primary">CRM</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot */}
            <Card className="p-8 text-center border-2 border-orange-200 bg-orange-50/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-6 shadow-sm">
                  <img src="/lovable-uploads/ba197ffa-03bd-4cb9-8540-56f4aa82594e.png" alt="HubSpot" className="max-w-full max-h-full object-contain" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-900">HubSpot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-orange-800 font-semibold mb-4">
                  Empresas medianas, grandes, B2B, tecnológicas y con estrategias de inbound marketing.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">Procesos de venta complejos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">Equipos de marketing y ventas grandes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-700">Necesidad de integraciones avanzadas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level */}
            <Card className="p-8 text-center border-2 border-blue-200 bg-blue-50/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-6 shadow-sm">
                  <img src="/lovable-uploads/611a7129-40d9-4ced-be17-6836749a97e5.png" alt="Go High Level" className="max-w-full max-h-full object-contain" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">Go High Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-blue-800 font-semibold mb-4">
                  PYMEs y emprendedores que buscan crecer rápido con un todo-en-uno potente y económico.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">Automatización multicanal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">Todo integrado en una plataforma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700">Precio competitivo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 3: Funcionalidades principales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Funcionalidades <span className="text-gradient-primary">principales</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary">
                    <th className="p-6 text-left text-white font-bold text-lg">Funcionalidad</th>
                    <th className="p-6 text-center text-white font-bold text-lg">HubSpot</th>
                    <th className="p-6 text-center text-white font-bold text-lg">Go High Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">Gestión de contactos y leads</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Excelente</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Excelente</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">Automatización de marketing</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Muy buena</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Excelente</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">Embudos y landing pages</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Buena</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Excelente</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">Email marketing</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Nativo</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Integrado</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">WhatsApp y SMS</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Planes Pro</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Incluido</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold">Reporting y analítica</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Avanzado</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Completo</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-6 font-semibold">Reputación online</td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Limitado</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Incluido</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Usabilidad, Integraciones y Soporte */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Usabilidad, Integraciones y <span className="text-gradient-primary">Soporte</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Usabilidad */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Usabilidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">Intuitivo y rápido de adoptar</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">Más completo, curva inicial mayor pero todo centralizado</p>
                </div>
              </CardContent>
            </Card>

            {/* Integraciones */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">Integraciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">+1800 integraciones</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">Stripe, Twilio, Google, Facebook Ads, Zapier</p>
                </div>
              </CardContent>
            </Card>

            {/* Soporte */}
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">Soporte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">HubSpot</h4>
                  <p className="text-sm text-orange-700">Academy, comunidad y soporte 24/7 en planes pagos</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Go High Level</h4>
                  <p className="text-sm text-blue-700">Soporte 24/7 y comunidad activa</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 5: Email marketing y WhatsApp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Email Marketing y <span className="text-gradient-primary">WhatsApp</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot */}
            <Card className="p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-900">HubSpot</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Email nativo integrado</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Integración oficial con WhatsApp (planes Pro)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Templates avanzados de email</span>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">Go High Level</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Email con proveedor externo (Mailgun, SendGrid)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>WhatsApp vía Twilio integrado en flujos multicanal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>SMS incluido en todos los planes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 6: Inteligencia Artificial */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inteligencia <span className="text-gradient-primary">Artificial</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot Breeze AI */}
            <Card className="p-8 border-2 border-orange-200 bg-orange-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-900">HubSpot Breeze AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">Copilot para tareas diarias</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">Agents especializados (contenido, prospecting, cliente)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">Enriquecimiento de datos automático</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-orange-600 mt-1" />
                  <span className="text-sm">Inbox inteligente</span>
                </div>
              </CardContent>
            </Card>

            {/* HighLevel AI */}
            <Card className="p-8 border-2 border-blue-200 bg-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">HighLevel AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">Workflows inteligentes</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">Voice AI para llamadas automáticas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">Conversation AI para chats</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-sm">Reviews AI y Content AI</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              👉 <strong>Conclusión:</strong> HubSpot optimiza tareas diarias, GHL convierte la IA en un sistema operativo para marketing y ventas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 7: Comparativa de precios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comparativa de <span className="text-gradient-primary">precios</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* HubSpot Pricing */}
            <Card className="p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-8 shadow-sm">
                  <img src="/lovable-uploads/ba197ffa-03bd-4cb9-8540-56f4aa82594e.png" alt="HubSpot" className="max-w-full max-h-full object-contain" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">CRM Suite Starter</h4>
                  <p className="text-2xl font-bold text-orange-700">50 €/mes</p>
                  <p className="text-sm text-orange-600">+ setup 325–750 €</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Marketing Hub Pro</h4>
                  <p className="text-2xl font-bold text-orange-700">890 €/mes</p>
                  <p className="text-sm text-orange-600">+ setup 1.250–1.950 €</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Sales Hub Pro</h4>
                  <p className="text-2xl font-bold text-orange-700">100 €/usuario/mes</p>
                  <p className="text-sm text-orange-600">+ setup 650–950 €</p>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Enterprise</h4>
                  <p className="text-2xl font-bold text-orange-700">desde 3.600 €/mes</p>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level Pricing */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-8 shadow-sm">
                  <img src="/lovable-uploads/611a7129-40d9-4ced-be17-6836749a97e5.png" alt="Go High Level" className="max-w-full max-h-full object-contain" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Starter</h4>
                  <p className="text-2xl font-bold text-blue-700">39 €/mes</p>
                  <p className="text-sm text-blue-600">+ setup 149–249 €</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Pro</h4>
                  <p className="text-2xl font-bold text-blue-700">79 €/mes</p>
                  <p className="text-sm text-blue-600">+ setup 349–499 €</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Premium</h4>
                  <p className="text-2xl font-bold text-blue-700">149 €/mes</p>
                  <p className="text-sm text-blue-600">+ setup 749–999 €</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Premium + IA</h4>
                  <p className="text-2xl font-bold text-blue-700">199 €/mes</p>
                  <p className="text-sm text-blue-600">+ setup 749–999 €</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Nota aclaratoria de precios */}
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6">
              *Los precios mostrados son orientativos. Para disponer de un presupuesto personalizado y adaptado a tus necesidades específicas, contacta con nosotros.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contacto">
                Solicitar presupuesto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección 8: Metáfora visual */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HubSpot vs HighLevel es como <span className="text-gradient-primary">iOS vs Android</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* HubSpot = iOS */}
            <Card className="p-8 text-center border-2 border-orange-200 bg-orange-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Apple className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-900">HubSpot (iOS/Apple)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">🏆 Ecosistema premium</h4>
                  <p className="text-sm text-orange-700">Cuidado, robusto, mayor precio</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">✨ Experiencia pulida</h4>
                  <p className="text-sm text-orange-700">Intuitivo desde el primer día</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-900 mb-2">🔒 Entorno controlado</h4>
                  <p className="text-sm text-orange-700">Todo funciona perfectamente integrado</p>
                </div>
              </CardContent>
            </Card>

            {/* Go High Level = Android */}
            <Card className="p-8 text-center border-2 border-blue-200 bg-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">GHL (Android)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">🔧 Flexible</h4>
                  <p className="text-sm text-blue-700">Todo en uno, potente</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">💰 Accesible</h4>
                  <p className="text-sm text-blue-700">Mayor funcionalidad por menos precio</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2">⚙️ Adaptable</h4>
                  <p className="text-sm text-blue-700">Se moldea a tu forma de trabajar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Preguntas Frecuentes"
        subtitle="Resolvemos las dudas más comunes sobre la elección entre HubSpot y Go High Level"
        faqs={faqItems} 
      />

      {/* Service Related Posts */}
      <ServiceRelatedPosts serviceSlug="conecta-con-tus-clientes" />

      {/* Sección 9: CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No hay un CRM mejor que otro: hay un CRM <span className="text-gradient-primary">adecuado para cada negocio</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              En Hayas te ayudamos a elegir, implantar y optimizar la plataforma que realmente encaje con tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/solicitar-consulta" className="flex items-center gap-2">
                  👉 Solicita tu asesoría gratuita
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/agendar-reunion" className="flex items-center gap-2">
                  👉 Agenda tu demo personalizada
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparativaHubSpotGoHighLevel;