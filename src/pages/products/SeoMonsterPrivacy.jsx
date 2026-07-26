import { useEffect } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, ServerOff, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeoMonsterPrivacy() {
  // العودة لأعلى الصفحة عند التحميل
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-violet-500 selection:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        
        {/* زر الرجوع */}
        <Link 
          to="/products/seo-monster" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold transition-colors group mb-10 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 w-fit"
        >
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          الرجوع إلى صفحة الأداة
        </Link>

        {/* الترويسة */}
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-8">
          <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-violet-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">سياسة الخصوصية والإفصاحات</h1>
            <p className="text-slate-500 font-medium">الخاصة بإضافة Uboor SEO Monster</p>
          </div>
        </div>

        <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 leading-relaxed text-slate-700">
          
          {/* 1. الإقرارات الإلزامية */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-violet-600" />
              إقرارات سياسات تطوير البرامج (Chrome Web Store)
            </h2>
            <p className="mb-4 font-medium">نُقِرّ بأن الإفصاحات التالية صحيحة، ونلتزم بها التزاماً تاماً:</p>
            <ul className="space-y-4 font-medium bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2.5 shrink-0"></div>
                لا نبيع بيانات المستخدمين لأطراف ثالثة أو ننقلها لهم خارج إطار حالات الاستخدام المُتفَق عليها.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2.5 shrink-0"></div>
                لا نستخدم بيانات المستخدمين أو ننقلها لأغراض غير متعلّقة بالوظيفة الوحيدة والأساسية للعنصر.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2.5 shrink-0"></div>
                لا نستخدم أو ننقل بيانات المستخدمين لتحديد الأهلية الائتمانية أو لأغراض الإعارة.
              </li>
            </ul>
          </section>

          {/* 2. نوع البيانات المجمعة */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileCode className="w-6 h-6 text-violet-600" />
              طبيعة البيانات وآلية المعالجة
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">معلومات محتوى الموقع الإلكتروني</h3>
              <p className="mb-4">تقوم الإضافة بقراءة محتوى الصفحات المفتوحة (على سبيل المثال: النصوص، الصور، الروابط التشعّبية، والبيانات الهيكلية) بهدف تقديم تحليل جراحي لـ SEO الصفحة.</p>
              
              <div className="mt-4 p-5 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-bold flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 shrink-0 text-emerald-600" />
                <p className="leading-relaxed">
                  نحن لا نجمع أو نرسل أي شيء على الإطلاق! جميع عمليات الفحص واستخراج الروابط أو الصور أو الأخطاء تتم برمجياً ومعالجتها بالكامل محلياً داخل متصفحك (Client-Side). لا توجد خوادم خارجية تابعة لنا تستقبل أو تخزن هذه البيانات.
                </p>
              </div>
            </div>
          </section>

          {/* 3. الرمز المستضاف عن بعد */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ServerOff className="w-6 h-6 text-violet-600" />
              الرمز البرمجي المستضاف عن بُعد
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800">
                لا، لا نستخدم الرمز البرمجي المستضاف عن بُعد (Remote Hosted Code).
              </p>
              <p className="text-sm mt-2 text-slate-600">جميع السكربتات الخاصة بالتحليل مُدمجة بالكامل ضمن ملفات الإضافة الأساسية المرفوعة للمتجر.</p>
            </div>
          </section>

          {/* 4. تبرير الصلاحيات */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-violet-600" />
              التبرير المُفصّل للأذونات (Permissions)
            </h2>
            <p className="mb-6 font-medium">بسبب طبيعة أداة تحليل السيو التي تعمل على الصفحات الحية، نحتاج الأذونات التالية لضمان عمل الوظيفة الأساسية:</p>
            
            <div className="grid gap-5">
              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">سبب طلب activeTab</h3>
                  <code className="text-violet-600 text-xs font-bold bg-violet-50 px-2 py-1 rounded">activeTab</code>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  نحتاج إذن activeTab لكي تتمكن الإضافة من قراءة وفحص هيكل الصفحة (DOM) المفتوحة حالياً لاستخراج أخطاء الـ SEO والروابط والصور، ويحدث ذلك فقط عندما ينقر المستخدم صراحةً على أيقونة الإضافة لتشغيلها على هذه التبويبة.
                </p>
              </div>

              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">سبب طلب scripting</h3>
                  <code className="text-violet-600 text-xs font-bold bg-violet-50 px-2 py-1 rounded">scripting</code>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  نحتاج إذن scripting لحقن سكربت التحليل (Content Script) داخل صفحة الويب الحالية بهدف قراءة عناصر الميتا المخفية (Meta tags) وإحصاء الروابط وتقييم الأداء، لعرض التقرير للمستخدم في نافذة الإضافة دون مغادرة الصفحة.
                </p>
              </div>

              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">سبب طلب إذن المضيف</h3>
                  <code className="text-violet-600 text-xs font-bold bg-violet-50 px-2 py-1 rounded">*://*/*</code>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  بما أن هذه الأداة مخصصة لتحليل الـ SEO لأي موقع إلكتروني، فإنها تتطلب إذن المضيف الشامل (*://*/*) لتعمل على أي صفحة ويب يتصفحها المستخدم ويطلب تحليلها، ولا يمكن قصرها على نطاق موقع واحد فقط.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}