import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useOrderHistory } from "@/contexts/OrderHistoryContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const { addOrder } = useOrderHistory();
  const { toast } = useToast();
  
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleCheckout = () => {
    if (items.length === 0) return;

    if (!customerName.trim()) {
      toast({
        title: "Nama harus diisi",
        description: "Silakan masukkan nama Anda untuk melanjutkan.",
        variant: "destructive",
      });
      return;
    }

    if (!customerPhone.trim()) {
      toast({
        title: "No. WhatsApp harus diisi",
        description: "Silakan masukkan nomor WhatsApp Anda.",
        variant: "destructive",
      });
      return;
    }

    // Save order to history and get queue number
    const savedOrder = addOrder({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      items: [...items],
      totalPrice,
    });

    const orderDetails = items
      .map((item) => `- ${item.name} x${item.quantity} (${formatPrice(item.price * item.quantity)})`)
      .join("%0A");

    const message = `Halo Kopi Loka!%0A%0A*Data Pemesan:*%0ANama: ${encodeURIComponent(customerName.trim())}%0ANo. WA: ${encodeURIComponent(customerPhone.trim())}%0ANo. Antrian: ${savedOrder.queueNumber}%0A%0A*Pesanan:*%0A${orderDetails}%0A%0A*Total: ${formatPrice(totalPrice)}*`;

    window.open(`https://wa.me/6288213407868?text=${message}`, "_blank");

    toast({
      title: `Pesanan #${savedOrder.queueNumber} dikirim!`,
      description: "Silakan lanjutkan di WhatsApp untuk konfirmasi.",
    });

    setCustomerName("");
    setCustomerPhone("");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Keranjang Belanja</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/50" />
            <div>
              <p className="font-medium text-foreground">Keranjang kosong</p>
              <p className="text-sm text-muted-foreground">Yuk, tambahkan menu favoritmu!</p>
            </div>
            <Button onClick={() => setIsCartOpen(false)} variant="outline">
              Lihat Menu
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-secondary/50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                    <p className="text-sm text-primary font-semibold">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="customerName">Nama</Label>
                  <Input
                    id="customerName"
                    placeholder="Masukkan nama Anda"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="customerPhone">No. WhatsApp</Label>
                  <Input
                    id="customerPhone"
                    placeholder="Contoh: 08123456789"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full gradient-coffee text-primary-foreground"
                size="lg"
              >
                Checkout via WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
