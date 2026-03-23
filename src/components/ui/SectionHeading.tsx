import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ children, subtitle, align = "center" }: Props) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  const lineAlignment = align === "center" ? "mx-auto" : "mr-auto";

  return (
    <div className={`mb-16 ${alignment}`}>
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        {children}
      </h2>

      {/* Subtitle (now more premium) */}
      {subtitle && (
        <p className="text-base uppercase tracking-[0.25em] text-yellow-600 font-semibold mb-3">
          {subtitle}
        </p>
      )}

      {/* Accent Line (clean + aligned properly) */}
      <div className={`mt-5 w-20 h-[2px] bg-gold ${lineAlignment}`} />
    </div>
  );
};

export default SectionHeading;
