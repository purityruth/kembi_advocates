import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ children, subtitle, align = "center" }: Props) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  const lineAlignment = align === "center" ? "mx-auto" : "mr-auto";

  return (
    <div className={`mb-4 ${alignment}`}>
      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
        {children}
      </h2>

      {/* Subtitle (now more premium) */}
      {subtitle && (
        <p className="text-base uppercase tracking-[0.15em] text-secondary-600 font-semibold mb-3">
          {subtitle}
        </p>
      )}

      {/* Accent Line (clean + aligned properly) */}
      <div className={`mt-1 w-20 h-[2px] bg-gold ${lineAlignment}`} />
    </div>
  );
};

export default SectionHeading;
