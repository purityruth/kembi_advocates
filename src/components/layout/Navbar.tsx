'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  // Determine text color based on scroll and mobile menu state
  const textColor = isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white';
  const logoPrimaryColor = isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold">
            <span className={logoPrimaryColor}>Kembi Gitura</span>
            <span className="text-accent"> & Co.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative font-medium transition-colors duration-200 group ${
                    isScrolled || mobileMenuOpen
                      ? 'text-primary hover:text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                  {/* Active indicator - animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl focus:outline-none transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-primary" />
            ) : (
              <FaBars className={textColor} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: 0 }}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative block text-xl font-medium transition-colors py-2 ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {/* Active indicator for mobile - elegant left accent */}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-full" />
                  )}
                  {/* Subtle hover effect for touch devices */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/30 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop with blur effect */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;