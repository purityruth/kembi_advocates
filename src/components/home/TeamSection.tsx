import { getTeamMembers } from "@/lib/api";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";

const TeamSection = async () => {
  const members = await getTeamMembers();
  const preview = members.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <SectionHeading subtitle="Meet our experienced advocates">
          Our Team
        </SectionHeading>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {preview.map((member) => (
            <Card
              key={member.id}
              href={`/team/${member.slug}`}
              title="" // 🔥 Remove title from Card (we control layout here)
              className="p-0 overflow-hidden"
            >
              {/* Image */}
              {member.acf?.photo && (
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={member.acf.photo}
                    alt={member.title.rendered}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gold transition-colors">
                  {member.title.rendered}
                </h3>

                {/* Position */}
                {member.acf?.position && (
                  <p className="text-gold text-sm font-medium mt-1 mb-3 tracking-wide">
                    {member.acf.position}
                  </p>
                )}

                {/* Short Bio (cleaned) */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.content?.rendered
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 120)
                    .trim()}
                  ...
                </p>

                {/* CTA */}
                <span className="mt-auto text-gold font-semibold tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Profile <span>→</span>
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <Button
            href="/team"
            variant="primary"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
