import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { ContactFormSchema } from "@/lib/validations";
import { supabase } from "@/integrations/supabase/client";

interface ServiceContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  serviceOptions?: Array<{ value: string; label: string }>;
}

const defaultServiceOptions = [
  { value: "consultoria", label: "Consultoría estratégica" },
  { value: "implementacion", label: "Implementación de servicios" },
  { value: "marketing", label: "Marketing y visibilidad" },
  { value: "automatizacion", label: "Automatización de procesos" },
  { value: "formacion", label: "Formación y capacitación" },
  { value: "otros", label: "Otros servicios" }
];

const UniversalServiceContactForm: React.FC<ServiceContactFormProps> = ({
  title = '¿Listo para dar el siguiente paso?',
  subtitle = 'Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.',
  className = '',
  serviceOptions = defaultServiceOptions
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ayuda: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    acceptCommunications: false,
    website: '' // Honeypot field for bot protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Client-side validation with Zod
    const validationResult = ContactFormSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const newErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        newErrors[path] = issue.message;
      });
      setErrors(newErrors);
      toast.error("Por favor, corrige los errores del formulario");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        // Handle rate limiting
        if (data.retryAfter) {
          toast.error(`${data.error} Inténtalo de nuevo en ${Math.ceil(data.retryAfter / 60)} minutos.`);
        } else {
          toast.error(data.error);
        }
        return;
      }

      toast.success("¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.");
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        ayuda: '',
        telefono: '',
        empresa: '',
        mensaje: '',
        acceptCommunications: false,
        website: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
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
              <CardTitle className="text-2xl text-center">Formulario de solicitud de Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Tu nombre" 
                      value={formData.nombre} 
                      onChange={e => setFormData({ ...formData, nombre: e.target.value })} 
                      required 
                    />
                    {errors.nombre && (
                      <p className="text-sm text-destructive">{errors.nombre}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      required 
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ayuda">¿Cómo prefieres que te ayudemos?</Label>
                  <Select value={formData.ayuda} onValueChange={value => setFormData({ ...formData, ayuda: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
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
                      onChange={e => setFormData({ ...formData, telefono: e.target.value })} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Tu empresa o dominio</Label>
                    <Input 
                      id="empresa" 
                      placeholder="Nombre de empresa o web" 
                      value={formData.empresa} 
                      onChange={e => setFormData({ ...formData, empresa: e.target.value })} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Cuéntanos sobre tu proyecto..." 
                    value={formData.mensaje} 
                    onChange={e => setFormData({ ...formData, mensaje: e.target.value })} 
                    rows={4} 
                  />
                </div>

                {/* Honeypot field - hidden from humans but visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={e => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', height: 0, width: 0 }}
                  aria-hidden="true"
                />

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="accept" 
                    checked={formData.acceptCommunications} 
                    onCheckedChange={checked => setFormData({ ...formData, acceptCommunications: !!checked })} 
                  />
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="accept" className="text-sm font-normal cursor-pointer">
                      Acepto recibir otras comunicaciones de HAYAS MARKETING. *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Puedes darte de baja en cualquier momento. Para más información sobre 
                      nuestra gestión de datos y tu privacidad, consulta nuestra{' '}
                       <a href="/es/politica-privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>.
                    </p>
                  </div>
                </div>

                {errors.acceptCommunications && (
                  <p className="text-sm text-destructive">{errors.acceptCommunications}</p>
                )}

                <div className="pt-4">
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
                  </Button>
                </div>

                <div className="text-center text-xs text-muted-foreground">
                  En Hayas, protegemos tu privacidad y datos. Estamos adheridos al Pacto Digital 
                  para un uso ético de la información. Más info:{' '}
                  <a href="/es/aviso-legal" className="text-primary hover:underline">AEPD</a>.
                </div>

                <div className="flex justify-center space-x-4 text-xs">
                  <a href="/es/politica-privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a href="/es/aviso-legal" className="text-primary hover:underline">
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

export default UniversalServiceContactForm;