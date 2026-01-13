import { Layout } from "@/components/layout/Layout";
import { Coffee, Award, Users, Heart } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import counterBar from "@/assets/gallery/counter-bar.jpg";

const values = [
  {
    icon: Coffee,
    title: "Kualitas Premium",
    description: "Hanya biji kopi terbaik dari petani lokal yang kami pilih untuk Anda.",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description: "Setiap cangkir kopi kami buat dengan dedikasi dan passion.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Kami membangun ruang untuk pecinta kopi berkumpul dan berbagi.",
  },
  {
    icon: Award,
    title: "Konsistensi",
    description: "Standar tinggi yang sama setiap kali Anda berkunjung.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={cafeInterior}
            alt="Interior Kopi Loka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tentang Kopi Loka
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Perjalanan kami dalam menghadirkan pengalaman kopi terbaik untuk Anda
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Cerita Kami
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Dari Passion Menjadi Realita
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kopi Loka lahir dari kecintaan kami terhadap kopi Indonesia. 
                  Dimulai pada tahun 2019 sebagai kedai kopi kecil di sudut Jakarta, 
                  kami bermimpi untuk mengangkat kopi lokal ke level yang lebih tinggi.
                </p>
                <p>
                  Nama "Loka" berasal dari kata "lokal" - sebuah komitmen kami untuk 
                  selalu menggunakan biji kopi dari petani Indonesia. Dari Aceh hingga Papua, 
                  kami menjelajahi nusantara untuk menemukan biji kopi terbaik.
                </p>
                <p>
                  Hari ini, Kopi Loka menjadi rumah kedua bagi ribuan pecinta kopi. 
                  Sebuah tempat di mana Anda bisa menikmati kopi berkualitas, 
                  bekerja dengan nyaman, atau sekadar bersantai dengan teman.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={counterBar}
                alt="Counter bar Kopi Loka"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm">Tahun Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground">
              Prinsip yang kami pegang teguh dalam setiap cangkir kopi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-coffee flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tim Kami
            </h2>
            <p className="text-muted-foreground">
              Orang-orang hebat di balik setiap cangkir kopi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Budi Santoso",
                role: "Founder & Head Roaster",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
              },
              {
                name: "Maya Putri",
                role: "Head Barista",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
              },
              {
                name: "Andi Wijaya",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
