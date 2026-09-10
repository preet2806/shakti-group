import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Award, FileText, ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import ChatAssistant from './ChatAssistant';
import ShaktiLogo from './ShaktiLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="h-10 w-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">PESO & CCOE Approved</div>
              <div className="text-slate-400 text-xs mt-0.5">Licensed manufacturing & cryogenic storage</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="h-10 w-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">ISO 9001:2015 Certified</div>
              <div className="text-slate-400 text-xs mt-0.5">Integrated QA/QC & traceability standards</div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="h-10 w-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Established 1998</div>
              <div className="text-slate-400 text-xs mt-0.5">25+ Years continuous industrial supply</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <NavLink to="/" className="inline-block" aria-label="Shakti Group Home">
              <ShaktiLogo className="h-11 w-auto" variant="white" />
            </NavLink>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Your trusted partner in industrial gases since 1998. Manufacturing and bulk supply of cryogenic liquids (LOX, LIN, LAR, LCO₂), high-pressure compressed gases, specialty mixtures, and turnkey gas engineering.
            </p>
            <div className="pt-2">
              <a
                href="/company_profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 transition"
              >
                <span>Download Corporate Profile (PDF)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/about" className="text-slate-400 hover:text-white transition">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-slate-400 hover:text-white transition">Products Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-slate-400 hover:text-white transition">Services & On-Site Tanks</NavLink>
              </li>
              <li>
                <NavLink to="/industries" className="text-slate-400 hover:text-white transition">Industries Overview</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-400 hover:text-white transition">Contact & Inquiries</NavLink>
              </li>
              <li>
                <a
                  href="/company_profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition font-medium"
                >
                  Company Profile (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2.5">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-semibold">Email</span>
                  <a href="mailto:info@shaktigases.com" className="text-slate-300 hover:text-white transition">
                    info@shaktigases.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-semibold">Phone</span>
                  <a href="tel:+919727783440" className="text-slate-300 hover:text-white transition">
                    +91 9727783440
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-semibold">Registered Office</span>
                  <span className="text-slate-400 text-xs leading-relaxed block">
                    45, Maruti Complex, Ranoli GIDC,<br />
                    Ranoli, Dist: Vadodara-391350,<br />
                    Gujarat, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Shakti Group of Companies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/company/quality-safety" className="hover:text-slate-400 transition">Quality & Safety</NavLink>
            <NavLink to="/company/infrastructure" className="hover:text-slate-400 transition">Infrastructure</NavLink>
            <NavLink to="/contact" className="hover:text-slate-400 transition">Request Quote</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Layout;
