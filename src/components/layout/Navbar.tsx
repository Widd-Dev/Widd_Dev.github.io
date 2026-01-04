import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CartButton } from "@/components/cart/CartButton";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Galeri" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Coffee className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Kopi Loka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle & Cart */}
          <div className="hidden md:flex items-center gap-2">
            <CartButton />
            <ThemeToggle />
            <Button asChild className="gradient-coffee text-primary-foreground">
              <a
                href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20reservasi%20meja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservasi
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button & Cart & Theme Toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <CartButton />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary px-2 py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="gradient-coffee text-primary-foreground mt-2">
                <a
                  href="https://wa.me/6288213407868?text=Halo,%20saya%20ingin%20reservasi%20meja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservasi
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
