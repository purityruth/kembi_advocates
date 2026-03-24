"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate submission
    setSuccess("Your message has been sent successfully.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact-form" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT - CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold text-dark-blue mb-6">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-8">
            Reach out to us through any of the following channels or send us a
            message directly.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>📍 Address:</strong> Nairobi, Kenya
            </p>
            <p>
              <strong>📞 Phone:</strong> +254 700 000000
            </p>
            <p>
              <strong>✉️ Email:</strong> info@kembigituralaw.com
            </p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
        >
          <h2 className="text-2xl font-semibold text-dark-blue mb-4">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-gold outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-gold outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-gold outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded focus:ring-2 focus:ring-gold outline-none"
          />

          <button
            type="submit"
            className="
    w-full
    bg-gold
    text-black
    font-semibold
    py-3
    rounded-lg
    shadow-md
    hover:shadow-xl
    transform
    hover:scale-105
    transition
    duration-300
  "
          >
            Send Message
          </button>

          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </section>
  );
}
