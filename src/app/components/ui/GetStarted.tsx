"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  link: string;
  name: string;
}

const GetStarted: FC<ButtonProps> = ({ link, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
      className="mt-2 inline-block md:mt-4 "
    >
      <Link
        href={link}
        className=" flex max-w-full items-center justify-center rounded-lg border border-b-4 border-r-4 border-gray-500 bg-black px-16  py-6 text-center  text-base font-bold tracking-tight text-white md:px-10 lg:px-7"
      >
        <div>{name}</div>
      </Link>
    </motion.div>
  );
};

export default GetStarted;
