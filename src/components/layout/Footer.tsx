const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">Kembi Gitura & Co.</h3>
          <p className="text-sm text-gray-300">Excellence in legal practice.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-gold">About</a></li>
            <li><a href="/practice-areas" className="hover:text-gold">Practice Areas</a></li>
            <li><a href="/contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <address className="text-sm text-gray-300 not-italic">
            Nairobi, Kenya<br />
            info@kembigituralaw.com<br />
            +254 700 000 000
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300">
            {/* Social icons */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kembi Gitura & Company Advocates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;