import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, ArrowRight, Compass, ShieldAlert, PhoneCall, Package, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export const NotFound: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(6);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused) return;

    if (secondsLeft <= 0) {
      navigate('/', { replace: true });
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, isPaused, navigate]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50/60 px-4 py-16">
      <SEO
        title="404 - Page Not Found | Shakti Group"
        description="The requested page could not be found. Redirecting to Shakti Industrial Gases homepage."
        canonicalUrl="/404"
      />

      <div className="max-w-xl w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-100 rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-slate-100 rounded-full blur-3xl pointer-events-none opacity-60" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Error 404 • Resource Relocated</span>
        </div>

        {/* Big 404 Headline with Brand Logo */}
        <div className="flex flex-col items-center justify-center my-2">
          <h1 className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tight">
            4<span className="text-sky-700">0</span>4
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 mt-2">
            Page or Gas Specification Not Found
          </h2>
          <p className="text-sm text-slate-600 max-w-md mt-2 leading-relaxed">
            The page you requested may have been renamed, moved during plant catalog updates, or does not exist.
          </p>
        </div>

        {/* Auto-redirect status alert */}
        <div className="my-6 p-4 rounded-xl bg-sky-50/80 border border-sky-200/70 text-slate-800 text-xs">
          <div className="flex items-center justify-between mb-2 font-medium">
            <span className="inline-flex items-center gap-1.5 text-sky-900 font-semibold">
              <Compass className="w-4 h-4 text-sky-700 animate-spin" style={{ animationDuration: '4s' }} />
              {isPaused ? 'Auto-redirect paused' : `Redirecting to homepage in ${secondsLeft}s...`}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-[11px] font-bold text-sky-800 hover:text-sky-900 underline underline-offset-2 ml-2"
            >
              {isPaused ? 'Resume Redirect' : 'Pause'}
            </button>
          </div>

          {/* Animated Countdown Progress Bar */}
          <div className="w-full bg-sky-200/60 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-sky-700 h-1.5 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(secondsLeft / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NavLink
            to="/"
            replace
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold px-6 py-3 rounded-lg text-sm transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-lg text-sm transition shadow-2xs"
          >
            <PhoneCall className="w-4 h-4 text-slate-500" />
            <span>Contact Support</span>
          </NavLink>
        </div>

        {/* Quick Directory Links */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
            Popular Industrial Destinations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <NavLink
              to="/products"
              className="p-2.5 rounded-lg border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/40 transition flex items-center justify-between text-slate-700 font-medium group"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4 text-sky-700" />
                <span>Gas Products & Cryogenics</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-0.5 transition" />
            </NavLink>

            <NavLink
              to="/services"
              className="p-2.5 rounded-lg border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/40 transition flex items-center justify-between text-slate-700 font-medium group"
            >
              <span className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-sky-700" />
                <span>Tank Leasing & Engineering</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-0.5 transition" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
