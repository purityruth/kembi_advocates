import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <SectionHeading subtitle="Get in touch with us">
          Contact Us
        </SectionHeading>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We're here to provide expert legal guidance. Reach out to schedule
              a consultation, ask a question, or discuss your legal needs.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-gold text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-blue text-lg">
                    Visit Us
                  </h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <FaPhone className="text-gold text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-blue text-lg">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+254 700 000 000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-gold text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-blue text-lg">
                    Email Us
                  </h4>
                  <p className="text-gray-600">info@kembigituralaw.com</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              href="/contact"
              variant="primary"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
            >
              Send a Message
            </Button>
          </div>

          {/* Right - Map / Office Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3583286079!2d36.68257991640625!3d-1.3032039999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
