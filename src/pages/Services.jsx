import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async'; // 🌟 استيراد Helmet
import { Globe, Cpu, ShieldCheck, Terminal, Bot, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// === بيانات الخدمات والتفاصيل التقنية ===
const SERVICES_DATA = [
  {
    id: '01',
    title: 'أنظمة ويب وديناميكية',
    subtitle: 'MERN Stack & Cloud Architecture',
    desc: 'نبني منصات الويب وأدلة الأعمال من الصفر. لا نعتمد على القوالب، بل نكتب هندسة برمجية خالصة قادرة على معالجة آلاف الطلبات اللحظية وتدعم الاستعلامات الجغرافية المكانية.',
    features: ['قواعد بيانات جغرافية (MongoDB)', 'واجهات سريعة (React.js)', 'معمارية قابلة للتوسع السحابي'],
    icon: Globe,
    color: 'uboor-blue',
    techCode: `// System Architecture
const uboorWebNode = {
  stack: ['MongoDB', 'Express', 'React', 'Node'],
  latency: '< 50ms',
  geospatialQueries: true,
  status: 'ONLINE'
};`
  },
  {
    id: '02',
    title: 'تطبيقات سطح مكتب',
    subtitle: 'C++ Native Performance',
    desc: 'للأنظمة الداخلية الثقيلة التي تتطلب أداءً يلامس عتاد الجهاز، نبرمج تطبيقات (Native) باستخدام C++ لضمان استقرار وسرعة معالجة لا يمكن لتطبيقات الويب مجاراتها.',
    features: ['إدارة الذاكرة المباشرة (Memory Mng)', 'تطبيقات مخصصة للشركات', 'أداء خالي من التأخير'],
    icon: Cpu,
    color: 'uboor-orange',
    techCode: `// Native Execution
#include <iostream>
int main() {
    System::initializeCore();
    Memory::allocateHighPerformance();
    return uboor::execute();
}`
  },
  {
    id: '03',
    title: 'الأمن السيبراني',
    subtitle: 'Digital Forensics & Security',
    desc: 'حماية بيانات عملائك ليست خياراً ثانوياً. نطبق مفاهيم الأدلة الجنائية الرقمية ونحمي خوادمك بأحدث بروتوكولات الأمان لمنع الثغرات والاختراقات.',
    features: ['بروتوكولات (DNS, SPF, DKIM)', 'فحص الثغرات المتقدم', 'الأدلة الجنائية الرقمية'],
    icon: ShieldCheck,
    color: 'text-main',
    techCode: `[ UBOOR SECURE SHELL ]
> Authenticating keys...
> SPF/DKIM records: VERIFIED
> Network vulnerabilities: 0
> Firewall status: MAX_ENFORCE
> Connection: SECURE`
  },
  {
    id: '04',
    title: 'أدوات مفتوحة المصدر',
    subtitle: 'Community Contributions',
    desc: 'نحن نرد الجميل للمجتمع التقني. نبتكر أدوات وإضافات مجانية بالكامل (مثل Uboor WA Contacts Exporter) لتسهيل أعمال المطورين والشركات حول العالم.',
    features: ['إضافات متصفح احترافية', 'أدوات استخراج بيانات', 'مساهمات GitHub'],
    icon: Terminal,
    color: 'uboor-cyan',
    techCode: `$ git clone https://github.com/uboor/...
$ npm install uboor-tools
$ npm run build

> Compiling open-source modules...
> Ready to deploy. Knowledge is free.`
  },
  {
    id: '05',
    title: 'أتمتة العمليات (AI)',
    subtitle: 'AI Agents & Automation',
    desc: 'ندمج أحدث نماذج اللغات (LLMs) داخل أنظمتك لتحويل العمليات الروتينية والمكررة إلى أنظمة ذاتية القيادة، مما يوفر مئات الساعات من العمل.',
    features: ['وكلاء ذكاء اصطناعي (AI Agents)', 'أتمتة المهام اليومية', 'تحليل البيانات الضخمة'],
    icon: Bot,
    color: 'purple-500',
    techCode: `import { AIAgent } from 'uboor-ai'

const agent = new AIAgent({
  model: 'gpt-4-turbo',
  tasks: ['Data Entry', 'Analysis']
});

await agent.automateWorkflow();`
  }
];

export default function Services() {
  const [activeNode, setActiveNode] = useState(0);
  const sectionRefs = useRef([]);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveNode(index);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const currentService = SERVICES_DATA[activeNode];
  const ActiveIcon = currentService.icon;

  // 🌟 بناء السكيما ديناميكياً للخدمات المتاحة في الشركة
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "الخدمات الهندسية والبرمجية | شركة عبور",
    "description": "تعرف على الترسانة التقنية التي نستخدمها لهندسة أنظمة قوية، آمنة، وقابلة للتوسع. خدماتنا تشمل أنظمة الويب، تطبيقات C++، والأمن السيبراني.",
    "url": "https://uboor.org/services",
    "publisher": {
      "@type": "Organization",
      "name": "Uboor"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": SERVICES_DATA.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.desc
        }
      }))
    }
  };

  return (
    <div className="bg-bg-pure-white text-text-main font-cairo min-h-screen selection:bg-uboor-cyan selection:text-white">
      
      {/* 🌟 حقن الـ SEO والسكيما */}
      <Helmet>
        <title>الخدمات الهندسية والبرمجية | شركة عبور</title>
        <meta name="description" content="نحن لا نبيع حلولاً معلبة. اكتشف خدمات عبور المتقدمة في بناء أنظمة MERN السحابية، تطبيقات C++، الأمن السيبراني، وأتمتة العمليات بالذكاء الاصطناعي." />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      {/* تم إزالة overflow-hidden التي كانت تكسر تثبيت الشاشة، واستخدام flex-row للوضع الطبيعي (يمين ثم يسار) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative pt-28 lg:pt-36">
        
        {/* =========================================
            الجانب الأيمن (اللوحة التقنية التفاعلية - ثابتة لا تتحرك)
            ========================================= */}
        <div className={`w-full lg:w-5/12 relative lg:sticky lg:top-32 lg:h-[calc(100vh-140px)] flex flex-col justify-start p-6 sm:p-10 z-10 transition-all duration-[1200ms] delay-300 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          
          <div className="bg-bg-off-white rounded-[2rem] p-8 border border-gray-200 shadow-2xl relative overflow-hidden transition-all duration-700 w-full h-auto max-h-[600px] flex flex-col">
            
            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-colors duration-1000 bg-${currentService.color}`}></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                UBOOR_ENGINE // {currentService.id}
              </span>
              <div className={`w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm transition-colors duration-500`}>
                <ActiveIcon className={`w-6 h-6 text-${currentService.color}`} />
              </div>
            </div>

            <div className="mb-6 relative z-10">
              <h2 className="text-2xl lg:text-3xl font-black text-text-main mb-2 leading-tight transition-all duration-500">
                {currentService.title}
              </h2>
              <span className={`font-mono text-[10px] font-bold uppercase tracking-widest text-${currentService.color} transition-colors duration-500`}>
                {currentService.subtitle}
              </span>
            </div>

            <div className="mt-auto bg-[#0a0f1c] rounded-2xl p-6 border border-gray-800 shadow-inner relative overflow-hidden group">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              
              <pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed transition-all duration-500 opacity-90 group-hover:opacity-100" dir="ltr">
                <code>{currentService.techCode}</code>
              </pre>

              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none skew-y-[-10deg] -translate-y-10"></div>
            </div>

          </div>
        </div>

        {/* =========================================
            الجانب الأيسر (قائمة الخدمات المتحركة بالسكرول)
            ========================================= */}
        <div className="w-full lg:w-7/12 py-10 lg:py-0 px-6 sm:px-10 lg:border-r border-gray-100">
          
          <div className={`mb-24 transition-all duration-1000 delay-100 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-black text-text-main tracking-tighter mb-6">
              بنيتنا <br /> <span className="text-uboor-cyan">الهندسية</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-lg font-medium">
              نحن لا نبيع حلولاً معلبة. تعرف على الترسانة التقنية التي نستخدمها لهندسة أنظمة قوية، آمنة، وقابلة للتوسع.
            </p>
          </div>

          <div className={`flex flex-col gap-24 lg:gap-40 pb-32 transition-all duration-1000 delay-500 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id} 
                data-index={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`transition-all duration-700 ${activeNode === index ? 'opacity-100 translate-x-0' : 'opacity-30 lg:translate-x-8'}`}
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-black text-gray-200 select-none">{service.id}</span>
                  <h3 className="text-3xl sm:text-4xl font-black text-text-main leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-medium mb-8 border-r-4 border-gray-200 pr-6">
                  {service.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 text-${service.color}`} />
                      <span className="text-text-main font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="w-full h-px bg-gradient-to-l from-gray-200 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-10 bg-bg-off-white rounded-3xl border border-gray-200 text-center">
            <h3 className="text-3xl font-black text-text-main mb-4">هل النظام الذي تبحث عنه غير مدرج؟</h3>
            <p className="text-text-muted mb-8">نحن مهندسون، يسعدنا بناء الأنظمة المعقدة والمخصصة من الصفر.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-text-main text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-uboor-blue transition-colors w-full sm:w-auto">
              تحدث مع خبرائنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}