import Button from "@/components/ui/Button";

const AboutCTA = () => (
  <section className="py-24 bg-gray-50 text-center">
    <h3 className="text-3xl md:text-4xl font-semibold text-dark-blue mb-6">
      Need Expert Legal Advice?
    </h3>
    <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
      Contact us today to discuss your legal needs and discover how our
      expertise can help protect and grow your interests.
    </p>
    <Button
      href="/contact"
      variant="primary"
      className="px-8 py-4 bg-[#001f3f] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
    >
      Get In Touch
    </Button>
  </section>
);

export default AboutCTA;
