"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 🔥 Animated Background Image */}
      <motion.img
        src="/images/contact-hero.jpg"
        alt="Contact"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌈 Gradient Overlay (NO MORE PLAIN BLACK) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>

      {/* ✨ Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-gold/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>

      {/* 💎 Glass Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-2xl text-center text-white shadow-2xl"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let’s Talk Strategy
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-200 mb-8"
        >
          Whether you're navigating complex legal matters or seeking strategic
          advice, our team is ready to deliver clarity and results.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button
            href="#contact-form"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Start a Conversation
          </Button>
        </motion.div>
      </motion.div>

      {/* 👇 Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-white text-sm"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
