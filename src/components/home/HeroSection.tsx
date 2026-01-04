import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCoffee}
          alt="Kopi Loka signature latte art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
            <Coffee className="w-4 h-4" />
            <span>Kopi Lokal, Rasa Internasional</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Nikmati Setiap
            <br />
            <span className="text-primary">Tetes Kopi</span>
            <br />
            Terbaik
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dari biji kopi pilihan Nusantara, kami sajikan pengalaman ngopi 
            yang tak terlupakan. Setiap cangkir adalah cerita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="gradient-coffee text-primary-foreground">
              <Link to="/menu">
                Lihat Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20reservasi%20meja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservasi Meja
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Tahun</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Varian Kopi</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground">Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
