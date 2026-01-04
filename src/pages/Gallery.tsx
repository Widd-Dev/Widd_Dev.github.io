import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

import cafeInterior from "@/assets/cafe-interior.jpg";
import barista from "@/assets/barista.jpg";
import coffeeBeansImg from "@/assets/coffee-beans.jpg";
import pourOver from "@/assets/gallery/pour-over.jpg";
import latteArt from "@/assets/gallery/latte-art.jpg";
import cozyCorner from "@/assets/gallery/cozy-corner.jpg";
import pastries from "@/assets/gallery/pastries.jpg";
import espressoMachine from "@/assets/gallery/espresso-machine.jpg";
import friendsCoffee from "@/assets/gallery/friends-coffee.jpg";

const galleryImages = [
  {
    id: 1,
    src: cafeInterior,
    alt: "Interior cafe yang nyaman dengan desain modern",
    category: "interior",
  },
  {
    id: 2,
    src: barista,
    alt: "Barista membuat latte art",
    category: "barista",
  },
  {
    id: 3,
    src: pourOver,
    alt: "Pour over brewing method",
    category: "coffee",
  },
  {
    id: 4,
    src: latteArt,
    alt: "Latte art rosetta yang indah",
    category: "coffee",
  },
  {
    id: 5,
    src: cozyCorner,
    alt: "Sudut nyaman untuk bekerja",
    category: "interior",
  },
  {
    id: 6,
    src: pastries,
    alt: "Croissant dan pastry segar",
    category: "food",
  },
  {
    id: 7,
    src: espressoMachine,
    alt: "Mesin espresso profesional",
    category: "coffee",
  },
  {
    id: 8,
    src: friendsCoffee,
    alt: "Teman-teman menikmati kopi bersama",
    category: "moments",
  },
  {
    id: 9,
    src: coffeeBeansImg,
    alt: "Biji kopi segar pilihan",
    category: "coffee",
  },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "interior", label: "Interior" },
  { id: "coffee", label: "Kopi" },
  { id: "food", label: "Makanan" },
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
