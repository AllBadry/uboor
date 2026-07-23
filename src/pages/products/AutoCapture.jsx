import { useState, useEffect, useRef } from 'react';
import { 
  DownloadCloud, 
  MousePointerClick, 
  Maximize, 
  Play, 
  AlertTriangle, 
  CheckCircle2, 
  FileArchive, 
  Settings, 
  FolderOpen, 
  Blocks,
  Sparkles,
  ArrowRight,
  RefreshCcw,
  Camera,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AutoCapture() {
  const [isMounted, setIsMounted] = useState(false);
  const [isInstallVisible, setIsInstallVisible] = useState(false);
  const installSectionRef = useRef(null);

  // أنيميشن التحميل الأولي
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // مراقب التمرير (Scroll Trigger) لقسم التثبيت
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // عندما يظهر 20% من القسم على الشاشة
        if (entry.isIntersecting) {
          setIsInstallVisible(true);
          observer.disconnect(); // تشغيل الأنيميشن مرة واحدة فقط
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (installSectionRef.current) {
      observer.observe(installSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // خطوات الاستخدام
  const USAGE_STEPS = [
    {
      id: 1,
      icon: Blocks,
      title: 'فتح الإضافة',
      desc: 'قم بالنقر على أيقونة الإضافة من شريط أدوات المتصفح لفتحها وبدء العمل.'
    },
    {
      id: 2,
      icon: MousePointerClick,
      title: 'تحديد الزر',
      desc: 'انقر على خيار "تحديد الزر" داخل الإضافة، ثم انقر على العنصر في صفحة الويب. (ستختفي نافذة الإضافة هنا).'
    },
    {
      id: 3,
      icon: RefreshCcw,
      title: 'إعادة الفتح',
      desc: 'لا تقلق من اختفاء النافذة! قم بالنقر على أيقونة الإضافة لفتحها مرة أخرى.'
    },
    {
      id: 4,
      icon: Maximize,
      title: 'تحديد المساحة',
      desc: 'انقر على "تحديد المساحة" وحدد المنطقة المطلوب تصويرها. (ستختفي الإضافة مجدداً).'
    },
    {
      id: 5,
      icon: Play,
      title: 'بدء التشغيل',
      desc: 'أعد فتح الإضافة للمرة الأخيرة، وانقر على زر "ابدأ" لتفعيل الأتمتة وحفظ الصور.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-indigo-500 selection:text-white pb-24">
      
      {/* =========================================
          1. Hero Section (القسم الترحيبي)
          ========================================= */}
      <section className="relative pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* زر الرجوع للخلف */}
        <div className={`relative z-20 mb-8 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="text-sm">الرجوع للمنتجات</span>
          </Link>
        </div>

        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              أداة مجانية 100%
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Uboor <span className="text-indigo-600">Auto Capture</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-r-4 border-indigo-500 pr-4 max-w-lg">
              أداة أتمتة ذكية مصممة لتسهيل تحديد العناصر وأخذ لقطات شاشة متتابعة للصفحات وحفظها منظمة في جهازك، مثالية لأرشفة المحتوى وتوفير الوقت.
            </p>
            
            <a href="/products/autocapture.zip" download="Uboor_Auto_Capture.zip" className="group inline-flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-300">
              <DownloadCloud className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              تنزيل الإضافة الآن
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border-4 border-slate-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Auto Capture</h3>
                </div>
                <span className="text-slate-400 font-mono text-xs border border-slate-700 px-2 py-1 rounded-md">DOM Ready</span>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white p-4 rounded-xl flex items-center justify-between transition-colors">
                  <span className="font-bold">تحديد الزر</span>
                  <MousePointerClick className="w-5 h-5 text-indigo-400" />
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white p-4 rounded-xl flex items-center justify-between transition-colors">
                  <span className="font-bold">تحديد المساحة</span>
                  <Maximize className="w-5 h-5 text-indigo-400" />
                </button>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors mt-2">
                  <Play className="w-5 h-5" fill="currentColor" />
                  ابدأ الالتقاط
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. Important Note (ملاحظة السلوك الافتراضي)
          ========================================= */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-amber-900 mb-3">لماذا تختفي الإضافة عند التحديد؟</h3>
                <p className="text-amber-800 leading-relaxed font-medium">
                  قد تلاحظ أن نافذة الإضافة تغلق نفسها تلقائياً عند قيامك بتحديد "الزر" أو "المساحة". 
                  <strong className="block mt-2 text-amber-900">هذا السلوك ليس عطلاً برمجياً!</strong>
                  طبيعة المتصفح تفرض إغلاق النافذة المنبثقة (Popup) بمجرد النقر في أي مكان خارجها على صفحة الويب. كل ما عليك فعله هو <u>إعادة فتح الإضافة</u> وإكمال الخطوات بكل بساطة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. How to Use (طريقة الاستخدام)
          ========================================= */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              دليل الاستخدام <span className="text-indigo-600">خطوة بخطوة</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              نظراً لطبيعة عمل إضافات المتصفح وتفاعلها مع الصفحة (DOM)، تتطلب الأداة بضع خطوات متسلسلة لتحديد العناصر بشكل صحيح قبل بدء الأتمتة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-indigo-100 z-0"></div>

            {USAGE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 shadow-xl flex items-center justify-center mb-6 group-hover:border-indigo-100 group-hover:-translate-y-2 transition-all duration-300 relative">
                    <span className="absolute top-0 right-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold font-mono shadow-md border-2 border-white">
                      {step.id}
                    </span>
                    <Icon className="w-10 h-10 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          4. Tech Stack (التقنيات)
          ========================================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-8">التقنيات الأساسية للأداة</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
              <p className="text-slate-700 font-bold text-right text-sm">مبنية للعمل كإضافة متصفح خفيفة (Browser Extension) لا تستهلك الموارد.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
              <p className="text-slate-700 font-bold text-right text-sm">مصممة للتفاعل المباشر والآمن مع عناصر الـ DOM في صفحة الويب النشطة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. Installation Guide (طريقة التثبيت ScrollTriggered)
          ========================================= */}
      <section 
        id="install-guide" 
        ref={installSectionRef}
        className="py-24 bg-[#0B1120] text-white relative overflow-hidden"
      >
        {/* خلفية ديناميكية عميقة */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${isInstallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-black mb-6">كيف أقوم بتثبيت الإضافة؟</h2>
            <p className="text-lg text-slate-400 font-medium">خطوات بسيطة لتثبيت الإضافة يدوياً على متصفحك (Google Chrome / Edge) والبدء بالعمل في أقل من دقيقة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* خط واصل نيون (يضيء عند ظهور القسم) */}
            <div className={`hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-slate-800 -translate-y-1/2 z-0 overflow-hidden`}>
              <div className={`h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full transition-transform duration-[2000ms] ${isInstallVisible ? 'translate-x-0' : '-translate-x-[100%]'}`}></div>
            </div>

            {/* Step 1 */}
            <div className={`bg-white/5 backdrop-blur-md rounded-3xl p-8 relative z-10 border border-white/10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 transform ${isInstallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <DownloadCloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">1. تنزيل الملف</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">قم بتنزيل ملف الإضافة المضغوط (ZIP) إلى جهاز الكمبيوتر الخاص بك.</p>
              <a 
                href="/products/autoCollector.zip" 
                download="Uboor_Auto_Capture.zip"
                className="mt-auto w-full px-6 py-2.5 bg-indigo-500 text-white font-bold rounded-xl text-sm hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/40 transition-all cursor-pointer"
              >
                تنزيل ZIP
              </a>
            </div>

            {/* Step 2 */}
            <div className={`bg-white/5 backdrop-blur-md rounded-3xl p-8 relative z-10 border border-white/10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 transform ${isInstallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-6 shadow-lg border border-white/10">
                <FileArchive className="w-8 h-8 text-uboor-orange" />
              </div>
              <h3 className="font-bold text-xl mb-3">2. فك الضغط</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انقر بزر الماوس الأيمن على الملف المحمل واختر "استخراج هنا" أو "Extract Here".</p>
            </div>

            {/* Step 3 */}
            <div className={`bg-white/5 backdrop-blur-md rounded-3xl p-8 relative z-10 border border-white/10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 transform ${isInstallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '500ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-6 shadow-lg border border-white/10">
                <Settings className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl mb-3">3. وضع المطور</h3>
              <p className="text-slate-400 text-sm leading-relaxed">افتح صفحة الإضافات <code className="bg-black/50 px-2 py-0.5 rounded text-xs text-indigo-300 font-mono mt-1 inline-block">chrome://extensions</code> وقم بتفعيل "وضع المطور".</p>
            </div>

            {/* Step 4 */}
            <div className={`bg-indigo-900/40 backdrop-blur-md rounded-3xl p-8 relative z-10 border border-indigo-500/30 flex flex-col items-center text-center shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:-translate-y-2 hover:bg-indigo-900/60 transition-all duration-500 transform ${isInstallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '700ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">4. تحميل الإضافة</h3>
              <p className="text-indigo-200 text-sm leading-relaxed">انقر على زر "تحميل إضافة تم فك ضغطها" (Load unpacked) واختر المجلد المستخرج.</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}