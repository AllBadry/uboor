import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center font-cairo">
      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">عذراً، هذه الصفحة غير موجودة!</h2>
      <p className="text-slate-500 mb-8 max-w-md">
        يبدو أنك وصلت إلى رابط خاطئ أو أن الصفحة تم نقلها إلى مكان آخر.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-8 py-3 bg-uboor-cyan text-slate-900 font-bold rounded-xl hover:bg-uboor-orange hover:text-white transition-all"
      >
        <Home className="w-5 h-5" />
        العودة للرئيسية
      </Link>
    </div>
  );
}