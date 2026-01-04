import { Coffee, Leaf, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Kopi Premium",
    description: "Biji kopi pilihan dari petani lokal Indonesia, dipanggang dengan sempurna.",
  },
  {
    icon: Leaf,
    title: "100% Organik",
    description: "Semua bahan kami berasal dari sumber organik dan berkelanjutan.",
  },
  {
    icon: Award,
    title: "Barista Bersertifikat",
    description: "Tim barista terlatih yang berdedikasi untuk menyajikan yang terbaik.",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Kopi diseduh segar setiap hari untuk kualitas terbaik.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mengapa Kopi Loka?
          </h2>
          <p className="text-muted-foreground">
            Kami berkomitmen menghadirkan pengalaman ngopi terbaik dengan bahan berkualitas 
            dan pelayanan yang ramah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-coffee flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
