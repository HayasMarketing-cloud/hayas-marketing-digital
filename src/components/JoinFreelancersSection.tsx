import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

const JoinFreelancersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    area: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    about: '',
    acceptCommunications: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Proyectos según tu especialidad",
      description: "Te asignamos proyectos que coinciden con tus skills y disponibilidad"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Colaboraciones transparentes",
      description: "Relaciones a largo plazo con condiciones claras y justas"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Herramientas eficientes",
      description: "Enfoque estratégico con las mejores herramientas del mercado"
    }
  ];

  return (
    <section id="unete-freelance" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Únete al Equipo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ¿Eres profesional freelance en 
              <span className="text-gradient-primary block mt-2">marketing o martech?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              En Hayas Marketing colaboramos con especialistas para proyectos por demanda. 
              Si trabajas en marketing digital, contenidos, paid media, SEO, CRM (GHL/HubSpot), 
              automatización o desarrollo web, nos encantará conocerte.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - CTA */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center mb-6">
                      ¡Únete a nuestro equipo!
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Proyectos de calidad</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Pagos puntuales</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Flexibilidad horaria</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">Crecimiento profesional</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-primary-foreground/20">
                      <p className="text-sm text-primary-foreground/80">
                        Forma parte de una red de especialistas que trabajan en proyectos innovadores 
                        para empresas de diferentes sectores.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional content to fill space */}
                <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">¿Por qué colaborar con nosotros?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Red de especialistas:</strong> Conectamos con profesionales de alto nivel
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Proyectos variados:</strong> Desde startups hasta grandes empresas
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Soporte técnico:</strong> Herramientas y metodologías punteras
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          <strong>Crecimiento conjunto:</strong> Formación continua y networking
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Formulario de Colaboración</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input
                          id="firstName"
                          placeholder="Tu nombre"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="area">Área/s principal/es</Label>
                        <Select value={formData.area} onValueChange={(value) => setFormData({...formData, area: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu especialidad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                            <SelectItem value="contenidos">Contenidos</SelectItem>
                            <SelectItem value="paid-media">Paid Media</SelectItem>
                            <SelectItem value="seo">SEO</SelectItem>
                            <SelectItem value="crm">CRM (GHL/HubSpot)</SelectItem>
                            <SelectItem value="automatizacion">Automatización</SelectItem>
                            <SelectItem value="desarrollo-web">Desarrollo Web</SelectItem>
                            <SelectItem value="design">Diseño</SelectItem>
                            <SelectItem value="analytics">Analytics</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experiencia</Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Años de experiencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 años</SelectItem>
                            <SelectItem value="3-5">3-5 años</SelectItem>
                            <SelectItem value="5-10">5-10 años</SelectItem>
                            <SelectItem value="10+">+10 años</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio</Label>
                      <Input
                        id="portfolio"
                        placeholder="URL de tu portfolio o trabajos"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="URL de tu perfil de LinkedIn"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="about">Cuéntanos sobre ti</Label>
                      <Textarea
                        id="about"
                        placeholder="Háblanos de tu experiencia, especialidades y qué tipo de proyectos te interesan más..."
                        value={formData.about}
                        onChange={(e) => setFormData({...formData, about: e.target.value})}
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="accept"
                        checked={formData.acceptCommunications}
                        onCheckedChange={(checked) => setFormData({...formData, acceptCommunications: !!checked})}
                      />
                      <div className="space-y-1 leading-none">
                        <Label htmlFor="accept" className="text-sm font-normal cursor-pointer">
                          Acepto recibir otras comunicaciones de HAYAS MARKETING. *
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Puedes darte de baja en cualquier momento. Para más información sobre 
                          nuestra gestión de datos y tu privacidad, consulta nuestra{' '}
                          <a href="/politica-privacidad" className="text-primary hover:underline">
                            Política de Privacidad
                          </a>.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full" size="lg">
                        Enviar Solicitud
                      </Button>
                    </div>

                    <div className="text-center text-xs text-muted-foreground">
                      En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
                      para un uso ético de la información. Más info:{' '}
                      <a href="/aviso-legal" className="text-primary hover:underline">AEPD</a>.
                    </div>

                    <div className="flex justify-center space-x-4 text-xs">
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a href="/aviso-legal" className="text-primary hover:underline">
                        Aviso Legal
                      </a>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFreelancersSection;