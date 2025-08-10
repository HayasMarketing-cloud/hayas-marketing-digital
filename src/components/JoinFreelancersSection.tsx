import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre completo"),
  email: z.string().email("Correo electrónico inválido"),
  area: z.string().min(1, "Selecciona un área"),
  experiencia: z.string().min(1, "Selecciona tu experiencia"),
  portfolioUrl: z.string().url("URL no válida").optional().or(z.literal("").transform(() => undefined)),
  linkedinUrl: z.string().url("URL no válida").optional().or(z.literal("").transform(() => undefined)),
  mensaje: z.string().min(20, "Cuéntanos un poco más sobre ti (mín. 20 caracteres)"),
  consentimiento: z.boolean().refine(v => v, { message: "Debes aceptar el tratamiento de datos" }),
});

type FormValues = z.infer<typeof formSchema>;

const areas = [
  "Marketing Digital",
  "SEO",
  "Contenido y Social Media",
  "Paid Media (Google/Meta)",
  "CRM (Go High Level)",
  "CRM (HubSpot)",
  "Automatización y Workflows",
  "Email Marketing",
  "Desarrollo Web (WordPress)",
  "Tienda Online (Shopify/Woo)"
];

const experiencias = [
  { value: "0-1", label: "0-1 años" },
  { value: "1-3", label: "1-3 años" },
  { value: "3-5", label: "3-5 años" },
  { value: "5-8", label: "5-8 años" },
  { value: "8+", label: "8+ años" },
];

const JoinFreelancersSection: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      area: "",
      experiencia: "",
      portfolioUrl: "",
      linkedinUrl: "",
      mensaje: "",
      consentimiento: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    // Por ahora solo mostramos un toast y trazamos en consola.
    // Podemos integrar con Supabase/CRM si lo deseas.
    console.log("Solicitud freelance:", values);
    toast({
      title: "Solicitud enviada",
      description: "Gracias por tu interés. Revisaremos tu perfil y te contactaremos.",
    });
    form.reset();
  };

  return (
    <section id="unete-freelance" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
              ¿Eres profesional freelance en marketing o martech?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Hayas Marketing colaboramos con especialistas para proyectos por demanda.
              Si trabajas en marketing digital, contenidos, paid media, SEO, CRM (GHL/HubSpot),
              automatización o desarrollo web, nos encantará conocerte.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Proyectos según tu especialidad y disponibilidad</li>
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Colaboraciones transparentes y de largo plazo</li>
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Enfoque estratégico y herramientas de trabajo eficientes</li>
            </ul>
          </div>

          <Card className="p-6 shadow-corporate border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-hayas-primary">Solicita unirte al equipo</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1 col-span-1">
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre y apellidos" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Área principal</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un área" />
                          </SelectTrigger>
                          <SelectContent>
                            {areas.map((a) => (
                              <SelectItem key={a} value={a}>{a}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experiencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experiencia</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Años de experiencia" />
                          </SelectTrigger>
                          <SelectContent>
                            {experiencias.map((e) => (
                              <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portfolioUrl"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1 col-span-1">
                      <FormLabel>Portfolio (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedinUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.linkedin.com/in/tu-perfil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Cuéntanos sobre ti</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Cuéntanos tu experiencia, disponibilidad y tipo de proyectos que te interesan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consentimiento"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="font-normal">He leído y acepto el tratamiento de datos conforme al RGPD.</FormLabel>
                          <p className="text-xs text-gray-600">Tus datos se usarán exclusivamente para gestionar tu candidatura.</p>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2 flex justify-end">
                  <Button type="submit" className="gradient-primary text-white hover-scale">Enviar solicitud</Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinFreelancersSection;
