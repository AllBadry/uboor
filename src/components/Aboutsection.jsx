import { useState, useEffect, useRef } from 'react';
import { Code2, ChevronLeft, GitMerge, Cpu, Layers, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // مراقب التمرير للظهور الانسيابي
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden relative z-10">
      
      {/* خلفية مقصوصة بشكل مائل (Slanted Edge)
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#f8fafc] -z-10"
        style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0% 100%)' }}
      ></div>

      {/* إضاءات خلفية (Glows) بألوان عُبور */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-uboor-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-uboor-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* =========================================
              الجانب الأيمن: النصوص (Uboor Typography & Interactivity)
              ========================================= */}
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest font-mono shadow-sm hover:shadow-md transition-shadow cursor-default">
              <Code2 className="w-4 h-4 text-uboor-orange" />
              Our_Philosophy
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.15] tracking-tight mb-8">
              لسنا مجرد مبرمجين، نحن <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-uboor-orange via-uboor-cyan to-uboor-blue">مهندسو حلول.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-[1.7] font-medium max-w-xl">
              في شركة عُبور، لا نستخدم الطرق المختصرة ولا نعتمد على القوالب الجاهزة. نحن بيئة هندسية متكاملة تصنع الحلول البرمجية من الصفر، لضمان بناء أنظمة لا تنهار تحت الضغط العالي.
            </p>

            {/* قائمة الميزات التفاعلية (Interactive List) */}
            <div className="space-y-8 mb-12">
              
              {/* عنصر 1 */}
              <div className="group/item flex items-start gap-5 p-4 -m-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-uboor-blue/5 transition-all duration-300 border border-transparent hover:border-slate-100 cursor-default">
                <div className="mt-1 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:scale-110 group-hover/item:bg-uboor-blue group-hover/item:border-transparent transition-all duration-300">
                  <Cpu className="w-6 h-6 text-uboor-blue group-hover/item:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover/item:text-uboor-blue transition-colors">كفاءات برمجية عميقة</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">نعتمد في بنيتنا على خوارزميات نظيفة وأدوات قوية دون إثقال الأنظمة بأكواد أو مكتبات غير ضرورية.</p>
                </div>
              </div>

              {/* عنصر 2 */}
              <div className="group/item flex items-start gap-5 p-4 -m-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-uboor-orange/5 transition-all duration-300 border border-transparent hover:border-slate-100 cursor-default">
                <div className="mt-1 w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:scale-110 group-hover/item:bg-uboor-orange group-hover/item:border-transparent transition-all duration-300">
                  <GitMerge className="w-6 h-6 text-uboor-orange group-hover/item:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover/item:text-uboor-orange transition-colors">تأثير مجتمعي (Open Source)</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">مساهماتنا المفتوحة المصدر وأدواتنا المجانية هي طريقتنا في رسم مستقبل أفضل لجميع المطورين.</p>
                </div>
              </div>

            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 font-bold text-uboor-blue hover:text-slate-900 transition-colors group"
            >
              تعرف على فريقنا ورؤيتنا عن قرب
              <ChevronLeft className="w-5 h-5 transform transition-transform group-hover:-translate-x-1.5" />
            </Link>
          </div>

          {/* =========================================
              الجانب الأيسر: اللوحة الهندسية التفاعلية بألوان عبور
              ========================================= */}
          <div className={`relative w-full h-[550px] transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} group`}>
            
            {/* التوهج الخلفي للوحة يتفاعل مع الهوفر (بألوان عُبور) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-uboor-blue via-uboor-cyan to-uboor-orange rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>

            {/* اللوحة الزجاجية الداكنة */}
            <div className="absolute inset-4 bg-[#0B1121] rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-slate-700/50 overflow-hidden flex flex-col transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
              
              {/* شريط الأزرار العلوي */}
              <div className="bg-[#151E2E] px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-widest uppercase flex items-center gap-2">
                  <Zap className="w-3 h-3 text-uboor-orange" />
                  uboor_engine.js
                </div>
                <div className="w-10"></div>
              </div>

              {/* محتوى اللوحة (تلوين الكود البرمجي بستايل عبور) */}
              <div className="p-8 flex-1 flex flex-col justify-center relative overflow-hidden">
                <div className="font-mono text-[13px] sm:text-sm leading-[2.2] relative z-10" dir="ltr">
                  <div className="text-slate-300">
                    <span className="text-uboor-blue">import</span> {'{'} <span className="text-uboor-cyan">Innovation</span>, <span className="text-uboor-cyan">Scalability</span> {'}'} <span className="text-uboor-blue">from</span> <span className="text-uboor-orange">'@uboor/core'</span>;
                  </div>
                  <br />
                  <div className="text-slate-300">
                    <span className="text-uboor-blue">class</span> <span className="text-uboor-cyan">UboorEngineering</span> <span className="text-uboor-blue">extends</span> <span className="text-uboor-orange">Future</span> {'{'}
                  </div>
                  <div className="text-slate-300 pl-6 group-hover:translate-x-2 transition-transform duration-500">
                    <span className="text-uboor-blue">constructor</span>() {'{'}
                  </div>
                  <div className="text-slate-300 pl-12 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    <span className="text-uboor-blue">super</span>();
                  </div>
                  <div className="text-slate-300 pl-12 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    <span className="text-uboor-blue">this</span>.<span className="text-slate-100">stack</span> = [<span className="text-uboor-orange">'MERN'</span>, <span className="text-uboor-orange">'Node'</span>, <span className="text-uboor-orange">'C++'</span>];
                  </div>
                  <div className="text-slate-300 pl-12 group-hover:translate-x-2 transition-transform duration-500 delay-150">
                    <span className="text-uboor-blue">this</span>.<span className="text-slate-100">templates</span> = <span className="text-uboor-cyan">false</span>; <span className="text-slate-500 italic">// Built from scratch</span>
                  </div>
                  <div className="text-slate-300 pl-6 group-hover:translate-x-2 transition-transform duration-500 delay-200">{'}'}</div>
                  <div className="text-slate-300">{'}'}</div>
                  
                  {/* مؤشر الكتابة الوهمي */}
                  <div className="mt-2 w-2.5 h-5 bg-uboor-cyan animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* بطاقة عائمة تتفاعل عكسياً مع حركة الهوفر (Parallax Effect) */}
            <div className="absolute -bottom-2 -left-6 bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-[0_15px_35px_rgba(50,50,93,0.1),0_5px_15px_rgba(0,0,0,0.07)] flex items-center gap-4 z-30 transform transition-transform duration-700 group-hover:translate-y-4 group-hover:-rotate-2">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uboor-cyan opacity-20"></span>
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-uboor-cyan" />
                </div>
              </div>
              <div className="text-left" dir="ltr">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">Architecture</p>
                <p className="text-slate-900 font-black text-sm">Highly Scalable</p>
              </div>
            </div>

            {/* بطاقة طافية أخرى في الأعلى (Floating Badge) */}
            <div className="absolute top-10 -right-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-30 animate-[float_4s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-500">
              <Layers className="w-5 h-5 text-uboor-orange" />
              <span className="text-sm font-bold text-slate-900">Zero Templates</span>
            </div>

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}