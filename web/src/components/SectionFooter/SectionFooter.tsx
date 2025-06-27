import React from 'react';
import clsx from 'clsx';

interface ISectionFooter {
  className?: string;
}

export const SectionFooter: React.FC<ISectionFooter> = ({ className }) => {
  return (
    <div className={clsx('w-full p-4', className)}>
      {/* SectionFooter content goes here */}
    </div>
  );
};

