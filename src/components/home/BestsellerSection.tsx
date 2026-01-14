import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Menu product images
import espressoImg from "@/assets/menu/espresso.jpg";
import cappuccinoImg from "@/assets/menu/cappuccino.jpg";
import caffeLatteImg from "@/assets/menu/caffe-latte.jpg";
import esKopiSusuImg from "@/assets/menu/es-kopi-susu.jpg";
import esKopiLokaImg from "@/assets/menu/es-kopi-loka.jpg";
import coldBrewImg from "@/assets/menu/cold-brew.jpg";
import matchaLatteImg from "@/assets/menu/matcha-latte.jpg";
import chocolateHazelnutImg from "@/assets/menu/chocolate-hazelnut.jpg";
import croissantImg from "@/assets/menu/croissant.jpg";
import bananaBreadImg from "@/assets/menu/banana-bread.jpg";

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
    image: espressoImg,
    category: "hot-coffee",
    isPopular: true,
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso dengan susu steamed dan foam lembut",
    price: 32000,
    image: cappuccinoImg,
    category: "hot-coffee",
    isPopular: true,
  },
  {
    id: "3",
    name: "Caffe Latte",
    description: "Espresso dengan susu steamed dan sedikit foam",
    price: 35000,
    image: caffeLatteImg,
    category: "hot-coffee",
  },
  {
    id: "4",
    name: "Es Kopi Susu",
    description: "Signature drink - espresso, susu segar, gula aren",
    price: 28000,
    image: esKopiSusuImg,
    category: "iced-coffee",
    isPopular: true,
  },
  {
    id: "5",
    name: "Es Kopi Loka",
    description: "House special dengan sentuhan pandan dan coconut",
    price: 35000,
    image: esKopiLokaImg,
    category: "iced-coffee",
    isPopular: true,
  },
  {
    id: "6",
    name: "Cold Brew",
    description: "Kopi seduh dingin 18 jam, smooth dan refreshing",
    price: 38000,
    image: coldBrewImg,
    category: "iced-coffee",
  },
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium matcha Jepang dengan susu segar",
    price: 35000,
    image: matchaLatteImg,
    category: "non-coffee",
  },
  {
    id: "8",
    name: "Chocolate Hazelnut",
    description: "Coklat premium dengan hazelnut dan susu",
    price: 38000,
    image: chocolateHazelnutImg,
    category: "non-coffee",
  },
  {
    id: "9",
    name: "Croissant",
    description: "Croissant butter renyah, freshly baked",
    price: 28000,
    image: croissantImg,
    category: "food",
  },
  {
    id: "10",
    name: "Banana Bread",
    description: "Kue pisang homemade dengan topping walnut",
    price: 25000,
    image: bananaBreadImg,
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
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${item.name} berhasil ditambahkan.`,
    });
  };

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
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Tambah
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
