import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  UserCheck, 
  FileText, 
  Mail, 
  ServerOff,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  // للعودة لأعلى الصفحة عند التحميل
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const POLICY_SECTIONS = [
    {
      id: 'data-collection',
      icon: UserCheck,
      title: '1. البيانات التي نجمعها',
      color: 'text-sky-500',
      bg: 'bg-sky-50',
      content: (
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
          <p>نحن نجمع فقط البيانات الضرورية لتقديم خدماتنا بأعلى جودة، وتشمل:</p>
          <ul className="list-disc list-inside pr-4 space-y-2 text-slate-700">
            <li><strong className="text-slate-900">بيانات الاشتراكات والتراخيص:</strong> عند طلبك لاشتراك مدفوع (مثل أداة UWPS Pro)، نقوم بجمع (الاسم الكامل، البريد الإلكتروني، وصورة إيصال الدفع عبر زين كاش).</li>
            <li><strong className="text-slate-900">بيانات التواصل:</strong> عند مراسلتك للدعم الفني، نحتفظ بنص الرسالة وبريدك الإلكتروني للرد عليك.</li>
            <li>نحن <span className="text-rose-500 font-bold">لا نجمع</span> أي بيانات بنكية أو بطاقات ائتمانية، حيث تتم الحوالات خارجياً عبر المحافظ الإلكترونية.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-usage',
      icon: Database,
      title: '2. كيف نستخدم بياناتك؟',
      color: 'text-uboor-cyan',
      bg: 'bg-cyan-50',
      content: (
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
          <p>تُستخدم البيانات التي نجمعها للأغراض التشغيلية التالية حصراً:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-uboor-cyan mt-1 shrink-0" />
              <span><strong>إصدار التراخيص:</strong> نستخدم بريدك الإلكتروني لإرسال مفاتيح التفعيل (JWT Keys) الخاصة ببرمجياتنا.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-uboor-cyan mt-1 shrink-0" />
              <span><strong>التحقق من الدفع:</strong> يتم مراجعة صور إيصالات الدفع يدوياً من قبل الإدارة لمطابقتها مع الطلبات.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-uboor-cyan mt-1 shrink-0" />
              <span><strong>الدعم الفني:</strong> لتحديد هويتك وتقديم المساعدة التقنية المرتبطة بحسابك.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'local-tools',
      icon: ServerOff,
      title: '3. إضافات المتصفح والأدوات المحلية',
      color: 'text-violet-500',
      bg: 'bg-violet-50',
      content: (
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
          <p>نفخر في عُبور ببرمجة أدوات تحترم خصوصيتك لأقصى حد:</p>
          <ul className="list-disc list-inside pr-4 space-y-2 text-slate-700">
            <li><strong className="text-slate-900">إضافات المتصفح (SEO Monster, WA Collector, Auto Capture):</strong> تعمل محلياً 100% (Client-Side). نحن لا نسجل نشاط تصفحك، ولا نجمع الأرقام المستخرجة، ولا نرسل صور الشاشة لخوادمنا.</li>
            <li><strong className="text-slate-900">برمجية UWPS:</strong> تعمل كأداة سطر أوامر (CLI) على جهازك. تقارير الفحص الأمني لمواقعك تُحفظ على جهازك فقط ولا يتم إرسالها إلينا. الاتصال الوحيد بخوادمنا يكون للتحقق من صلاحية الترخيص (License Check) وتحديث قاعدة البيانات.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      icon: Lock,
      title: '4. حماية ومشاركة البيانات',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      content: (
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
          <p>بياناتك أمانة. نحن نطبق بروتوكولات صارمة لحمايتها:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
              <span><strong>لا لبيع البيانات:</strong> نحن لا نبيع، نؤجر، أو نشارك بياناتك الشخصية مع أي أطراف ثالثة لأغراض تسويقية.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
              <span><strong>التشفير:</strong> تُحفظ مفاتيح التراخيص وارتباطاتها بالأجهزة (HWID) في قواعد بيانات مشفرة آمنة.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
              <span><strong>خدمات الطرف الثالث:</strong> نستخدم خدمات آمنة  فقط لغرض إرسال رسائل البريد الإلكتروني الآلية (مثل إرسال مفتاح الترخيص).</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'your-rights',
      icon: FileText,
      title: '5. حقوقك التقنية',
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      content: (
        <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
          <p>بصفتك مستخدماً لخدماتنا، يحق لك دائماً:</p>
          <ul className="list-disc list-inside pr-4 space-y-2 text-slate-700">
            <li>طلب نسخة من بياناتك المسجلة لدينا (مثل تفاصيل التراخيص المرتبطة ببريدك).</li>
            <li>طلب حذف إيصالات الدفع أو بياناتك الشخصية من خوادمنا (مما قد يؤدي لإيقاف التراخيص النشطة).</li>
            <li>إلغاء ارتباط ترخيصك (HWID Reset) في حال تغيير جهاز الحاسوب الخاص بك وفقاً لشروط الاستخدام.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white pb-24 relative overflow-hidden">
      
      {/* 🌟 تأثيرات الخلفية */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-100 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 pt-32 relative z-10">
        
        {/* =========================================
            الترويسة (Header)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-uboor-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            سياسة الخصوصية
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            نحن في <strong className="text-uboor-blue">عُبور (Uboor)</strong> نقدر ثقتك بنا. توضح هذه الوثيقة بشفافية تامة كيف نجمع بياناتك، لماذا نستخدمها، وكيف نحميها عند استخدامك لمنتجاتنا وتراخيصنا.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
            <Globe2 className="w-4 h-4" />
            تاريخ آخر تحديث: أغسطس 2026
          </div>
        </motion.div>

        {/* =========================================
            البنود (Sections)
            ========================================= */}
        <div className="space-y-8">
          {POLICY_SECTIONS.map((section, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={section.id} 
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-slate-100 group-hover:bg-uboor-cyan transition-colors duration-300"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${section.bg}`}>
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                </div>
                <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
              </div>
              
              <div className="pr-16">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            التواصل (Contact)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0B1121] rounded-[2.5rem] p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <Mail className="w-12 h-12 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-4">هل لديك استفسار حول الخصوصية؟</h2>
            <p className="text-slate-400 font-medium mb-8 max-w-xl mx-auto">
              فريقنا التقني مستعد دائماً للإجابة على أي أسئلة تتعلق ببياناتك، تراخيصك، أو آلية عمل برمجياتنا.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
            >
              تواصل معنا الآن
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}