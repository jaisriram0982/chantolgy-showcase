import React from 'react';
import clsx from 'clsx';

interface ISectionOurGames {
  className?: string;
}

export const SectionOurGames: React.FC<ISectionOurGames> = ({ className }) => {
  return (
    <div className={clsx('border border-black p-4', className)}>
      {/* SectionOurGames content goes here */}
    </div>
  );
};

