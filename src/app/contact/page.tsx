// app/contact/page.tsx
"use client";

import { useState } from "react";
import HeroInner from "@/components/ui/HeroInner";
import ContactCTA from "@/components/ui/ContactCTA";
import { motion } from "framer-motion";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser,
  FaComment,
  FaPaperPlane
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormStatus({ type: null, message: "" });
      }, 5000);
    }, 1500);
  };

  const contactInfo = {
    address: "No. 13, Lower Hill Duplex, (next to Old Mutual Tower) Upperhill Road",
    phone: ["020-2454 323", "0711 719 401", "0788 551 401"],
    email: "law@kembi-gituradv.com",
    poBox: "P.O. Box 45834 - 00100 Nairobi, Kenya",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  };

  return (
    <main>
      {/* Hero Section */}
      <HeroInner
        title="Contact Us"
        subtitle="Reach out to our experienced legal team. We're here to provide guidance and answer your questions."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
      />

      {/* Contact Information & Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-4">
                Contact Information
              </h2>
              <div className="w-16 h-[2px] bg-[#d9d9d9] mb-8" />
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-[#0a456e] text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <FaPhone className="text-[#0a456e] text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                    <div className="space-y-1">
                      {contactInfo.phone.map((number, idx) => (
                        <p key={idx} className="text-gray-600">{number}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <FaEnvelope className="text-[#0a456e] text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-[#0a456e] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* P.O. Box */}
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-[#0a456e] text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Postal Address</h3>
                    <p className="text-gray-600">{contactInfo.poBox}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4">
                  <FaClock className="text-[#0a456e] text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-4">
                Send Us a Message
              </h2>
              <div className="w-16 h-[2px] bg-[#d9d9d9] mb-8" />
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {formStatus.type && (
                <div
                  className={`mb-6 p-4 border ${
                    formStatus.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white resize-none"
                      placeholder="Please describe your legal matter or inquiry..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="relative h-[400px] overflow-hidden border border-[#d9d9d9]/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8474241556193!2d36.813477!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e2f3b3a9b3%3A0x8b5c8f2c5e2a4e0!2sUpperhill%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kembi Gitura & Company Advocates Office Location - Upperhill, Nairobi"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="mt-4 text-right">
            <a
              href="https://maps.google.com/?q=Upperhill+Road+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#0a456e] hover:text-[#d9d9d9] transition-colors inline-flex items-center gap-1"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Need Legal Assistance?"
        subtitle="Our team is ready to help with your legal matters."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        textAlign="center"
        showTrustBadges={true}
      />
    </main>
  );
};

export default ContactPage;