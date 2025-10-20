import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  CreditCard, 
  Download, 
  Settings, 
  ShoppingBag,
  Calendar,
  ExternalLink,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Order {
  id: string;
  status: string;
  amount_total: number;
  currency: string;
  created_at: string;
  products: {
    name: string;
    category: string;
    billing_type: string;
  };
}

const MiCuenta = () => {
  const { user, session, signOut, subscription, refreshSubscription } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      fetchUserOrders();
      refreshSubscription();
    }
  }, [session]);

  const fetchUserOrders = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('get-user-orders', {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (error) {
        if (import.meta.env.DEV) {
          console.error('Error fetching orders:', error);
        }
        toast.error('Error al cargar el historial de pedidos');
        return;
      }

      setOrders(data?.orders || []);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error:', error);
      }
      toast.error('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (error) {
        if (import.meta.env.DEV) {
          console.error('Error opening customer portal:', error);
        }
        toast.error('Error al abrir el portal de cliente');
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error:', error);
      }
      toast.error('Error al acceder al portal');
    }
  };

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'paid': { label: 'Pagado', variant: 'default' as const },
      'pending': { label: 'Pendiente', variant: 'secondary' as const },
      'cancelled': { label: 'Cancelado', variant: 'destructive' as const },
      'refunded': { label: 'Reembolsado', variant: 'outline' as const },
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, variant: 'secondary' as const };
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Acceso requerido</h1>
          <p className="text-gray-600 mb-8">Debes iniciar sesión para acceder a tu cuenta.</p>
          <Button asChild>
            <Link to="/auth">Iniciar sesión</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mi cuenta</h1>
            <p className="text-gray-600">Gestiona tu perfil, pedidos y suscripciones</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{user.email}</CardTitle>
                      <p className="text-sm text-gray-500">Cliente de Hayas Marketing</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={openCustomerPortal}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Gestionar suscripciones
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={signOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                  </Button>
                </CardContent>
              </Card>

              {/* Estado de suscripción */}
              {subscription && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Suscripciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {subscription.subscribed ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Estado</span>
                          <Badge>Activa</Badge>
                        </div>
                        {subscription.active_subscriptions?.map((sub: any) => (
                          <div key={sub.id} className="text-sm text-gray-600">
                            <p>Renovación: {formatDate(sub.current_period_end)}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-gray-500 mb-4">No tienes suscripciones activas</p>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/es/servicios">Ver servicios</Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Historial de pedidos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Historial de pedidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Cargando historial...</p>
                    </div>
                  ) : orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">{order.products.name}</h3>
                              <p className="text-sm text-gray-500 capitalize">
                                {order.products.category.replace('-', ' ')}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">
                                {formatPrice(order.amount_total, order.currency)}
                              </p>
                              {getStatusBadge(order.status)}
                            </div>
                          </div>
                          
                          <Separator className="my-3" />
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {formatDate(order.created_at)}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>#{order.id.slice(0, 8)}</span>
                              {order.status === 'paid' && (
                                <Button variant="ghost" size="sm">
                                  <Download className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ShoppingBag className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                      <p className="text-gray-500 mb-4">No tienes pedidos todavía</p>
                      <Button asChild>
                        <Link to="/es/servicios">Explorar servicios</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiCuenta;