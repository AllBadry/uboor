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
          <Route path="*" element={<NotFound />} />
        
          {/* <Route path="/privacy" element={<Privacy />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;