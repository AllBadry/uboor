import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Bug, MessageSquare, Lightbulb, Wrench, LifeBuoy, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// === الخدمات المدعومة ===
const SUPPORT_PRODUCTS = [
  { id: 'website', label: 'موقعك الشخصي / التجاري' },
  { id: 'dashboard', label: 'لوحة التحكم / النظام' },
  { id: 'store', label: 'المتجر الإلكتروني' },
  { id: 'extension', label: 'إضافات المتصفح' },
  { id: 'other', label: 'أخرى' },
];

// === أنواع المشاكل ===
const ISSUE_TYPES = [
  { id: 'bug', label: 'مشكلة تقنية', icon: Bug },
  { id: 'inquiry', label: 'استفسار', icon: MessageSquare },
  { id: 'suggestion', label: 'اقتراح', icon: Lightbulb },
  { id: 'other', label: 'أخرى', icon: Wrench },
];

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [formData, setFormData] = useState({
    product: '',
    issueType: '',
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.product) {
      alert('يرجى تحديد المنتج أو الخدمة أولاً');
      return;
    }
    if (!formData.issueType) {
      alert('يرجى تحديد نوع المشكلة أولاً');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedProductLabel = SUPPORT_PRODUCTS.find(p => p.id === formData.product)?.label || formData.product;
      const selectedIssueLabel = ISSUE_TYPES.find(t => t.id === formData.issueType)?.label || formData.issueType;

      const response = await fetch("https://formsubmit.co/ajax/support@uboor.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "اسم العميل": formData.name,
          "البريد الإلكتروني": formData.email,
          "المنتج / الخدمة": selectedProductLabel,
          "نوع المشكلة": selectedIssueLabel,
          "وصف المشكلة": formData.message,
          "_subject": "تيكت دعم فني - عُبور"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ product: '', issueType: '', name: '', email: '', message: '' });
      } else {
        alert("حدث خطأ أثناء إرسال البيانات، يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Support form submission error:", error);
      alert("تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-cairo selection:bg-uboor-cyan selection:text-white relative overflow-hidden">

      {/* إضاءات خلفية ناعمة */}
      <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-uboor-cyan/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[2000ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-uboor-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3 transition-opacity duration-[2000ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

        {/* ================= الجانب الأيمن (الترحيب) ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between">

          <div className={`transition-all duration-1000 delay-100 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-uboor-blue font-bold transition-colors group px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm w-fit mb-8"
            >
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              <span className="text-sm">الرجوع للرئيسية</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-slate-200 shadow-sm">
              <LifeBuoy className="w-4 h-4 text-uboor-cyan" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest font-mono">Technical Support</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tighter mb-6">
              كيف يمكننا <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uboor-cyan to-uboor-blue">مساعدتك اليوم؟</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12 border-r-4 border-slate-200 pr-4">
              واجهت مشكلة مع إحدى أدواتنا أو خدماتنا؟ أرسل لنا تيكت دعم فني وسيتواصل معك فريقنا في أقرب وقت عبر بريدك الإلكتروني.
            </p>
          </div>

          <div className={`flex flex-col gap-6 pt-10 border-t border-slate-200 transition-all duration-1000 delay-300 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-uboor-cyan group-hover:shadow-md transition-all">
                <Sparkles className="w-5 h-5 text-slate-400 group-hover:text-uboor-cyan transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold font-mono">Support Email</span>
                <a href="mailto:support@uboor.org" className="text-lg font-bold text-slate-900 hover:text-uboor-cyan transition-colors" dir="ltr">support@uboor.org</a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= الجانب الأيسر (النموذج) ================= */}
        <div className={`lg:col-span-7 transition-all duration-[1200ms] delay-500 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">

            <div className="absolute top-0 left-0 w-32 h-32 bg-slate-50 rounded-br-full -z-0 border-b border-r border-slate-100"></div>

            {isSuccess ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center animate-[fade-in_0.5s_ease-out] relative z-10">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">تم استلام تذكرتك!</h2>
                <p className="text-slate-600 font-medium max-w-md mx-auto mb-10">
                  شكراً لتواصلك مع فريق الدعم الفني في عبور. سنراجع مشكلتك ونتواصل معك على بريدك الإلكتروني في أقرب وقت.
                </p>
                <button onClick={() => setIsSuccess(false)} 
                        className="px-8 py-3 rounded-full bg-slate-900 hover:bg-uboor-cyan hover:text-slate-900 transition-colors font-bold text-white shadow-lg">
                  إرسال تذكرة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">

                {/* 1. المنتج / الخدمة */}
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-uboor-cyan font-mono text-sm">01.</span> ما هي الخدمة التي تحتاج دعماً لها؟
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {SUPPORT_PRODUCTS.map((product) => {
                      const isSelected = formData.product === product.id;
                      return (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleInputChange({ target: { name: 'product', value: product.id } })}
                          className={`px-5 py-3 rounded-xl font-bold transition-all duration-300 border ${
                            isSelected 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-[1.02]' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          {product.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. نوع المشكلة */}
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-uboor-cyan font-mono text-sm">02.</span> نوع المشكلة
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {ISSUE_TYPES.map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.issueType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInputChange({ target: { name: 'issueType', value: type.id } })}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 border ${
                            isSelected 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-[1.02]' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-uboor-cyan' : 'text-slate-400'}`} />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. بيانات التواصل */}
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="text-uboor-cyan font-mono text-sm">03.</span> بيانات التواصل
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold focus:outline-none focus:border-uboor-cyan focus:bg-white focus:ring-4 focus:ring-uboor-cyan/10 transition-all placeholder-slate-400"
                        placeholder="الاسم الكريم"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleInputChange} required dir="ltr"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-bold focus:outline-none focus:border-uboor-cyan focus:bg-white focus:ring-4 focus:ring-uboor-cyan/10 transition-all placeholder-slate-400"
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. وصف المشكلة */}
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-uboor-cyan font-mono text-sm">04.</span> وصف المشكلة
                  </h2>
                  <textarea 
                    name="message" value={formData.message} onChange={handleInputChange} required rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 font-medium focus:outline-none focus:border-uboor-cyan focus:bg-white focus:ring-4 focus:ring-uboor-cyan/10 transition-all resize-none placeholder-slate-400"
                    placeholder="اشرح لنا المشكلة بالتفصيل، وأرفق أي معلومات تساعدنا على فهمها (نوع المتصفح، الخطوات التي اتبعتها، وغيرها)."
                  ></textarea>
                </div>

                {/* زر الإرسال */}
                <button 
                  type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-xl font-black text-xl hover:bg-uboor-cyan hover:text-slate-900 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  {isSubmitting ? 'جاري إرسال التذكرة...' : 'إرسال تذكرة الدعم'}
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:-translate-x-1 transition-transform'}`} />
                </button>

              </form>
            )}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
