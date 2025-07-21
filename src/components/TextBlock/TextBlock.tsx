import React from 'react';
import clsx from 'clsx';

interface ITextBlock {
  line1Text: string;
  line2Text: string;
  line3Text: string;
  classNameLine1?: string;
  classNameLine2?: string;
  classNameLine3?: string;
  showUnderline?: boolean;
  className?: string;
}

export const TextBlock: React.FC<ITextBlock> = ({
  line1Text,
  line2Text,
  line3Text,
  classNameLine1,
  classNameLine2,
  classNameLine3,
  showUnderline = false,
  className,
}) => {
  return (
    <div
      className={clsx(
        "mt-16 flex flex-col items-center justify-center space-y-4 lg:space-y-6",
        className
      )}
    >
      {/* Line 1 with optional underline */}
      <div className="flex lg:flex-col gap-x-2 items-center justify-center">
        <p className={clsx("text-style2-white", classNameLine1)}>
          {line1Text}
        </p>
        {showUnderline && (
          <div className="lg:mt-4 relative w-[175px] bg-[rgba(238,105,58,1)] h-[2px] rounded-full">
            <div className="absolute top-0 inset-x-0 w-full h-[8px] rounded-full flex justify-start lg:justify-center items-center">
              <div className="bg-[rgba(238,105,58,1)] w-1/4 -mt-[6px] h-[6px] rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Line 2 */}
      <p className={clsx("text-style3-orange", classNameLine2)}>
        {line2Text}
      </p>

      {/* Line 3 */}
      <p className={clsx("text-style1-white", classNameLine3)}>
        {line3Text}
      </p>
    </div>
  );
};

