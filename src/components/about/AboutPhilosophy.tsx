"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const AboutPhilosophy = () => {
  const approachPoints = [
    "Depth of expertise across core practice areas",
    "Clear, practical, and commercially sound advice",
    "Partner-led engagement on all matters",
    "Long-term client relationships built on trust",
  ];

  const whyUsPoints = [
    {
      title: "Strategic Focus",
      description:
        "We deliver practical, commercially viable solutions aligned with our clients' objectives.",
    },
    {
      title: "Partner-Led Service",
      description:
        "Every instruction receives direct partner involvement and oversight.",
    },
    {
      title: "Technical Excellence",
      description:
        "Our advice reflects rigorous legal analysis and deep sector knowledge.",
    },
    {
      title: "Responsiveness and Agility",
      description:
        "We adapt swiftly to shifting regulatory, commercial and dispute landscapes.",
    },
    {
      title: "Integrity and Confidentiality",
      description:
        "We uphold the highest professional standards in all engagements.",
    },
  ];

  return (
    <section className="py-8 lg:py-8 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      
      {/* Decorative Accent Lines */}
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-[#d9d9d9]" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <SectionHeading subtitle="Our Philosophy">
            Strategic Thinking. Precision. Discretion.
          </SectionHeading>
          <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mt-6" />
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Exceptional legal service goes beyond knowledge—it requires clarity of
                thought, commercial insight, and the ability to navigate complex
                challenges with precision and discretion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We combine experience with agility, enabling us to navigate complex
                legal and regulatory landscapes while remaining responsive to our
                clients' evolving needs.
              </p>
            </div>

            {/* Approach Points */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider">
                Our Approach
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {approachPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d9d9d9] mt-2 shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Why Us Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-l-4 border-[#0a456e] pl-6 lg:pl-8">
              <h3 className="text-2xl font-serif font-bold text-[#0a456e] mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-6">
                {whyUsPoints.map((point, index) => (
                  <div key={index} className="group">
                    <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#d9d9d9] group-hover:bg-[#0a456e] transition-colors" />
                      {point.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed pl-4">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;