import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import coffeeBeansImg from "@/assets/coffee-beans.jpg";

export const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={coffeeBeansImg}
          alt="Fresh coffee beans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Menikmati Kopi Terbaik?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Kunjungi kami atau pesan langsung via WhatsApp. 
            Kami siap menyajikan kopi terbaik untuk Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a
                href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20pesan%20kopi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 w-5 h-5" />
                Order via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://maps.google.com/?q=Kesugihan+Cilacap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Lihat Lokasi
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
