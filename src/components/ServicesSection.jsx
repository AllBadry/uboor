import { useState, useEffect, useRef } from 'react';
import { ArrowUpLeft, Activity, LayoutTemplate, Bot, Code2, ShieldCheck, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white border-t border-slate-100 overflow-hidden font-cairo">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* =========================================
            1. الترويسة (مطابقة لستايل Stripe في الصورة)
            ========================================= */}
        <div className={`mb-16 lg:mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[1.3] max-w-4xl tracking-tight">
            حلول مرنة لكل نماذج الأعمال.{' '}
            <span className="text-slate-500 font-medium">
              طوّر أعمالك عبر ترسانة من الأنظمة البرمجية — المصممة لتعمل بشكل مستقل أو معاً بسلاسة تامة.
            </span>
          </h2>
        </div>

        {/* =========================================
            2. شبكة الخدمات (Bento Box Grid)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
          
          {/* البطاقة الأولى (عريضة): مواقع ويب ومنصات (تطابق أول كرت في الصورة) */}
          <Link 
            to="/services"
            className={`group col-span-1 md:col-span-2 lg:col-span-2 relative bg-[#f8fafc] rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* الهيدر */}
            <div className="p-8 pb-0 z-20 flex justify-between items-start">
              <h3 className="text-2xl font-bold text-slate-900 w-3/4 leading-snug">
                تصميم مواقع ومنصات ديناميكية <br /> متجاوبة مع كافة الأجهزة
              </h3>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-uboor-blue group-hover:border-uboor-blue transition-colors shadow-sm">
                <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            {/* الجرافيك الوهمي (Mockup) */}
            <div className="relative flex-1 mt-8 overflow-hidden pointer-events-none">
              {/* موجة لونية في الخلفية */}
              <div className="absolute -bottom-[50%] -left-[10%] w-[120%] h-[150%] bg-gradient-to-tr from-uboor-orange/80 via-uboor-cyan/40 to-transparent rounded-[100%] transform group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="absolute bottom-0 right-10 flex items-end gap-6 w-full justify-center">
                {/* موبايل */}
                <div className="w-48 h-72 bg-white rounded-t-2xl shadow-2xl border border-slate-200 p-4 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><LayoutTemplate className="w-3 h-3 text-uboor-blue" /></div>
                    <div className="w-20 h-2 rounded-full bg-slate-100"></div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-black text-slate-900 mb-1">UI/UX</div>
                    <div className="text-xs text-slate-400">تجربة مستخدم متطورة</div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-8 bg-slate-50 rounded-lg"></div>
                    <div className="w-full h-8 bg-slate-50 rounded-lg"></div>
                    <div className="w-full h-10 bg-uboor-blue rounded-xl mt-4"></div>
                  </div>
                </div>

                {/* متصفح ويب */}
                <div className="hidden sm:flex w-80 h-64 bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-2xl border border-slate-200 p-4 transform translate-y-12 group-hover:translate-y-6 transition-transform duration-700 delay-75 flex-col">
                  <div className="flex gap-1.5 mb-4 border-b border-slate-100 pb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/3 space-y-2">
                      <div className="w-full h-3 bg-slate-100 rounded"></div>
                      <div className="w-3/4 h-3 bg-slate-100 rounded"></div>
                      <div className="w-full h-3 bg-slate-100 rounded"></div>
                    </div>
                    <div className="w-2/3 h-32 bg-slate-50 rounded-xl border border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* البطاقة الثانية: أنظمة سحابية (تطابق كرت Enable any billing model) */}
          <Link 
            to="/services"
            className={`group col-span-1 relative bg-[#f8fafc] rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="p-8 pb-0 z-20 flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 w-3/4 leading-snug">
                أنظمة سحابية (SaaS & ERP) متكاملة
              </h3>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-uboor-blue group-hover:border-uboor-blue transition-colors shadow-sm">
                <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            <div className="relative flex-1 mt-8 overflow-hidden pointer-events-none flex justify-center items-end px-8">
              {/* توهج خلفي */}
              <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-uboor-blue/20 via-uboor-cyan/10 to-transparent"></div>
              
              <div className="w-full bg-white rounded-t-2xl shadow-xl border border-slate-200 p-5 transform translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-uboor-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">لوحة تحكم النظام</div>
                    <div className="text-xs text-slate-400">تحديث مباشر للبيانات</div>
                  </div>
                </div>
                
                {/* رسم بياني وهمي يتحرك */}
                <div className="flex items-end gap-1.5 h-24">
                  {[30, 50, 40, 70, 60, 90, 80, 100, 60, 40, 70, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-uboor-blue/20 rounded-t-sm group-hover:bg-uboor-blue transition-colors duration-500" style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* البطاقة الثالثة: حلول الذكاء الاصطناعي (تطابق كرت Agentic Commerce) */}
          <Link 
            to="/services"
            className={`group col-span-1 relative bg-[#f8fafc] rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="p-8 pb-0 z-20 flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 w-3/4 leading-snug">
                أتمتة وحلول الذكاء الاصطناعي (AI)
              </h3>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-uboor-blue group-hover:border-uboor-blue transition-colors shadow-sm">
                <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            <div className="relative flex-1 mt-6 overflow-hidden pointer-events-none flex justify-center px-6">
              {/* نقاط متناثرة في الخلفية */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--uboor-orange)_1px,transparent_1px)] bg-[size:16px_16px] opacity-10"></div>
              
              <div className="w-full max-w-sm mt-4 flex flex-col gap-3">
                {/* رسائل محادثة */}
                <div className="bg-white p-3 rounded-2xl rounded-tr-sm shadow-sm border border-slate-100 w-4/5 self-end transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                  <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                </div>
                
                <div className="bg-uboor-blue p-3 rounded-2xl rounded-tl-sm shadow-sm w-4/5 self-start transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                  <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 mt-4 flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                   <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center"><Bot className="text-slate-400 w-6 h-6"/></div>
                   <div className="flex-1 space-y-2">
                     <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                     <div className="w-full h-8 bg-uboor-blue/10 rounded-lg mt-2"></div>
                   </div>
                </div>
              </div>
            </div>
          </Link>

          {/* البطاقة الرابعة: برمجيات مفتوحة (تطابق كرت Stablecoins and Crypto) */}
          <Link 
            to="/services"
            className={`group col-span-1 relative bg-[#f8fafc] rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="p-8 pb-0 z-20 flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 w-3/4 leading-snug">
                برمجيات وأدوات <br /> مفتوحة المصدر
              </h3>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-uboor-blue group-hover:border-uboor-blue transition-colors shadow-sm">
                <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden pointer-events-none flex items-center justify-center">
              {/* شكل مجسم دائري منقط (Globe/Network style) */}
              <div className="absolute w-64 h-64 border-[1px] border-dashed border-uboor-blue/40 rounded-full animate-[spin_30s_linear_infinite] group-hover:border-uboor-blue/80 transition-colors duration-500"></div>
              <div className="absolute w-48 h-48 border-[1px] border-dashed border-uboor-cyan/40 rounded-full animate-[spin_20s_linear_infinite_reverse] group-hover:border-uboor-cyan/80 transition-colors duration-500"></div>
              
              <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 z-10 flex items-center gap-2 transform group-hover:scale-110 transition-transform duration-500">
                <Box className="w-5 h-5 text-uboor-orange" />
                <span className="font-bold text-sm text-slate-900">Uboor Open-Source</span>
              </div>
            </div>
          </Link>

          {/* البطاقة الخامسة: إضافات متصفح (تطابق كرت Card Issuing) */}
          <Link 
            to="/services"
            className={`group col-span-1 md:col-span-2 lg:col-span-1 relative bg-[#f8fafc] rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="p-8 pb-0 z-20 flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 w-3/4 leading-snug">
                إضافات متصفح ذكية <br /> (Extensions)
              </h3>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-uboor-blue group-hover:border-uboor-blue transition-colors shadow-sm">
                <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden pointer-events-none flex justify-center items-end">
              {/* بطاقة لامعة تشبه بطاقة الائتمان في Stripe ولكن تعبر عن أداة */}
              <div className="w-48 h-64 bg-gradient-to-tr from-uboor-blue via-uboor-cyan to-uboor-orange rounded-t-2xl shadow-2xl transform translate-y-10 group-hover:translate-y-4 group-hover:rotate-3 transition-transform duration-700 flex flex-col items-center pt-8 border border-white/20">
                <div className="w-12 h-8 bg-white/20 backdrop-blur-md rounded border border-white/30 mb-6 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div className="w-3/4 h-2 bg-white/30 rounded-full mb-3"></div>
                <div className="w-1/2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}