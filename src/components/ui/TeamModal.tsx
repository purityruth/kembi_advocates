"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/lib/teamData";

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamModal = ({ member, onClose }: TeamModalProps) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white text-[#0a456e] flex items-center justify-center border border-[#d9d9d9]/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Column */}
            <div className="relative h-[400px] md:h-full min-h-[400px]">
              <Image
                src={member.image}
                alt={member.fullName}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Content Column */}
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0a456e] mb-1">
                {member.fullName}
              </h2>
              <p className="text-[#d9d9d9] font-medium text-sm mb-4">{member.title}</p>
              
              <div className="w-12 h-[2px] bg-[#d9d9d9] mb-5" />

              {/* Bio */}
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                  Biography
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Areas of Expertise */}
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {member.areasOfExpertise.map((area, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-1 bg-gray-100 text-gray-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education - Brief */}
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-[#0a456e] uppercase tracking-wider mb-2">
                  Education
                </h3>
                <ul className="space-y-0.5">
                  {member.education.slice(0, 2).map((edu, idx) => (
                    <li key={idx} className="text-xs text-gray-600">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="pt-4 border-t border-[#d9d9d9]/30">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-[#0a456e] hover:text-[#d9d9d9] transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamModal;