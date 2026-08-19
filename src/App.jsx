import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import AutoCapture from './pages/products/AutoCapture';
import NotFound from './pages/NotFound';
// يمكنك إنشاء هذه الصفحات لاحقاً في مجلد pages
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import WaCollector from './pages/products/WaCollector';
import SeoMonster from './pages/products/SeoMonster';
import WaCollectorPrivacy from './pages/products/WaCollectorPrivacy';
import SeoMonsterPrivacy from './pages/products/SeoMonsterPrivacy';
import AutoCapturePrivacy from './pages/products/AutoCapturePrivacy';
import URM from './pages/products/UrmProduct';
import Support from './pages/Support';
import UPWS from './pages/products/UwpsProduct';
import Privacy from './pages/Privacy';
function App() {
  return (
    <Router>
      {/* هنا نضع المكون ليعمل ويراقب كل تنقلات الصفحات */}
      <ScrollToTop /> 
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/wacollector" element={<WaCollector />} /> 
          <Route path="/products/auto-capture" element={<AutoCapture />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/seo-monster" element={<SeoMonster />}/>
          <Route path="/products/uwps" element={<UPWS />}/>
          <Route path="/products/urm" element={<URM />}/>
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/wacollector/privacy" element={<WaCollectorPrivacy />}/>
          <Route path="/products/seo-monster/privacy" element={<SeoMonsterPrivacy />} />
          <Route path='/products/auto-capture/privacy' element={<AutoCapturePrivacy />}/>

          <Route path="/privacy" element={<Privacy />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;