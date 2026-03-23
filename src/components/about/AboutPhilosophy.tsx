import SectionHeading from "@/components/ui/SectionHeading";

const AboutPhilosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading subtitle="Our Philosophy">
          Strategic Thinking. Precision. Discretion.
        </SectionHeading>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Exceptional legal service goes beyond knowledge—it requires clarity of
          thought, commercial insight, and the ability to navigate complex
          challenges with precision and discretion.
        </p>

        {/* Key Approach Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            "Depth of expertise across core practice areas",
            "Clear, practical, and commercially sound advice",
            "Partner-led engagement on all matters",
            "Long-term client relationships built on trust",
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="w-3 h-3 bg-[#0b1f3a] mt-2 rounded-full" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="text-gray-700 text-lg leading-relaxed">
          We combine experience with agility, enabling us to navigate complex
          legal and regulatory landscapes while remaining responsive to our
          clients’ evolving needs.
        </p>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
