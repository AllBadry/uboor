import { useEffect } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WaCollectorPrivacy() {
  // للعودة لأعلى الصفحة عند التحميل
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        
        {/* زر الرجوع */}
        <Link 
          to="/products/wacollector" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold transition-colors group mb-10"
        >
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          الرجوع إلى صفحة الأداة
        </Link>

        {/* الترويسة */}
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">سياسة الخصوصية</h1>
            <p className="text-slate-500 font-medium">الخاصة بإضافة Uboor WA Collector Pro</p>
          </div>
        </div>

        <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 leading-relaxed text-slate-700">
          
          {/* 1. التعهد الأساسي */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              تعهد استخدام البيانات
            </h2>
            <p className="mb-4">نحن في <strong>عُبور (Uboor)</strong> نلتزم التزاماً كاملاً بحماية خصوصية مستخدمينا. بناءً على سياسات متجر إضافات Chrome، نؤكد على الآتي:</p>
            <ul className="space-y-3 font-medium bg-slate-50 p-6 rounded-xl border border-slate-100">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                لا نبيع بيانات المستخدمين لأطراف ثالثة أو ننقلها لهم خارج إطار حالات الاستخدام المُتفَق عليها.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                لا نستخدم بيانات المستخدمين أو ننقلها لأغراض غير متعلّقة بالوظيفة الوحيدة والأساسية للإضافة (استخراج جهات الاتصال).
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                لا نستخدم أو ننقل بيانات المستخدمين لتحديد الأهلية الائتمانية أو لأغراض الإعارة إطلاقاً.
              </li>
            </ul>
          </section>

          {/* 2. ما هي البيانات المجمعة */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              طبيعة البيانات وآلية المعالجة (مهم جداً)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">1. معلومات تحديد الهوية الشخصية (الأسماء والأرقام)</h3>
                <p>تقوم الإضافة بقراءة (الاسم، رقم الهاتف، والوصف المرئي) من أرقام واتساب الظاهرة أمام المستخدم في المجموعات أو المحادثات.</p>
                <div className="mt-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 text-sm font-bold flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>تنويه هام: نحن لا نجمع هذه البيانات على خوادمنا (Servers). تتم عملية الاستخراج والمعالجة وتوليد ملف الـ CSV محلياً بالكامل (100% Client-Side) داخل متصفح المستخدم فقط.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">2. معلومات محتوى الموقع الإلكتروني</h3>
                <p>تقوم الإضافة بقراءة النصوص والصور (الروابط التشعبية للصور الشخصية) من هيكل الصفحة (DOM) الخاص بموقع واتساب ويب.</p>
                <div className="mt-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 text-sm font-bold flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>تماماً كالمعلومات الشخصية، لا يتم إرسال أي نصوص، صور، أو بيانات خارج متصفح المستخدم. الإضافة لا تتصل بأي واجهة برمجة تطبيقات خارجية (External API) لإرسال البيانات.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. تبرير الصلاحيات لمراجعي جوجل */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              تبرير الصلاحيات المطلوبة (Permissions Justification)
            </h2>
            <p className="mb-6">لضمان عمل الإضافة بكفاءة، نطلب الصلاحيات التالية في ملف المانيفست (Manifest)، وهذه هي أسباب استخدامها:</p>
            
            <div className="grid gap-4">
              <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                <code className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded mb-2 inline-block">activeTab</code>
                <p className="text-sm mt-2"><strong>سبب الطلب:</strong> نحتاج هذه الصلاحية لكي تتمكن الإضافة من الوصول إلى التبويبة المفتوحة حالياً (والتي يجب أن تكون واتساب ويب) فقط عندما ينقر المستخدم صراحةً على أيقونة الإضافة لبدء الاستخراج. هذا يحمي المستخدم فلا تعمل الإضافة في الخلفية.</p>
              </div>

              <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                <code className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded mb-2 inline-block">scripting</code>
                <p className="text-sm mt-2"><strong>سبب الطلب:</strong> تُستخدم لحقن سكربت (Inject Script) مؤقت داخل صفحة واتساب ويب. وظيفة هذا السكربت هي النزول التلقائي (Auto-scroll) لقائمة الأعضاء، وقراءة عناصر الـ DOM لتجميع البيانات وتصديرها كملف Excel/CSV.</p>
              </div>

              <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                <code className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded mb-2 inline-block">Host Permissions (*://web.whatsapp.com/*)</code>
                <p className="text-sm mt-2"><strong>سبب الطلب:</strong> إذن المضيف محصور فقط على نطاق واتساب ويب لضمان أن السكربتات المخصصة لقراءة عناصر الصفحة لا تعمل إلا على هذا الموقع تحديداً، مما يضمن أمان وخصوصية المستخدم خارج هذا النطاق.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}