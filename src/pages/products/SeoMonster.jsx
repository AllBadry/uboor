import { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  Search, 
  Brain, 
  ShieldCheck, 
  Bot, 
  Languages, 
  Gauge, 
  Code2, 
  Link as LinkIcon, 
  FileSpreadsheet,
  CheckCircle2, 
  FileArchive, 
  Settings, 
  FolderOpen, 
  Sparkles,
  ArrowRight,
  Activity,
  Globe,
  MonitorCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeoMonster() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // بيانات الميزات الشاملة (Features)
  const FEATURES_DATA = [
    {
      id: 1,
      icon: Search,
      title: 'محاكي الظهور (SERP)',
      desc: 'عرض حي لشكل صفحتك في جوجل ومواقع التواصل (Open Graph & Twitter Cards) مع حساب دقيق لطول العناوين والوصف.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Brain,
      title: 'تحليل النص ونية البحث',
      desc: 'تخمين نية البحث (معلوماتية، تجارية)، حساب زمن القراءة، استخراج الكلمات المفتاحية (TF-IDF)، وقياس تعقيد الجمل.',
      color: 'text-violet-500',
      bg: 'bg-violet-50'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'الأمان وإمكانية الوصول',
      desc: 'فحص بروتوكولات الأمان (HSTS, X-Frame)، والتباين اللوني، وأحجام أزرار اللمس (Tap Targets)، ووسوم ARIA.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      id: 4,
      icon: Bot,
      title: 'فحص الأرشفة (Robots)',
      desc: 'قراءة وتحليل ملف robots.txt برمجياً، وفحص ترويسة X-Robots-Tag المخفية، ووسم Meta Robots للتأكد من قابلية الأرشفة.',
      color: 'text-slate-700',
      bg: 'bg-slate-100'
    },
    {
      id: 5,
      icon: Languages,
      title: 'متعدد اللغات (Hreflang)',
      desc: 'استخراج وسوم اللغات البديلة، التأكد من وجود x-default والرابط المرجعي الذاتي، مع فحص صحة صيغ اللغات.',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      id: 6,
      icon: Gauge,
      title: 'أداء وتقنيات جوجل',
      desc: 'قياس سرعة العرض (LCP) وثبات التخطيط (CLS) فعلياً، واكتشاف التقنيات المستخدمة وبيكسلات التتبع (GTM, Meta).',
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    },
    {
      id: 7,
      icon: Code2,
      title: 'البيانات الهيكلية (Schema)',
      desc: 'فحص العلامات الميتا، استخراج البيانات المنظمة (JSON-LD)، التحقق من sitemap.xml، واستخراج شجرة العناوين H1-H6.',
      color: 'text-cyan-500',
      bg: 'bg-cyan-50'
    },
    {
      id: 8,
      icon: LinkIcon,
      title: 'تحليل الروابط والصور',
      desc: 'تصنيف الروابط (داخلية/خارجية)، فحص الصور التي تفتقد للوصف (alt)، والصور الثقيلة جداً أو المعروضة بأبعاد غير حقيقية.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
    {
      id: 9,
      icon: FileSpreadsheet,
      title: 'تصدير احترافي (Excel)',
      desc: 'تصدير التقرير بالكامل بنقرة واحدة إلى ملف XLSX مقسم إلى أوراق عمل (Tabs) لتقديمه لعملائك أو فريقك.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-violet-500 selection:text-white pb-24">
      
      {/* =========================================
          1. Hero Section (القسم الترحيبي)
          ========================================= */}
      <section className="relative pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* زر الرجوع */}
        <div className={`relative z-20 mb-8 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="text-sm">الرجوع للمنتجات</span>
          </Link>
        </div>

        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-violet-50 border border-violet-100 text-violet-600 font-bold text-sm shadow-sm">
              <Activity className="w-4 h-4 animate-pulse" />
              أداة مجانية - Zero-Cost Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              SEO <span className="text-violet-600">Monster</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-r-4 border-violet-500 pr-4 max-w-lg">
              المُحلل الشامل لأي صفحة ويب. إضافة متصفح متطورة تعمل بالكامل داخل جهازك (Client-Side) لتقديم فحص جراحي وعميق لمحركات البحث دون الحاجة لاشتراكات مدفوعة أو سيرفرات خارجية.
            </p>
            
            <a href="/products/seo-tool.zip" download="Uboor_SEO_Monster.zip" className="group inline-flex items-center justify-center gap-3 bg-violet-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] hover:-translate-y-1 transition-all duration-300">
              <DownloadCloud className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              تنزيل الإضافة (ZIP)
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* واجهة وهمية للأداة تعكس تحليل السيو */}
            <div className="bg-slate-900 rounded-[2rem] p-6 shadow-2xl border-4 border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shadow-lg">
                    <MonitorCheck className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">SEO Monster Panel</h3>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <span className="text-slate-400 text-xs block mb-1">Health Score</span>
                  <span className="text-3xl font-black text-emerald-400">92/100</span>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <span className="text-slate-400 text-xs block mb-1">Search Intent</span>
                  <span className="text-xl font-bold text-blue-400 mt-1 block">Transactional 🛒</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800 rounded-xl p-3 flex justify-between items-center text-sm border border-slate-700 border-l-4 border-l-emerald-500">
                  <span className="text-white">Title Tag (55 chars)</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="bg-slate-800 rounded-xl p-3 flex justify-between items-center text-sm border border-slate-700 border-l-4 border-l-rose-500">
                  <span className="text-white">Missing Alt Images (3)</span>
                  <span className="text-rose-500 font-bold">Error</span>
                </div>
                <div className="bg-violet-600 rounded-xl p-3 flex justify-center items-center text-sm font-bold text-white shadow-lg mt-4 cursor-pointer hover:bg-violet-500 transition-colors">
                  <FileSpreadsheet className="w-4 h-4 ml-2" />
                  Export Excel Report
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. Core Features (الميزات الشاملة)
          ========================================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              ترسانة تحليلية <span className="text-violet-600">متكاملة</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              تم تقسيم الأداة إلى وحدات جراحية دقيقة تفحص كل سطر كود وكل صورة ورابط لضمان توافق صفحتك مع خوارزميات محركات البحث الحديثة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES_DATA.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          3. How to Use (طريقة الاستخدام)
          ========================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Globe className="w-16 h-16 text-violet-500 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-black mb-12">كيف تعمل الأداة؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 relative">
              <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-black text-lg border-4 border-slate-900 shadow-lg">1</span>
              <h3 className="text-lg font-bold mb-2 mt-2 text-violet-300">الاستهداف</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انتقل إلى موقع الويب أو الصفحة التي ترغب في تحليلها بدقة.</p>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 relative">
              <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-black text-lg border-4 border-slate-900 shadow-lg">2</span>
              <h3 className="text-lg font-bold mb-2 mt-2 text-violet-300">التشغيل</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انقر على أيقونة الإضافة واضغط على زر "🚀 بدء الفحص".</p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 relative">
              <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-black text-lg border-4 border-slate-900 shadow-lg">3</span>
              <h3 className="text-lg font-bold mb-2 mt-2 text-violet-300">التحليل</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انتظر ثوانٍ معدودة ريثما يقوم المحرك بجمع وتقييم البيانات من شفرة المصدر.</p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 relative">
              <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-black text-lg border-4 border-slate-900 shadow-lg">4</span>
              <h3 className="text-lg font-bold mb-2 mt-2 text-emerald-400">التصدير</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تصفح النتائج فوراً، أو اضغط على "تصدير" لتحميل ملف Excel شامل للعميل.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. Installation Guide (طريقة التثبيت اليدوي)
          ========================================= */}
      <section id="install-guide" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">كيف أقوم بتثبيت الإضافة؟</h2>
            <p className="text-lg text-slate-600 font-medium">خطوات بسيطة لتثبيت الإضافة يدوياً على متصفحك (Google Chrome / Edge).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* خط واصل بين الخطوات */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="bg-slate-50 rounded-3xl p-8 relative z-10 border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border-2 border-slate-100">
                <DownloadCloud className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">1. تنزيل الملف</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">قم بتنزيل ملف الإضافة المضغوط (ZIP) إلى جهازك.</p>
              <a 
                href="/products/seomonster.zip" 
                download="Uboor_SEO_Monster.zip"
                className="inline-block px-6 py-2 bg-violet-600 text-white font-bold rounded-full text-sm hover:bg-violet-700 transition-colors w-full text-center cursor-pointer shadow-md"
              >
                تنزيل ZIP
              </a>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 relative z-10 border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border-2 border-slate-100">
                <FileArchive className="w-8 h-8 text-uboor-orange" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">2. فك الضغط</h3>
              <p className="text-slate-500 text-sm leading-relaxed">انقر بزر الماوس الأيمن على الملف المحمل واختر "استخراج هنا" (Extract Here).</p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 relative z-10 border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border-2 border-slate-100">
                <Settings className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">3. وضع المطور</h3>
              <p className="text-slate-500 text-sm leading-relaxed">افتح صفحة الإضافات <code className="bg-white px-2 py-0.5 rounded text-xs text-violet-600 border border-slate-200">chrome://extensions</code> وقم بتفعيل "وضع المطور".</p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 relative z-10 border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-lg border-2 border-emerald-400">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">4. تحميل الإضافة</h3>
              <p className="text-slate-500 text-sm leading-relaxed">انقر على زر "تحميل إضافة تم فك ضغطها" (Load unpacked) واختر المجلد المستخرج.</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}