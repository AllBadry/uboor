import { useState, useEffect } from 'react';
import { 
  Camera, 
  MessageCircle, 
  Search, 
  Database, 
  Bot, 
  Blocks, 
  Code2, 
  ArrowUpRight,
  Server,
  CheckCircle2,
  X,
  ShieldAlert,
  Globe2,
  Lock,
  Infinity
} from 'lucide-react';
import { Link } from 'react-router-dom';

// === قاعدة بيانات المنتجات ===
const PRODUCTS_DATA = [
  {
    id: 'wa-collector',
    title: 'WhatsApp Collector',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: MessageCircle,
    color: 'emerald-500',
    bgLight: 'bg-emerald-50',
    desc: 'أداة سكرابينج متطورة لواتساب. تقوم بسحب بيانات جهات الاتصال من أي قائمة مرئية عبر التمرير التلقائي وتصديرها بضغطة زر.',
    features: [
      'تصدير الأرقام في ملفات منظمة',
      'واجهة منبثقة (Popup) لإدارة البيانات',
      'استخراج صور الحسابات وروابط المحادثة',
      'تصنيف الأرقام (دولي، أعمال، تحديد الدولة)'
    ],
    link: '/products/wacollector'
  },
  {
    id: 'ai-widget',
    title: 'Uboor AI Widget',
    category: 'saas',
    categoryLabel: 'منصة ذكاء اصطناعي',
    icon: Bot,
    color: 'uboor-cyan',
    bgLight: 'bg-sky-50',
    desc: 'منصة متكاملة لتخصيص وكيل ذكاء اصطناعي (AI Chatbot) خاص بعملك. درّبه على بيانات متجرك وضمنّه في موقعك بنسخ كود بسيط.',
    features: [
      'تضمين بكود بسيط (Snippet)',
      'تدريب مخصص على منتجاتك/خدماتك',
      'ردود آلية ذكية للمستخدمين',
      'باقات مرنة (مجانية ومدفوعة)'
    ],
    link: '/contact'
  },
  {
    id: 'data-vault',
    title: 'Data Vault',
    category: 'opensource',
    categoryLabel: 'برمجيات مفتوحة',
    icon: Database,
    color: 'uboor-orange',
    bgLight: 'bg-orange-50',
    desc: 'مخزنة بيانات لامركزية مشفرة بالكامل. تعتمد على تشفير البيانات وتوزيعها (0101) عبر بروتوكولاتنا الخاصة دون تخزين محلي.',
    features: [
      'مساحة تخزين لا نهائية',
      'تشفير عالي ولامركزية تامة',
      'لا يوجد تخزين محلي على الجهاز',
      'تعمل عبر بروتوكول الحرية الخاص بنا'
    ],
    action: 'modal' // خاصية جديدة لتحديد أن هذا المنتج يفتح Popup
  },
  {
    id: 'seo-monster',
    title: 'SEO Monster',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: Search,
    color: 'violet-500',
    bgLight: 'bg-violet-50',
    desc: 'المُحلل الشامل لأي صفحة ويب. إضافة متطورة (Zero-Cost Architecture) تعمل بالكامل داخل جهازك لتقديم فحص جراحي وعميق للسيو.',
    features: [
      'محاكي الظهور (SERP & Social Preview)',
      'تحليل نية البحث وقابلية القراءة',
      'قياس الأداء الفعلي (Core Web Vitals)',
      'تصدير تقرير شامل إلى ملف Excel'
    ],
    link: '/products/seo-monster'
  },
  {
    id: 'auto-capture',
    title: 'Auto Capture',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: Camera,
    color: 'slate-700',
    bgLight: 'bg-slate-100',
    desc: 'أداة أتمتة لأخذ لقطات شاشة (Screenshots) متتابعة. مثالية لأرشفة الكتب الإلكترونية والمقالات الطويلة وحفظها في مجلد واحد.',
    features: [
      'أخذ لقطات شاشة بالعدد المطلوب آلياً',
      'تجميع الصور وحفظها في مجلد واحد',
      'توفير وقت أرشفة المحتوى المرئي',
      'خفيفة ولا تستهلك موارد المتصفح'
    ],
    link: '/products/auto-capture'
  }
];

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false); // حالة النافذة المنبثقة

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white relative overflow-hidden">
      
      {/* إضاءات خلفية */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-uboor-cyan/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uboor-orange/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-24 relative z-10">
        
        {/* =========================================
            الترويسة (Header)
            ========================================= */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
            <Blocks className="w-4 h-4 text-uboor-cyan" />
            <span className="text-sm font-bold text-uboor-blue">الإيكوسيستم الخاص بنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            منتجات صُممت <br /> <span className="text-transparent bg-clip-text bg-gradient-mixed">لتعزيز إنتاجيتك</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            نحن لا نقدم خدمات برمجية فحسب، بل نبني أدوات، إضافات متصفح، وأنظمة ذكاء اصطناعي نستخدمها نحن ونشاركها معك لتسريع أعمالك.
          </p>
        </div>

        {/* =========================================
            نظام الفلترة (Filters)
            ========================================= */}
        <div className={`flex flex-wrap items-center justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { id: 'all', label: 'الكل' },
            { id: 'extension', label: 'إضافات المتصفح' },
            { id: 'saas', label: 'الذكاء الاصطناعي' },
            { id: 'opensource', label: 'مفتوحة المصدر' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                filter === item.id 
                ? 'bg-slate-900 text-white shadow-lg scale-105' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* =========================================
            شبكة المنتجات (Products Grid)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProducts.map((product, index) => {
            const Icon = product.icon;
            const delay = 300 + (index * 100); 

            return (
              <div 
                key={product.id}
                className={`bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group overflow-hidden`}
                style={{
                  opacity: isMounted ? 1 : 0,
                  transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${delay}ms`
                }}
              >
                <div className="p-8 pb-6 border-b border-slate-50">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${product.bgLight} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <Icon className={`w-7 h-7 text-${product.color}`} />
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
                      {product.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {product.desc}
                  </p>
                </div>

                <div className="p-8 pt-6 flex-1 flex flex-col bg-slate-50/50">
                  <ul className="space-y-3 mb-8 flex-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 text-${product.color} shrink-0`} />
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* إذا كان المنتج يمتلك action='modal' نفتح النافذة بدلاً من الرابط */}
                  {product.action === 'modal' ? (
                    <button 
                      onClick={() => setIsVaultModalOpen(true)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-colors border-2 bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      استكشف الأداة
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link 
                      to={product.link}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-colors border-2 ${
                        product.category === 'opensource'
                        ? 'bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                        : 'bg-slate-900 border-slate-900 text-white hover:bg-uboor-cyan hover:border-uboor-cyan hover:text-slate-900'
                      }`}
                    >
                      استكشف الأداة
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            قسم قريباً (Coming Soon - APIs)
            ========================================= */}
        <div className={`relative bg-slate-900 rounded-[2.5rem] p-10 md:p-16 overflow-hidden text-center flex flex-col items-center justify-center transition-all duration-1000 delay-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at center, var(--uboor-cyan) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-6">
              <Server className="w-8 h-8 text-uboor-cyan" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              واجهات برمجية <span className="text-uboor-cyan">API's</span> <br className="hidden md:block"/> قادمة قريباً
            </h2>
            
            <p className="text-slate-400 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              نعمل حالياً على تجهيز بنية تحتية قوية لتوفير واجهات API برمجية (مثل خدمات التحقق من البريد الإلكتروني وغيرها) لتتمكن من دمجها مباشرة في أنظمتك وتطبيقاتك.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white font-mono text-sm">
              <Code2 className="w-4 h-4 text-uboor-orange animate-pulse" />
              <span>IN_DEVELOPMENT...</span>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================
          نافذة Data Vault (Modal)
          ========================================= */}
      {isVaultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* خلفية معتمة تغلق النافذة عند النقر عليها */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsVaultModalOpen(false)}
          ></div>

          {/* محتوى النافذة المنبثقة */}
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-[fade-in_0.3s_ease-out] border border-slate-100">
            
            {/* زر الإغلاق */}
            <button 
              onClick={() => setIsVaultModalOpen(false)}
              className="absolute top-6 left-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* الهيدر الخاص بالنافذة */}
            <div className="bg-slate-900 p-10 md:p-12 relative overflow-hidden text-center rounded-t-[2.5rem]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-uboor-orange/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md mb-6 relative z-10 shadow-lg">
                <Database className="w-10 h-10 text-uboor-orange" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-uboor-orange/20 border border-uboor-orange/30 text-orange-400 font-bold text-sm relative z-10">
                <ShieldAlert className="w-4 h-4" />
                البرمجية تحت التطوير
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white relative z-10 mb-4">
                Data Vault
              </h2>
              <p className="text-slate-400 font-medium relative z-10">
                تعمل بناءً على <strong className="text-uboor-orange">"بروتوكول الحرية"</strong> الذي ابتكرته عُبور.
              </p>
            </div>

            {/* تفاصيل الميزات */}
            <div className="p-8 md:p-12">
              <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10 text-center max-w-2xl mx-auto">
                هذه البرمجية ليست مجرد أداة تخزين، بل هي ثورة تعتمد على اللامركزية التامة لتضمن أنه لا يمكن لأي كيان السيطرة على بياناتك.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Globe2 className="w-8 h-8 text-uboor-blue mb-4" />
                  <h3 className="font-bold text-slate-900 text-lg mb-2">لا مركزية تامة</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    لا يوجد خادم مركزي يمتلك ملفاتك. أنت تتمتع بسيطرة كاملة دون تحكم الشركات الكبرى التقنية (Big Tech).
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Infinity className="w-8 h-8 text-uboor-cyan mb-4" />
                  <h3 className="font-bold text-slate-900 text-lg mb-2">مساحة تخزين لا نهائية</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    تتوزع بياناتك على شكل (0101) في شبكات موزعة لتوفر لك مساحة سحابية لا تنضب لتخزين كل ما تحتاجه.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Lock className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="font-bold text-slate-900 text-lg mb-2">تشفير مطلق وسلامة بيانات</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    تعتمد على آليات معقدة جداً وترويسات تشفير أمنية تضمن سلامة البيانات وحفظها في أمان تام دون قدرة أحد على معرفتها.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Server className="w-8 h-8 text-uboor-orange mb-4" />
                  <h3 className="font-bold text-slate-900 text-lg mb-2">وصول آمن وسري</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ضمان الوصول إليها من أي مكان في العالم بكل سرية، حيث تكون البيانات مجمعة ومتاحة لك أنت فقط.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <button 
                  onClick={() => setIsVaultModalOpen(false)}
                  className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-uboor-orange transition-colors"
                >
                  حسناً، فهمت الفكرة
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
}