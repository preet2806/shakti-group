import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SubPage from './pages/SubPage';
import CompanyHub from './pages/CompanyHub';
import IndustriesHub from './pages/IndustriesHub';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
