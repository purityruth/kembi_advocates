"use client";

import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photorealistic-lawyer-environment.jpg"
          alt="Law firm office"
          fill
          className="object-cover"
          priority
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-[#d9d9d9] animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-[#d9d9d9]">
              EST. 1991
            </span>
            <span className="text-white/40">•</span>
            <span className="text-sm text-white/80">Premium Legal Counsel</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold leading-[1.1] mb-6"
          >
            <span className="text-white">Legal Advisory & Professional Services</span>
            <br />
            {/* <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
              & Company
            </span>
            <br />
            <span className="text-white/90">Advocates</span> */}
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-gold to-transparent mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-xl mb-8 leading-relaxed"
          >
            Kembi-Gitura & Co. Advocates is a leading law firm offering a full spectrum of legal services. 
            We have advised corporates, financial institutions, public sector entities, and 
            private clients with a focus on responsive, efficient, and solution-driven outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold text-lg rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              href="/practice-areas"
              className="px-8 py-4 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              Explore Practice Areas
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-white/60">Scroll</span>
          <div className="w-[2px] h-16 bg-gradient-to-b from-gold to-transparent">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-3 bg-gold rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;