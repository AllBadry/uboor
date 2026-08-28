import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Code2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // =================================================================
  // محرك الرسوميات (Canvas Engine) المحسن بألوان زاهية وواضحة
  // =================================================================
  useEffect(() => {
    setIsMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d'); 
    let animationFrameId;
    let time = 0;

    // ألوان هوية عُبور (بشفافية 40% لتكون واضحة وقوية عند التداخل)
    const colors = [
      'rgba(56, 189, 248, 0.4)',  // Cyan (سماوي زاهي)
      'rgba(59, 130, 246, 0.4)',  // Blue (أزرق قوي)
      'rgba(251, 146, 60, 0.4)',  // Orange (برتقالي مشرق)
    ];

    const resize = () => {
      // الحفاظ على أداء عالي مع دقة شاشة ممتازة
      const dpr = Math.min(window.devicePixelRatio, 1.5); 
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      ctx.scale(dpr, dpr);
      // تخزين الأبعاد محلياً لتجنب قراءة تخطيط الصفحة داخل حلقة الرسم
      // (قراءة innerWidth/innerHeight كل إطار تسبب Forced Reflow)
      const waves = {
        amp1: vh * 0.25,
        amp2: vh * 0.15,
        mid: vh * 0.5,
        span: vw / 1.2,
      };
      drawState.waves = waves;
    };
    window.addEventListener('resize', resize);
    const drawState = { waves: null };
    resize();

    const draw = () => {
      // تعبئة الشاشة بلون فاتح
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.004; // سرعة التدفق

      // سر وضوح الألوان: استخدام multiply يجعل الألوان المتداخلة أغمق وأجمل
      ctx.globalCompositeOperation = 'multiply';

      const { amp1, amp2, mid, span } = drawState.waves;

      for (let j = 0; j < colors.length; j++) {
        ctx.beginPath();
        
        // 35 نقطة للحفاظ على نعومة المنحنى والأداء السريع
        for (let i = 0; i <= 35; i++) {
          const x = (i / 35) * span; 
          
          const wave1 = Math.sin(i * 0.15 + time + j) * amp1;
          const wave2 = Math.cos(i * 0.08 - time * 1.5 + j * 0.5) * amp2;
          
          const y = mid + wave1 + wave2;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = colors[j];
        ctx.lineWidth = 120 + Math.sin(time + j) * 50; // خطوط عريضة جداً وواضحة
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      // إعادة وضع الدمج للطبيعي
      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const TECH_STACK = [
    "JavaScript", "React", "Vite", "MongoDB", "Node.js", "Docker", "SQL", "PHP", 
    "Laravel", "Java", "Express.js", "Next.js", "C++", "Python", "Angular"
  ];

  return (
    // قمنا بإزالة overscroll-none ليعمل السكرول بشكل طبيعي وممتاز
    <section className="relative min-h-[95vh] bg-[#f8fafc] flex flex-col justify-between overflow-hidden font-cairo selection:bg-uboor-cyan selection:text-white pt-28 pb-10">
      
      {/* الكانفاس الملون في الخلفية */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none transform -scale-x-100 opacity-90"
        style={{ willChange: 'transform', transform: 'scaleX(-1) translateZ(0)' }}
      />

      {/* تدرج لإخفاء حواف الكانفاس ودمجه مع الصفحة */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full flex-1 flex items-center">
        
        {/* =========================================
            عناصر طافية متحركة (Floating Badges)
            ========================================= */}
        <div className="hidden lg:flex absolute top-10 left-[10%] bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/60 items-center gap-3 animate-float z-20">
          <ShieldCheck className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Security</p>
            <p className="text-sm font-black text-slate-800">حماية متقدمة</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-32 left-[5%] bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/60 items-center gap-3 animate-float-delayed z-20">
          <Zap className="w-6 h-6 text-uboor-orange" />
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Performance</p>
            <p className="text-sm font-black text-slate-800">أداء فائق السرعة</p>
          </div>
        </div>


        <div className={`w-full lg:w-[70%] transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-30`}>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-uboor-orange animate-pulse" />
            <span className="tracking-wide">هندسة برمجية من المستقبل</span>
          </div>

          <h1 className="text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-black text-slate-900 leading-[1.15] tracking-tight mb-8">
            بنية تحتية برمجية <br />
            تتخطى <span className="text-transparent bg-clip-text bg-gradient-to-r from-uboor-orange via-uboor-cyan to-uboor-blue animate-gradient-x bg-[length:200%_auto]">المألوف.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 leading-[1.7] font-medium mb-12 max-w-2xl">
            نحن نبني حلولاً برمجية معقدة من الصفر. من تطبيقات سطح المكتب القوية إلى أنظمة الويب السحابية، نحول أفكارك إلى واقع برمجي مستقر وآمن.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* الزر الرئيسي مع تأثير اللمعان المستمر */}
            <Link 
              to="/contact" 
              className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4.5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_30px_rgba(15,23,42,0.3)] hover:-translate-y-1 hover:bg-uboor-blue group"
            >
              {/* خط لامع يعبر الزر */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer pointer-events-none"></div>
              
              <span className="relative z-10">ابدأ مشروعك معنا</span>
              <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1.5 transition-transform relative z-10" />
            </Link>
            
            <Link 
              to="/services" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4.5 rounded-full font-bold text-lg transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              استكشف خدماتنا
            </Link>
          </div>
        </div>
      </div>

      {/* شريط التقنيات المتحرك */}
      <div className="w-full mt-20 relative z-10 border-t border-slate-200/60 pt-8 pb-4 overflow-hidden bg-white/40 backdrop-blur-md">
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap" style={{ willChange: 'transform' }}>
          {TECH_STACK.map((tech, index) => (
            <span key={index} className="mx-10 text-2xl font-black text-slate-300 hover:text-uboor-cyan transition-colors cursor-default select-none uppercase tracking-wider font-mono">
              {tech}
            </span>
          ))}
          {TECH_STACK.map((tech, index) => (
            <span key={`clone-${index}`} className="mx-10 text-2xl font-black text-slate-300 hover:text-uboor-cyan transition-colors cursor-default select-none uppercase tracking-wider font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* =========================================
          تعريفات حركات الأنيميشن الإضافية
          ========================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(100%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        /* أنيميشن الأيقونات الطافية */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* لمعان الزر المستمر */
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        /* حركة التدرج اللوني في العنوان */
        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradientX 5s ease infinite;
        }
      `}} />
    </section>
  );
}