"use client";
import React from "react";
import Button from "../ui/Button";
import { useRive } from "@rive-app/react-canvas";
const Benefits = () => {
  const { RiveComponent: CMS } = useRive({
    src: "/animatedIcons/cms.riv",
    autoplay: true,
  });
  return (
    <div id="benefits" className=" bg-creme px-[5%] pb-24 pt-16 ">
      <div className="z-2 min-w-auto container relative mx-auto max-w-7xl text-center ">
        <div className="static">
          <div className="mx-auto max-w-[800px]  items-center justify-center">
            <img
              src="/images/stars.svg"
              alt="stars"
              className="mx-auto mb-8 max-w-full"
              loading="lazy"
            />
            <h2 className="mb-3  block max-w-[600px] text-center text-4xl font-bold tracking-tight text-black md:max-w-none md:text-6xl">
              Membership Benefits
            </h2>
            <p className="text-thin-black mx-auto mt-10 max-w-[600px] text-2xl tracking-wide text-black">
              Unlock a feast of advantages with StirDigital membership.
              High-quality designs, rapid turnaround, and affordable rates — all
              the ingredients for your online success story
            </p>
            <Button link="/" name="See plans" />
          </div>
        </div>
        <div className="relative mt-[60px] grid auto-rows-auto grid-cols-1 gap-x-14 gap-y-14 md:mt-[100px] md:grid-cols-3 ">
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center">
              <CMS />
            </div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              Custom Embedded CMS
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Take control with our embedded CMS. Edit your content, anytime,
              anywhere
            </div>
          </div>
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center"></div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              Fixed Monthly Rate
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Experience financial ease with our fixed monthly rate. No
              surprises here.
            </div>
          </div>
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center"></div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              High-Quality Designs
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Impress visitors with our high-quality, eye-catching designs.
              Stand out online.
            </div>
          </div>
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center"></div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              Reservation & Online Ordering Integration
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Seamlessly integrate reservations and online orders, irrespective
              of your provider. Simplify operations, elevate experiences.
            </div>
          </div>
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center"></div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              Scalability
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Easily adjust your plan up or down according to your needs. Grow
              or streamline, on your terms.
            </div>
          </div>
          <div className="mb-10 justify-center text-center ">
            <div className="justfy-center mx-auto mb-4 flex h-28 w-28 items-center"></div>
            <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
              Multilingual Capabilities
            </div>
            <div className="max-w-[490px] text-[17px] leading-6 text-black">
              Reach more customers with multi-language support, even in our
              basic plan. Speak everyone&apos;s language.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
