import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface StripePaymentButtonProps {
  priceId: string;
  productName: string;
  amount: number;
  currency?: string;
  quantity?: number;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  priceId,
  productName,
  amount,
  currency = 'EUR',
  quantity = 1,
  className,
  variant = 'default',
  size = 'default'
}) => {
  const [loading, setLoading] = useState(false);
  const { session } = useAuth();

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      if (import.meta.env.DEV) {
        console.log('Creating checkout session for:', { priceId, productName });
      }

      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          price_id: priceId,
          quantity: quantity,
          success_url: `${window.location.origin}/es/pago-exitoso`,
          cancel_url: `${window.location.origin}/es/pago-cancelado`,
        },
        headers: session ? {
          Authorization: `Bearer ${session.access_token}`,
        } : undefined,
      });

      if (error) {
        if (import.meta.env.DEV) {
          console.error('Error creating checkout session:', error);
        }
        toast.error('Error al crear la sesión de pago');
        return;
      }

      if (data?.url) {
        if (import.meta.env.DEV) {
          console.log('Redirecting to checkout');
        }
        // Abrir en nueva pestaña para mejor experiencia
        window.open(data.url, '_blank');
      } else {
        toast.error('No se pudo obtener la URL de pago');
      }

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Payment error:', error);
      }
      toast.error('Error al procesar el pago');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className={className}
      variant={variant}
      size={size}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Procesando...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Contratar {formatPrice(amount, currency)}
        </>
      )}
    </Button>
  );
};