import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, FileText, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavSubItem } from '../types';
import ShaktiLogo from './ShaktiLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Products: true, // Default open the primary catalog for easier browsing
  });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* Industrial Top Utility Strip - Desktop & Tablet */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300 text-xs font-medium">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span>PESO & CCOE Approved Gas Manufacturing • 24×7 Cryogenic Supply</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+919727783440"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition font-medium"
            >
              <Phone className="h-3 w-3 text-sky-400" />
              <span>+91-9727783440</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:info@shaktigases.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition font-medium"
            >
              <Mail className="h-3 w-3 text-sky-400" />
              <span>info@shaktigases.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center gap-2 group py-1" aria-label="Shakti Group Home">
            <ShaktiLogo className="h-9 sm:h-11 md:h-12 w-auto transition-transform group-hover:scale-[1.02]" variant="color" />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = activeDropdown === item.label;
              const isActive = location.pathname === item.path || (hasChildren && item.children?.some(c => location.pathname === c.path));

              if (!hasChildren) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path || '/'}
                    className={({ isActive: isLinkActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                        isLinkActive
                          ? 'text-sky-700 bg-sky-50'
                          : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={item.path || '#'}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                      isActive || isDropdownOpen
                        ? 'text-sky-700 bg-sky-50'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                      }`}
                    />
                  </NavLink>

                  {/* Desktop Dropdown Panel */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-84 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50">
                      {/* Hover bridge */}
                      <div className="absolute -top-3 left-0 w-full h-3" />

                      <div className="space-y-1">
                        {item.children?.map((child: NavSubItem) => {
                          const isSubActive = location.pathname === child.path;
                          return (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={`group flex items-start p-2.5 rounded-lg transition-colors ${
                                isSubActive
                                  ? 'bg-sky-50 text-sky-800 font-semibold'
                                  : 'hover:bg-slate-50 text-slate-700 hover:text-sky-700'
                              }`}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold flex items-center justify-between">
                                  <span className="truncate">{child.label}</span>
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition text-sky-600 shrink-0 ml-2" />
                                </div>
                                {child.description && (
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Primary CTA: Request a Quote */}
          <div className="hidden lg:flex items-center space-x-3">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition shadow-sm hover:shadow"
            >
              REQUEST A QUOTE
            </NavLink>
          </div>

          {/* Mobile Right Bar (Quote CTA + Menu Button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <NavLink
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition shadow-sm"
            >
              Quote
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-slate-700 hover:text-sky-700 hover:bg-slate-100 rounded-lg transition active:bg-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {isOpen && (
        <>
          {/* Tap-outside Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-16 sm:top-28 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Dropdown Panel */}
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain">
            <div className="p-4 space-y-3">

              {/* Fast Direct Contacts on Mobile */}
              <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
                <a
                  href="tel:+919727783440"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  <Phone className="h-3.5 w-3.5 text-sky-600" />
                  <span>Call Plant</span>
                </a>
                <a
                  href="mailto:info@shaktigases.com"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  <Mail className="h-3.5 w-3.5 text-sky-600" />
                  <span>Email Inquiries</span>
                </a>
              </div>

              {/* Navigation Items with Accordion for Sub-items */}
              <div className="space-y-2">
                {NAV_ITEMS.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = !!mobileExpanded[item.label];
                  const isParentActive = location.pathname === item.path || (hasChildren && item.children?.some(c => location.pathname === c.path));

                  if (!hasChildren) {
                    return (
                      <NavLink
                        key={item.label}
                        to={item.path || '/'}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition ${
                            isActive
                              ? 'bg-sky-50 text-sky-700 border-l-4 border-sky-600'
                              : 'text-slate-800 hover:bg-slate-50'
                          }`
                        }
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                      </NavLink>
                    );
                  }

                  return (
                    <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden">
                      {/* Entire row is clickable to expand/collapse */}
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition ${
                          isParentActive ? 'bg-sky-50/70 text-sky-800' : 'text-slate-900 hover:bg-slate-100/70'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-bold text-slate-900">{item.label}</span>
                          {item.children && (
                            <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                              {item.children.length}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronDown
                            className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-sky-600' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expanded Submenu List */}
                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-200">
                          {/* Overview Link for the section */}
                          <NavLink
                            to={item.path || '#'}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-sky-700 bg-sky-50/60 hover:bg-sky-100/60 transition"
                          >
                            <span>Explore All {item.label}</span>
                            <ArrowRight className="h-3.5 w-3.5 text-sky-600" />
                          </NavLink>

                          {/* Child links */}
                          {item.children?.map((child) => {
                            const isChildActive = location.pathname === child.path;
                            return (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2.5 rounded-lg text-xs transition ${
                                  isChildActive
                                    ? 'bg-sky-50 text-sky-800 font-bold border-l-2 border-sky-600'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                <div className="font-semibold text-slate-900 flex items-center justify-between">
                                  <span>{child.label}</span>
                                  {isChildActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>}
                                </div>
                                {child.description && (
                                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                                    {child.description}
                                  </div>
                                )}
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile RFQ Primary Action */}
              <div className="pt-2 pb-2">
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl text-sm shadow-sm transition active:bg-sky-800"
                >
                  <FileText className="h-4 w-4" />
                  <span>Request a Quotation</span>
                </NavLink>
              </div>

            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;