import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  href: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({ href, title, children, className }: CardProps) => {
  return (
    <Link href={href} className={`block group ${className || ""}`}>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 border border-gray-200 hover:-translate-y-2">
        {/* Card Title */}
        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-gold transition-colors mb-3">
          {title}
        </h3>

        {/* Excerpt / description */}
        {children && (
          <div className="text-gray-700 text-sm mb-4 group-hover:text-gray-900 transition-colors">
            {children}
          </div>
        )}

        <span className="text-yellow-600 font-semibold tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
          Read More <span>→</span>
        </span>
      </div>
    </Link>
  );
};

export default Card;
