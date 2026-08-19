import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Lock, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  Clock,
  Database,
  Sparkles,
  ArrowDownUp,
  Keyboard,
  Layers,
  Code2,
  Server,
  X,
  Loader2,
  AlertCircle,
  PhoneCall,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Portal from '../../components/Portal'; 

export default function UrmProduct() {
  const [isMounted, setIsMounted] = useState(false);
  const [copiedUnix, setCopiedUnix] = useState(false);

  // حالات النافذة المنبثقة للطلب (Modal States)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState(null); // تحديث: حالة صورة الوصل
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(unixCommand);
    setCopiedUnix(true);
    setTimeout(() => setCopiedUnix(false), 2000);
  };

  const unixCommand = "curl -sSL https://urm.uboor.org/install.sh | sudo bash";

  // معالجة إرسال طلب الاشتراك مع صورة الوصل
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !receipt) {
      setError('الرجاء تعبئة جميع الحقول وإرفاق صورة وصل الدفع.');
      return;
    }

    setLoading(true);
    setError('');

    // استخدام FormData لإرسال الملفات
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('receipt', receipt);

    try {
      const response = await fetch('https://urm.uboor.org/api/request', {
        method: 'POST',
        body: formData // إرسال الفورم داتا مباشرة بدون تحديد Content-Type
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

  const MODULES = [
    {
      icon: Cpu,
      title: 'مجسات eBPF العميقة',
      desc: 'تعمل عبر 10 مجسات (2 kprobes, 5 libc uprobes, 3 SSL uprobes) لالتقاط الطلبات من مستوى النواة (Kernel-Level) مثل sendto و connect دون التأثير على الأداء.'
    },
    {
      icon: Lock,
      title: 'فك تشفير الطلبات (HTTPS/SSL)',
      desc: 'اعتراض وقراءة طلبات HTTPS المشفرة عبر حقن مجسات (uprobes) في دوال مكتبة OpenSSL (SSL_read, SSL_write) قبل خروجها للشبكة.'
    },
    {
      icon: Layers,
      title: 'تحليل HTTP متقدم',
      desc: 'إعادة بناء الروابط (URLs) بالكامل عبر ترويسة Host، واستعراض كامل للترويسات (Headers)، وجسم الطلب/الاستجابة (Body) باستخدام مكتبة httparse.'
    },
    {
      icon: ArrowDownUp,
      title: 'فصل وتوجيه الطلبات',
      desc: 'تمييز ذكي للطلبات الصادرة (Outbound ->) والواردة (Inbound <-)، مع إمكانية الفلترة السريعة (a/w/e) وعرض عناوين ومنافذ المصدر والوجهة.'
    },
    {
      icon: Clock,
      title: 'تحليل الأداء والزمن',
      desc: 'حساب دقيق لزمن الاستجابة الأولي (TTFB) والمدة الإجمالية للطلبات، مع تصنيف لوني لأكواد الحالة (أخضر لـ 2xx، أحمر لـ 5xx، الخ).'
    },
    {
      icon: Database,
      title: 'سجل تاريخي دائم (Persistence)',
      desc: 'حفظ مستمر لكافة الطلبات المكتملة في ملف ~/.urm/history.jsonl، مما يسمح باسترجاع الجلسات السابقة فور إعادة تشغيل الأداة.'
    }
  ];

  const PROBES = [
    { target: '__sys_connect', type: 'kprobe', purpose: 'Capture socket connections (IP + port)' },
    { target: '__sys_sendto', type: 'kprobe', purpose: 'Capture outbound sendto() calls' },
    { target: 'recv (libc)', type: 'uprobe / uretprobe', purpose: 'Capture and read recv() data' },
    { target: 'read (libc)', type: 'uprobe / uretprobe', purpose: 'Capture and read read() data' },
    { target: 'write (libc)', type: 'uprobe', purpose: 'Capture write() calls' },
    { target: 'SSL_write (libssl)', type: 'uprobe', purpose: 'Capture HTTPS outgoing data' },
    { target: 'SSL_read (libssl)', type: 'uprobe / uretprobe', purpose: 'Capture and read HTTPS incoming data' }
  ];

  const SHORTCUTS = [
    { key: 'Left / Right', action: 'التبديل بين قائمة الطلبات ولوحة التفاصيل' },
    { key: 'j / k', action: 'التنقل لأعلى/لأسفل في القوائم' },
    { key: 'Up / Down', action: 'التمرير داخل التفاصيل' },
    { key: 'a / w / e', action: 'فلترة الطلبات (الكل / صادر / وارد)' },
    { key: 'l', action: 'إظهار/إخفاء لوحة السجلات (Logs)' },
    { key: 'Space', action: 'إيقاف/استئناف المراقبة مؤقتاً' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-blue-500 selection:text-white pb-24 overflow-hidden">
      
      {/* =========================================
          1. Hero Section 
          ========================================= */}
      <section className="relative pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className={`relative z-20 mb-8 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span className="text-sm">الرجوع للمنتجات</span>
          </Link>
        </div>

        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-right">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center w-20 h-20">
                <img src="/URM.png" alt="URM Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  eBPF Network Monitor
                </div>
                <div className="text-slate-500 font-mono text-xs mt-1">Linux Kernel-Space Tracer</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
              Uboor Requests <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 via-blue-600 to-indigo-700">Monitor (URM)</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-r-4 border-blue-600 pr-4">
              أداة مراقبة شبكية متقدمة مبنية بلغة Rust تستخدم تقنية eBPF لالتقاط كافة طلبات HTTP و HTTPS على مستوى النواة، وعرضها في واجهة طرفية تفاعلية بأسلوب (TUI).
            </p>
            
            <div className="w-full bg-[#0B1121] rounded-2xl p-5 border border-slate-800 shadow-xl text-left mb-4" dir="ltr">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Linux Install (Root Required)</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono mb-1">
                  <span>Kernel 5.8+ (Bash):</span>
                  <button onClick={handleCopy} className="text-blue-400 hover:underline flex items-center gap-1 cursor-pointer">
                    {copiedUnix ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedUnix ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <code className="block bg-slate-900 text-emerald-400 p-2.5 rounded-xl text-xs font-mono overflow-x-auto border border-slate-800">
                  {unixCommand}
                </code>
              </div>
            </div>

          </div>
          
          {/* صورة الواجهة */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-[#0B1121] rounded-[1.5rem] p-3 shadow-2xl border border-slate-800">
              <div className="flex gap-2 mb-3 px-2 pt-1">
                 <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <img 
                src="/urmpic.png" 
                alt="URM Ratatui Interface" 
                className="w-full h-auto rounded-xl border border-slate-800/50 shadow-inner"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. Features 
          ========================================= */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              قدرات مراقبة شبكية <span className="text-blue-600">غير مسبوقة</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              تم بناء URM بهندسة Userspace Bridge تنقل البيانات من الـ RingBuf في النواة (Kernel) إلى مكتبة Ratatui (TUI) بسلاسة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-7 h-7 text-blue-600" />
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
          3. Technical Details
          ========================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Probes Table */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-black text-slate-900">مجسات النواة (eBPF Probes)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left font-mono text-slate-600 border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-900 border-b border-slate-200 uppercase text-xs tracking-wider">
                      <th className="py-3 px-4 rounded-tl-lg">Target</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4 rounded-tr-lg text-right">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROBES.map((probe, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 font-bold text-blue-600">{probe.target}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-slate-100 rounded text-[10px] uppercase font-bold">{probe.type}</span>
                        </td>
                        <td className="py-3 px-4 text-right font-cairo font-medium">{probe.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shortcuts */}
            <div className="bg-[#0B1121] rounded-[2rem] p-8 shadow-xl border border-slate-800 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Keyboard className="w-8 h-8 text-sky-400" />
                <h3 className="text-2xl font-black">اختصارات لوحة المفاتيح (TUI)</h3>
              </div>
              <ul className="space-y-4">
                {SHORTCUTS.map((shortcut, idx) => (
                  <li key={idx} className="flex items-center justify-between border-b border-slate-800/50 pb-3">
                    <span className="text-sm font-medium text-slate-300 text-right">{shortcut.action}</span>
                    <kbd className="px-3 py-1 bg-slate-800 text-emerald-400 border border-slate-700 rounded-lg text-xs font-mono font-bold whitespace-nowrap shadow-[0_2px_0_0_rgba(51,65,85,1)]">
                      {shortcut.key}
                    </kbd>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. Subscription Section (5 JOD)
          ========================================= */}
      <section className="py-24 bg-[#0B1121] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-blue-400 font-bold text-sm backdrop-blur-md">
            <Zap className="w-4 h-4" />
            اشتراك احترافي للسيرفرات
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
            احصل على ترخيص السيرفر لـ <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-blue-600">URM</span>
          </h2>
          
          <p className="text-lg text-slate-300 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            راقب كافة الطلبات الخفية الصادرة من تطبيقاتك، واكتشف أي محاولات تسريب بيانات أو اتصالات مشبوهة فور حدوثها.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 max-w-md mx-auto shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Server License
            </div>

            <div className="text-4xl sm:text-5xl font-black text-white mb-2 font-mono">
              5 <span className="text-lg font-bold text-slate-400">دينار / شهرياً</span>
            </div>
            <p className="text-slate-400 text-xs mb-8">ترخيص لكل سيرفر (Node)، إمكانية الإلغاء في أي وقت.</p>

            <ul className="space-y-4 text-right mb-10 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>تحليل غير محدود للـ HTTP/HTTPS</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>دعم فني لتركيب الأداة على لينكس</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>تحديثات مستمرة لمجسات الـ eBPF</span>
              </li>
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg hover:bg-blue-500 hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              طلب ترخيص السيرفر (5 د.أ)
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          5. Checkout Modal (بواسطة Portal مع رفع الملفات)
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
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>
                  <Server className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-2xl font-black mb-1">طلب ترخيص URM</h3>
                  <p className="text-slate-400 text-sm font-medium">الاشتراك الشهري: <span className="text-blue-400 font-bold">5 دنانير أردنية</span></p>
                </div>

                <div className="p-8">
                  {success ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                      <h4 className="text-xl font-bold text-slate-900 mb-2">تم إرسال طلبك بنجاح!</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        سيقوم الفريق بمراجعة وصل الدفع الذي أرفقته. بمجرد الاعتماد، سيتم إرسال مفتاح الترخيص تلقائياً إلى بريدك الإلكتروني ({email}).
                      </p>
                      <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">
                        حسناً، شكراً لك
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-sm">
                        <div className="flex items-center gap-2 font-black mb-1">
                          <PhoneCall className="w-4 h-4 text-amber-600" />
                          <span>تعليمات الدفع عبر زين كاش:</span>
                        </div>
                        <p className="text-xs text-amber-800 leading-relaxed mb-2">
                          يرجى تحويل مبلغ <strong>5 دنانير</strong> إلى محفظة زين كاش الخاصة بالشركة على الرقم التالي:
                        </p>
                        <div className="bg-white p-2.5 rounded-xl border border-amber-200 text-center font-mono font-bold text-slate-900 text-base tracking-wider" dir="ltr">
                          +962 785290948
                        </div>
                      </div>

                      {error && (
                        <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-sm font-bold flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 shrink-0" /><span>{error}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">الاسم الكامل</label>
                          <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="أدخل اسمك هنا" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
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
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                            required 
                          />
                        </div>

                        {/* حقل رفع صورة الوصل الجديد */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">صورة وصل الدفع (إيصال التحويل)</label>
                          <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="flex flex-col items-center justify-center pt-4 pb-4 px-4 text-center">
                              <Upload className="w-6 h-6 text-slate-400 mb-1" />
                              <p className="text-xs text-slate-600 font-medium">
                                {receipt ? <span className="text-emerald-600 font-bold">{receipt.name}</span> : "انقر هنا لرفع صورة الوصل (PNG, JPG)"}
                              </p>
                            </div>
                            <input 
                              type="file" 
                              accept="image/*" 
                              onChange={(e) => setReceipt(e.target.files[0])} 
                              className="hidden" 
                              required 
                            />
                          </label>
                        </div>

                        <button 
                          type="submit" 
                          disabled={loading} 
                          className="w-full py-4 bg-blue-600 text-white font-black rounded-xl shadow-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>جاري إرسال الطلب...</span>
                            </>
                          ) : (
                            <span>تأكيد وإرسال الطلب</span>
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