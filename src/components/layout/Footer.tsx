import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Coffee className="w-8 h-8" />
              <span className="font-display text-2xl font-semibold">Kopi Loka</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Menyajikan kopi berkualitas dengan cita rasa lokal Indonesia. 
              Setiap cangkir adalah perjalanan rasa yang tak terlupakan.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kopiloka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/kopiloka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:widadur.24ep10009@students.unugha.id"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Menu</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Semua Menu
              </Link>
              <Link to="/menu#coffee" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Hot Coffee
              </Link>
              <Link to="/menu#iced" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Iced Coffee
              </Link>
              <Link to="/menu#non-coffee" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Non-Coffee
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Jl. Puter, Rawajarit, Menganti, Kesugihan, Cilacap
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a 
                  href="tel:+6288213407868" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +62 882 1340 7868
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Senin - Jumat: 07:00 - 22:00</p>
                  <p>Sabtu - Minggu: 08:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Ikuti Kami</h4>
            <p className="text-sm text-primary-foreground/80">
              Dapatkan info promo dan menu terbaru langsung ke WhatsApp Anda.
            </p>
            <a
              href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20berlangganan%20info%20promo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Kopi Loka. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Tentang Kami
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
