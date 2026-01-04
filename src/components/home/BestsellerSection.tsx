import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Espresso",
    description: "Kopi hitam pekat dengan crema yang sempurna",
    price: 22000,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
    category: "hot-coffee",
    isPopular: true,
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso dengan susu steamed dan foam lembut",
    price: 32000,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    category: "hot-coffee",
    isPopular: true,
  },
  {
    id: "3",
    name: "Caffe Latte",
    description: "Espresso dengan susu steamed dan sedikit foam",
    price: 35000,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
    category: "hot-coffee",
  },
  {
    id: "4",
    name: "Es Kopi Susu",
    description: "Signature drink - espresso, susu segar, gula aren",
    price: 28000,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400",
    category: "iced-coffee",
    isPopular: true,
  },
  {
    id: "5",
    name: "Es Kopi Loka",
    description: "House special dengan sentuhan pandan dan coconut",
    price: 35000,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400",
    category: "iced-coffee",
    isPopular: true,
  },
  {
    id: "6",
    name: "Cold Brew",
    description: "Kopi seduh dingin 18 jam, smooth dan refreshing",
    price: 38000,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
    category: "iced-coffee",
  },
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium matcha Jepang dengan susu segar",
    price: 35000,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400",
    category: "non-coffee",
  },
  {
    id: "8",
    name: "Chocolate Hazelnut",
    description: "Coklat premium dengan hazelnut dan susu",
    price: 38000,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400",
    category: "non-coffee",
  },
  {
    id: "9",
    name: "Croissant",
    description: "Croissant butter renyah, freshly baked",
    price: 28000,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    category: "food",
  },
  {
    id: "10",
    name: "Banana Bread",
    description: "Kue pisang homemade dengan topping walnut",
    price: 25000,
    image: "https://images.unsplash.com/photo-1606101273945-e00b22209a22?w=400",
    category: "food",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const BestsellerSection = () => {
  const bestsellers = menuItems.filter((item) => item.isPopular).slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Menu Favorit
            </h2>
            <p className="text-muted-foreground">
              Pilihan terbaik yang paling disukai pelanggan kami
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/menu">
              Lihat Semua Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((item, index) => (
            <div
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.isPopular && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                    Favorit
                  </span>
                )}
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">
                    {formatPrice(item.price)}
                  </span>
                  <Button asChild size="sm" variant="secondary">
                    <a
                      href={`https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20order%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
