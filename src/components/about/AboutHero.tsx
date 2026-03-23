import Button from "@/components/ui/Button";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0b1f3a] text-white py-32 overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent)]" />

      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        {/* Subtitle */}
        <p className="text-green-700 uppercase tracking-widest text-sm mb-4">
          About The Firm
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
          A Modern Law Firm Built on <br /> Precision, Strategy & Trust
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Kembi Gitura & Co. Advocates delivers high-level legal advisory to
          corporates, institutions, and private clients. Our work is defined by
          clarity of thought, commercial awareness, and the ability to navigate
          complex legal environments with confidence.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            href="/contact"
            variant="primary"
            className="px-8 py-4 bg-[#001f3f] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            Speak With Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
