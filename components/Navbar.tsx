import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavItem, NavSubItem } from '../types';

export const ShaktiLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 671 475" className={className}>
    <g>
      <path d="M 170.00 295.29 C162.92,297.59 156.92,298.02 152.30,296.56 C149.99,295.84 147.89,295.44 147.65,295.69 C146.61,296.72 136.45,290.52 132.45,286.40 C118.92,272.47 117.15,247.91 128.50,231.43 C134.71,222.42 142.96,218.40 153.52,219.25 C161.49,219.89 164.96,222.38 167.97,229.65 C169.73,233.88 170.11,236.20 169.63,239.71 C168.79,245.79 164.06,255.16 161.06,256.66 C157.72,258.32 156.69,260.50 158.52,262.02 C159.75,263.04 160.78,262.74 164.23,260.38 C175.54,252.64 179.79,244.40 178.67,232.42 C177.88,223.86 175.09,218.73 169.47,215.43 C165.20,212.92 164.37,212.80 154.72,213.20 C142.79,213.69 136.36,215.98 128.72,222.45 C122.97,227.32 116.16,235.94 113.47,241.74 C112.38,244.07 111.11,245.98 110.64,245.99 C109.19,246.01 111.01,240.69 113.63,237.24 C115.00,235.45 115.83,233.53 115.48,232.97 C115.13,232.41 115.45,232.07 116.18,232.23 C116.90,232.38 118.38,230.61 119.45,228.30 C120.85,225.29 122.70,223.39 125.95,221.61 C128.45,220.24 131.07,218.19 131.76,217.06 C132.45,215.93 133.88,215.00 134.93,215.00 C135.98,215.00 138.92,214.10 141.48,213.01 C148.60,209.96 157.86,208.78 164.17,210.12 C168.63,211.07 170.27,212.09 174.24,216.38 C176.85,219.19 179.05,221.16 179.12,220.75 C179.19,220.34 179.34,219.44 179.45,218.75 C179.56,218.06 178.99,215.93 178.19,214.00 C176.15,209.12 175.60,204.13 175.76,192.08 C175.89,182.20 176.03,181.53 178.51,179.23 C181.88,176.10 182.64,176.91 180.32,181.16 C178.82,183.91 178.51,186.72 178.56,197.00 C178.61,209.43 178.63,209.55 182.81,219.12 C185.11,224.41 187.00,229.24 187.00,229.85 C187.00,230.46 188.31,233.37 189.90,236.32 C196.98,249.41 197.31,267.60 190.63,277.39 C183.44,287.93 177.94,292.71 170.00,295.29 Z" fill="currentColor" />
      <path d="M 167.36 72.15 C175.39,67.36 178.16,65.90 189.00,60.73 C195.95,57.42 205.31,54.05 210.57,52.97 C212.05,52.66 214.14,52.10 216.00,51.52 C215.32,51.75 214.65,51.99 214.00,52.22 C126.31,83.43 68.76,145.62 61.96,216.50 C58.87,248.74 67.88,282.79 87.43,313.53 C86.17,311.91 84.95,311.00 83.99,311.00 C82.89,311.00 82.00,311.34 82.00,311.75 C82.02,314.14 96.49,334.00 98.22,334.00 C98.83,334.00 99.06,334.27 98.73,334.61 C97.68,335.66 101.76,339.27 103.08,338.45 C103.87,337.96 104.05,338.10 103.60,338.85 C103.20,339.48 103.36,340.00 103.94,340.00 C104.52,340.00 105.00,340.86 105.00,341.92 C105.00,344.34 133.14,369.55 137.31,370.88 C137.96,371.08 139.40,372.06 140.50,373.04 C144.22,376.35 156.22,383.98 156.98,383.51 C157.39,383.26 158.55,383.95 159.55,385.06 C161.39,387.09 164.13,387.35 164.08,385.50 C164.07,384.95 162.79,383.82 161.24,382.99 C159.68,382.15 156.36,379.79 153.85,377.74 C151.35,375.68 148.64,374.00 147.83,374.00 C145.23,374.00 121.15,354.86 112.05,345.57 C109.05,342.51 106.27,340.00 105.88,340.00 C105.48,340.00 104.86,338.65 104.50,337.00 C104.31,336.11 104.02,335.31 103.72,334.76 C110.74,342.34 119.92,351.35 126.50,356.92 C154.21,380.41 188.87,398.79 227.45,410.47 C234.02,412.46 239.87,414.47 240.45,414.93 C240.51,414.98 240.60,415.03 240.70,415.09 C240.63,415.06 240.56,415.03 240.50,415.01 C239.40,414.53 237.15,413.94 235.50,413.70 C232.12,413.20 215.56,408.43 212.50,407.07 C208.83,405.44 206.51,404.61 205.39,404.54 C204.77,404.50 203.65,403.96 202.89,403.34 C201.08,401.87 192.71,399.07 191.79,399.63 C189.90,400.79 192.89,403.18 199.83,406.08 C200.40,406.32 200.97,406.55 201.55,406.79 C197.79,405.39 194.57,404.25 193.42,403.91 C187.45,402.15 161.36,388.37 150.01,380.98 C94.01,344.54 61.74,296.14 57.01,241.50 C55.99,229.78 56.41,221.35 58.93,202.50 C59.96,194.84 64.57,178.06 66.06,176.55 C66.43,176.18 66.75,175.44 66.90,174.70 C66.84,175.32 66.68,176.39 66.51,177.25 C66.33,178.21 66.67,179.00 67.26,179.00 C67.86,179.00 67.37,180.04 66.17,181.31 C64.95,182.62 64.01,184.91 64.02,186.56 C64.03,188.83 64.25,189.16 65.00,188.00 C65.53,187.18 65.98,185.63 65.98,184.56 C65.99,183.50 66.94,181.63 68.09,180.40 C69.24,179.18 70.33,176.58 70.51,174.63 C70.82,171.35 70.70,171.17 68.92,172.28 C67.99,172.86 67.18,173.71 66.97,174.28 C66.99,174.12 67.00,173.97 67.00,173.82 C67.00,170.61 80.87,144.70 87.76,135.05 C95.72,123.90 115.17,103.43 126.48,94.30 C137.46,85.43 158.80,71.38 169.04,66.28 C182.38,59.62 202.42,51.45 219.65,45.62 C228.37,42.67 236.18,39.99 237.00,39.67 C240.32,38.38 250.85,36.15 256.50,35.55 C258.51,35.33 260.58,35.07 262.58,34.77 C260.94,35.05 259.30,35.31 258.06,35.48 C255.62,35.81 252.25,36.69 250.56,37.44 C248.88,38.18 244.33,39.28 240.46,39.87 C226.82,41.96 184.58,57.88 172.50,65.48 C169.75,67.21 165.16,69.89 162.31,71.44 C157.01,74.31 154.75,77.00 157.64,77.00 C158.51,77.00 162.88,74.82 167.36,72.15 Z" fill="currentColor" />
    </g>
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isChildActive = (item: NavItem): boolean => {
    if (!item.children) return false;
    return item.children.some((child) => location.pathname === child.path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Brand Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <div className="text-blue-500 transition-transform duration-300 group-hover:scale-105">
                <ShaktiLogo className="h-9 w-9" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                  Shakti Group
                </span>
                <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-widest mt-1">
                  Industrial Gas Solutions
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isDropdownOpen = activeDropdown === item.label;
              const isActive = (item.path && location.pathname === item.path) || isChildActive(item);

              if (!hasDropdown) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path || '/'}
                    className={({ isActive: directActive }) =>
                      `px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                        directActive
                          ? 'text-blue-600 bg-blue-50/80'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                      isActive || isDropdownOpen
                        ? 'text-blue-600 bg-blue-50/80'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'
                      }`}
                    />
                  </NavLink>

                  {/* Desktop Dropdown Panel */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {/* Hover bridge */}
                      <div className="absolute -top-3 left-0 w-full h-3" />

                      <div className="space-y-1">
                        {item.children?.map((child: NavSubItem) => {
                          const isSubActive = location.pathname === child.path;
                          return (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={`group flex items-start p-2.5 rounded-xl transition-all duration-200 ${
                                isSubActive
                                  ? 'bg-blue-50/90 text-blue-700 font-medium'
                                  : 'hover:bg-blue-50/60 text-gray-700 hover:text-blue-600'
                              }`}
                            >
                              <div className="flex-1">
                                <div className="text-sm font-semibold flex items-center justify-between">
                                  <span>{child.label}</span>
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                                </div>
                                {child.description && (
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
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
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              REQUEST A QUOTE
            </NavLink>
          </div>

          {/* Mobile Right Bar (Quote CTA + Menu Button) */}
          <div className="flex items-center gap-2 lg:hidden">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition"
            >
              QUOTE
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-8 space-y-2">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!mobileExpanded[item.label];

              if (!hasChildren) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path || '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-semibold transition ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div key={item.label} className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50/50">
                  <div className="flex items-center justify-between px-4 py-3">
                    <NavLink
                      to={item.path || '#'}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold text-gray-900 hover:text-blue-600 flex-1"
                    >
                      {item.label}
                    </NavLink>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileSubmenu(item.label);
                      }}
                      className="p-1.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-white transition ml-2"
                      aria-label={`Expand ${item.label} menu`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded mobile sub-items */}
                  {isExpanded && (
                    <div className="px-4 pb-3 pt-1 space-y-1 bg-white border-t border-gray-100">
                      {item.children?.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `block px-3 py-2.5 rounded-lg text-sm transition ${
                              isActive
                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                          }
                        >
                          <div className="font-medium text-gray-900">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{child.description}</div>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Quote Button */}
            <div className="pt-4 px-1">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg shadow-blue-500/25 transition"
              >
                REQUEST A QUOTE
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
