import React, { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getSchema = (isEnglish: boolean) =>
  z.object({
    nombre: z.string().trim().min(1, isEnglish ? 'Name is required' : 'El nombre es obligatorio').max(100),
    email: z.string().trim().email(isEnglish ? 'Enter a valid email' : 'Introduce un email válido').max(255).toLowerCase(),
    ayuda: z.string().optional(),
    telefono: z.string().trim().max(20).optional(),
    empresa: z.string().trim().max(100).optional(),
    mensaje: z.string().trim().max(2000).optional(),
    acceptCommunications: z.literal(true, {
      errorMap: () => ({ message: isEnglish ? 'You must accept communications' : 'Debes aceptar las comunicaciones' }),
    }),
    website: z.string().max(0).optional(),
  });

type FormData = z.infer<ReturnType<typeof getSchema>>;

const getServiceOptions = (isEnglish: boolean) => [
  { value: '', label: isEnglish ? 'How can we help you?' : '¿En qué podemos ayudarte?' },
  { value: 'consultoria', label: isEnglish ? 'Strategic Consulting' : 'Consultoría Estratégica' },
  { value: 'diseno-web', label: isEnglish ? 'Web Design' : 'Diseño Web' },
  { value: 'seo', label: isEnglish ? 'SEO Positioning' : 'Posicionamiento SEO' },
  { value: 'crm', label: isEnglish ? 'CRM & Automation' : 'CRM y Automatización' },
  { value: 'ia', label: isEnglish ? 'Artificial Intelligence' : 'Inteligencia Artificial' },
  { value: 'contenidos', label: isEnglish ? 'Content Strategy' : 'Estrategia de Contenidos' },
  { value: 'publicidad', label: isEnglish ? 'Digital Advertising' : 'Publicidad Digital' },
  { value: 'redes-sociales', label: isEnglish ? 'Social Media' : 'Redes Sociales' },
  { value: 'email-marketing', label: 'Email Marketing' },
  { value: 'branding', label: isEnglish ? 'Brand Creation' : 'Creación de Marca' },
  { value: 'otro', label: isEnglish ? 'Other' : 'Otro' },
];

interface NativeServiceFormProps {
  sourcePage?: string;
}

const NativeServiceForm: React.FC<NativeServiceFormProps> = ({ sourcePage = '' }) => {
  const { isEnglish } = useLanguage();
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

    const schema = getSchema(isEnglish);
    const result = schema.safeParse(formData);
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
      setErrorMessage(err?.message || (isEnglish ? 'Error sending the form. Please try again.' : 'Error al enviar el formulario. Inténtalo de nuevo.'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white shadow-elegant p-8 md:p-12 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="title-subsection text-foreground">
          {isEnglish ? 'Message sent!' : '¡Mensaje enviado!'}
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {isEnglish
            ? 'Thank you for contacting us. We will get back to you as soon as possible.'
            : 'Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.'}
        </p>
      </div>
    );
  }

  const privacyPath = isEnglish ? '/en/privacy-policy' : '/politica-privacidad';
  const legalPath = isEnglish ? '/en/legal-notice' : '/aviso-legal';
  const serviceOptions = getServiceOptions(isEnglish);

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
            {isEnglish ? 'Name' : 'Nombre'} <span className="text-destructive">*</span>
          </label>
          <Input
            id="nombre"
            name="nombre"
            placeholder={isEnglish ? 'Your name' : 'Tu nombre'}
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
            placeholder={isEnglish ? 'you@email.com' : 'tu@email.com'}
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
          {isEnglish ? 'How can we help you?' : '¿En qué te podemos ayudar?'}
        </label>
        <select
          id="ayuda"
          name="ayuda"
          value={formData.ayuda || ''}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {serviceOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Phone + Company row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
            {isEnglish ? 'Phone' : 'Teléfono'}
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
            {isEnglish ? 'Company or domain' : 'Empresa o dominio'}
          </label>
          <Input
            id="empresa"
            name="empresa"
            placeholder={isEnglish ? 'Your company' : 'Tu empresa'}
            value={formData.empresa || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
          {isEnglish ? 'Message' : 'Mensaje'}
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder={isEnglish ? 'Tell us about your project or needs...' : 'Cuéntanos sobre tu proyecto o necesidad...'}
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
          {isEnglish ? (
            <>
              I agree to receive commercial communications and confirm that I have read the{' '}
              <Link to={privacyPath} className="underline text-primary hover:text-primary/80">Privacy Policy</Link>{' '}
              and the{' '}
              <Link to={legalPath} className="underline text-primary hover:text-primary/80">Legal Notice</Link>.{' '}
              <span className="text-destructive">*</span>
            </>
          ) : (
            <>
              Acepto recibir comunicaciones comerciales y confirmo haber leído la{' '}
              <Link to={privacyPath} className="underline text-primary hover:text-primary/80">Política de Privacidad</Link>{' '}
              y el{' '}
              <Link to={legalPath} className="underline text-primary hover:text-primary/80">Aviso Legal</Link>.{' '}
              <span className="text-destructive">*</span>
            </>
          )}
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
            {isEnglish ? 'Sending...' : 'Enviando...'}
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {isEnglish ? 'Send message' : 'Enviar mensaje'}
          </>
        )}
      </Button>

      {/* Privacy disclaimer footer */}
      <div className="pt-4 border-t border-border">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          {isEnglish ? (
            <>
              Hayas Marketing is committed to the{' '}
              <a href="https://www.aepd.es/pactodigital" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Digital Pact</a>{' '}
              of the{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">AEPD</a>
              . Your data will be processed in accordance with our{' '}
              <Link to={privacyPath} className="underline hover:text-primary">Privacy Policy</Link>{' '}
              and{' '}
              <Link to={legalPath} className="underline hover:text-primary">Legal Notice</Link>
              . We do not share your information with third parties without your consent.
            </>
          ) : (
            <>
              Hayas Marketing se compromete con el{' '}
              <a href="https://www.aepd.es/pactodigital" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Pacto Digital</a>{' '}
              de la{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">AEPD</a>
              . Tus datos serán tratados conforme a nuestra{' '}
              <Link to={privacyPath} className="underline hover:text-primary">Política de Privacidad</Link>{' '}
              y{' '}
              <Link to={legalPath} className="underline hover:text-primary">Aviso Legal</Link>
              . No compartimos tu información con terceros sin tu consentimiento.
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default NativeServiceForm;
