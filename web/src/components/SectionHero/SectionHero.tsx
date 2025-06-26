import React from 'react';
import clsx from 'clsx';

interface ISectionHero {
  className?: string;
}

export const SectionHero: React.FC<ISectionHero> = ({ className }) => {
  return (
    <div className={clsx('border border-black p-4', className)}>
      {/* SectionHero content goes here */}
    </div>
  );
};

