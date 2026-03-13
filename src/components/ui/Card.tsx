import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  href: string;
  title: string;
  children?: ReactNode;
}

const Card = ({ href, title, children }: CardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <h3 className="text-xl font-serif font-semibold text-dark-blue group-hover:text-gold transition-colors">
          {title}
        </h3>
        {children && <div className="mt-3 text-gray-600 text-sm">{children}</div>}
      </div>
    </Link>
  );
};

export default Card;