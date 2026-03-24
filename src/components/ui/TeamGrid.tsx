"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import { TeamMember } from "@/lib/teamData";

interface TeamGridProps {
  members: TeamMember[];
  variant?: "default" | "compact";
  columns?: 2 | 3 | 4;
  showFilter?: boolean;
  title?: string;
  subtitle?: string;
}

const TeamGrid = ({
  members,
  variant = "default",
  columns = 3,
  showFilter = false,
  title,
  subtitle,
}: TeamGridProps) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const positions = ["all", ...new Set(members.map((m) => m.position))];

  const filteredMembers =
    filter === "all"
      ? members
      : members.filter((member) => member.position === filter);

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div>
      {/* Optional Title Section */}
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="w-16 h-[2px] bg-[#d9d9d9] mx-auto mt-4" />
        </div>
      )}

      {/* Filter Bar */}
      {showFilter && positions.length > 1 && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 border-b border-[#d9d9d9]/30 pb-6">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => setFilter(position)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
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
      )}

      {/* Team Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}
        >
          {filteredMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={setSelectedMember}
              variant={variant}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default TeamGrid;