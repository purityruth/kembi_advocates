import SectionHeading from "@/components/ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

const practiceAreas = [
  {
    title: "Real Estate, Banking & Finance",
    description:
      "Strategic legal advisory across complex real estate and banking transactions for institutions, developers, investors, and corporate borrowers.",
    href: "/practice-areas/real-estate-banking-finance",
  },
  {
    title: "Commercial & Corporate Law",
    description:
      "Advising corporates and investors on structuring, governance, complex commercial transactions, and regulatory compliance.",
    href: "/practice-areas/commercial-corporate-law",
  },
  {
    title: "Dispute Resolution",
    description:
      "Providing strategic legal representation in civil and commercial disputes with a focus on efficiency and best possible outcomes.",
    href: "/practice-areas/dispute-resolution",
  },
  {
    title: "Private Wealth",
    description:
      "Discreet advisory services to high net worth individuals on wealth preservation, succession planning, and asset structuring.",
    href: "/practice-areas/private-wealth",
  },
  {
    title: "Employment & Labour Law",
    description:
      "Advising employers and institutions on compliance, risk mitigation, dispute resolution, and effective workplace governance.",
    href: "/practice-areas/employment-labour-law",
  },
];

const AboutPracticeAreas = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Areas of Expertise">
        Our Practice Areas
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {practiceAreas.map((area, i) => (
          <Card
            key={i}
            title={area.title}
            href={area.href}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <p className="text-gray-700 text-sm mb-4">{area.description}</p>
            {/* Read More - subtle yellow accent */}
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          href="/practice-areas"
          variant="primary"
          className="px-8 py-4 bg-[#001f3f] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          View All Practice Areas
        </Button>
      </div>
    </div>
  </section>
);

export default AboutPracticeAreas;
