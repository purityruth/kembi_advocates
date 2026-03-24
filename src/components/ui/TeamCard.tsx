"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/lib/teamData";

interface TeamCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
  variant?: "default" | "compact";
  index?: number;
}

const TeamCard = ({ member, onClick, variant = "default", index = 0 }: TeamCardProps) => {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group cursor-pointer"
      onClick={() => onClick(member)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden border border-[#d9d9d9]/30 ${
        isCompact ? "h-[280px]" : "h-[360px]"
      }`}>
        <Image
          src={member.image}
          alt={member.fullName}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a456e]/90 via-[#0a456e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
      
      {/* Static Content */}
      <div className={`${isCompact ? "mt-3" : "mt-4"} text-center`}>
        <h3 className={`font-bold text-[#0a456e] ${isCompact ? "text-base" : "text-xl"} mb-1`}>
          {member.fullName}
        </h3>
        <p className={`text-gray-500 ${isCompact ? "text-xs" : "text-sm"}`}>
          {member.title}
        </p>
        {!isCompact && member.areasOfExpertise && (
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {member.areasOfExpertise.slice(0, 2).map((area, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600">
                {area.split(" ").slice(0, 2).join(" ")}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;