// app/team/page.tsx
"use client";

import { useState } from "react";
import HeroInner from "@/components/ui/HeroInner";
import ContactCTA from "@/components/ui/ContactCTA";
import { teamMembers } from "@/lib/teamData";
import type { TeamMember } from "@/lib/teamData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const positions = ["all", ...new Set(teamMembers.map((m) => m.position))];

  const filteredMembers =
    filter === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.position === filter);

  // Group members by position
  const partners = teamMembers.filter((m) => m.position === "Senior Partner" || m.position === "Managing Partner" || m.position === "Partner");
  const seniorAssociates = teamMembers.filter((m) => m.position === "Senior Associate");
  const associates = teamMembers.filter((m) => m.position === "Associate");

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroInner
        title="Our Team"
        subtitle="Meet the distinguished professionals dedicated to providing exceptional legal counsel and client service."
        breadcrumbs={[{ label: "Team", href: "/team" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        showScrollIndicator={true}
      />

      {/* Team Introduction */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team brings together exceptional legal talent, deep industry knowledge,
              and a shared commitment to client success. We work collaboratively across
              practice areas to deliver comprehensive solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 border-b border-[#d9d9d9]/30 pb-6">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => setFilter(position)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === position
                    ? "bg-[#0a456e] text-white"
                    : "bg-transparent text-gray-600 hover:text-[#0a456e] border border-[#d9d9d9]/30 hover:border-[#0a456e]"
                }`}
              >
                {position === "all" ? "All Team Members" : position}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative h-[380px] overflow-hidden border border-[#d9d9d9]/30">
                    <Image
                      src={member.image}
                      alt={member.fullName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a456e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white p-4 border border-[#d9d9d9]">
                        <h3 className="text-lg font-bold text-[#0a456e] mb-1">
                          {member.fullName}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-[#0a456e] mb-1">
                      {member.fullName}
                    </h3>
                    <p className="text-sm text-gray-500">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Team Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white text-[#0a456e] flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Column - Image */}
                <div className="relative h-[500px] md:h-full">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.fullName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-2">
                    {selectedMember.fullName}
                  </h2>
                  <p className="text-[#d9d9d9] font-medium mb-4">{selectedMember.title}</p>
                  
                  <div className="w-12 h-[2px] bg-[#d9d9d9] mb-6" />

                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                      Biography
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.areasOfExpertise.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                      Education
                    </h3>
                    <ul className="space-y-1">
                      {selectedMember.education.map((edu, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                      Achievements
                    </h3>
                    <ul className="space-y-1">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-[#d9d9d9]/30">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-2 text-[#0a456e] hover:text-[#d9d9d9] transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {selectedMember.email}
                    </a>
                    {selectedMember.phone && (
                      <a
                        href={`tel:${selectedMember.phone}`}
                        className="inline-flex items-center gap-2 text-[#0a456e] hover:text-[#d9d9d9] transition-colors text-sm font-medium ml-4"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {selectedMember.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact CTA */}
      <ContactCTA
        title="Work With Our Distinguished Team"
        subtitle="Partner with experienced advocates who are committed to your success."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        textAlign="center"
      />
    </main>
  );
}