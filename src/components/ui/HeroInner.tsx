"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroInnerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  backgroundImage?: string;
  overlayOpacity?: "light" | "medium" | "dark";
  showScrollIndicator?: boolean;
  className?: string;
}

const HeroInner = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "/images/photorealistic-lawyer-environment.jpg",
  overlayOpacity = "dark",
  showScrollIndicator = true,
  className = "",
}: HeroInnerProps) => {
  // Overlay opacity mapping - darker overall
  const overlayStyles = {
    light: "from-[#0a456e]/80 via-[#0a456e]/70 to-[#0a456e]/50",
    medium: "from-[#0a456e]/90 via-[#0a456e]/80 to-[#0a456e]/60",
    dark: "from-[#051a29]/65 via-[#051a29]/70 to-[#051a29]/60",
  };

  return (
    <section
      className={`relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Darker Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayStyles[overlayOpacity]}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements - Subtle */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9d9d9]/5 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Flex container for left and right alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end min-h-[280px] md:min-h-[320px]">
          
          {/* Left Side - Title and Subtitle */}
          <div className="max-w-3xl">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-[1.2] text-white mb-4"
            >
              {title}
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#d9d9d9] mb-5"
            />

            {/* Subtitle - Smaller text */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right Side - Breadcrumb at bottom */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 lg:mt-0"
            >
              <nav className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <Link 
                  href="/" 
                  className="text-[#d9d9d9] hover:text-white transition-colors"
                >
                  Home
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-white/40">/</span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-white font-medium">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-[#d9d9d9] hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-white/50">
              Scroll
            </span>
            <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-[#d9d9d9] to-transparent">
              <motion.div
                animate={{ y: [0, 28, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full h-2 bg-[#d9d9d9]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroInner;