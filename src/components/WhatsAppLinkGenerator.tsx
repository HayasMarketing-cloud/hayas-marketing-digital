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
        </CardContent>
      </Card>

      {/* Right Column - Preview */}
      <div className="space-y-6">
        {/* WhatsApp Preview */}
        <Card className="shadow-lg border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Smartphone className="h-5 w-5" />
              Vista Previa
            </CardTitle>
            <CardDescription>
              Así lo verán tus clientes al hacer clic
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* WhatsApp-style preview */}
            <div className="bg-[#ECE5DD] rounded-lg p-4 min-h-[200px] relative overflow-hidden">
              {/* WhatsApp background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
              
              <div className="relative space-y-3">
                {/* Contact header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xl font-semibold">
                    {selectedCountry?.flag || '👤'}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {phoneNumber ? `${countryCode} ${phoneNumber}` : 'Tu número de WhatsApp'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedCountry?.name || 'País'}
                    </p>
                  </div>
                </div>

                {/* Message bubble */}
                {messageText ? (
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] ml-auto">
                    <p className="text-sm text-foreground whitespace-pre-wrap break-words">
                      {messageText}
                    </p>
                    <p className="text-[10px] text-muted-foreground text-right mt-1">
                      {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-sm text-muted-foreground py-8">
                    El mensaje pre-rellenado aparecerá aquí
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Link */}
        {generatedLink && (
          <Card className="shadow-lg border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                ¡Tu enlace está listo!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input
                  value={generatedLink}
                  readOnly
                  className="pr-20 font-mono text-xs"
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

              <div className="bg-background/50 rounded-md p-3 text-xs text-muted-foreground">
                <p className="font-semibold mb-1">💡 Cómo usar tu enlace:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Compártelo en redes sociales</li>
                  <li>Agrégalo a tu email signature</li>
                  <li>Úsalo en tarjetas de visita digitales</li>
                  <li>Incorpóralo en tu sitio web</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WhatsAppLinkGenerator;
