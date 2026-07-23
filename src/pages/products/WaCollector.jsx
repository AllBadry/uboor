import { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  Users, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  FileArchive, 
  Settings, 
  FolderOpen, 
  Globe2, 
  Briefcase, 
  Image as ImageIcon, 
  Link as LinkIcon,
  Sparkles,
  Eye,
  ArrowRight // استيراد أيقونة السهم
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WaCollector() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // بيانات حالات الاستخدام (Use Cases)
  const USE_CASES = [
    {
      id: 0,
      title: 'أعضاء المجموعات (Leads)',
      icon: Users,
      desc: 'الخيار الأفضل للمسوقين لبناء قواعد بيانات مستهدفة.',
      steps: [
        'افتح مجموعة الواتساب المطلوبة.',
        'انقر على "اسم المجموعة" في الشريط العلوي لفتح القائمة الجانبية.',
        'انزل للأسفل حتى تصل لقائمة الأعضاء، وانقر على "عرض الكل" (View All).',
        'الآن.. انقر على أيقونة إضافة عُبور، واختر "🚀 بدء الاستخراج".'
      ]
    },
    {
      id: 1,
      title: 'جميع جهات الاتصال',
      icon: ShieldCheck,
      desc: 'لأخذ نسخة احتياطية (Backup) لجميع الأرقام المحفوظة بهاتفك.',
      steps: [
        'في الشاشة الرئيسية لواتساب ويب، انقر على أيقونة "محادثة جديدة 💬" في الأعلى.',
        'ستفتح لك قائمة تحتوي على جميع جهات اتصالك.',
        'افتح إضافة عُبور، وانقر على "🚀 بدء الاستخراج".'
      ]
    },
    {
      id: 2,
      title: 'المحادثات النشطة',
      icon: MessageCircle,
      desc: 'لاستخراج أرقام الأشخاص الذين تواصلت معهم مؤخراً (حتى لو لم يكونوا مسجلين).',
      steps: [
        'ابقَ في الشاشة الرئيسية لواتساب ويب (حيث تظهر قائمة محادثاتك).',
        'افتح إضافة عُبور، وانقر على "🚀 بدء الاستخراج".',
        'ملاحظة: في هذه الحالة ستستخرج الأداة الاسم مع "آخر رسالة متبادلة" كوصف.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white pb-24">
      
      {/* =========================================
          1. Hero Section (القسم الترحيبي)
          ========================================= */}
      <section className="relative pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
        {/* إضاءات خلفية */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* زر الرجوع للخلف */}
        <div className={`relative z-20 mb-8 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="text-sm">الرجوع للمنتجات</span>
          </Link>
        </div>

        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              أداة مجانية 100%
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Uboor <span className="text-emerald-500">WA Collector</span> Pro
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-r-4 border-emerald-500 pr-4 max-w-lg">
              الرفيق التقني الأمثل للمسوقين وفرق المبيعات. استخرج أي قائمة أرقام من "واتساب ويب" بنقرة واحدة، وصدرها في جداول أنيقة وعالية الدقة (Excel / CSV).
            </p>
            
            <a href="/products/tool.zip" download="Uboor_WA_Collector.zip" className="group inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
              <DownloadCloud className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              تنزيل الإضافة الآن
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* واجهة وهمية للأداة كعنصر مرئي */}
            <div className="bg-slate-900 rounded-[2rem] p-6 shadow-2xl border-4 border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">WA Collector Pro</h3>
                </div>
                <span className="text-slate-400 font-mono text-xs">v2.1.0</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%] animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>جاري الاستخراج...</span>
                  <span className="text-emerald-400">752 رقم</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 flex justify-between items-center text-sm text-white">
                <span className="font-mono">+962 79 XXX XXXX</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md">Business</span>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 flex justify-between items-center text-sm text-white mt-2 opacity-50">
                <span className="font-mono">+971 50 XXX XXXX</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md">Personal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. The Golden Rule (طريقة العمل)
          ========================================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              القاعدة الذهبية: <span className="text-emerald-500">القراءة البصرية الذكية</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              تعمل الأداة بتقنية القراءة البصرية؛ أي أنها تستخرج البيانات من القائمة المفتوحة على شاشتك في لحظة تشغيلها. لذا، يمكنك استخدامها لثلاثة أغراض مختلفة بناءً على ما تفتحه قبل النقر على زر الاستخراج!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* أزرار التحكم (Tabs) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {USE_CASES.map((useCase) => {
                const Icon = useCase.icon;
                const isActive = activeTab === useCase.id;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveTab(useCase.id)}
                    className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 text-right border-2 ${
                      isActive 
                      ? 'bg-emerald-50 border-emerald-500 shadow-md' 
                      : 'bg-white border-slate-100 hover:border-emerald-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex shrink-0 items-center justify-center ${isActive ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-black text-lg mb-1 ${isActive ? 'text-emerald-700' : 'text-slate-700'}`}>{useCase.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{useCase.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* محتوى الـ Tab المفتوح */}
            <div className="w-full lg:w-2/3 bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-inner flex flex-col justify-center">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-500" />
                خطوات الاستخراج:
              </h3>
              <ul className="space-y-6">
                {USE_CASES[activeTab].steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4 animate-[fade-in_0.5s_ease-out]">
                    <span className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold font-mono text-sm shadow-md">
                      {idx + 1}
                    </span>
                    <span className="text-lg text-slate-700 font-bold leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-5 bg-emerald-100/50 rounded-xl border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-emerald-800 font-bold text-sm leading-relaxed">
                  بمجرد النقر، ستقوم الأداة بالتمرير التلقائي (Auto-Scroll). الرجاء عدم لمس الفأرة أو إغلاق الشاشة حتى تظهر لك نافذة النتائج لتحميل ملف الـ CSV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. Pro Features (الميزات الحصرية)
          ========================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">ميزات <span className="text-uboor-cyan">Pro</span> الحصرية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <LinkIcon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">توليد روابط Wa.me</h3>
              <p className="text-slate-600 text-sm leading-relaxed">تنشئ الأداة رابط محادثة مباشر لكل رقم، لتبدأ الدردشة فوراً من ملف الإكسل دون الحاجة لحفظ الرقم في هاتفك.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <ImageIcon className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">استخراج الصور الشخصية</h3>
              <p className="text-slate-600 text-sm leading-relaxed">تقوم الأداة بجلب الرابط المباشر للصورة الشخصية للحساب (إن وُجدت ومتاحة للعامة).</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">فلترة وتنظيف ذكي</h3>
              <p className="text-slate-600 text-sm leading-relaxed">تتجاهل الكلمات المزعجة مثل (مشرف المجموعة، يكتب الآن...، أوقات الرسائل) لتبقي بياناتك نظيفة 100%.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Briefcase className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">اكتشاف حسابات الأعمال</h3>
              <p className="text-slate-600 text-sm leading-relaxed">تستطيع الأداة تمييز الأرقام التي تستخدم "WhatsApp Business"، مما يساعدك في استهداف شركات B2B بفعالية.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Globe2 className="w-10 h-10 text-uboor-orange mb-4" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">التصنيف الجغرافي</h3>
              <p className="text-slate-600 text-sm leading-relaxed">تكتشف دولة الرقم تلقائياً بناءً على مفتاح الاتصال الدولي (تدعم أكثر من 160 دولة).</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. Installation Guide (طريقة التثبيت اليدوي)
          ========================================= */}
      <section id="install-guide" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">كيف أقوم بتثبيت الإضافة؟</h2>
            <p className="text-lg text-slate-400 font-medium">خطوات بسيطة لتثبيت الإضافة يدوياً على متصفحك (Google Chrome / Edge) والبدء بالعمل.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* خط واصل بين الخطوات (للشاشات الكبيرة) */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

            <div className="bg-slate-800 rounded-3xl p-8 relative z-10 border border-slate-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-6 shadow-lg border-4 border-slate-900">
                <DownloadCloud className="w-8 h-8 text-uboor-cyan" />
              </div>
              <h3 className="font-bold text-xl mb-3">1. تنزيل الملف</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">قم بتنزيل ملف الإضافة المضغوط (ZIP) إلى جهازك.</p>
              <a 
                href="/products/wacollector.zip" 
                download="Uboor_WA_Collector.zip"
                className="inline-block px-6 py-2 bg-uboor-cyan text-slate-900 font-bold rounded-full text-sm hover:bg-white transition-colors w-full text-center cursor-pointer"
              >
                تنزيل ZIP
              </a>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 relative z-10 border border-slate-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-6 shadow-lg border-4 border-slate-900">
                <FileArchive className="w-8 h-8 text-uboor-orange" />
              </div>
              <h3 className="font-bold text-xl mb-3">2. فك الضغط</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انقر بزر الماوس الأيمن على الملف المحمل واختر "استخراج هنا" (Extract Here).</p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 relative z-10 border border-slate-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-6 shadow-lg border-4 border-slate-900">
                <Settings className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-xl mb-3">3. وضع المطور</h3>
              <p className="text-slate-400 text-sm leading-relaxed">افتح صفحة الإضافات <code className="bg-slate-900 px-2 py-0.5 rounded text-xs text-emerald-400">chrome://extensions</code> وقم بتفعيل "وضع المطور" في الزاوية العلوية.</p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 relative z-10 border border-slate-700 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.4)] border-4 border-slate-900">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">4. تحميل الإضافة</h3>
              <p className="text-slate-400 text-sm leading-relaxed">انقر على زر "تحميل إضافة تم فك ضغطها" (Load unpacked) واختر المجلد الذي استخرجته.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* =========================================
          5. Privacy & Security (الخصوصية والأمان)
          ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-slate-900 mb-6">خصوصيتك وأمانك أولويتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right mt-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                معالجة محلية بالكامل (Client-Side)
              </h3>
              <p className="text-slate-600 font-medium">تعمل الأداة بالكامل داخل متصفحك. لا يتم إرسال، نسخ، أو تخزين أي بيانات لجهات الاتصال على سيرفرات عُبور نهائياً.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                آمنة من الحظر (Anti-Ban Safe)
              </h3>
              <p className="text-slate-600 font-medium">الأداة تقوم بعملية "قراءة فقط" (Read-only) ولا ترسل أي رسائل آلية (Spam)، مما يجعلها آمنة تماماً وتحمي حسابك من مخاطر الحظر.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}