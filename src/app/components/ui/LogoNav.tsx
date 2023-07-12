import { FC } from "react";
import Link from "next/link";

const LogoNav = () => {
  return (
    <div className="logoNav absolute top-0 hidden w-full items-center justify-center pt-8 lg:flex">
      <Link href="/" className="box-border inline cursor-pointer">
        <img
          src="/images/Logo.svg"
          alt="Stir Digital"
          className="h-8 w-40 "
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default LogoNav;
