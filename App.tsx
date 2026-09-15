import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import PageLoader from './components/PageLoader';

// Route-level code splitting for non-critical pages
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const SubPage = lazy(() => import('./pages/SubPage'));
const CompanyHub = lazy(() => import('./pages/CompanyHub'));
const IndustriesHub = lazy(() => import('./pages/IndustriesHub'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [initialLoading, setInitialLoading] = useState(() => {
    // Show splash on first session load
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('shakti_initial_loaded');
      return !hasVisited;
    }
    return false;
  });

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setInitialLoading(false);
        sessionStorage.setItem('shakti_initial_loaded', 'true');
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [initialLoading]);

  return (
    <>
      {initialLoading && (
        <PageLoader message="Initializing Shakti industrial systems..." fullScreen={true} />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader message="Loading gas catalog & facilities..." fullScreen={false} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="solutions" element={<Services />} />
              <Route path="products" element={<Products />} />
              <Route path="industries" element={<IndustriesHub />} />
              <Route path="company" element={<CompanyHub />} />
              <Route path="contact" element={<Contact />} />

              {/* Sub-routes */}
              <Route path="company/about" element={<About />} />
              <Route path=":category/:slug" element={<SubPage />} />

              {/* 404 Catch-All */}
              <Route path="404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
