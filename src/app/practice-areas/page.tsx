// app/practice-areas/page.tsx
"use client";

import { getPracticeAreas } from "@/lib/api";
import HeroInner from "@/components/ui/HeroInner";
import ContactCTA from "@/components/ui/ContactCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Map your 8 areas to images in /public/images/practice-areas/
const practiceAreaImages: Record<string, string> = {
  "real-estate-banking-finance": "/images/practice-areas/real-estate.jpg",
  "commercial-corporate-law": "/images/practice-areas/commercial-law.jpg",
  "dispute-resolution": "/images/practice-areas/dispute-resolution.jpg",
  "private-wealth": "/images/practice-areas/private-wealth.jpg",
  "employment-labour-law": "/images/practice-areas/employment-law.jpg",
  "immigration-law": "/images/practice-areas/immigration-law.jpg",
  "family-law": "/images/practice-areas/family-law.jpg",
  "tax-advisory": "/images/practice-areas/tax-advisory.jpg",
};

export default function PracticeAreasPage() {
  const [areas, setAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getPracticeAreas();
      setAreas(data);
      setLoading(false);
    };
    fetchAreas();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#d9d9d9] border-t-[#0a456e] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading practice areas...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroInner
        title="Practice Areas"
        subtitle="We deliver strategic, high-impact legal solutions across key sectors, providing comprehensive counsel to individuals and corporations alike."
        breadcrumbs={[{ label: "Practice Areas", href: "/practice-areas" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        showScrollIndicator={true}
      />

      {/* Practice Areas Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              With deep experience across multiple practice areas, we provide
              comprehensive legal solutions tailored to your specific needs.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-6 lg:gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group block cursor-pointer"
                >
                  {/* Image Container - Sharp corners */}
                  <div className="relative h-56 w-full overflow-hidden border border-[#d9d9d9]/50">
                    <img
                      src={practiceAreaImages[area.slug] || "/images/practice-areas/placeholder.jpg"}
                      alt={area.title.rendered}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#0a456e]/0 group-hover:bg-[#0a456e]/20 transition-all duration-300" />
                  </div>

                  {/* Content - No borders, just text */}
                  <div className="pt-5">
                    <h3
                      className="text-lg font-semibold text-[#0a456e] mb-2 group-hover:text-[#051a29] transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: area.title.rendered }}
                    />
                    <div
                      className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"
                      dangerouslySetInnerHTML={{
                        __html: area.excerpt?.rendered || "",
                      }}
                    />
                    
                    {/* Arrow Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0a456e] group-hover:text-[#051a29] transition-colors duration-300">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-[#d9d9d9]/30 text-center"
          >
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our practice areas are supported by deep industry knowledge and a commitment to delivering
              practical, commercially viable solutions. We work closely with clients to understand their
              unique challenges and provide strategic counsel that protects their interests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Need Expert Legal Counsel?"
        subtitle="Whether you're facing a complex legal challenge or seeking proactive advice, our team is ready to assist."
        buttonText="Discuss Your Case"
        buttonLink="/contact"
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        textAlign="center"
      />
    </main>
  );
}