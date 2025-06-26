import React from 'react';
import clsx from 'clsx';

interface ISectionComingSoon {
  className?: string;
}

export const SectionComingSoon: React.FC<ISectionComingSoon> = ({ className }) => {
  return (
    <div className={clsx('border border-black p-4', className)}>
      {/* SectionComingSoon content goes here */}
    </div>
  );
};

