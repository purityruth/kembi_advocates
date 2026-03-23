"use client"; // ✅ Must be at the top for framer-motion

import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-dark-blue to-blue-900 text-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row md:space-x-12 items-center">
        {/* Left Content: Headline, Paragraph, Buttons */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
          >
            Kembi Gitura <span className="text-gold">& Company</span> Advocates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200 max-w-lg"
          >
            Trusted legal counsel with a commitment to integrity, excellence,
            and client success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-4"
          >
            <div className="flex space-x-4">
              <Button
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 text-black font-bold text-lg rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Consultation
              </Button>

              <Button
                href="/practice-areas"
                className="px-8 py-4 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
              >
                Explore Practice Areas
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Hero Image */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-full md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/photorealistic-lawyer-environment.jpg"
              alt="Law firm office"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
