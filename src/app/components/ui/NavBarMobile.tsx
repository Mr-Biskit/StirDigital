"use client";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-60 relative block px-[5%] pt-[20px] lg:hidden ">
      <div className="min-w-auto z-60 relative mx-auto flex max-w-[1240px] items-center justify-between text-center md:min-w-0 ">
        <div>
          <ScrollLink
            to="/"
            spy={true}
            smooth="easeInOutCubic"
            duration={3000}
            className="relative float-left w-[120px] cursor-pointer pl-3"
          >
            <img src="/images/Logo.svg" alt="Stir Digital" loading="lazy" />
          </ScrollLink>
        </div>
        <div className="hamburger-react relative float-right h-[50px] w-[50px]">
          <Hamburger
            direction="left"
            hideOutline={true}
            toggled={isOpen}
            toggle={setIsOpen}
            easing="ease-out"
            rounded
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              transformOrigin: "top",
            }}
            className="fixed left-0 top-[70px] z-50 w-screen overflow-auto bg-white"
          >
            <nav className="p-4 text-center">
              <NavBarItem
                name="Benefits"
                link="benefits"
                closeMenu={() => setIsOpen(false)}
              />
              <NavBarItem
                name="Templates"
                link="templates"
                closeMenu={() => setIsOpen(false)}
              />
              <NavBarItem
                name="Pricing"
                link="pricing"
                closeMenu={() => setIsOpen(false)}
              />
              <NavBarItem
                name="FAQ"
                link="faqs"
                closeMenu={() => setIsOpen(false)}
              />
              <NavBarItem
                name="Scope of work"
                link="scope-of-work"
                closeMenu={() => setIsOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarMobile;

type NavBarItemProps = {
  name: string;
  link: string;
  closeMenu: () => void;
};

const NavBarItem = ({ name, link, closeMenu }: NavBarItemProps) => {
  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth="easeInOutCubic"
      duration={3000}
      className="relative mx-auto block cursor-pointer p-[20px] text-left align-top font-bold tracking-tighter text-[#222]"
      onClick={closeMenu}
    >
      {name}
    </ScrollLink>
  );
};
