// components/home/PracticeAreasSection.tsx
"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getPracticeAreas } from "@/lib/api";
import Link from "next/link";
import { motion } from "framer-motion";

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

const PracticeAreasSection = () => {
  const [areas, setAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to shuffle array and get first 3
  const getRandomPracticeAreas = (data: any[]) => {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getPracticeAreas();
      const randomAreas = getRandomPracticeAreas(data);
      setAreas(randomAreas);
      setLoading(false);
    };
    fetchAreas();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-[#d9d9d9] border-t-[#0a456e] animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading practice areas...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading subtitle="Areas of Expertise">
          Practice Areas
        </SectionHeading>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
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
                <div className="relative h-56 w-full overflow-hidden border border-[#d9d9d9]/50 bg-white">
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
                    className="text-xl font-bold text-[#0a456e] mb-2 group-hover:text-[#051a29] transition-colors duration-300"
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

        {/* Call-to-action Button */}
        <div className="text-center mt-12">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-all border border-[#d9d9d9]/30"
          >
            <span>View All Practice Areas</span>
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
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;