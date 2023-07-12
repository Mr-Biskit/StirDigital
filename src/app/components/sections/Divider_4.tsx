import React from "react";

const Divider_3 = () => {
  return (
    <div className="z-1 relative flex h-20 flex-col items-center justify-center md:h-32">
      <div className="h-1/2 w-full bg-main" />

      <div className="h-1/2 w-full bg-creme" />
      <img
        src="/images/noodle.svg"
        alt="noodle"
        className="absolute max-w-full align-middle"
        loading="lazy"
      />
      <img
        src="/images/icecream.svg"
        alt="icecream"
        className="absolute bottom-auto left-auto right-[0%] top-[0%] w-28 max-w-full align-middle md:w-32"
        loading="lazy"
      />
      <img
        src="/images/milkshake.svg"
        alt="milkshake"
        className="absolute bottom-[0%] left-[0%] right-auto top-auto w-24 max-w-full align-middle md:bottom-[-70%] md:w-28 lg:bottom-[-84%] lg:w-36"
        loading="lazy"
      />
    </div>
  );
};

export default Divider_3;
