import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary";
  children: ReactNode;
  className?: string;
}

const Button = ({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) => {
  // Base classes: smooth transitions, focus styles, slightly larger padding
  const baseClasses =
    "inline-block px-8 py-3 rounded-full font-semibold text-base transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";

  // Variants with gradients, hover scale, and aggressive look
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary-50 rounded-none text-primary hover:scale-105 hover:shadow-2xl focus:ring-gold",
    secondary:
      "bg-secondary text-primary hover:bg-primary/90 hover:text-white rounded-none hover:scale-105 hover:shadow-xl focus:ring-primary",
    outline:
      "border-1 border-white text-white rounded-none hover:bg-white hover:text-primary hover:scale-105 focus:ring-gold",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
