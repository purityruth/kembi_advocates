"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  overlayOpacity?: "light" | "medium" | "dark";
  textAlign?: "left" | "center" | "right";
  className?: string;
}

const ContactCTA = ({
  title = "Ready to Work With Us?",
  subtitle = "Let our experienced team provide the legal guidance you need.",
  buttonText = "Schedule a Consultation",
  buttonLink = "/contact",
  backgroundImage = "/images/photorealistic-lawyer-environment.jpg",
  overlayOpacity = "dark",
  textAlign = "center",
  className = "",
}: ContactCTAProps) => {
  // Overlay opacity mapping
  const overlayStyles = {
    light: "from-[#0a456e]/70 via-[#0a456e]/60 to-[#0a456e]/50",
    medium: "from-[#0a456e]/85 via-[#0a456e]/75 to-[#0a456e]/65",
    dark: "from-[#0a456e]/95 via-[#0a456e]/90 to-[#0a456e]/85",
  };

  // Text alignment classes
  const textAlignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // Button alignment
  const buttonAlignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <section className={`relative py-20 lg:py-28 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Contact us"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayStyles[overlayOpacity]}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-[#d9d9d9]/30" />
      <div className="absolute bottom-0 right-0 w-32 h-[2px] bg-[#d9d9d9]/30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className={`flex flex-col ${textAlignClasses[textAlign]} max-w-3xl mx-auto`}>
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2] mb-4"
          >
            {title}
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`h-[2px] bg-[#d9d9d9] mb-6 ${
              textAlign === "center"
                ? "mx-auto"
                : textAlign === "right"
                ? "ml-auto"
                : ""
            }`}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8"
          >
            {subtitle}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex ${buttonAlignClasses[textAlign]} w-full`}
          >
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d9d9d9] text-[#0a456e] font-semibold text-base tracking-wide hover:bg-white transition-all duration-300 border border-[#d9d9d9]"
            >
              <span>{buttonText}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Optional Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-8 flex ${buttonAlignClasses[textAlign]} gap-6 text-xs text-white/50`}
          >
            <span>No obligation consultation</span>
            <span>•</span>
            <span>100% confidential</span>
            <span>•</span>
            <span>Response within 24 hours</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;