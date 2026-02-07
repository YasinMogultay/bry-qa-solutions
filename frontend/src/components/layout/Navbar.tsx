import { useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants.ts';
import { Logo } from '../ui/Logo.tsx';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close dropdowns on route change
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpenDropdown(null);
    setMobileOpen(false);
  }

  // Close dropdown on Escape
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpenDropdown(null);
  }, []);

  // Find the currently open link data for the mega-menu
  const openLink = NAV_LINKS.find((l) => 'children' in l && l.children && openDropdown === l.label);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" className="block">
            <Logo variant="dark" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {NAV_LINKS.map((link) => {
              const hasChildren = 'children' in link && link.children;
              const isActive = link.href === location.pathname;
              const isOpen = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                >
                  <Link
                    to={link.href}
                    className={`inline-flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                      isActive || isOpen
                        ? 'text-brand-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    aria-haspopup={hasChildren ? 'true' : undefined}
                  >
                    {link.label}
                    {hasChildren && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-brand-500 text-white text-sm font-semibold rounded-xl hover:bg-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
          >
            Contact us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Full-width mega-menu panel */}
      {openLink && 'children' in openLink && openLink.children && (
        <div className="hidden lg:block border-t border-gray-100 bg-white shadow-lg animate-dropdown-in">
          <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10 pb-12 ${openLink.children.length <= 2 ? 'flex justify-center' : ''}`}>
            <div className={`grid gap-10 ${openLink.children.length <= 2 ? 'max-w-md w-full text-center' : ''}`} style={{ gridTemplateColumns: `repeat(${Math.min(openLink.children.length, 4)}, minmax(0, 1fr))` }} role="menu">
              {openLink.children.map((group, groupIdx) => (
                <div
                  key={group.group}
                  role="group"
                  aria-label={group.group}
                  className="animate-fade-up"
                  style={{ animationDelay: `${groupIdx * 60}ms` }}
                >
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider pb-3 mb-5 border-b border-gray-200">
                    {group.group}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={item.label}
                        className="animate-fade-up"
                        style={{ animationDelay: `${groupIdx * 60 + (itemIdx + 1) * 40}ms` }}
                      >
                        <Link
                          to={item.href}
                          className="block px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-inset"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="block text-sm font-medium text-gray-700 hover:text-brand-600">
                            {item.label}
                          </span>
                          {'description' in item && item.description && (
                            <span className="block mt-0.5 text-xs text-gray-400 leading-snug">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-gray-100" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = 'children' in link && link.children;
                const isAccordionOpen = mobileAccordion === link.label;

                return (
                  <div key={link.label}>
                    {hasChildren ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-inset"
                          onClick={() => setMobileAccordion(isAccordionOpen ? null : link.label)}
                          aria-expanded={isAccordionOpen}
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        {isAccordionOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
                            {link.children!.map((group) =>
                              group.items.map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.href}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-600 rounded-lg font-medium"
                                  onClick={() => { setMobileOpen(false); setMobileAccordion(null); }}
                                >
                                  {item.label}
                                </Link>
                              ))
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-3 py-3 text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-xl font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 px-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
      )}
    </nav>
  );
}
