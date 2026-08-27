import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import FeaturedProducts from '../components/FeaturedProducts';
import { Helmet } from 'react-helmet-async';
export default function Home() {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Uboor - عبور",
    "url": "https://uboor.org",
    "logo": "https://uboor.org/UB.webp",
    "description": "شركة تكنولوجيا متعددة الجوانب تتخصص في برمجة المواقع، الأنظمة، والحلول البرمجية المبتكرة.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amman",
      "addressCountry": "JO"
    },
    // إذا كان لديكم حسابات سوشيال ميديا يمكن وضع روابطها هنا
    "sameAs": [
      "https://www.linkedin.com/company/uboor",
      "https://github.com/uboor"
    ]
  };

  // بيانات موقع الويب (WebSite Schema) لتفعيل مربع البحث في جوجل
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Uboor",
    "url": "https://uboor.org"
  };

  return (
    <div className="flex flex-col w-full">

      {/* =========================================
          هنا نقوم بحقن الـ SEO والـ Schema في الـ Head
          ========================================= */}
      <Helmet>
        <title>عبور | للحلول البرمجية والأنظمة</title>
        <meta name="description" content="نعبر بأعمالك نحو المستقبل من خلال أحدث التقنيات البرمجية. شركة متخصصة في بناء أنظمة سحابية، أدوات eBPF، وإضافات متطورة." />
        
        {/* حقن البيانات المنظمة بصيغة JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProducts />
      <ContactSection />
    </div>
  );
}