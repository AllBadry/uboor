import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async'; 
import { Globe, Cpu, ShieldCheck, ShoppingCart, Bot, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// === بيانات الخدمات (تم التحديث لإبراز المتاجر والمواقع التعريفية) ===
const SERVICES_DATA = [
  {
    id: '01',
    title: 'متاجر إلكترونية ومواقع تعريفية',
    subtitle: 'E-Commerce & Portfolios',
    desc: 'نستلم مشروعك من الفكرة وحتى الإطلاق. سواء كنت تبحث عن متجر إلكتروني متكامل لبيع منتجاتك، أو موقع تعريفي (Portfolio) احترافي يعكس هوية شركتك، نحن نصمم ونبرمج واجهات جذابة تضمن لك أعلى معدلات التحويل (Conversion Rates).',
    features: ['متاجر إلكترونية متكاملة (E-Commerce)', 'مواقع تعريفية للشركات والأفراد (Portfolios)', 'لوحات تحكم سهلة لإدارة المحتوى'],
    icon: ShoppingCart,
    color: 'uboor-orange',
    techCode: `// Client Project Initialization
const project = new UboorProject({
  type: 'E-Commerce / Portfolio',
  ui_ux: 'Modern & Responsive',
  seo_optimized: true,
  payment_gateway: 'Integrated'
});
await project.launch();`
  },
  {
    id: '02',
    title: 'أنظمة ويب سحابية',
    subtitle: 'MERN Stack & Custom Web Apps',
    desc: 'للشركات التي تبحث عن أنظمة مخصصة ومعقدة. نبني منصات الويب وأدلة الأعمال من الصفر باستخدام هندسة برمجية خالصة قادرة على معالجة آلاف الطلبات اللحظية، دون الاعتماد على قوالب جاهزة تقيد نمو عملك.',
    features: ['قواعد بيانات متقدمة (MongoDB/SQL)', 'واجهات تفاعلية سريعة (React.js)', 'معمارية قابلة للتوسع السحابي'],
    icon: Globe,
    color: 'uboor-blue',
    techCode: `// Cloud Architecture
const uboorWebNode = {
  stack: ['MongoDB', 'Express', 'React', 'Node'],
  latency: '< 50ms',
  concurrent_users: '10,000+',
  status: 'ONLINE'
};`
  },
  {
    id: '03',
    title: 'تطبيقات سطح مكتب',
    subtitle: 'Tauri & Rust Native Performance',
    desc: 'للأنظمة الثقيلة التي تتطلب أداءً يلامس عتاد الجهاز، نبرمج تطبيقات (Native) باستخدام Tauri و Rust لضمان أمان الذاكرة وسرعة معالجة صاروخية بحجم ملفات خفيف جداً لا يمكن لتقنيات الويب التقليدية مجاراته.',
    features: ['أمان الذاكرة (Memory Safety)', 'تطبيقات خفيفة جداً (Cross-platform)', 'أداء متفوق خالي من التأخير'],
    icon: Cpu,
    color: 'slate-800',
    techCode: `// Native Execution with Tauri & Rust
#[tauri::command]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![init_core])
        .run(tauri::generate_context!())
        .expect("Error running app");
}`
  },
  {
    id: '04',
    title: 'الأمن السيبراني وحماية البيانات',
    subtitle: 'Digital Forensics & Security',
    desc: 'حماية بيانات عملائك ليست خياراً ثانوياً. نحمي خوادمك ومواقعك بأحدث بروتوكولات الأمان لمنع الثغرات، حجب الهجمات (DDoS)، وتأمين عمليات الدفع الإلكتروني بصرامة تامة.',
    features: ['بروتوكولات (DNS, SPF, DKIM)', 'فحص واختبار ثغرات النظام', 'تأمين بوابات الدفع الإلكتروني'],
    icon: ShieldCheck,
    color: 'emerald-500',
    techCode: `[ UBOOR SECURE SHELL ]
> Authenticating keys...
> Network vulnerabilities: 0
> DDoS Protection: ACTIVE
> Firewall status: MAX_ENFORCE
> Connection: SECURE`
  },
  {
    id: '05',
    title: 'أتمتة العمليات بالذكاء الاصطناعي',
    subtitle: 'AI Agents & Automation',
    desc: 'ندمج أحدث نماذج الذكاء الاصطناعي داخل متجرك أو نظامك لتحويل العمليات المكررة إلى أنظمة ذاتية (مثل خدمة العملاء الآلية، وتحليل المبيعات)، مما يوفر مئات الساعات من العمل.',
    features: ['وكلاء ذكاء اصطناعي (AI Agents)', 'روبوتات خدمة عملاء متقدمة', 'تحليل البيانات الضخمة'],
    icon: Bot,
    color: 'uboor-cyan',
    techCode: `import { AIAgent } from 'uboor-ai'

const agent = new AIAgent({
  model: 'gpt-4-turbo',
  tasks: ['Customer Support', 'Sales Analysis']
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

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "الخدمات الهندسية والبرمجية | شركة عبور",
    "description": "نستلم مشاريعك البرمجية من الصفر. برمجة وتصميم المتاجر الإلكترونية، مواقع الشركات (Portfolios)، الأنظمة السحابية المعقدة، وتطبيقات سطح المكتب.",
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
      
      <Helmet>
        <title>خدماتنا | تصميم المتاجر والمواقع والأنظمة البرمجية - عبور</title>
        <meta name="description" content="جاهزون لاستلام مشروعك القادم. نقدم خدمات تصميم وبرمجة المتاجر الإلكترونية، مواقع Portfolios، أنظمة الويب المعقدة، وتطبيقات سطح المكتب بأعلى معايير الجودة." />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative pt-28 lg:pt-36">
        
        {/* =========================================
            الجانب الأيمن (اللوحة التقنية التفاعلية)
            ========================================= */}
        <div className={`w-full lg:w-5/12 relative lg:sticky lg:top-32 lg:h-[calc(100vh-140px)] flex flex-col justify-start p-6 sm:p-10 z-10 transition-all duration-[1200ms] delay-300 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          
          <div className="bg-bg-off-white rounded-[2rem] p-8 border border-gray-200 shadow-2xl relative overflow-hidden transition-all duration-700 w-full h-auto max-h-[600px] flex flex-col">
            
            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-colors duration-1000 bg-${currentService.color}`}></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                UBOOR_SERVICES // {currentService.id}
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
              خدماتنا <br /> <span className="text-uboor-blue">وحلولنا الرقمية</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-lg font-medium">
              نستلم مشروعك البرمجي من الفكرة وحتى الإطلاق. سواء كنت تحتاج إلى متجر إلكتروني لزيادة مبيعاتك، موقع تعريفي لشركتك، أو نظام سحابي معقد، نحن جاهزون للتنفيذ.
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

          {/* =========================================
              صندوق الإجراء (Call to Action) المحدث والمشجع 
              ========================================= */}
          <div className="mt-10 mb-20 lg:mb-32 p-10 bg-bg-off-white rounded-3xl border border-gray-200 text-center shadow-sm">
            <h3 className="text-3xl font-black text-text-main mb-4">جاهزون لاستلام مشروعك القادم</h3>
            <p className="text-text-muted mb-8 text-lg">
              سواء كان متجراً إلكترونياً، موقعاً تعريفياً (Portfolio)، أو فكرة لتطبيق مخصص، فريقنا الهندسي جاهز لتحويل فكرتك إلى واقع ملموس.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-text-main text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-uboor-orange transition-colors w-full sm:w-auto">
              تحدث معنا وابدأ مشروعك
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}