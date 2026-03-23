"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Articles", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => setMobileMenuOpen(false), [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Conditions
  const isHomeTop = isHome && !isScrolled;

  const linkColor = isHomeTop ? "text-white" : "text-gray-700";

  const navbarBg = isHomeTop
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-lg";

  const logoSrc = isHomeTop
    ? "/images/WhiteLogoKembi-Gitura.png"
    : "/images/OriginalLogoKembi-Gitura.png";

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
      >
        <nav className="container mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo - Fixed size that doesn't change on scroll */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[160px] h-[70px] md:w-[180px] md:h-[90px] transition-none">
              <Image
                src={logoSrc}
                alt="Kembi Gitura Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 180px, 280px"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-base font-medium transition-all duration-300 group ${
                    isActive(item.href) 
                      ? (isHomeTop ? "text-white font-semibold" : "text-primary font-semibold") 
                      : `${linkColor} hover:text-primary hover:bg-gray-50 rounded-sm-lg group-hover:shadow-md`
                  }`}
                >
                  {/* Simple scale effect on text only - no background */}
                  <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
                    {item.label}
                  </span>

                  {/* Clean underline animation */}
                  <span
                    className={`absolute -bottom-1 left-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href) 
                        ? "w-6 -translate-x-1/2" 
                        : "w-0 group-hover:w-6 group-hover:-translate-x-1/2"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden text-2xl focus:outline-none transition-all duration-300 z-50 p-2 rounded-lg hover:bg-white/10 active:scale-95 ${linkColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container mx-auto px-6 pt-28 pb-8 h-full overflow-y-auto">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <li 
                key={item.href}
                className="transform transition-all duration-500 delay-[calc(50ms*var(--index))]"
                style={{ 
                  '--index': index,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: mobileMenuOpen ? 1 : 0
                } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative block text-2xl font-medium py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {/* Hover background animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  
                  {/* Content */}
                  <span className="relative inline-flex items-center gap-3">
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                    
                    {/* Text with slide effect */}
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </span>

                  {/* Ripple effect on click */}
                  <span className="absolute inset-0 rounded-xl bg-primary/0 group-active:bg-primary/10 transition-colors duration-150" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;