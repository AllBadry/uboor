import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronLeft, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  
  // دالة الصعود السلس لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-pure-white pt-20 pb-10 mt-auto overflow-hidden">
      
      {/* 1. الخط العلوي المضيء والمتحرك */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-uboor-blue via-uboor-cyan to-uboor-orange bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]"></div>
      
      {/* إضاءات خلفية خافتة جداً للعمق */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-uboor-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-uboor-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* العمود الأول: الهوية والوصف (يأخذ مساحة أكبر) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-uboor-cyan blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                <img className="h-14 w-auto relative transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" src="/UB.png" alt="شعار شركة عبور" />
              </div>
              <span className="font-black text-3xl bg-gradient-blue bg-clip-text text-transparent">عُبـور</span>
            </Link>
            
            <p className="text-text-muted text-base leading-relaxed max-w-sm">
              نصنع التأثير في مجتمع البرمجة. نبني أنظمة ويب معقدة، تطبيقات سطح مكتب، وبرمجيات مفتوحة المصدر بأعلى معايير الجودة وبدون استخدام القوالب الجاهزة.
            </p>

            {/* أيقونات السوشيال ميديا (مدمجة כـ SVG للحماية من أخطاء الحزم) */}
            <div className="flex gap-4 pt-2">
              {/* Facebook */}
              <a href="https://www.facebook.com/UboorTech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-off-white border border-gray-100 flex items-center justify-center text-text-muted hover:text-[#1877F2] hover:bg-white hover:shadow-[0_0_15px_rgba(24,119,242,0.3)] hover:-translate-y-1 transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/uboor1?igsh=MTh0dnpmbTZkanV6OA==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-off-white border border-gray-100 flex items-center justify-center text-text-muted hover:text-[#E4405F] hover:bg-white hover:shadow-[0_0_15px_rgba(228,64,95,0.3)] hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/Uboor-Company" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-off-white border border-gray-100 flex items-center justify-center text-text-muted hover:text-black hover:bg-white hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black text-text-main mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-uboor-cyan" />
              روابط هامة
            </h4>
            <ul className="space-y-4">
              {['الرئيسية', 'خدمات الويب والأنظمة', 'عن الشركة', 'سياسة الخصوصية'].map((item, idx) => {
                const paths = ['/', '/services', '/about', '/privacy'];
                return (
                  <li key={idx}>
                    <Link to={paths[idx]} className="group flex items-center text-text-muted hover:text-uboor-cyan transition-colors">
                      <ChevronLeft className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="transform group-hover:-translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* العمود الثالث: منتجاتنا */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black text-text-main mb-6">أدواتنا المجانية</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/products/wacollector" className="group flex items-center text-text-muted hover:text-uboor-orange transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 ml-2 group-hover:bg-uboor-orange group-hover:scale-150 transition-all duration-300"></span>
                  WA Contacts Exporter
                </Link>
              </li>
              <li>
                <Link to="/products/auto-capture" className="group flex items-center text-text-muted hover:text-uboor-orange transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 ml-2 group-hover:bg-uboor-orange group-hover:scale-150 transition-all duration-300"></span>
                  Auto Capture
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: معلومات التواصل المباشر */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black text-text-main mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-uboor-blue mt-0.5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-text-muted group-hover:text-text-main transition-colors">عمّان، الأردن</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-uboor-orange mt-0.5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-text-muted group-hover:text-text-main transition-colors" dir="ltr">+962 785290948</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-uboor-cyan mt-0.5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-text-muted group-hover:text-text-main transition-colors">info@uboor.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* القسم السفلي: الحقوق وزر الصعود */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-sm text-text-muted font-medium">
            جميع الحقوق محفوظة © {new Date().getFullYear()} <span className="text-uboor-blue font-bold">شركة عبور</span> للحلول البرمجية.
          </p>
          
          {/* زر الصعود للأعلى (تفاعلي ومضيء) */}
          <button 
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-bg-off-white border border-gray-200 shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:border-uboor-cyan transition-all duration-500 focus:outline-none"
            aria-label="العودة للأعلى"
          >
            <div className="absolute inset-0 bg-uboor-cyan opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
            <ArrowUp className="w-5 h-5 text-text-muted group-hover:text-uboor-cyan transform group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </div>

      </div>

      {/* حركة الخط العلوي المضيء */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </footer>
  );
}