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
  textAlign?: "left" | "center" | "right";
  showScrollIndicator?: boolean;
  className?: string;
}

const HeroInner = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "/images/photorealistic-lawyer-environment.jpg",
  overlayOpacity = "medium",
  textAlign = "center",
  showScrollIndicator = true,
  className = "",
}: HeroInnerProps) => {
  // Overlay opacity mapping
  const overlayStyles = {
    light: "from-[#0a456e]/60 via-[#0a456e]/40 to-[#d9d9d9]/20",
    medium: "from-[#0a456e]/50 via-[#0a456e]/50 to-[#d9d9d9]/10",
    dark: "from-[#0a456e]/90 via-[#0a456e]/80 to-[#d9d9d9]/40",
  };

  // Text alignment classes
  const textAlignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <section
      className={`relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Dark Navy to Light Grey */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayStyles[overlayOpacity]}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d9d9d9]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className={`flex flex-col ${textAlignClasses[textAlign]} max-w-4xl mx-auto`}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <nav className="flex flex-wrap gap-2 text-sm">
                <Link href="/" className="text-[#d9d9d9] hover:text-white transition-colors">
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

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif font-bold leading-[1.2] text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`h-[2px] bg-[#d9d9d9] mb-6 ${
              textAlign === "center"
                ? "mx-auto"
                : textAlign === "right"
                ? "ml-auto"
                : ""
            }`}
          />

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional CTA Slot - Can be customized per page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            {/* This slot can be populated with buttons or other elements */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-white/60">
              Scroll
            </span>
            <div className="w-[2px] h-12 sm:h-16 bg-gradient-to-b from-[#d9d9d9] to-transparent">
              <motion.div
                animate={{ y: [0, 36, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full h-3 bg-[#d9d9d9]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroInner;