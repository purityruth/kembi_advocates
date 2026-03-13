import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-dark-blue">
          Kembi Gitura<span className="text-gold"> & Co.</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-dark-blue hover:text-gold transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button - can be expanded later */}
      </nav>
    </header>
  );
};

export default Navbar;