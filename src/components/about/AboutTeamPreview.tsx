// components/about/AboutTeamPreview.tsx
"use client";

import TeamGrid from "@/components/ui/TeamGrid";
import { teamMembers } from "@/lib/teamData";
import Link from "next/link";

const AboutTeamPreview = () => {
  // Get the first 3 partners/leadership team members
  const featuredMembers = teamMembers
    .filter((m) => m.position === "Senior Partner" || m.position === "Managing Partner" || m.position === "Partner")
    .slice(0, 3);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a456e] mb-3">
            Our Leadership
          </h2>
          <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished professionals leading our firm with expertise and dedication.
          </p>
        </div>

        {/* Team Grid - Compact variant for preview */}
        <TeamGrid
          members={featuredMembers}
          variant="compact"
          columns={3}
        />

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-all border border-[#d9d9d9]/30"
          >
            <span>View Full Team</span>
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

export default AboutTeamPreview;