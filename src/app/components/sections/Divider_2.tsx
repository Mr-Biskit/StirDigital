import React from "react";

export const Divider_2 = () => {
  return (
    <div className="z-1 relative flex h-20 flex-col items-center justify-center md:h-32">
      <div className="h-1/2 w-full bg-orange" />

      <div className="h-1/2 w-full bg-creme" />
      <img
        src="/images/line.svg"
        alt="line"
        className="absolute max-w-full align-middle"
        loading="lazy"
      />
      <img
        src="/images/donut.svg"
        alt="donut"
        className=" absolute bottom-auto left-[0%] right-auto top-[-57%] w-28 max-w-none md:top-[-80%] md:w-48"
        loading="lazy"
      />
    </div>
  );
};
