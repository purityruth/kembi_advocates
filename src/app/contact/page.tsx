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
  FaLinkedin, 
  FaTwitter,
  FaUser,
  FaBuilding,
  FaComment,
  FaPaperPlane
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: null, message: "" });
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: [
        "Westlands Business Park",
        "5th Floor, Suite 501",
        "Nairobi, Kenya"
      ],
      link: "https://maps.google.com",
      linkText: "Get Directions",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: [
        "Main: +254 700 000 000",
        "Mobile: +254 700 000 001",
        "Emergency: +254 700 000 002"
      ],
      link: "tel:+254700000000",
      linkText: "Call Now",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: [
        "General: info@kembigituralaw.com",
        "Legal: legal@kembigituralaw.com",
        "Careers: careers@kembigituralaw.com"
      ],
      link: "mailto:info@kembigituralaw.com",
      linkText: "Send Email",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      link: null,
      linkText: null,
    },
  ];

  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by filling out the contact form, calling our office, or sending an email. We typically respond within 24 hours and will arrange a convenient time for your initial consultation.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring any relevant documents related to your legal matter, identification, and a list of questions you'd like to discuss. This helps us provide more targeted advice during our initial meeting.",
    },
    {
      question: "What are your consultation fees?",
      answer: "Our initial consultation is offered at a reduced rate. Fees vary based on the complexity of your legal matter. We'll provide a clear fee structure during your first meeting.",
    },
    {
      question: "Do you handle cases outside Nairobi?",
      answer: "Yes, we represent clients across Kenya and have experience handling matters in various jurisdictions. Our team is equipped to travel and represent clients throughout the country.",
    },
    {
      question: "How long does it typically take to resolve a legal matter?",
      answer: "Timelines vary significantly based on the complexity of the case, court schedules, and other factors. We'll provide realistic timelines during our consultation and keep you updated throughout the process.",
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We adhere to strict confidentiality protocols and all client communications are protected by attorney-client privilege. Your privacy is paramount to us.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroInner
        title="Contact Us"
        subtitle="Reach out to our experienced legal team. We're here to provide guidance, answer your questions, and help you navigate your legal matters."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
      />

      {/* Contact Methods Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a456e] mb-4">
              Get in Touch
            </h2>
            <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us. Our team is ready to assist you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-gray-50 border border-[#d9d9d9]/30 hover:border-[#d9d9d9] transition-all"
                >
                  <Icon className="text-[#0a456e] text-3xl mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {method.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {method.link && (
                    <a
                      href={method.link}
                      target={method.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#0a456e] hover:text-[#d9d9d9] transition-colors"
                    >
                      {method.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0a456e] mb-4">
                Send Us a Message
              </h2>
              <div className="w-16 h-[2px] bg-[#d9d9d9] mb-6" />
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
                      placeholder="John Kembi Gitura"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Legal Matter">Legal Matter</option>
                      <option value="Careers">Careers</option>
                      <option value="Other">Other</option>
                    </select>
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
                      rows={5}
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

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0a456e] mb-4">
                Find Us Here
              </h2>
              <div className="w-16 h-[2px] bg-[#d9d9d9] mb-6" />
              
              <div className="relative h-[400px] lg:h-[450px] overflow-hidden border border-[#d9d9d9]/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3583286079!2d36.68257991640625!3d-1.3032039999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Kembi Gitura & Company Advocates Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">📍 Westlands Business Park, 5th Floor, Nairobi, Kenya</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a456e] hover:text-[#d9d9d9] transition-colors flex items-center gap-1"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Need Immediate Legal Assistance?"
        subtitle="Our team is ready to help with urgent legal matters. Contact us now for prompt attention."
        buttonText="Emergency Contact"
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