import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  children: ReactNode;
  className?: string;
}

const Button = ({ href, onClick, variant = 'primary', children, className = '' }: ButtonProps) => {
  const baseClasses = 'inline-block px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gold text-dark-blue hover:bg-gold/90 focus:ring-gold',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-dark-blue focus:ring-gold',
    secondary: 'bg-dark-blue text-white hover:bg-dark-blue/90 focus:ring-dark-blue',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
};

export default Button;