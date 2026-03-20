import SectionHeading from "@/components/ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Image from "next/image";

const teamPreview = [
  {
    name: "John Kembi",
    position: "Managing Partner",
    photo: "/team/john.jpg",
    slug: "john-kembi",
  },
  {
    name: "Jane Gitura",
    position: "Partner",
    photo: "/team/jane.jpg",
    slug: "jane-gitura",
  },
  {
    name: "Michael Otieno",
    position: "Associate",
    photo: "/team/michael.jpg",
    slug: "michael-otieno",
  },
];

const AboutTeamPreview = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Meet our experienced advocates">
        Our Team
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {teamPreview.map((member, i) => (
          <Card
            key={i}
            href={`/team/${member.slug}`}
            title={member.name}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {member.photo && (
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <p className="text-gold font-medium text-sm mb-2 group-hover:underline">
              {member.position}
            </p>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          href="/team"
          variant="primary"
          className="px-8 py-4 bg-[#001f3f] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          View All Team Members
        </Button>
      </div>
    </div>
  </section>
);

export default AboutTeamPreview;
