import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// === قاعدة بيانات المنتجات (لم تتغير) ===
const PRODUCTS_DATA = [
  {
    id: 'wa-collector',
    title: 'WhatsApp Collector',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: MessageCircle,
    color: 'text-emerald-500',
    bgIcon: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]',
    desc: 'أداة سكرابينج متطورة لواتساب. تقوم بسحب بيانات جهات الاتصال من أي قائمة مرئية عبر التمرير التلقائي وتصديرها بضغطة زر.',
    features: ['تصدير الأرقام في ملفات منظمة', 'واجهة منبثقة لإدارة البيانات', 'استخراج صور الحسابات', 'تصنيف الأرقام'],
    link: '/products/wacollector'
  },
  {
    id: 'ai-widget',
    title: 'Uboor AI Widget',
    category: 'saas',
    categoryLabel: 'منصة ذكاء اصطناعي',
    icon: Bot,
    color: 'text-sky-500',
    bgIcon: 'bg-sky-500/10',
    borderHover: 'hover:border-sky-500/30',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]',
    desc: 'منصة متكاملة لتخصيص وكيل ذكاء اصطناعي (AI Chatbot) خاص بعملك. درّبه على بيانات متجرك وضمنّه في موقعك بنسخ كود بسيط.',
    features: ['تضمين بكود بسيط', 'تدريب مخصص لعملك', 'ردود آلية ذكية', 'باقات مرنة'],
    link: '/contact'
  },
  {
    id: 'data-vault',
    title: 'Data Vault',
    category: 'opensource',
    categoryLabel: 'برمجيات مفتوحة',
    icon: Database,
    color: 'text-orange-500',
    bgIcon: 'bg-orange-500/10',
    borderHover: 'hover:border-orange-500/30',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]',
    desc: 'مخزنة بيانات لامركزية مشفرة بالكامل. تعتمد على تشفير البيانات وتوزيعها (0101) عبر بروتوكولاتنا الخاصة دون تخزين محلي.',
    features: ['مساحة تخزين لا نهائية', 'تشفير عالي ولامركزية', 'لا تخزين محلي', 'بروتوكول الحرية الخاص بنا'],
    action: 'modal'
  },
  {
    id: 'seo-monster',
    title: 'SEO Monster',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: Search,
    color: 'text-violet-500',
    bgIcon: 'bg-violet-500/10',
    borderHover: 'hover:border-violet-500/30',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]',
    desc: 'المُحلل الشامل لأي صفحة ويب. إضافة متطورة تعمل بالكامل داخل جهازك لتقديم فحص جراحي وعميق للسيو.',
    features: ['محاكي الظهور (SERP)', 'تحليل نية البحث', 'قياس الأداء الفعلي', 'تصدير لملف Excel'],
    link: '/products/seo-monster'
  },
  {
    id: 'auto-capture',
    title: 'Auto Capture',
    category: 'extension',
    categoryLabel: 'إضافة متصفح',
    icon: Camera,
    color: 'text-slate-700',
    bgIcon: 'bg-slate-200/50',
    borderHover: 'hover:border-slate-400/30',
    glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(71,85,105,0.3)]',
    desc: 'أداة أتمتة لأخذ لقطات شاشة متتابعة. مثالية لأرشفة الكتب الإلكترونية والمقالات الطويلة وحفظها في مجلد واحد.',
    features: ['أخذ لقطات شاشة آلياً', 'تجميع وحفظ في مجلد', 'توفير وقت الأرشفة', 'لا تستهلك الموارد'],
    link: '/products/auto-capture'
  }
];

const FILTERS = [
  { id: 'all', label: 'الكل' },
  { id: 'extension', label: 'إضافات المتصفح' },
  { id: 'saas', label: 'الذكاء الاصطناعي' },
  { id: 'opensource', label: 'مفتوحة المصدر' }
];

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white relative overflow-hidden">
      
      {/* 🌟 خلفيات متحركة ببطء (Framer Motion) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-24 relative z-10">
        
        {/* =========================================
            الترويسة (Header) بتأثيرات دخول
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white shadow-sm border border-slate-100 cursor-default"
          >
            <Blocks className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-bold text-slate-700">الإيكوسيستم الخاص بنا</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            منتجات صُممت <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              لتعزيز إنتاجيتك
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            نحن لا نقدم خدمات برمجية فحسب، بل نبني أدوات، إضافات متصفح، وأنظمة ذكاء اصطناعي نستخدمها نحن ونشاركها معك لتسريع أعمالك.
          </p>
        </motion.div>

        {/* =========================================
            نظام الفلترة (Interactive Tabs)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 w-fit mx-auto"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`relative px-6 py-2.5 rounded-full font-bold text-sm transition-colors duration-300 ${
                filter === item.id ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {/* 🌟 الزر النشط المنزلق (Magic Layout Animation) */}
              {filter === item.id && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-slate-900 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </motion.div>

        {/* =========================================
            شبكة المنتجات (Animated Grid)
            ========================================= */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div 
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`bg-white rounded-[2rem] border border-slate-100 transition-all duration-300 flex flex-col h-full group overflow-hidden ${product.glow} ${product.borderHover}`}
                >
                  <div className="p-8 pb-6 border-b border-slate-50 relative overflow-hidden">
                    {/* تأثير دائري خفي يظهر عند التحويم */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
                    
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${product.bgIcon} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm`}>
                        <Icon className={`w-7 h-7 ${product.color}`} />
                      </div>
                      <span className="px-3 py-1 bg-white border border-slate-100 shadow-sm text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full font-mono">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <h3 className="relative z-10 text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">{product.title}</h3>
                    <p className="relative z-10 text-slate-600 text-sm leading-relaxed font-medium">
                      {product.desc}
                    </p>
                  </div>

                  <div className="p-8 pt-6 flex-1 flex flex-col bg-slate-50/50 group-hover:bg-transparent transition-colors duration-500 relative z-10">
                    <ul className="space-y-3 mb-8 flex-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${product.color} shrink-0`} />
                          <span className="text-sm font-bold text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* أزرار الإجراءات */}
                    {product.action === 'modal' ? (
                      <button 
                        onClick={() => setIsVaultModalOpen(true)}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all duration-300 border-2 bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1"
                      >
                        استكشف الأداة
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    ) : (
                      <Link 
                        to={product.link}
                        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all duration-300 border-2 hover:-translate-y-1 hover:shadow-lg ${
                          product.category === 'opensource'
                          ? 'bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                          : 'bg-slate-900 border-slate-900 text-white hover:bg-sky-500 hover:border-sky-500 hover:text-white'
                        }`}
                      >
                        استكشف الأداة
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
            قسم قريباً (Coming Soon)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[2.5rem] p-10 md:p-16 overflow-hidden text-center flex flex-col items-center justify-center shadow-2xl"
        >
          {/* تأثير شبكة خلفية متحركة */}
          <motion.div 
            animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at center, #0ea5e9 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />

          <div className="relative z-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-6"
            >
              <Server className="w-8 h-8 text-sky-400" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              واجهات برمجية <span className="text-sky-400">API's</span> <br className="hidden md:block"/> قادمة قريباً
            </h2>
            
            <p className="text-slate-400 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              نعمل حالياً على تجهيز بنية تحتية قوية لتوفير واجهات API برمجية لتتمكن من دمجها مباشرة في أنظمتك وتطبيقاتك.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white font-mono text-sm">
              <Code2 className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>IN_DEVELOPMENT...</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          نافذة Data Vault (Modal) بتأثيرات Framer Motion
          ========================================= */}
      <AnimatePresence>
        {isVaultModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsVaultModalOpen(false)}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100"
            >
              <button 
                onClick={() => setIsVaultModalOpen(false)}
                className="absolute top-6 left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-slate-900 p-10 md:p-12 relative overflow-hidden text-center rounded-t-[2.5rem]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md mb-6 relative z-10 shadow-lg">
                  <Database className="w-10 h-10 text-orange-400" />
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm relative z-10">
                  <ShieldAlert className="w-4 h-4" />
                  البرمجية تحت التطوير
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white relative z-10 mb-4">
                  Data Vault
                </h2>
                <p className="text-slate-400 font-medium relative z-10">
                  تعمل بناءً على <strong className="text-orange-400">"بروتوكول الحرية"</strong> الذي ابتكرته عُبور.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <p className="text-lg text-slate-700 leading-relaxed font-medium mb-10 text-center max-w-2xl mx-auto">
                  هذه البرمجية ليست مجرد أداة تخزين، بل هي ثورة تعتمد على اللامركزية التامة لتضمن أنه لا يمكن لأي كيان السيطرة على بياناتك.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Globe2, color: 'text-sky-500', title: 'لا مركزية تامة', desc: 'لا يوجد خادم مركزي يمتلك ملفاتك. أنت تتمتع بسيطرة كاملة.' },
                    { icon: Infinity, color: 'text-indigo-500', title: 'مساحة تخزين لا نهائية', desc: 'تتوزع بياناتك في شبكات موزعة لتوفر لك مساحة سحابية لا تنضب.' },
                    { icon: Lock, color: 'text-emerald-500', title: 'تشفير مطلق', desc: 'ضمان سلامة البيانات وحفظها في أمان تام دون قدرة أحد على معرفتها.' },
                    { icon: Server, color: 'text-orange-500', title: 'وصول آمن وسري', desc: 'ضمان الوصول إليها من أي مكان في العالم بكل سرية.' }
                  ].map((feat, i) => (
                    <motion.div key={i} whileHover={{ y: -5 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all">
                      <feat.icon className={`w-8 h-8 ${feat.color} mb-4`} />
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{feat.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <button 
                    onClick={() => setIsVaultModalOpen(false)}
                    className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg"
                  >
                    حسناً، فهمت الفكرة
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}