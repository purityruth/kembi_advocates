import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ children, subtitle, align = 'center' }: Props) => {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-blue">
        {children}
      </h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
      <div className="mt-4 w-24 h-1 bg-gold mx-auto" style={{ marginLeft: align === 'left' ? '0' : 'auto', marginRight: align === 'left' ? '0' : 'auto' }} />
    </div>
  );
};

export default SectionHeading;