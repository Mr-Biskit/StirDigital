"use client";
import { FC } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface NavBarDesktopProps {}

const NavBarDesktop: FC<NavBarDesktopProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="z-100 fixed bottom-[0%] left-[0%] right-[0%] top-auto mb-0 hidden w-full p-7 lg:inline-block"
    >
      <div className="flex justify-center">
        <div className="z-1000 rounded-[100px] bg-black">
          <nav className="relative float-right  flex items-stretch rounded-[100vw] border border-semi p-[6px]">
            <ScrollLink
              to="hero"
              spy={true}
              smooth="easeInOutCubic"
              duration={3000}
              className="relative mx-auto inline-block items-center rounded-[90px] bg-[#2c2c2c] px-6 py-4 text-left align-top hover:bg-[#3E3E3E]"
            >
              <ArrowUpIcon className="h-5 w-5 text-white" />
            </ScrollLink>
            <NavBarItem name="Benefits" link="benefits" />
            <NavBarItem name="Templates" link="templates" />
            <NavBarItem name="Pricing" link="pricing" />
            <NavBarItem name="FAQ" link="faqs" />
            <NavBarItem name="Scope of work" link="scope-of-work" />
            <ScrollLink
              to="/"
              spy={true}
              smooth="easeInOutCubic"
              duration={3000}
              className="relative mx-auto inline-block items-center rounded-[90px] bg-[#2c2c2c] px-6 py-3 text-left align-top font-bold tracking-tighter text-white hover:bg-[#3E3E3E]"
            >
              Login
            </ScrollLink>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBarDesktop;

type NavBarItemProps = {
  name: string;
  link: string;
};

const NavBarItem = ({ name, link }: NavBarItemProps) => {
  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth="easeInOutCubic"
      duration={3000}
      activeClass="scroll-link-active"
      className="relative mx-auto inline-block cursor-pointer items-center rounded-[90px] bg-transparent p-[15px] py-[8px] text-left align-top font-bold tracking-tighter text-white hover:bg-white hover:text-black"
    >
      {name}
    </ScrollLink>
  );
};
