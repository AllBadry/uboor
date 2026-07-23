import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProducts />
      <ContactSection />
    </div>
  );
}