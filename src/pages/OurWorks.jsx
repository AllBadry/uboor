import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Server, Database, Code2, MapPin, ArrowUpLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل إضافة السكرول
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: '01',
    title: 'دليل فنادق برايتون',
    client: 'Brightonhotel.co.uk',
    category: 'دليل سياحي & قواعد بيانات',
    desc: 'منصة سياحية متكاملة لمدينة برايتون البريطانية. تعتمد على معالجة واستعلام قواعد بيانات ضخمة لتقديم تجربة بحث وتصفح سريعة وموثوقة لمئات الفنادق والمنشآت.',
    tech: ['Next.js', 'PostgreSQL', 'Data Scraping'],
    image: '/portfolies/brightonpage1.png', 
    link: 'https://brightonhotel.co.uk',
    icon: Database,
    accent: 'text-uboor-orange',
    glow: 'bg-uboor-orange',
  },
  {
    id: '02',
    title: 'منصة أزياء أوتفيت عمّان',
    client: 'Outfitamman.com',
    category: 'تجارة إلكترونية (E-Commerce)',
    desc: 'واجهة تجارة إلكترونية حديثة وسلسة تقدم تجربة تسوق بصرية متميزة مع أداء فائق وتجاوب مثالي مع كافة الأجهزة (Mobile-First).',
    tech: ['React', 'TailwindCSS', 'Express'],
    image: '/portfolies/OTFAMo.png', 
    link: 'https://outfitamman.com',
    icon: Code2,
    accent: 'text-slate-800',
    glow: 'bg-slate-400',
  },
  {
    id: '03',
    title: 'المعمل الافتراضي للكيمياء',
    client: 'Pharmacies.quest',
    category: 'نظام علمي & 3D Rendering',
    desc: 'منصة متقدمة تضم معملاً كيميائياً افتراضياً. ترتكز على قاعدة بيانات ضخمة لآلاف الأدوية لتوليد تراكيبها الكيميائية الدقيقة وعرضها بشكل تفاعلي وثلاثي الأبعاد في الوقت الفعلي.',
    tech: ['React', 'WebGL / 3D', 'Node.js', 'Big Data'],
    image: '/portfolies/pharmalab.png', 
    link: 'https://pharmacies.quest/',
    icon: Server,
    accent: 'text-uboor-blue',
    glow: 'bg-uboor-blue',
  },
  {
    id: '04',
    title: 'دليل العيادات الذكي',
    client: 'Belfastdentist.co.uk',
    category: 'نظام خرائط وأتمتة (SaaS)',
    desc: 'دليل عيادات أسنان متطور لمنطقة بيلفاست. يدمج دوال جغرافية حديثة تحسب المسافة بناءً على الرمز البريدي، مع نظام أتمتة يرسل رسائل فورية للعيادات التي يختارها المريض بضغطة زر.',
    tech: ['Geospatial API', 'MERN Stack', 'Auto-Messaging'],
    image: '/portfolies/belfastpage.png', 
    link: 'https://belfastdentist.co.uk',
    icon: MapPin,
    accent: 'text-uboor-cyan',
    glow: 'bg-uboor-cyan',
  },
];

export default function OurWork() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 🌟 استخدام matchMedia لتفعيل GSAP فقط على الشاشات الكبيرة (أكبر من 1024px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        
        // حركة العنوان الرئيسي
        gsap.to('.hero-text', {
          yPercent: 40,
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });

        // تأثيرات المشاريع
        gsap.utils.toArray('.project-row').forEach((row) => {
          const imageWrapper = row.querySelector('.img-wrapper');
          const imageInside = row.querySelector('.img-inside');
          const textElements = row.querySelectorAll('.text-reveal');
          const waterMark = row.querySelector('.watermark-number');
          
          // كشف الإطار بالكامل
          gsap.fromTo(imageWrapper, 
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            { 
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              duration: 1.5,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: row,
                start: 'top 85%',
              }
            }
          );

          // الباراليكس العكسي للصورة داخل الإطار
          gsap.fromTo(imageInside,
            { scale: 1.3, yPercent: 10 },
            {
              scale: 1, 
              yPercent: -10,
              ease: 'none',
              scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            }
          );

          // طفو الرقم المائي
          gsap.fromTo(waterMark,
            { yPercent: -20 },
            {
              yPercent: 20,
              ease: 'none',
              scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            }
          );

          // طفو النصوص
          gsap.fromTo(textElements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 75%',
              }
            }
          );
        });

      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="bg-bg-pure-white text-text-main font-cairo min-h-screen selection:bg-uboor-cyan selection:text-white overflow-hidden" ref={containerRef}>
      
      <Helmet>
        <title>أعمالنا | شركة عبور</title>
        <meta name="description" content="تصفح معرض أعمال شركة عبور. أنظمة معقدة، قواعد بيانات ضخمة، وتطبيقات متقدمة بنيناها لعملائنا في مختلف القطاعات." />
      </Helmet>

      {/* ================= الترويسة الفاخرة (Hero) ================= */}
      <section className="hero-section relative min-h-screen flex items-center justify-center px-6 sm:px-12 pt-28 pb-32 border-b border-slate-100">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-uboor-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-uboor-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="hero-text text-center relative z-10 w-full max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-uboor-blue font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
            معرض الأعمال الهندسية
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.15] tracking-tight mb-8 text-slate-900">
            أعمالٌ تُبرهن <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-uboor-blue via-uboor-cyan to-uboor-blue bg-[length:200%_auto] animate-gradient">
              قوة البنية التحتية.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            أنظمة لا تكتفي بالجمال السطحي، بل تغوص في عمق البيانات والأداء. تصفح كيف حولنا أعقد المشاكل إلى منصات فائقة الاستقرار.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-slate-900 to-transparent"></div>
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-900 rotate-180" style={{ writingMode: 'vertical-rl' }}>التمرير للأسفل</span>
        </div>
      </section>

      {/* ================= قسم المشاريع ================= */}
      <section className="relative pb-40 z-10 max-w-[1400px] mx-auto pt-20">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          const Icon = project.icon;

          return (
            <div key={project.id} className="project-row relative min-h-screen flex items-center py-24 px-6 sm:px-12 lg:px-20">
              
              <div className="watermark-number absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[15rem] lg:text-[25rem] font-black text-slate-50 select-none pointer-events-none -z-10">
                {project.id}
              </div>

              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 w-full`}>
                
                {/* 1. الجانب البصري (الإطار الفاصل) */}
                <div className="w-full lg:w-7/12 relative group">
                  
                  {/* توهج لوني خفيف خلف الإطار */}
                  <div className={`absolute -inset-4 ${project.glow} opacity-10 blur-2xl rounded-[3rem] transition-opacity duration-700 group-hover:opacity-20`}></div>
                  
                  {/* الإطار الأبيض (نافذة المتصفح) */}
                  <div className="img-wrapper relative w-full bg-white p-3 sm:p-5 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200 z-10">
                    
                    {/* أزرار نافذة نظام التشغيل */}
                    <div className="flex items-center gap-2 mb-4 px-3">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>

                    {/* حاوية الصورة الداخلية */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy" // 🌟 تفعيل Lazy Loading
                        className="img-inside absolute inset-0 w-full h-full object-cover will-change-transform"
                      />

                      {/* Glassmorphism Hover Overlay */}
                      <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-md">
                        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 hover:bg-uboor-blue transition-all duration-300 shadow-2xl">
                          تصفح النظام حيّاً <ArrowUpLeft className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. جانب النصوص */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-10">
                  
                  <div className="text-reveal flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                      <Icon className={`w-5 h-5 ${project.accent}`} />
                    </div>
                    <span className={`font-black text-xs tracking-widest uppercase ${project.accent}`}>
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-reveal text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.2]">
                    {project.title}
                  </h2>
                  
                  <div className="text-reveal inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 font-bold text-sm mb-6 w-fit shadow-sm">
                    العميل: <span className="text-slate-900">{project.client}</span>
                  </div>

                  <p className="text-reveal text-lg text-slate-500 font-medium leading-relaxed mb-8 border-r-4 border-slate-100 pr-5">
                    {project.desc}
                  </p>

                  <div className="text-reveal mb-10">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">البنية التحتية</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-xs rounded-lg shadow-sm hover:border-uboor-cyan transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-reveal mt-2">
                    <a href={project.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 font-black ${project.accent} hover:gap-4 transition-all duration-300`}>
                      استكشف المشروع <ArrowUpLeft className="w-5 h-5" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* ================= دعوة لاتخاذ إجراء ================= */}
      <section className="relative py-32 bg-slate-50 border-t border-slate-200 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-uboor-blue/10 to-uboor-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">هل مشروعك هو <span className="text-uboor-blue">التحدي القادم؟</span></h2>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
            تجاوز مرحلة القوالب الجاهزة. احصل على بنية تحتية برمجية صلبة تدعم نمو شركتك لسنوات وتمنحك الأفضلية في السوق.
          </p>
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center px-10 py-5 font-black text-lg text-white bg-slate-900 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-uboor-blue hover:shadow-uboor-blue/30 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center gap-3">ابدأ الاستشارة الهندسية <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" /></span>
          </Link>
        </div>
      </section>

    </div>
  );
}