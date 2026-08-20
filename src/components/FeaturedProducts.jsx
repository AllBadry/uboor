import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ArrowUpLeft, Rocket, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // مراقب التمرير للظهور المتدرج (خفيف جداً)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const PRODUCTS = [
    {
      id: 'wa-collector',
      logoImgLarge: '/WACollectorLogo.png',
      logoImgSmall: '/WACollectorLogo.png',
      name: 'WA Collector',
      title: 'استخراج بيانات واتساب بضغطة زر.',
      desc: 'أداة سكرابينج متطورة تسحب بيانات جهات الاتصال من أي قائمة مرئية عبر التمرير التلقائي بأمان تام.',
      link: '/products/wacollector',
      gradient: 'from-emerald-500 to-teal-700',
      iconColor: 'text-emerald-100',
    },
    {
      id: 'seo-monster',
      logoImgLarge: '/SEO.png',
      logoImgSmall: '/SEO.png',
      name: 'SEO Monster',
      title: 'المُحلل الشامل لأي صفحة ويب.',
      desc: 'إضافة متطورة تعمل داخل جهازك لتقديم فحص جراحي وعميق لمحركات البحث والأداء.',
      link: '/products/seo-monster',
      gradient: 'from-violet-600 to-purple-800',
      iconColor: 'text-violet-200',
    },
    {
      id: 'uwps',
      logoImgLarge: '/UWPS2R.png',
      logoImgSmall: '/UWPSR.png',
      name: 'UWPS',
      title: 'الفاحص الأمني لـ WordPress.',
      desc: 'أداة احترافية مبنية بـ Rust تفحص مواقع ووردبريس بعمق لاكتشاف الثغرات وتخطي جدران الحماية.',
      link: '/products/uwps',
      gradient: 'from-slate-700 to-slate-900',
      iconColor: 'text-cyan-100',
    },
    {
      id: 'urm',
      logoImgLarge: '/URMR.png',
      logoImgSmall: '/URM2R.png',
      name: 'URM',
      title: 'مراقب الشبكات المتقدم (eBPF).',
      desc: 'أداة مراقبة شبكية مبنية بـ Rust تلتقط طلبات HTTP/HTTPS من النواة وتتبع اتصالات السيرفر بدقة.',
      link: '/products/urm',
      gradient: 'from-cyan-500 to-blue-700',
      iconColor: 'text-slate-100',
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden border-t border-slate-100 font-cairo">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* ================= الترويسة ================= */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              أدوات برمجية تقود نموك
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl">
              اكتشف مجموعة من الإضافات والأنظمة التي صممناها في عُبور لتسريع وتسهيل مهامك اليومية.
            </p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-uboor-blue font-bold hover:text-uboor-cyan transition-colors group">
            عرض كل المنتجات
            <ArrowUpLeft className="w-5 h-5 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* ================= شبكة الكروت الطولية ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRODUCTS.map((product, index) => {
            const delay = index * 75; // تأخير خفيف جداً لسرعة الظهور
            return (
              <Link 
                key={product.id}
                to={product.link}
                // استخدمنا transition-transform فقط للهوفر (الأخف على المتصفح)
                className={`group flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1.5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
              >
                {/* منطقة الجرافيك العلوية */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-900 shadow-sm">
                  
                  {/* الخلفية الملونة */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}></div>
                  
                  {/* الأيقونة المركزية الكبيرة مع المربع الأبيض */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {product.logoImgLarge ? (
                      <div className="w-28 h-28 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                        <img src={product.logoImgLarge} alt={product.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <product.logo className={`w-32 h-32 ${product.iconColor} opacity-40 transition-transform duration-500 ease-out group-hover:scale-110`} />
                    )}
                  </div>
                  
                  {/* اسم المنتج والشعار الصغير بالأسفل */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white font-black text-lg">
                    {product.logoImgSmall ? (
                      <div className="w-6 h-6 rounded-md bg-white/30 backdrop-blur-sm flex items-center justify-center p-1">
                        <img src={product.logoImgSmall} alt={product.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <product.logo className="w-5 h-5" />
                    )}
                    {product.name}
                  </div>
                </div>

                {/* النصوص */}
                <h3 className="text-slate-900 font-bold text-lg leading-snug mb-2 group-hover:text-uboor-blue transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>
                
                <span className="text-uboor-blue font-bold text-sm flex items-center gap-1.5 transition-colors">
                  اكتشف الأداة 
                  <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* ================= البانرات السفلية العريضة ================= */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <Link to="/contact" className="group relative bg-slate-50 border border-slate-200/80 rounded-[2rem] p-8 sm:p-10 overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center min-h-[220px]">
            {/* التوهج الخلفي يعتمد على opacity فقط للحفاظ على الأداء */}
            <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-gradient-to-r from-uboor-cyan/10 via-uboor-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 w-full sm:w-4/5">
              <h4 className="font-black text-slate-900 text-xl mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-uboor-blue" />
                برنامج عُبور للشركات الناشئة
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                احصل على بنية تحتية برمجية متينة، استشارات تقنية، وأدوات مخصصة لمساعدة شركتك الناشئة على الانطلاق والنمو.
              </p>
              <span className="text-uboor-blue font-bold text-sm flex items-center gap-1.5 transition-colors">
                قدم طلبك الآن <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </div>
          </Link>

          <Link to="/services" className="group relative bg-slate-50 border border-slate-200/80 rounded-[2rem] p-8 sm:p-10 overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center min-h-[220px]">
            <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-gradient-to-r from-uboor-orange/10 via-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 w-full sm:w-4/5">
              <h4 className="font-black text-slate-900 text-xl mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-uboor-orange" />
                واجهات برمجية (APIs)
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                ادمج خدماتنا المتطورة مباشرة في أنظمتك وتطبيقاتك عبر واجهات برمجية نظيفة، موثقة جيداً، وعالية الاستجابة.
              </p>
              <span className="text-uboor-orange font-bold text-sm flex items-center gap-1.5 transition-colors">
                استكشف التوثيق <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}