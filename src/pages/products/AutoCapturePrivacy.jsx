import { useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ServerOff, 
  Camera,
  DownloadCloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AutoCapturePrivacy() {
  // للعودة لأعلى الصفحة عند التحميل
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        
        {/* زر الرجوع */}
        <Link 
          to="/products/auto-capture" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-uboor-cyan font-bold transition-colors group mb-10 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 w-fit"
        >
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          الرجوع إلى صفحة الأداة
        </Link>

        {/* الترويسة */}
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-8">
          <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100">
            <ShieldCheck className="w-8 h-8 text-uboor-cyan" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">سياسة الخصوصية</h1>
            <p className="text-slate-500 font-medium">الخاصة بإضافة Uboor Auto Capture Pro (يوليو 2026)</p>
          </div>
        </div>

        <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 leading-relaxed text-slate-700">
          
          {/* 1. المقدمة والتعهد */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-uboor-cyan" />
              تعهد استخدام البيانات
            </h2>
            <p className="mb-4">نحن في <strong>شركة عُبور (Uboor Company)</strong> نلتزم التزاماً كاملاً بحماية خصوصية مستخدمينا. توضح سياسة الخصوصية هذه كيفية تعامل الإضافة مع البيانات، وذلك التزاماً بسياسات الخصوصية الخاصة بمتجر إضافات Google Chrome. نُقر ونعلن التزامنا التام بالآتي:</p>
            
            <ul className="space-y-4 font-medium bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-uboor-cyan mt-2.5 shrink-0"></div>
                <strong>عدم بيع البيانات:</strong> لا نبيع بيانات المستخدمين لأطراف ثالثة أو ننقلها لهم بأي شكل من الأشكال.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-uboor-cyan mt-2.5 shrink-0"></div>
                <strong>حصر الاستخدام:</strong> لا نستخدم البيانات لأغراض غير متعلّقة بالوظيفة الوحيدة والأساسية للإضافة (الأتمتة والتصوير).
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-uboor-cyan mt-2.5 shrink-0"></div>
                <strong>لا يوجد كود عن بُعد:</strong> الإضافة لا تستخدم أي كود برمجي مستضاف عن بُعد (Remote Hosted Code).
              </li>
            </ul>
          </section>

          {/* 2. آلية العمل ومعالجة البيانات */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Camera className="w-6 h-6 text-uboor-cyan" />
              آلية العمل ومعالجة البيانات
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="mb-6">تم بناء الإضافة لتعمل بالكامل وبشكل محلي داخل متصفح العميل (Client-Side). بناءً على ذلك، نؤكد على الآتي:</p>
              
              <div className="grid gap-4">
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <ServerOff className="w-6 h-6 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">لا يوجد خوادم خارجية</h4>
                    <p className="text-sm text-slate-600 mt-1">الإضافة لا تتصل بأي خوادم خارجية (External Servers) أو واجهات برمجة تطبيقات (APIs) لجمع أو إرسال البيانات.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">المعالجة المحلية</h4>
                    <p className="text-sm text-slate-600 mt-1">جميع عمليات تحديد الأزرار، رسم مناطق التصوير، التقاط الشاشة، وحفظ الصور تتم 100% محلياً داخل جهاز المستخدم.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">لا نجمع بيانات شخصية</h4>
                    <p className="text-sm text-slate-600 mt-1">الإضافة لا تقرأ، ولا تسجل، ولا تتتبع سجل التصفح الخاص بالمستخدم أو بياناته الشخصية.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. تبرير الصلاحيات */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-uboor-cyan" />
              تبرير الصلاحيات المطلوبة (Permissions)
            </h2>
            <p className="mb-6 font-medium">لضمان عمل الأداة بكفاءة، تتطلب الإضافة الصلاحيات التالية حصرياً لتنفيذ وظائفها الأساسية:</p>
            
            <div className="grid gap-5">
              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-cyan-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">صلاحية التبويبة النشطة</h3>
                  <code className="text-uboor-blue text-xs font-bold bg-blue-50 px-2 py-1 rounded">activeTab</code>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  نطلب هذه الصلاحية لتتمكن الإضافة من الوصول المؤقت إلى محتوى الصفحة المفتوحة حالياً لالتقاط صور الشاشة وتحديد العناصر. <strong>هذا الوصول يحدث فقط عندما ينقر المستخدم صراحةً على أيقونة الإضافة وتفعيلها</strong>، ولا تعمل الإضافة في الخلفية لمراقبة نشاط المستخدم.
                </p>
              </div>

              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-cyan-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">صلاحية حقن السكربتات</h3>
                  <code className="text-uboor-blue text-xs font-bold bg-blue-50 px-2 py-1 rounded">scripting</code>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  تُستخدم لحقن سكربت التشغيل (<code className="bg-slate-100 text-slate-500 px-1 rounded">content.js</code>) ديناميكياً داخل الصفحة النشطة <strong>فقط</strong> بعد تفاعل المستخدم مع الإضافة. وظيفة هذا السكربت هي إتاحة تحديد مسار الزر المراد النقر عليه، ورسم مساحة التصوير.
                </p>
              </div>

              <div className="p-6 border border-slate-200 rounded-2xl bg-white hover:border-cyan-200 transition-colors flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900">صلاحية التنزيلات</h3>
                    <code className="text-uboor-blue text-xs font-bold bg-blue-50 px-2 py-1 rounded">downloads</code>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    تُستخدم حصرياً لحفظ الصور التي تم التقاطها (Screenshots) وقصها مباشرة إلى جهاز المستخدم دون إظهار نافذة "حفظ باسم" في كل مرة، لتسهيل وتسريع عملية الأتمتة.
                  </p>
                </div>
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-blue-50 items-center justify-center">
                  <DownloadCloud className="w-6 h-6 text-uboor-blue" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}