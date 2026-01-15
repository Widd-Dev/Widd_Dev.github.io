import { useOrderHistory } from "@/contexts/OrderHistoryContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2, Clock, User, Phone } from "lucide-react";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const OrderHistory = () => {
  const { orders, clearHistory } = useOrderHistory();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Riwayat Pesanan
            </h1>
            <p className="text-muted-foreground">
              Lihat semua pesanan yang pernah kamu buat
            </p>
          </div>
          {orders.length > 0 && (
            <Button variant="outline" onClick={clearHistory} className="text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Hapus Semua
            </Button>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="w-20 h-20 text-muted-foreground/30 mb-4" />
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              Belum ada riwayat pesanan
            </h2>
            <p className="text-muted-foreground mb-6">
              Pesanan yang kamu buat akan muncul di sini
            </p>
            <Button asChild>
              <a href="/menu">Lihat Menu</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-card border border-border rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                        Antrian #{order.queueNumber}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDate(order.createdAt)}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {order.customerName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {order.customerPhone}
                      </span>
                    </div>
                  </div>
                  <span className="font-display font-bold text-lg text-primary">
                    {formatPrice(order.totalPrice)}
                  </span>
                </div>

                <div className="border-t border-border pt-3 space-y-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatPrice(item.price)} x {item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderHistory;
