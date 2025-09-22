-- FASE 1: PREPARACIÓN BASE DE DATOS STRIPE - HAYAS MARKETING

-- Crear tabla customers (sincronización con Stripe)
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT UNIQUE,
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla products (catálogo de servicios)
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_product_id TEXT UNIQUE NOT NULL,
  stripe_price_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- 'tienda-online', 'consultoria', 'formacion-ia', etc.
  price_amount INTEGER NOT NULL, -- precio en céntimos
  currency TEXT NOT NULL DEFAULT 'eur',
  billing_type TEXT NOT NULL DEFAULT 'one_time', -- 'one_time', 'recurring'
  billing_interval TEXT, -- 'month', 'year' para recurring
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla orders (pedidos y estado)
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'paid', 'cancelled', 'refunded'
  amount_total INTEGER NOT NULL, -- precio total en céntimos
  currency TEXT NOT NULL DEFAULT 'eur',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla payments (historial de transacciones)
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  stripe_payment_id TEXT UNIQUE NOT NULL,
  amount INTEGER NOT NULL, -- cantidad en céntimos
  currency TEXT NOT NULL DEFAULT 'eur',
  status TEXT NOT NULL, -- 'succeeded', 'pending', 'failed'
  payment_method_type TEXT, -- 'card', 'sepa_debit', etc.
  stripe_webhook_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies para customers
CREATE POLICY "Users can view their own customer data" 
ON public.customers 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own customer data" 
ON public.customers 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own customer data" 
ON public.customers 
FOR UPDATE 
USING (auth.uid() = user_id);

-- RLS Policies para products (público para lectura)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (is_active = true);

-- RLS Policies para orders
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.customers 
    WHERE customers.id = orders.customer_id 
    AND customers.user_id = auth.uid()
  )
);

CREATE POLICY "Users can create their own orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.customers 
    WHERE customers.id = orders.customer_id 
    AND customers.user_id = auth.uid()
  )
);

-- RLS Policies para payments
CREATE POLICY "Users can view their own payments" 
ON public.payments 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.orders 
    JOIN public.customers ON orders.customer_id = customers.id
    WHERE orders.id = payments.order_id 
    AND customers.user_id = auth.uid()
  )
);

-- Crear índices para optimización
CREATE INDEX idx_customers_stripe_id ON public.customers(stripe_customer_id);
CREATE INDEX idx_customers_user_id ON public.customers(user_id);
CREATE INDEX idx_products_stripe_product_id ON public.products(stripe_product_id);
CREATE INDEX idx_products_stripe_price_id ON public.products(stripe_price_id);
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_orders_customer_id ON public.orders(customer_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_stripe_session_id ON public.orders(stripe_session_id);
CREATE INDEX idx_payments_order_id ON public.payments(order_id);
CREATE INDEX idx_payments_stripe_payment_id ON public.payments(stripe_payment_id);

-- Función para actualizar timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers para actualización automática de timestamps
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON public.customers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();