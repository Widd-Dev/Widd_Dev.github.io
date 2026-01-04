import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    role: "Coffee Enthusiast",
    content: "Es Kopi Loka adalah signature drink terbaik yang pernah saya coba! Perpaduan pandan dan coconut-nya unik banget. Jadi langganan setiap minggu.",
    rating: 5,
    avatar: testimonial1,
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Remote Worker",
    content: "Tempat kerja favorit saya! WiFi kencang, suasana tenang, dan kopinya enak. Barista-nya juga ramah-ramah. Highly recommended!",
    rating: 5,
    avatar: testimonial2,
  },
  {
    id: 3,
    name: "Dewi Lestari",
    role: "Food Blogger",
    content: "Croissant-nya crispy perfect dan banana bread-nya moist banget. Cocok banget dipasangkan dengan cappuccino mereka!",
    rating: 5,
    avatar: testimonial3,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-muted-foreground">
            Testimoni dari pelanggan setia yang telah merasakan pengalaman ngopi di Kopi Loka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 md:p-8 rounded-xl border border-border relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
