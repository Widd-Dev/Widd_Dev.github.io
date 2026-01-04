import cafeInterior from "@/assets/cafe-interior.jpg";

export const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={cafeInterior}
                alt="Interior Kopi Loka yang nyaman"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 gradient-coffee rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-accent rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Tempat Ngopi
              <br />
              <span className="text-primary">Favorit Anda</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sejak 2019, Kopi Loka hadir sebagai tempat berkumpul bagi pecinta kopi. 
              Kami percaya bahwa secangkir kopi yang baik bisa mengubah hari Anda. 
              Dengan biji kopi pilihan dari petani lokal dan barista berpengalaman, 
              kami berkomitmen menyajikan yang terbaik.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Suasana yang hangat dan nyaman membuat Kopi Loka menjadi tempat sempurna 
              untuk bekerja, berkumpul dengan teman, atau sekadar menikmati waktu sendiri.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="font-display text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Kopi Lokal</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">Fresh</p>
                <p className="text-sm text-muted-foreground">Setiap Hari</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">Cozy</p>
                <p className="text-sm text-muted-foreground">Atmosphere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
