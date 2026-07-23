import { useState, useEffect, useRef } from 'react';
import { Zap, ArrowLeft, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // مراقب التمرير (خفيف وسريع جداً)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden z-10 font-cairo">
      
      {/* 
        الخلفية البيضاء مع شكل هندسي خفيف لربط القسم بما قبله
      */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
        
        {/* =========================================
            البطاقة الداكنة الفخمة (Stripe Dark CTA)
            ========================================= */}
        <div className={`relative bg-[#0B1121] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800 transition-all duration-1000 ease-out transform-gpu ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
          
          {/* إضاءات الخلفية (Ambient Glows) - تعمل على الـ GPU ولا تسبب تعليق */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-uboor-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-uboor-orange/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-uboor-cyan/10 rounded-[100%] blur-[120px] pointer-events-none transform -rotate-45"></div>

          <div className="relative z-10 p-10 sm:p-16 lg:p-24 flex flex-col items-center text-center">
            
            {/* الشارة العلوية */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm transition-all duration-700 delay-300 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Zap className="w-4 h-4 text-uboor-orange" />
              <span className="text-sm font-bold text-slate-200 tracking-wide">هل أنت مستعد للتجربة؟</span>
            </div>
            
            {/* العنوان الرئيسي */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] mb-6 transition-all duration-700 delay-500 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              حان وقت <span className="text-transparent bg-clip-text bg-gradient-to-l from-uboor-orange via-uboor-cyan to-uboor-blue">العبور</span> <br className="hidden sm:block" /> إلى المستوى التالي
            </h2>
            
            {/* النص الوصفي */}
            <p className={`text-lg sm:text-xl text-slate-400 font-medium max-w-2xl mb-12 leading-relaxed transition-all duration-700 delay-700 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              انضم إلى الشركات التي تثق بنا لبناء أنظمتها وتوسيع نطاق أعمالها. اطلب استشارة تقنية مجانية أو تواصل مع خبرائنا لنبدأ العمل على مشروعك اليوم.
            </p>
            
            {/* =========================================
                مجموعة الأزرار (Primary & Secondary)
                ========================================= */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto transition-all duration-700 delay-1000 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              
              {/* الزر الرئيسي (Primary CTA) */}
              <Link 
                to="/contact" 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-[#0B1121] bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* لمعة سريعة تمر فوق الزر (Shimmer Effect) */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_ease-out_infinite] z-0 pointer-events-none"></div>
                
                <span className="relative z-10 text-lg">ابدأ مشروعك الآن</span>
                <ArrowLeft className="relative z-10 w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              </Link>

              {/* الزر الثانوي (Secondary CTA) */}
              <Link 
                to="/contact" 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Headset className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                <span>تواصل مع المبيعات</span>
              </Link>

            </div>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
      `}} />
    </section>
  );
}