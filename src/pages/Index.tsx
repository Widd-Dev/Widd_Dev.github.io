import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { BestsellerSection } from "@/components/home/BestsellerSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <BestsellerSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
