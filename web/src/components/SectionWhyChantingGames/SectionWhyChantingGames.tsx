import React from 'react';
import clsx from 'clsx';

interface ISectionWhyChantingGames {
  className?: string;
}

export const SectionWhyChantingGames: React.FC<ISectionWhyChantingGames> = ({ className }) => {
  return (
    <div className={clsx('w-full border border-black p-4', className)}>
      {/* SectionWhyChantingGames content goes here */}
    </div>
  );
};

