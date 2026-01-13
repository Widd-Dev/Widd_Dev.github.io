import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

import counterBar from "@/assets/gallery/counter-bar.jpg";
import studyCoffee from "@/assets/gallery/study-coffee.jpg";
import outdoorArea from "@/assets/gallery/outdoor-area.jpg";
import wallArt from "@/assets/gallery/wall-art.jpg";
import coffeeTable from "@/assets/gallery/coffee-table.jpg";
import workingTogether from "@/assets/gallery/working-together.jpg";
import tradingCoffee from "@/assets/gallery/trading-coffee.jpg";
import codingCoffee from "@/assets/gallery/coding-coffee.jpg";

const galleryImages = [
  {
    id: 1,
    src: counterBar,
    alt: "Bar counter dengan peralatan kopi profesional",
    category: "interior",
  },
  {
    id: 2,
    src: studyCoffee,
    alt: "Belajar sambil menikmati kopi",
    category: "moments",
  },
  {
    id: 3,
    src: outdoorArea,
    alt: "Area outdoor dengan suasana malam yang cozy",
    category: "interior",
  },
  {
    id: 4,
    src: wallArt,
    alt: "Dekorasi wall art tentang kopi",
    category: "interior",
  },
  {
    id: 5,
    src: coffeeTable,
    alt: "Menikmati kopi bersama teman",
    category: "moments",
  },
  {
    id: 6,
    src: workingTogether,
    alt: "Bekerja bersama di cafe",
    category: "moments",
  },
  {
    id: 7,
    src: tradingCoffee,
    alt: "Trading sambil menikmati kopi",
    category: "moments",
  },
  {
    id: 8,
    src: codingCoffee,
    alt: "Coding sambil ngopi",
    category: "moments",
  },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "interior", label: "Interior" },
  { id: "moments", label: "Momen" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Galeri
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intip suasana dan momen-momen spesial di Kopi Loka
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "gradient-coffee text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-primary-foreground text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
