"use client";

import HeroInner from "@/components/ui/HeroInner";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutTeamPreview from "@/components/about/AboutTeamPreview";
import AboutSection from "@/components/home/AboutSection";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import ContactCTA from "@/components/ui/ContactCTA";

const AboutPage = () => {

  const milestones = [
    { year: "1995", event: "Firm Established in Nairobi" },
    { year: "2005", event: "Expanded to Corporate Law Practice" },
    { year: "2015", event: "Opened Second Office" },
    { year: "2020", event: "Launched Pro Bono Initiative" },
    { year: "2024", event: "Celebrating 25+ Years of Excellence" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroInner
        title="About Our Firm"
        subtitle="With a legacy of excellence spanning over two decades, Kembi Gitura & Company Advocates stands as a pillar of legal expertise and integrity in Kenya."
        breadcrumbs={[{ label: "About", href: "/about" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="medium"
      />

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a456e]">
                A Legacy of Legal Excellence
              </h2>
              <div className="w-20 h-[2px] bg-[#d9d9d9]" />
              <p className="text-gray-700 leading-relaxed">
                Kembi Gitura & Company Advocates was founded on the principles of
                integrity, excellence, and unwavering commitment to justice. For
                over two decades, we have provided strategic legal counsel to
                individuals, corporations, and institutions across Kenya and
                beyond.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our firm combines deep legal expertise with a results-driven
                approach, ensuring that every client receives personalized
                attention and effective solutions tailored to their unique needs.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-4 border-[#0a456e] pl-4">
                  <div className="text-3xl font-bold text-[#0a456e]">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="border-l-4 border-[#0a456e] pl-4">
                  <div className="text-3xl font-bold text-[#0a456e]">500+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] lg:h-[500px] overflow-hidden border border-[#d9d9d9]/30"
            >
              <Image
                src="/images/photorealistic-lawyer-environment.jpg"
                alt="Law firm office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0a456e]/10" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <AboutPhilosophy />

      {/* Leadership Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <AboutTeamPreview />
      </section>

      <ContactCTA />
    </main>
  );
};

export default AboutPage;