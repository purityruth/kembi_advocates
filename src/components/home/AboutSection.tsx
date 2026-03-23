"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "25+", label: "Years of Excellence", icon: "⚖️" },
    { value: "500+", label: "Cases Won", icon: "📜" },
    { value: "98%", label: "Success Rate", icon: "⭐" },
    { value: "50+", label: "Expert Lawyers", icon: "👥" },
  ];

  const principles = [
    "Integrity First",
    "Results-Driven",
    "Client-Centric",
    "Strategic Excellence",
  ];

  return (
    <section className="py-8 lg:py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      
      {/* Decorative Accent Lines */}
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-[#d9d9d9]" />
      <div className="absolute bottom-0 right-0 w-32 h-[2px] bg-[#d9d9d9]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <SectionHeading 
            subtitle="With decades of combined experience and a legacy of excellence"
            className="text-center text-primary"
          >
            About Our Firm
          </SectionHeading>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Section - Premium Visual Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full overflow-hidden border border-[#d9d9d9]/30">
              <Image
                src="/images/photorealistic-lawyer-environment.jpg"
                alt="Kembi Gitura & Company Advocates - Premium Law Firm"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              
              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a456e]/20 via-transparent to-transparent" />
              
              {/* Accent Border */}
              <div className="absolute inset-0 border border-white/20 pointer-events-none" />
            </div>

            {/* Experience Badge - Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a456e] p-5 border border-[#d9d9d9]/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d9d9d9]">25+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Years of Trust</div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-[1.2] text-[#0a456e]">
              Strategic Legal Solutions
              <span className="block text-gray-900 mt-2">Built on Trust & Excellence</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-20 h-[2px] bg-[#d9d9d9]" />

            {/* Description */}
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kembi Gitura & Company Advocates stands as a premier law firm in Nairobi, Kenya, 
                delivering exceptional legal services with unwavering commitment to excellence, 
                integrity, and client success.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our distinguished team combines decades of specialized expertise with a 
                results-driven approach, navigating complex legal challenges across corporate, 
                commercial, and civil litigation practices. We are dedicated to providing 
                strategic counsel that protects our clients' interests and advances their 
                long-term objectives.
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider mb-4">
                Our Guiding Principles
              </h3>
              <div className="flex flex-wrap gap-3">
                {principles.map((principle, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 border border-[#d9d9d9]/50 text-gray-700 text-sm font-medium"
                  >
                    {principle}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#d9d9d9]/30">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl text-[#0a456e]/60">{stat.icon}</span>
                  <div>
                    <div className="text-2xl font-bold text-[#0a456e]">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                href="/about-us"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a456e] text-white font-semibold text-base tracking-wide hover:bg-[#0a456e]/90 transition-all duration-300 border border-[#d9d9d9]/20"
              >
                <span>Learn More About Our Firm</span>
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
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Optional: Trust Indicators Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-[#d9d9d9]/30 hidden md:block"
        >
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="text-sm text-gray-500 uppercase tracking-wider">
              Trusted by industry leaders
            </div>
            <div className="flex flex-wrap gap-12 opacity-60">
              {["Corporate", "Commercial", "Litigation", "Real Estate", "Employment"].map((area, index) => (
                <span key={index} className="text-sm text-gray-600 font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;