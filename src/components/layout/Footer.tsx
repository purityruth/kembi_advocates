import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary/100 bg-gradient-to-r from-primary/900 to-accent/40 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <Link href="/" className="inline-block">
            <div className="relative w-[180px] h-[70px]">
              <Image
                src="/images/WhiteLogoKembi-Gitura.png"
                alt="Kembi Gitura & Company Advocates"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-gray-300 mt-4">
            Excellence in legal practice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[#d9d9d9] tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-[#d9d9d9] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/practice-areas" className="text-gray-300 hover:text-[#d9d9d9] transition-colors">
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-gray-300 hover:text-[#d9d9d9] transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-[#d9d9d9] transition-colors">
                Insights & News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-[#d9d9d9] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold mb-4 text-[#d9d9d9] tracking-wide">Contact</h4>
          <address className="text-sm text-gray-300 not-italic space-y-2">
            <p>Nairobi, Kenya</p>
            <p>
              <a href="mailto:info@kembigituralaw.com" className="hover:text-[#d9d9d9] transition-colors">
                info@kembigituralaw.com
              </a>
            </p>
            <p>
              <a href="tel:+254700000000" className="hover:text-[#d9d9d9] transition-colors">
                +254 700 000 000
              </a>
            </p>
          </address>
        </div>

        {/* Follow Us & Office Hours */}
        <div>
          <h4 className="font-semibold mb-4 text-[#d9d9d9] tracking-wide">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-gray-300 hover:text-[#d9d9d9] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#d9d9d9] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-12.056c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#d9d9d9] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          
          {/* Office Hours */}
          <div>
            <h4 className="font-semibold mb-2 text-[#d9d9d9] tracking-wide text-sm">Office Hours</h4>
            <p className="text-sm text-gray-300">
              Mon - Fri: 8:00 AM - 5:00 PM
            </p>
            <p className="text-sm text-gray-300">
              Sat - Sun: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-[#d9d9d9]/20 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Kembi Gitura & Company Advocates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;