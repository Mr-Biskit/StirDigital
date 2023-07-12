import { FC } from "react";

const Divider = ({}) => {
  return (
    <div className="z-1 relative flex h-20 flex-col items-center justify-center md:h-32">
      <div className="h-1/2 w-full bg-creme">
        <img
          src="/images/bread.svg"
          alt="bread"
          className="z-2 absolute bottom-auto left-auto right-[0%] top-[-50%] w-24 max-w-none md:w-44 lg:top-[-110%] lg:w-[230px]"
          loading="lazy"
        />
        <img
          src="/images/beer.svg"
          alt="beer"
          className="md:top[-52%] absolute bottom-auto left-[0%] right-auto top-[-50%] w-20 max-w-none md:w-32 lg:top-[-68%] lg:w-44"
          loading="lazy"
        />
      </div>
      <div className="h-1/2 w-full bg-orange" />
      <img
        src="/images/line.svg"
        alt="line"
        className="absolute max-w-full align-middle"
        loading="lazy"
      />
    </div>
  );
};

export default Divider;
