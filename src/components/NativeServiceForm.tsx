import React, { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactFormSchema = z.object({
  nombre: z.string().trim().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().trim().email('Introduce un email válido').max(255).toLowerCase(),
  ayuda: z.string().optional(),
  telefono: z.string().trim().max(20).optional(),
  empresa: z.string().trim().max(100).optional(),
  mensaje: z.string().trim().max(2000).optional(),
  acceptCommunications: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar las comunicaciones' }),
  }),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof ContactFormSchema>;

const SERVICE_OPTIONS = [
  { value: '', label: '¿En qué podemos ayudarte?' },
  { value: 'consultoria', label: 'Consultoría Estratégica' },
  { value: 'diseno-web', label: 'Diseño Web' },
  { value: 'seo', label: 'Posicionamiento SEO' },
  { value: 'crm', label: 'CRM y Automatización' },
  { value: 'ia', label: 'Inteligencia Artificial' },
  { value: 'contenidos', label: 'Estrategia de Contenidos' },
  { value: 'publicidad', label: 'Publicidad Digital' },
  { value: 'redes-sociales', label: 'Redes Sociales' },
  { value: 'email-marketing', label: 'Email Marketing' },
  { value: 'branding', label: 'Creación de Marca' },
  { value: 'otro', label: 'Otro' },
];

interface NativeServiceFormProps {
  sourcePage?: string;
}

const NativeServiceForm: React.FC<NativeServiceFormProps> = ({ sourcePage = '' }) => {
  const [formData, setFormData] = useState<Partial<FormData>>({
    nombre: '',
    email: '',
    ayuda: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    acceptCommunications: undefined,
    website: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptCommunications: checked as any }));
    if (errors.acceptCommunications) setErrors(prev => ({ ...prev, acceptCommunications: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage('');

    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: { ...result.data, sourcePage },
      });

      if (error) throw error;
      if (data?.error) {
        setErrorMessage(data.error);
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error al enviar el formulario. Inténtalo de nuevo.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white shadow-elegant p-8 md:p-12 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="title-subsection text-foreground">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white shadow-elegant p-6 md:p-10 space-y-5 animate-fade-in">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website || ''} onChange={handleChange} />
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
            Nombre <span className="text-destructive">*</span>
          </label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre || ''}
            onChange={handleChange}
            className={`focus-visible:ring-primary ${errors.nombre ? 'border-destructive' : ''}`}
          />
          {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email || ''}
            onChange={handleChange}
            className={`focus-visible:ring-primary ${errors.email ? 'border-destructive' : ''}`}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Service selector */}
      <div>
        <label htmlFor="ayuda" className="block text-sm font-medium text-foreground mb-1.5">
          ¿En qué te podemos ayudar?
        </label>
        <select
          id="ayuda"
          name="ayuda"
          value={formData.ayuda || ''}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {SERVICE_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Phone + Company row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
            Teléfono
          </label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            value={formData.telefono || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-1.5">
            Empresa o dominio
          </label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Tu empresa"
            value={formData.empresa || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
          Mensaje
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
          rows={4}
          value={formData.mensaje || ''}
          onChange={handleChange}
          className="focus-visible:ring-primary"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="acceptCommunications"
          checked={formData.acceptCommunications === true}
          onCheckedChange={handleCheckboxChange}
          className={errors.acceptCommunications ? 'border-destructive' : ''}
        />
        <label htmlFor="acceptCommunications" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
          Acepto recibir comunicaciones comerciales y confirmo haber leído la{' '}
          <Link to="/politica-privacidad" className="underline text-primary hover:text-primary/80">
            Política de Privacidad
          </Link>{' '}
          y el{' '}
          <Link to="/aviso-legal" className="underline text-primary hover:text-primary/80">
            Aviso Legal
          </Link>. <span className="text-destructive">*</span>
        </label>
      </div>
      {errors.acceptCommunications && <p className="text-destructive text-xs -mt-3">{errors.acceptCommunications}</p>}

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/5 rounded-lg p-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={status === 'loading'}
        className="w-full gradient-primary text-white font-semibold hover:opacity-90 transition-opacity focus-ring"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>

      {/* Privacy disclaimer footer */}
      <div className="pt-4 border-t border-border">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Hayas Marketing se compromete con el{' '}
          <a href="https://www.aepd.es/pactodigital" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Pacto Digital
          </a>{' '}
          de la{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            AEPD
          </a>
          . Tus datos serán tratados conforme a nuestra{' '}
          <Link to="/politica-privacidad" className="underline hover:text-primary">
            Política de Privacidad
          </Link>{' '}
          y{' '}
          <Link to="/aviso-legal" className="underline hover:text-primary">
            Aviso Legal
          </Link>
          . No compartimos tu información con terceros sin tu consentimiento.
        </p>
      </div>
    </form>
  );
};

export default NativeServiceForm;
