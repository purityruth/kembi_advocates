"use client";

import Link from "next/link";
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
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
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

  // Conditional colors
  const isHomeTop = isHome && !isScrolled;
  const logoColor = isHomeTop ? "text-white" : "text-[#001f3f]"; // dark blue
  const linkColor = isHomeTop ? "text-white" : "text-[#001f3f]";
  const navbarBg = isHomeTop
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-md";

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center text-2xl font-serif font-bold transition-colors ${logoColor}`}
          >
            <span>Kembi Gitura</span>
            <span className="text-green-700 ml-1">& Co.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 group ${linkColor} hover:text-green-500`}
                >
                  {item.label}
                  {/* Green underline effect */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-green-700 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 z-50 ${linkColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: 0, backgroundColor: "#ffffff" }}
      >
        <div className="container mx-auto px-6 pt-24 pb-8 h-full overflow-y-auto">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative inline-block text-2xl font-medium py-2 transition-colors group ${
                    isActive(item.href)
                      ? "text-green-700"
                      : linkColor + " hover:text-green-700"
                  }`}
                >
                  {item.label}
                  {/* Mobile active indicator */}
                  {isActive(item.href) && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-700 rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
