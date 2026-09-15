import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      aria-label="Back to top of page"
      title="Back to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl border border-slate-700/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 group"
    >
      <ArrowUp className="h-5 w-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
    </button>
  );
};

export default BackToTop;
