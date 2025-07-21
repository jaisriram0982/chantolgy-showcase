import Image from "next/image";
import { useUtilities } from "@/hooks/useUtilities";
import React from "react";

type Props = {};

const BackgroundChakra = (props: Props) => {
  const { isMobile } = useUtilities();
  return (
    <>
      {!isMobile && (
        <div className="absolute z-0">
          <Image
            src="/common/mandela.png"
            width={300}
            height={300}
            alt="Chakra Mandala"
            className="h-auto"
            priority={false}
          />
        </div>
      )}
    </>
  );
};

export default BackgroundChakra;
