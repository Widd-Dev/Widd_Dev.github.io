import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { menuItems, MenuItem } from "@/components/home/BestsellerSection";

const categories = [
  { id: "all", label: "Semua" },
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "iced-coffee", label: "Iced Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "food", label: "Makanan" },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Menu Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan kopi premium dan makanan lezat yang dibuat dengan cinta dan bahan berkualitas
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "gradient-coffee text-primary-foreground"
                    : ""
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {/* Order CTA */}
          <div className="mt-16 text-center bg-card p-8 md:p-12 rounded-2xl border border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mau Pesan?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Pesan langsung via WhatsApp untuk pickup atau delivery. 
              Tim kami siap melayani Anda!
            </p>
            <Button asChild size="lg" className="gradient-coffee text-primary-foreground">
              <a
                href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20pesan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
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
          <span className="font-semibold text-primary text-lg">
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
  );
};

export default MenuPage;
