import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface LocalizationContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const LocalizationContactForm: React.FC<LocalizationContactFormProps> = ({
  title = '¿Listo para localizar tus contenidos?',
  subtitle = 'Cuéntanos qué mercados quieres abordar y qué activos necesitas adaptar. Te enviaremos una propuesta a medida.',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ayuda: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    acceptCommunications: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Formulario de Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
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

                <div className="space-y-2">
                  <Label htmlFor="ayuda">¿Cómo prefieres que te ayudemos?</Label>
                  <Select value={formData.ayuda} onValueChange={(value) => setFormData({...formData, ayuda: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="localizacion-web">Localización de sitio web</SelectItem>
                      <SelectItem value="localizacion-campañas">Localización de campañas publicitarias</SelectItem>
                      <SelectItem value="localizacion-contenidos">Localización de contenidos</SelectItem>
                      <SelectItem value="seo-multilingue">SEO multilingüe</SelectItem>
                      <SelectItem value="traduccion-especializada">Traducción especializada</SelectItem>
                      <SelectItem value="consultoria-expansion">Consultoría de expansión internacional</SelectItem>
                      <SelectItem value="otros">Otros servicios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Tu empresa o dominio</Label>
                    <Input
                      id="empresa"
                      placeholder="Nombre de empresa o web"
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto de localización: mercados objetivo, tipo de contenido, plazos..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
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
                    ENVIAR
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
    </section>
  );
};

export default LocalizationContactForm;