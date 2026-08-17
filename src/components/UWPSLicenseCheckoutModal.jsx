import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle2, ShieldCheck, Loader2, AlertCircle, PhoneCall } from 'lucide-react';
import Portal from './Portal';
export default function UWPSLicenseCheckoutModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !receipt) {
      setError('الرجاء تعبئة جميع الحقول وإرفاق صورة وصل الدفع.');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('receipt', receipt);

    try {
      const response = await fetch('https://uwps.uboor.org/licenses-req', {
        method: 'POST',
        body: formData,
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

  return (
    <Portal>
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 font-cairo">
          {/* تم رفع الـ z-index إلى 9999 لضمان ظهور البوب أب فوق الناف بار تماماً */}
          {/* الخلفية المعتمة */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* صندوق النافذة */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-[2.5ref] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* زر الإغلاق */}
            <button 
              onClick={onClose}
              className="absolute top-6 left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* الترويسة */}
            <div className="bg-[#0B1121] p-8 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-uboor-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
              <ShieldCheck className="w-12 h-12 text-uboor-cyan mx-auto mb-3" />
              <h3 className="text-2xl font-black mb-1">طلب ترخيص UWPS Pro</h3>
              <p className="text-slate-400 text-sm font-medium">الاشتراك الشهري: <span className="text-emerald-400 font-bold">5 دنانير أردنية</span></p>
            </div>

            {/* محتوى النموذج */}
            <div className="p-8">
              {success ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">تم إرسال طلبك بنجاح!</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    سيقوم الإداري بمراجعة وصل الدفع المرسل. بمجرد الاعتماد، سيتم إرسال مفتاح التفعيل تلقائياً إلى بريدك الإلكتروني ({email}).
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    حسناً، شكراً لك
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* تعليمات التحويل عبر زين كاش */}
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
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{error}</span>
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

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">صورة وصل الدفع (سكرين شوت التحويل)</label>
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
                      className="w-full py-4 bg-gradient-to-l from-uboor-blue to-uboor-cyan text-white font-black rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
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
  );
}