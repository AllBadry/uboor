import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // 🌟 استيراد مكتبة Helmet
import {
  Terminal,
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  Code2,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
  Server,
  FileSearch,
  Database,
  Globe,
  Bug,
  Layers,
  Sparkles,
  Rocket,
  Gauge,
  Scan,
  Eye,
  Braces,
  Workflow,
  Binary,
  Shield,
  UserCheck,
  AlertTriangle,
  HardDrive,
  Network,
  Cloud,
  X,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Portal from '../../components/Portal'; 

export default function UwpsProduct() {
  const [isMounted, setIsMounted] = useState(false);
  const [copiedWin, setCopiedWin] = useState(false);
  const [copiedUnix, setCopiedUnix] = useState(false);
  
  // حالات النافذة المنبثقة للطلب (Modal States)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'win') {
      setCopiedWin(true);
      setTimeout(() => setCopiedWin(false), 2000);
    } else {
      setCopiedUnix(true);
      setTimeout(() => setCopiedUnix(false), 2000);
    }
  };

  const winCommand = "iwr -useb https://uwps.uboor.org/install.ps1 | iex";
  const unixCommand = "curl -sSL https://uwps.uboor.org/install.sh | sudo bash";

  // معالجة إرسال طلب الاشتراك المجاني
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('الرجاء تعبئة جميع الحقول المطلوبة.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://uwps.uboor.org/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // إرسال JSON عادي
        },
        body: JSON.stringify({ name, email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'حدث خطأ ما، يرجى المحاولة لاحقاً.');
      }
    } catch (err) {
      console.error(err);
      setError('تعذر الاتصال بالخادم. تأكد من اتصالك بالإنترنت.');
    } finally {
      setLoading(false);
    }
  };

  // 🌟 سكيما مخصصة للبرمجيات (Software Application Schema)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UWPS - WordPress Security Scanner",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Windows, macOS, Linux",
    "softwareVersion": "0.5.0",
    "description": "أداة احترافية مبنية بلغة Rust بالكامل، تفحص مواقع ووردبريس بعمق لا مثيل له، تكتشف الثغرات بدقة عالية، وتتجاوز جدران الحماية.",
    "author": {
      "@type": "Person",
      "name": "Adam Albdour"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Uboor"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "JOD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Uboor"
      }
    }
  };

  // وحدات الفحص المتقدمة مع وصف تفصيلي
  const ADVANCED_MODULES = [
    {
      icon: Code2,
      title: 'فحص دوال XML-RPC',
      desc: 'اختبار وتحليل أكثر من 80+ دالة برمجية عبر طلبات POST، مع تصنيف كل دالة (معالجة، تتطلب مصادقة، معطلة، محجوبة). يمنع استغلالها في هجمات الحجب أو التخمين، ويكشف ما إذا كان الموقع يعتمد على XML-RPC أم لا.'
    },
    {
      icon: ShieldCheck,
      title: 'قياس الحماية ضد Brute-Force',
      desc: 'إرسال 4 محاولات دخول وهمية إلى wp-login.php وتحليل الاستجابات بدقة لرصد وجود جدران حماية (WAF) وأنظمة حظر مؤقت، مع كشف وجود CAPTCHA أو تحديات Cloudflare، وتقييم فعالية الحماية.'
    },
    {
      icon: Server,
      title: 'تحليل الترويسات الأمنية (HTTP Headers)',
      desc: 'فحص 18 مساراً مختلفاً وتحليل الترويسات، مع حساب مؤشر أمان لكل صفحة. يكشف النقص في HSTS، CSP، X-Frame-Options، وغيرها، ويقدم توصيات دقيقة لتعزيز الأمان.'
    },
    {
      icon: Bug,
      title: 'كشف الملفات الخبيثة والشلز (Malware Scanner)',
      desc: 'فحص 12 مساراً حساساً ومقارنتها مع 22 توقيعاً خبيثاً (مثل eval، base64_decode، shell_exec) مع تصنيف حسب الخطورة. يكتشف الشلز والكود المشبوه المخفي في الموقع.'
    },
    {
      icon: Database,
      title: 'فحص الإعدادات والضبط (Misconfigurations)',
      desc: 'تدقيق شامل للإعدادات: كشف استعراض المجلدات (Directory Listing)، رصد ملفات السجل المكشوفة (Debug/Error Logs)، تحليل الترويسات المفقودة، وحساب درجة أمان شاملة من 100 مع توصيات الإصلاح.'
    },
    {
      icon: FileSearch,
      title: 'فحص المسارات والملفات الحساسة (File Scanner)',
      desc: 'فحص أكثر من 146 مساراً حساساً (مثل wp-config.php، .env، phpinfo) مع تصنيف حسب الخطورة. يكشف الملفات المكشوفة التي قد تؤدي إلى تسريب بيانات الموقع.'
    },
    {
      icon: Globe,
      title: 'فحص واجهات REST API',
      desc: 'استكشاف 31 نطاقاً من واجهات REST API (Core، WooCommerce، ACF، Jetpack، وغيرها)، مع تحليل النطاقات المفتوحة وتقييم كشف المعلومات الحساسة.'
    },
    {
      icon: Layers,
      title: 'الزواحف الذكي (JSON Crawler)',
      desc: 'زاحف متكرر يبدأ من 50+ نقطة نهاية API ويكتشف الروابط الجديدة في استجابات JSON. يصل إلى عمق 5 و500 رابط، ويكشف عن واجهات برمجة تطبيقات مخفية.'
    },
    {
      icon: UserCheck,
      title: 'استخراج المستخدمين (User Enumeration)',
      desc: 'استخدام REST API وطريقة Author ID لاستخراج أسماء المستخدمين، مع تحليل الأدوار (مثل Administrator). يقيّم مدى كشف المعلومات عن المستخدمين.'
    },
    {
      icon: HardDrive,
      title: 'فحص النسخ الاحتياطية والملفات الحساسة',
      desc: 'فحص 52 مساراً للنسخ الاحتياطية (wp-config.php.bak، .env.local، SQL dumps، أرشيفات ZIP) والكشف عن أي تسريب للملفات الحساسة.'
    },
    {
      icon: Network,
      title: 'فحص الإضافات (Plugin Scanner)',
      desc: 'كشف أكثر من 80 إضافة شائعة (مثل Elementor، WooCommerce، Yoast) عبر فحص readme.txt والملفات الرئيسية، مع استخراج الإصدارات لتحديد الثغرات المعروفة.'
    },
    {
      icon: Cloud,
      title: 'تحليل البنية التحتية (WAF/CDN Detection)',
      desc: 'كشف وجود جدران حماية (Cloudflare، Sucuri، Wordfence) وشبكات توصيل المحتوى (CDN)، مع تحليل استجابات الخادم لتحديد نوع الحماية.'
    }
  ];

  // إحصائيات رقمية لتوضيح القوة
  const STATS = [
    { label: 'مسارات الفحص', value: '1600+' },
    { label: 'وحدة فحص متقدمة', value: '13' },
    { label: 'إضافة مدعومة', value: '80+' },
    { label: 'طريقة XML-RPC', value: '80' },
    { label: 'توقيع خبيث', value: '22' },
    { label: 'سرعة الفحص', value: 'صاروخية' }
  ];

  // ميزات تقنية متقدمة
  const TECH_FEATURES = [
    {
      icon: Binary,
      title: 'مكتوبة بـ Rust',
      desc: 'لغة Rust توفر أداءً فائقاً، أماناً في التعامل مع الذاكرة، وسرعة تنفيذ لا تضاهى، مما يجعل الأداة خفيفة وسريعة حتى مع آلاف الطلبات.'
    },
    {
      icon: Eye,
      title: 'قدرات التخفي (Stealth)',
      desc: '10 وحدات للتخفي: تدوير الـ User-Agent (40+ وكيل)، بصمة TLS تحاكي المتصفحات، بروكسيات دائرية، تأخيرات ذكية، وكشف ومنع الحظر.'
    },
    {
      icon: Workflow,
      title: 'محرك الاستدلال الذكي',
      desc: 'يحلل النتائج مجتمعة ويستنتج 12 فئة من المعلومات (الإصدارات، الإضافات، كشف المستخدمين، الثغرات) مع توصيات علاجية دقيقة.'
    },
    {
      icon: Gauge,
      title: 'أداء محسّن',
      desc: 'طلبات متزامنة (Concurrent Requests) مع تحكم في المهلة، وإعادة المحاولة الذكية، واستخدام غير متزامن (async) لتسريع الفحص.'
    },
    {
      icon: Shield,
      title: 'قاعدة بيانات ثغرات محدثة',
      desc: 'قاعدة بيانات تحتوي على أكثر من 1300 مسار وثغرة، تُحدَّث دورياً عبر الأمر --update، لضمان تغطية أحدث الثغرات.'
    },
    {
      icon: Zap,
      title: 'دعم متعدد المنصات',
      desc: 'يعمل على Windows، macOS، و Linux، مع أوامر تثبيت بسيطة وسريعة، ويتم توزيعه كملف ثنائي واحد (Single Binary).'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white pb-24 overflow-hidden">
      
      {/* =========================================
          حقن الـ SEO والـ Schema
          ========================================= */}
      <Helmet>
        <title>UWPS | الفاحص الأمني المتقدم لـ WordPress</title>
        <meta name="description" content="أداة فحص أمني احترافية مبنية بـ Rust لاكتشاف ثغرات ووردبريس، فحص الإضافات، وتخطي جدران الحماية WAF. احصل على رخصتك المجانية الآن." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      {/* =========================================
          1. Hero Section
          ========================================= */}
      <section className="relative pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-uboor-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-uboor-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* زر الرجوع */}
        <div className={`relative z-20 mb-8 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-uboor-blue font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="text-sm">الرجوع للمنتجات</span>
          </Link>
        </div>

        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* الشعار */}
            <div className="flex items-center gap-4 mb-6">
              <img src="/UWPSR.png" alt="UWPS Logo" className="w-16 h-16 object-contain rounded-2xl bg-slate-900 p-2 shadow-md border border-slate-800" />
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-xs shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  رخصة مجانية لفترة محدودة
                </div>
                <div className="text-slate-500 font-mono text-xs mt-1">Rust-Powered CLI Security Scanner</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
              الفاحص الأمني المتقدم <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-uboor-orange via-uboor-cyan to-uboor-blue">لـ WordPress</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-r-4 border-uboor-blue pr-4 max-w-xl">
              أداة احترافية مبنية بلغة <strong>Rust</strong> بالكامل، تفحص مواقع ووردبريس بعمق لا مثيل له. 
              تغطي أكثر من <strong>13 وحدة فحص</strong> متقدمة، وتكتشف الثغرات بدقة عالية، 
              مع قدرات <strong>تخفي</strong> لتجاوز جدران الحماية، ومحرك <strong>استدلال ذكي</strong> 
              يقدم توصيات فورية لإصلاح الثغرات. 
              <span className="block mt-2 text-uboor-blue font-bold">الأداة المفضلة للمختبرين الأمنيين المحترفين.</span>
            </p>
            
            {/* أوامر التثبيت السريع */}
            <div className="w-full bg-[#0B1121] rounded-2xl p-5 border border-slate-800 shadow-xl text-left" dir="ltr">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-uboor-cyan" />
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">أمر التثبيت السريع</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>

              {/* ويندوز */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mb-1">
                  <span>Windows (PowerShell):</span>
                  <button 
                    onClick={() => handleCopy(winCommand, 'win')}
                    className="text-uboor-cyan hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedWin ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedWin ? 'تم النسخ!' : 'نسخ'}
                  </button>
                </div>
                <code className="block bg-slate-900 text-emerald-400 p-2.5 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800">
                  {winCommand}
                </code>
              </div>

              {/* ماك / لينيكس */}
              <div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mb-1">
                  <span>macOS / Linux (Bash):</span>
                  <button 
                    onClick={() => handleCopy(unixCommand, 'unix')}
                    className="text-uboor-cyan hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedUnix ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedUnix ? 'تم النسخ!' : 'نسخ'}
                  </button>
                </div>
                <code className="block bg-slate-900 text-emerald-400 p-2.5 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800">
                  {unixCommand}
                </code>
              </div>
            </div>
          </div>
          
          {/* الجانب الأيسر: ملخص الكفاءة التقنية */}
          <div className="w-full lg:w-2/5">
            <div className="bg-[#0B1121] rounded-[2.5rem] p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-uboor-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-uboor-blue flex items-center justify-center text-white font-black">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">UWPS Core Engine</h3>
                    <p className="text-slate-400 text-xs font-mono">Pure Rust Binary</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold font-mono">
                  نشط
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm font-medium">
                <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>فحص دقيق لأكثر من <strong>1600+</strong> مسار وثغرة</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>13 وحدة</strong> فحص متقدمة (XML-RPC، API، الملفات، الإضافات...)</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>قدرات <strong>تخفي</strong> لتجاوز الجدران النارية وأنظمة الكشف</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>محرك <strong>استدلال ذكي</strong> لتقديم تقارير وتوصيات المعالجة</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>أنظمة التشغيل: Windows / macOS / Linux</span>
                <span className="text-uboor-cyan">سطر الأوامر (CLI)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. إحصائيات القوة
          ========================================= */}
      <section className="py-12 bg-gradient-to-r from-uboor-blue/5 to-uboor-orange/5 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-black text-uboor-blue">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. تفاصيل قدرات الفحص المتقدمة
          ========================================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              قدرات فحص <span className="text-uboor-blue">هندسية فائقة الدقة</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              تتعمق الأداة في كل زاوية من موقعك، وتكشف الثغرات التي قد تغفل عنها الأدوات التقليدية. 
              كل وحدة فحص مصممة بدقة لاستخراج أقصى قدر من المعلومات الأمنية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANCED_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-7 h-7 text-uboor-blue" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{mod.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          4. التقنيات المتقدمة - لماذا الأداة فريدة؟
          ========================================= */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              لماذا <span className="text-uboor-blue">UWPS</span> هي الأفضل؟
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              مزيج فريد من الأداء الصاروخي، التخفي الذكي، والتحليل العميق يجعلها الأداة المثالية لاختبار الاختراق الاحترافي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-uboor-blue/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-uboor-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          5. ماذا تقدم الأداة؟ (قائمة نقاط القوة)
          ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                ماذا تقدم لك <span className="text-uboor-blue">UWPS</span>؟
              </h2>
              <ul className="space-y-4 text-slate-700 text-base font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>كشف شامل للثغرات:</strong> تغطي أكثر من 1600 مسار وثغرة معروفة، بما في ذلك الملفات الحساسة، النسخ الاحتياطية، وواجهات API.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>تحليل الإضافات:</strong> تحديد أكثر من 80 إضافة شائعة مع استخراج الإصدارات للكشف عن الثغرات المعروفة.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>فحص XML-RPC:</strong> اختبار 80 دالة لتحديد ما إذا كان الموقع معرضاً لهجمات الحجب أو التخمين عبر XML-RPC.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>تقييم الحماية من Brute-Force:</strong> محاكاة هجمات تخمين كلمات المرور لتقييم فعالية الحماية الحالية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>تحليل الترويسات الأمنية:</strong> تقييم 18 مساراً مختلفاً وتقديم درجة أمان لكل صفحة مع توصيات لتحسينها.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>محرك استدلال ذكي:</strong> يجمع النتائج من جميع الوحدات ويستنتج 12 فئة من المعلومات الأمنية مع خطوات علاجية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>التخفي التام:</strong> 10 وحدات للتخفي (تدوير الـ User-Agent، بصمة TLS، بروكسيات، تأخيرات ذكية) تجعل الفحص غير قابل للكشف.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>أداء خارق:</strong> مكتوبة بلغة Rust مع طلبات متزامنة وتأخيرات محسوبة، مما يضمن سرعة فائقة حتى مع المواقع الكبيرة.</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0B1121] rounded-3xl p-8 text-white shadow-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-uboor-cyan" />
                <h3 className="text-2xl font-black">ماذا بعد الفحص؟</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                بعد انتهاء الفحص، تحصل على تقرير مفصل يحتوي على:
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>قائمة بالثغرات مصنفة حسب الخطورة (حرجة، عالية، متوسطة، منخفضة).</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>توصيات محددة لإصلاح كل ثغرة.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>تحليل للإضافات المثبتة وإصداراتها.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>تقييم أمان عام للموقع (درجة من 100).</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>قائمة بواجهات API المكشوفة والمستخدمين المحتملين.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. اشتراك Pro (Free License)
          ========================================= */}
      <section className="py-24 bg-[#0B1121] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-uboor-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-sm backdrop-blur-md">
            <Zap className="w-4 h-4" />
            عرض خاص ومحدود
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
            احصل على ترخيصك الاحترافي لـ <span className="text-transparent bg-clip-text bg-gradient-to-l from-uboor-orange via-uboor-cyan to-uboor-blue">UWPS</span>
          </h2>
          
          <p className="text-lg text-slate-300 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            استمتع بتحديثات دورية لقاعدة بيانات الثغرات، ودعم فني متكامل، وترخيص مرن يضمن لك أقصى درجات الكفاءة والأمان.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 max-w-md mx-auto shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-uboor-orange text-slate-900 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              Pro License
            </div>

            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-black text-emerald-400 block mb-2">مجاناً</span>
              <span className="text-sm font-bold text-slate-400 block">لفترة محدودة (ترخيص صالح لشهر)</span>
            </div>

            <ul className="space-y-4 text-right mb-10 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>تحديثات قاعدة البيانات (`--update`) فورية</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>دعم كامل لكافة وحدات الفحص والتخفي المتقدمة</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>تفعيل فوري ودعم فني مستمر</span>
              </li>
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-gradient-to-l from-uboor-blue to-uboor-cyan text-white font-black rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
            >
              اطلب رخصتك المجانية الآن
            </button>

          </div>
        </div>
      </section>

      {/* =========================================
          7. Checkout Modal (بواسطة Portal وبدون مرفقات)
          ========================================= */}
      <Portal>
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 font-cairo">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
                onClick={() => !loading && setIsModalOpen(false)}
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 z-10 max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => !loading && setIsModalOpen(false)}
                  className="absolute top-6 left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="bg-[#0B1121] p-8 text-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-uboor-cyan/20 rounded-full blur-2xl pointer-events-none"></div>
                  <Server className="w-12 h-12 text-uboor-cyan mx-auto mb-3" />
                  <h3 className="text-2xl font-black mb-1">طلب ترخيص UWPS</h3>
                  <p className="text-slate-400 text-sm font-medium">الترخيص: <span className="text-emerald-400 font-bold">مجاني (صالح لمدة شهر)</span></p>
                </div>

                <div className="p-8">
                  {success ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                      <h4 className="text-xl font-bold text-slate-900 mb-2">تم استلام طلبك بنجاح!</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        سيتم إرسال مفتاح الترخيص المجاني (الصالح لمدة شهر) تلقائياً إلى بريدك الإلكتروني الذي قمت بتسجيله ({email}) خلال وقت قصير.
                      </p>
                      <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">
                        حسناً، شكراً لك
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      
                      {error && (
                        <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-sm font-bold flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 shrink-0" /><span>{error}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">الاسم الكامل</label>
                          <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="أدخل اسمك هنا" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-uboor-cyan transition-colors" 
                            required 
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">البريد الإلكتروني (لاستلام المفتاح)</label>
                          <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="name@example.com" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-uboor-cyan transition-colors" 
                            required 
                          />
                        </div>

                        <button 
                          type="submit" 
                          disabled={loading} 
                          className="w-full py-4 bg-gradient-to-l from-uboor-blue to-uboor-cyan text-white font-black rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>جاري إرسال الطلب...</span>
                            </>
                          ) : (
                            <span>اطلب الترخيص المجاني</span>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>

    </div>
  );
}