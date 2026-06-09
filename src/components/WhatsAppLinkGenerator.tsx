import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Copy, CheckCircle2, MessageCircle, Smartphone } from 'lucide-react';
import { WhatsAppLinkSchema, WhatsAppLinkData } from '@/lib/validations';
import { cn } from '@/lib/utils';

const COUNTRY_CODES = [
  { code: '+34', name: 'España', flag: '🇪🇸' },
  { code: '+52', name: 'México', flag: '🇲🇽' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+51', name: 'Perú', flag: '🇵🇪' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+1', name: 'USA/Canadá', flag: '🇺🇸' },
  { code: '+44', name: 'Reino Unido', flag: '🇬🇧' },
  { code: '+33', name: 'Francia', flag: '🇫🇷' },
  { code: '+49', name: 'Alemania', flag: '🇩🇪' },
];

const WhatsAppLinkGenerator = () => {
  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState('+34');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageText, setMessageText] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndGenerate = () => {
    try {
      // Validate input
      const data: WhatsAppLinkData = {
        countryCode,
        phoneNumber,
        messageText: messageText || '',
      };

      WhatsAppLinkSchema.parse(data);
      setErrors({});

      // Generate WhatsApp link
      const fullPhone = `${countryCode}${phoneNumber}`.replace(/\+/g, '');
      const encodedText = messageText ? `&text=${encodeURIComponent(messageText)}` : '';
      const link = `https://api.whatsapp.com/send?phone=${fullPhone}${encodedText}`;

      setGeneratedLink(link);
      
      toast({
        title: "¡Link generado con éxito! 🎉",
        description: "Tu enlace de WhatsApp está listo para usar.",
      });
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      
      toast({
        title: "Error en la validación",
        description: "Por favor, revisa los datos ingresados.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      
      toast({
        title: "¡Copiado! ✓",
        description: "El enlace se ha copiado al portapapeles.",
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error al copiar",
        description: "No se pudo copiar el enlace. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const testLink = () => {
    if (generatedLink) {
      window.open(generatedLink, '_blank');
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setMessageText('');
    setGeneratedLink('');
    setErrors({});
  };

  const selectedCountry = COUNTRY_CODES.find(c => c.code === countryCode);
  const charCount = messageText.length;

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Left Column - Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            Generador de Enlaces WhatsApp
          </CardTitle>
          <CardDescription>
            Crea enlaces personalizados para que tus clientes te contacten directamente por WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Country Code + Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Número de WhatsApp</Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue>
                    {selectedCountry && `${selectedCountry.flag} ${selectedCountry.code}`}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {COUNTRY_CODES.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.flag} {country.code} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex-1">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="656908615"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className={cn(errors.phoneNumber && "border-destructive")}
                  maxLength={15}
                />
              </div>
            </div>
            {errors.phoneNumber && (
              <p className="text-sm text-destructive">{errors.phoneNumber}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Solo el número, sin espacios ni guiones
            </p>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje pre-rellenado (opcional)</Label>
            <Textarea
              id="message"
              placeholder="Por ejemplo: ¡Hola! Quiero más información sobre tus servicios de marketing digital."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className={cn("min-h-[120px]", errors.messageText && "border-destructive")}
              maxLength={1000}
            />
            {errors.messageText && (
              <p className="text-sm text-destructive">{errors.messageText}</p>
            )}
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Este texto aparecerá automáticamente en el chat</span>
              <span className={cn(
                "font-medium",
                charCount > 900 && "text-warning",
                charCount >= 1000 && "text-destructive"
              )}>
                {charCount} / 1000
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              onClick={validateAndGenerate}
              className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white"
              size="lg"
            >
              Generar mi wa.link 🤩
            </Button>
            {generatedLink && (
              <Button 
                onClick={resetForm}
                variant="outline"
                size="lg"
              >
                Limpiar
              </Button>
            )}
          </div>

          {/* Generated Link Section */}
          {generatedLink && (
            <div className="mt-8 pt-8 border-t border-border animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">¡Tu enlace está listo!</h3>
                </div>
                
                <div className="relative">
                  <Input
                    value={generatedLink}
                    readOnly
                    className="pr-20 font-mono text-xs bg-background"
                  />
                  <Button
                    onClick={copyToClipboard}
                    size="sm"
                    variant={copied ? "default" : "secondary"}
                    className="absolute right-1 top-1 h-8"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={testLink}
                    variant="outline"
                    className="flex-1"
                    size="sm"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Probar enlace
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-md p-3 text-xs text-muted-foreground">
                  <p className="font-semibold mb-1">💡 Cómo usar tu enlace:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Compártelo en redes sociales</li>
                    <li>Agrégalo a tu email signature</li>
                    <li>Úsalo en tarjetas de visita digitales</li>
                    <li>Incorpóralo en tu sitio web</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Right Column - Preview */}
      <div className="space-y-6">
        {/* Mobile Phone Mockup */}
        <div className="relative">
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
              <Smartphone className="h-4 w-4" />
              Así lo verán en su móvil
            </p>
          </div>
          
          {/* Phone Frame */}
          <div className="mx-auto max-w-[360px] rounded-[3rem] p-2 shadow-2xl relative" style={{ backgroundColor: '#3C4249' }}>
            {/* Screen */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
              {/* Status Bar */}
              <div className="bg-gray-100 px-6 py-2 flex justify-between items-center text-xs">
                <span className="font-semibold">
                  {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <div className="flex gap-1 items-center">
                  <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">100%</span>
                  <svg className="w-6 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" fill="currentColor" />
                    <rect x="20" y="9" width="3" height="6" rx="1" ry="1" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                <button className="text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-xl font-semibold">
                  {selectedCountry?.flag || '👤'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    {phoneNumber ? `${countryCode} ${phoneNumber}` : 'Tu Número'}
                  </p>
                  <p className="text-xs text-gray-200">
                    {selectedCountry?.name || 'WhatsApp Business'}
                  </p>
                </div>
                <button className="text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Chat Area */}
              <div className="bg-[#ECE5DD] min-h-[400px] p-4 relative">
                {/* WhatsApp background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
                
                <div className="relative space-y-3">
                  {/* Date label */}
                  <div className="text-center">
                    <span className="bg-white/90 px-3 py-1 rounded-lg text-xs text-gray-600 shadow-sm">
                      Hoy
                    </span>
                  </div>

                  {/* Message bubble */}
                  {messageText ? (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] relative">
                        <p className="text-sm text-gray-800 whitespace-pre-wrap break-words">
                          {messageText}
                        </p>
                        <p className="text-[10px] text-gray-500 text-right mt-1">
                          {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {/* Tail */}
                        <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-r-[10px] border-r-transparent" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-sm text-gray-500 bg-white/60 px-4 py-2 rounded-lg inline-block">
                        El mensaje pre-rellenado aparecerá aquí
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-[#F0F0F0] px-2 py-2 flex items-center gap-2">
                <button className="text-gray-600 p-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-700">
                  Escribe un mensaje...
                </div>
                <button className="text-gray-600 p-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatsAppLinkGenerator;
