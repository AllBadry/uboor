import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const AutoCapture = lazy(() => import('./pages/products/AutoCapture'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const WaCollector = lazy(() => import('./pages/products/WaCollector'));
const SeoMonster = lazy(() => import('./pages/products/SeoMonster'));
const WaCollectorPrivacy = lazy(() => import('./pages/products/WaCollectorPrivacy'));
const SeoMonsterPrivacy = lazy(() => import('./pages/products/SeoMonsterPrivacy'));
const AutoCapturePrivacy = lazy(() => import('./pages/products/AutoCapturePrivacy'));
const URM = lazy(() => import('./pages/products/UrmProduct'));
const Support = lazy(() => import('./pages/Support'));
const UPWS = lazy(() => import('./pages/products/UwpsProduct'));
const Privacy = lazy(() => import('./pages/Privacy'));

function LoadingFallback() {
  return (
    <div className="min-h-[95vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-uboor-cyan animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/wacollector" element={<WaCollector />} />
              <Route path="/products/auto-capture" element={<AutoCapture />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/seo-monster" element={<SeoMonster />} />
              <Route path="/products/uwps" element={<UPWS />} />
              <Route path="/products/urm" element={<URM />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/products/wacollector/privacy" element={<WaCollectorPrivacy />} />
              <Route path="/products/seo-monster/privacy" element={<SeoMonsterPrivacy />} />
              <Route path="/products/auto-capture/privacy" element={<AutoCapturePrivacy />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;