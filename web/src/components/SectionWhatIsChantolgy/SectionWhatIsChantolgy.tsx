import React from 'react';
import clsx from 'clsx';

interface ISectionWhatIsChantolgy {
  className?: string;
}

export const SectionWhatIsChantolgy: React.FC<ISectionWhatIsChantolgy> = ({ className }) => {
  return (
    <div className={clsx('w-full border border-black p-4', className)}>
      {/* SectionWhatIsChantolgy content goes here */}
    </div>
  );
};

