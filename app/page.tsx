import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LogoCarousel from '@/components/LogoCarousel';
import OurProcess from '@/components/OurProcess';
import MapEmbed from '@/components/MapEmbed';
import WhatsappFloating from '@/components/WhatsappFloating';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <WhatsappFloating phone='+919705899998'/>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <OurProcess/>
      <AboutSection />
      <LogoCarousel/>
      <GallerySection />
      <MapEmbed/>
      
      <ContactSection />
      <Footer />
    </main>
  );
}