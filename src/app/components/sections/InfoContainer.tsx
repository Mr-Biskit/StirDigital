"use client";
import { FC } from "react";
import { useRive } from "@rive-app/react-canvas";

interface InfoContainerProps {}

const InfoContainer: FC<InfoContainerProps> = ({}) => {
  const { RiveComponent: Piggy } = useRive({
    src: "/animatedIcons/piggy.riv",
    autoplay: true,
  });
  const { RiveComponent: Plate } = useRive({
    src: "/animatedIcons/foodPlate.riv",
    autoplay: true,
  });
  const { RiveComponent: Pie } = useRive({
    src: "/animatedIcons/pie.riv",
    autoplay: true,
  });
  return (
    <div className="relative overflow-hidden bg-creme px-[5%] pb-28 pt-28 text-center lg:overflow-visible">
      <div className="z-2 container relative mx-auto max-w-[1240px] text-center ">
        <div className="mx-auto block max-w-[540px]  justify-center text-center lg:max-w-[800px]">
          <h2 className="mb-3  block max-w-[600px] text-center text-4xl font-bold tracking-tight text-black md:max-w-none md:text-6xl">
            Stirring Up Digital Success
          </h2>
          <p className="text-thin-black mx-auto mt-10 max-w-[600px] text-2xl tracking-wide text-black">
            StirDigital serves up a feast of design and technology, curating an
            online experience that your restaurant/bar deserves.
          </p>
        </div>
        <div className="mx-auto mt-[40px] grid max-w-[1100px] auto-rows-fr grid-cols-1 gap-x-[60px] gap-y-[60px] md:grid-cols-3 md:gap-y-[30px] lg:mt-[80px] ">
          <div className="mx-auto max-w-[320px] ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center">
              <Piggy />
            </div>
            <div className="mx-auto max-w-none text-lg  text-black md:max-w-[300px] ">
              {" "}
              Like a carefully plated dish, our plans cater to every pocket,
              ensuring quality doesn&apos;t come at a steep cost.
            </div>
          </div>
          <div className="mx-auto max-w-[320px] ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center">
              <Plate />
            </div>
            <div className="mx-auto max-w-none text-lg  text-black md:max-w-[300px] ">
              Our templates are tailored to the hospitality industry, ensuring
              they suit your needs perfectly.
            </div>
          </div>
          <div className="mx-auto max-w-[320px] ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center">
              <Pie />
            </div>
            <div className="mx-auto max-w-none text-lg  text-black md:max-w-[300px] ">
              Launch a website that&apos;s ready-to-go, baked with the latest
              tech trends.
            </div>
          </div>
        </div>
        <div className="z-1 relative mt-20 bg-main p-16 text-center">
          <div className="mx-auto max-w-[600px]">
            <img
              src="/images/quote.svg"
              alt="quotation"
              className="mx-auto mb-7 max-w-full"
            />
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
              80% Diners said they are likely to visit a restaurant&apos;s
              website before they dine
            </div>
            <img
              src="/images/mgh.svg"
              alt="mgh"
              className="mx-auto mt-6 w-full max-w-none align-middle md:w-1/2"
            />
          </div>
          <img
            src="/images/claw.svg"
            alt="claw"
            className="absolute bottom-[16%] left-[-5%] right-auto top-auto w-[60px] md:bottom-[10%] md:w-32 md:max-w-none lg:max-w-full"
            loading="lazy"
          />
          <img
            src="/images/pizza.svg"
            alt="pizza"
            className="top[-4%] absolute bottom-auto left-auto right-[-4%] top-[-4%] w-[120px] max-w-none md:w-[150px] lg:max-w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
