import React from 'react';
import { Menu, Search, ShoppingBag, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const mainNavItems = [
    { label: 'ShaStore', href: '/store' },
    { label: 'ShaPhone', href: '/shaphone' },
    { label: 'ShaBook', href: '/shabook' },
    { label: 'ShaPad', href: '/shapad' },
    { label: 'ShaWatch', href: '/shawatch' },
    { label: 'ShaAccessories', href: '/accessories' },
    { label: 'ShaSupport', href: '/support' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[44px] bg-[rgba(0,0,0,0.8)] backdrop-blur-[20px]">
        <nav className="h-full max-w-[980px] mx-auto px-4">
          <ul className="h-full flex items-center justify-between md:justify-center gap-x-8">
            <li className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[#f5f5f7] hover:opacity-80 transition-opacity"
              >
                <Menu className="w-5 h-5" />
              </button>
            </li>
            
            <li>
              <Link to="/" className="flex items-center gap-x-2 text-[#f5f5f7] hover:opacity-80 transition-opacity">
                <Zap className="w-5 h-5 text-[#0066FF] animate-glow-pulse" />
                <span className="text-[17px] font-semibold tracking-[-0.01em]">ShaVolts</span>
              </Link>
            </li>

            {mainNavItems.map((item) => (
              <li key={item.label} className="hidden md:block">
                <Link
                  to={item.href}
                  className="text-[#f5f5f7] text-[12px] font-[400] tracking-[-0.01em] hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="flex items-center gap-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-[#f5f5f7] hover:opacity-80 transition-opacity"
              >
                <Search className="w-4 h-4" />
              </button>
              <Link
                to="/bag"
                className="text-[#f5f5f7] hover:opacity-80 transition-opacity"
              >
                <ShoppingBag className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.8)] backdrop-blur-[20px]">
          <div className="container max-w-[980px] mx-auto px-4 pt-[44px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
              <input
                type="text"
                placeholder="Search shavolts.com"
                className="w-full h-[44px] pl-12 pr-4 bg-[#1d1d1f] rounded-lg text-[17px] text-white placeholder-[#86868b] focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.8)] backdrop-blur-[20px]">
          <div className="h-full flex flex-col">
            <div className="h-[44px] px-4 flex items-center justify-between border-b border-[#424245]">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f5f5f7] text-[17px]"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto py-4">
              <ul className="space-y-1">
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-[17px] text-[#f5f5f7] hover:bg-[#1d1d1f] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;