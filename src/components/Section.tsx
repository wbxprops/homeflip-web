import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export const Section = ({ id, className = '', children, containerClassName = '' }: SectionProps) => {
  return (
    <section id={id} className={`px-6 py-24 ${className}`}>
      <div className={`max-w-6xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

