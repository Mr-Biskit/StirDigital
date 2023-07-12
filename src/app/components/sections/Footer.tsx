"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { MapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-black px-[5%] pb-32 pt-16 md:overflow-visible md:pb-28 md:pt-36">
      <div className="z-2 container relative mx-auto max-w-7xl text-center">
        {/* Top Section */}
        <div className="mx-auto max-w-[540px] text-center lg:max-w-[800px]">
          <h2 className="mb-3 block text-[42px] font-bold leading-[44px] tracking-[0.5px] text-white md:text-[50px] md:leading-[60px]">
            Your Digital Partner (Apron Not Included)
          </h2>
          <p className="text-thin-black mx-auto mt-10 block text-2xl tracking-wider text-white">
            Get a guided tour. Unlock the full potential of your restaurant with
            StirDigital - your partner in crafting a compelling online presence.
          </p>
          <button className="mt-10 flex w-full cursor-pointer items-center justify-center rounded-3xl border-2 border-white p-16 text-center text-4xl font-bold tracking-tight text-white transition-colors duration-300 hover:bg-white hover:text-black md:mt-16 ">
            <div>Book a call</div>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 block lg:flex lg:items-start lg:justify-between">
          {/* Left */}
          <div className="mb-10 block max-w-[480px] text-left md:flex md:items-center ">
            <ScrollLink
              to="hero"
              spy={true}
              smooth="easeInOutCubic"
              duration={3000}
              className="relative mr-8 inline-block w-[150px] max-w-full cursor-pointer text-white"
            >
              <img
                src="/images/logoWhite.svg"
                alt="logo"
                className="max-w-full"
                loading="lazy"
              />
            </ScrollLink>
            <div className="flex items-center ">
              <MapIcon className="mr-2 h-6 w-6 text-white" />
              <div className="text-left text-[14px] font-extralight leading-[19px] text-white ">
                Amsterdam, Netherlands
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex-start flex max-w-[310px] justify-between text-left lg:max-w-none">
            <div className="mr-16 flex flex-col">
              <FooterItem name="Pricing" link="pricing" />
              <FooterItem name="Benefits" link="benefits" />
              <Link
                className="mb-4 cursor-pointer text-left text-[15px] font-medium text-white hover:text-main"
                href="/"
              >
                Contact
              </Link>
            </div>
            <div className="mr-16 flex flex-col">
              <FooterItem name="Get Started" link="hero" />
              <Link
                className="mb-4 cursor-pointer text-left text-[15px] font-medium text-white hover:text-main"
                href="/"
              >
                Privacy Policy
              </Link>
              <Link
                className="mb-4 cursor-pointer text-left text-[15px] font-medium text-white hover:text-main"
                href="/"
              >
                Terms & Conditions
              </Link>
              <Link
                className="mb-4 cursor-pointer text-left text-[15px] font-medium text-white hover:text-main"
                href="/"
              >
                Client login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/sushi.svg"
        alt="sushi"
        className="absolute bottom-[0%] left-[0%] right-auto top-auto inline-block w-28 max-w-full align-middle lg:w-[186px]"
      />
    </div>
  );
};

type NavBarItemProps = {
  name: string;
  link: string;
};

const FooterItem = ({ name, link }: NavBarItemProps) => {
  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth="easeInOutCubic"
      duration={3000}
      className="mb-4 cursor-pointer text-left text-[15px] font-medium text-white hover:text-main"
    >
      {name}
    </ScrollLink>
  );
};
