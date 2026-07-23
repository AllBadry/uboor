import { useEffect, useRef, useState } from 'react';
import { Rocket, MonitorSmartphone, Code2, Cpu, Globe2, Sparkles, Box, Heart } from 'lucide-react';

// مكون الظهور السلس لضبط توقيت ظهور العناصر
const RevealOnScroll = ({ children, className = "", delay = "delay-0", threshold = 0.4 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="relative font-cairo selection:bg-uboor-orange selection:text-white bg-bg-pure-white">
      
      {/* 
        =========================================
        الطبقة الأولى: الغلاف الجوي (واجهة الشركة والتصميم)
        Z-Index: 10
        ========================================= 
      */}
      <section className="sticky top-0 h-screen w-full bg-bg-pure-white z-10 flex flex-col items-center justify-center overflow-hidden">
        
        {/* شمس رقمية ساطعة */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vh] h-[60vh] bg-uboor-cyan/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-uboor-orange/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* شبكة بيضاء تعبر عن التصميم الشبكي (Grid System) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at center, var(--uboor-blue) 2px, transparent 2px)', backgroundSize: '50px 50px' }}>
        </div>

        <div className="relative z-20 text-center px-4">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-white shadow-md border border-uboor-cyan/20 transform hover:-translate-y-1 transition-all duration-300">
              <Rocket className="w-5 h-5 text-uboor-orange animate-[bounce_2s_infinite]" />
              <span className="text-sm font-bold text-uboor-blue tracking-wider">محطة الانطلاق</span>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay="delay-100">
            <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-tight mb-6">
              شركة <span className="text-transparent bg-clip-text bg-gradient-mixed">عُبـور</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text-muted mb-8">للحلول البرمجية</h2>
          </RevealOnScroll>

          <RevealOnScroll delay="delay-300">
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed border-r-4 border-uboor-cyan pr-6 bg-white/50 backdrop-blur-sm p-4 rounded-l-2xl shadow-sm">
              نصمم واجهات تأسر العين، وتجارب مستخدم تحاكي الخيال. هنا على السطح، كل بكسل مصمم ليروي قصة علامتك التجارية بأبهى صورة.
            </p>
          </RevealOnScroll>
        </div>

        {/* مؤشر الغوص للفضاء */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
          <span className="text-sm font-bold text-uboor-blue mb-2 tracking-widest">اغمر في الفضاء الرقمي</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-uboor-blue to-transparent"></div>
        </div>
      </section>

      {/* 
        =========================================
        الطبقة الثانية: مدار الكوكب (الأنظمة والهندسة)
        Z-Index: 20
        ========================================= 
      */}
      <section className="sticky top-0 h-screen w-full bg-uboor-blue z-20 flex flex-col items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        
        {/* خلفية فضاء أزرق عميق مع نجوم متحركة */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px', animation: 'float 20s linear infinite' }}>
        </div>
        
        {/* سديم (Nebula) أزرق مضيء */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-uboor-cyan/40 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>

        <div className="relative z-20 text-center px-4 w-full max-w-6xl">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-12 drop-shadow-lg">
              لكن الرحلة.. <br />
              <span className="text-uboor-cyan">أعمق من مجرد تصميم</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <RevealOnScroll delay="delay-200">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
                <Globe2 className="w-10 h-10 text-uboor-cyan mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">أنظمة ويب ومنصات</h3>
                <p className="text-white/80 leading-relaxed">
                  نبني منصات ضخمة قادرة على تحمل آلاف المستخدمين، باستخدام تقنيات (MERN Stack) المتطورة وقواعد البيانات الجغرافية.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-400">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
                <MonitorSmartphone className="w-10 h-10 text-uboor-orange mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">تطبيقات وأنظمة ذكية</h3>
                <p className="text-white/80 leading-relaxed">
                  تطبيقات سطح مكتب معقدة مبنية بـ C++، وأنظمة لإدارة العيادات والمخزون، مدعومة بمساعدات الذكاء الاصطناعي لأتمتة أعمالك.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/60">
          <span className="text-sm font-bold mb-2 tracking-widest">إلى قلب المجرة</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-uboor-cyan to-transparent"></div>
        </div>
      </section>

      {/* 
        =========================================
        الطبقة الثالثة: الفضاء اللامتناهي (المجتمع والمصادر المفتوحة)
        Z-Index: 30
        ========================================= 
      */}
      <section className="relative w-full min-h-screen bg-[#02050f] z-30 pt-32 pb-24 shadow-[0_-40px_80px_rgba(0,0,0,0.6)] border-t border-white/10 overflow-hidden">
        
        {/* سدم فضائية (Space Nebulas) في أعماق المجرة */}
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-uboor-orange/15 rounded-full blur-[150px] mix-blend-screen animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-uboor-cyan/15 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'float 20s infinite reverse' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <RevealOnScroll>
            <div className="w-20 h-20 mx-auto mb-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay="delay-100">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              أبعد من مجرد كود... <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uboor-orange to-uboor-cyan drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                بصمة في الكون الرقمي
              </span>
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay="delay-200">
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-24">
              نحن لا نكتفي ببناء الأنظمة الخاصة فقط. في عُبـور، نؤمن بأن المعرفة قوة يجب أن تُشارك. نحن نبني ونساهم في مجتمع البرمجة لنرسم مستقبلاً أفضل للمطورين.
            </p>
          </RevealOnScroll>

          {/* الكواكب (البطاقات الدائرية/البيضاوية التي تعكس التأثير المجتمعي) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* كوكب المصادر المفتوحة */}
            <RevealOnScroll delay="delay-100">
              <div className="group relative h-full p-10 rounded-[3rem] bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-uboor-cyan/40 transition-all duration-700 hover:-translate-y-4">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-uboor-cyan/10 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_ease-out_infinite]"></div>
                
                <Code2 className="w-14 h-14 text-uboor-cyan mb-6 mx-auto drop-shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-4">برمجيات مفتوحة المصدر</h3>
                <p className="text-white/60 leading-relaxed">
                  نصدر حلولاً برمجية قوية ومفتوحة المصدر للعموم، لندعم المطورين والشركات الناشئة في بناء أدواتهم الخاصة.
                </p>
              </div>
            </RevealOnScroll>

            {/* كوكب إضافات المتصفح */}
            <RevealOnScroll delay="delay-300">
              <div className="group relative h-full p-10 rounded-[3rem] bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-uboor-orange/40 transition-all duration-700 hover:-translate-y-4 mt-0 md:mt-16">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-uboor-orange/10 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_ease-out_infinite]"></div>
                
                <Box className="w-14 h-14 text-uboor-orange mb-6 mx-auto drop-shadow-[0_0_15px_rgba(245,130,32,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-4">إضافات متصفح مجانية</h3>
                <p className="text-white/60 leading-relaxed">
                  نطور وننشر أدوات احترافية مثل (WA Contacts Exporter) لتسهيل مهام المستخدمين اليومية بشكل مجاني تماماً.
                </p>
              </div>
            </RevealOnScroll>

            {/* كوكب مجتمع البرمجة */}
            <RevealOnScroll delay="delay-500">
              <div className="group relative h-full p-10 rounded-[3rem] bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-white/40 transition-all duration-700 hover:-translate-y-4">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_ease-out_infinite]"></div>
                
                <Heart className="w-14 h-14 text-white mb-6 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-4">صناعة التأثير</h3>
                <p className="text-white/60 leading-relaxed">
                  لا نقتصر على كتابة الأكواد المغلقة، بل نتواجد بقوة في منصات مثل GitHub لدعم، إصلاح، وتطوير البنى التحتية العالمية.
                </p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* حركات الأنيميشن للفضاء */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
      `}} />
    </div>
  );
}