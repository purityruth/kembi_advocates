import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <SectionHeading subtitle="With decades of combined experience">
            About Our Firm
          </SectionHeading>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image (left for premium feel) */}
          <div className="relative h-[420px] rounded-xl overflow-hidden shadow-xl group">
            <Image
              src="/images/photorealistic-lawyer-environment.jpg"
              alt="Law firm office"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay for luxury feel */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Strategic Legal Solutions Built on Trust & Excellence
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Kembi Gitura & Company Advocates is a premier law firm based in
              Nairobi, Kenya, delivering exceptional legal services to both
              individuals and corporations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team combines deep legal expertise with a results-driven
              approach to resolve complex legal challenges. We are committed to
              integrity, precision, and long-term client success.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Button
                href="/about-us"
                variant="primary"
                className="px-8 py-4 bg-[#001f3f] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
