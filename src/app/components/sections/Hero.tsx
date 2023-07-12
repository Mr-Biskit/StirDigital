"use client";
import { FC } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div
      id="hero"
      className="block overflow-hidden px-[5%] pb-14 pt-28 md:pb-10 md:pt-40 lg:overflow-visible"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-2 min-w-auto container relative  mx-auto max-w-7xl text-center md:min-w-0"
      >
        <div className="mx-auto max-w-[540px] text-center lg:max-w-[800px]">
          <h1 className="text-wide-black text-center text-4xl leading-[54px] md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px]">
            Let&apos;s Serve Up Your Digital Transformation
          </h1>
          <p className=" text-thin-black mt-5 text-center text-2xl">
            Culinary Digital Solutions within Your Financial Grasp
          </p>
          <Button link="#pricing" name="See plans" />
          <div className="mt-7 flex items-center justify-center space-x-3">
            <div>{cocktail}</div>
            <div className="fill-red-800">{heart}</div>
            <div>{plate}</div>
          </div>
        </div>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src="/images/Hero1.svg"
        loading="lazy"
        alt="hero"
        className="z-2 absolute bottom-[267px] left-auto right-[0%] top-auto hidden w-[30vw] max-w-[26vw] md:bottom-[32%]  md:inline-block md:max-w-[24vw] lg:bottom-[0%] lg:top-[13%] lg:w-[16vw] lg:max-w-[250px] "
      />
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        loading="lazy"
        src="/images/Hero2.svg"
        alt="hero"
        className="absolute bottom-auto left-[-5%] right-auto top-[10%] inline-block w-[20vw] max-w-[20vw] md:left-[0%] md:top-[12%] md:w-[25vw] md:max-w-[25vw] lg:w-[16vw] lg:max-w-[200px]"
      />
    </div>
  );
};

export default Hero;

const plate = (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
  >
    <path
      d="M11.415 12.393l1.868-2.289c.425-.544.224-.988-.055-2.165-.205-.871-.044-1.854.572-2.5 1.761-1.844 5.343-5.439 5.343-5.439l.472.37-3.693 4.728.79.617 3.87-4.59.479.373-3.558 4.835.79.618 3.885-4.58.443.347-3.538 4.85.791.617 3.693-4.728.433.338s-2.55 4.36-3.898 6.535c-.479.771-1.425 1.161-2.334 1.167-1.211.007-1.685-.089-2.117.464l-2.281 2.795c2.445 2.962 4.559 5.531 5.573 6.829.771.987.065 2.421-1.198 2.421-.42 0-.853-.171-1.167-.573l-8.36-10.072s-.926.719-1.944 1.518c-3.172-5.184-6.267-11.661-6.267-13.955 0-.128-.034-.924.732-.924.245 0 .493.116.674.344.509.642 5.415 6.513 10.002 12.049m-2.952 3.617l1.953 2.365-4.115 5.055c-.295.378-.736.576-1.182.576-1.198 0-1.991-1.402-1.189-2.428l4.533-5.568z"
      fill="#030405"
    />
  </svg>
);
const heart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
  </svg>
);
const cocktail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M17 21.224v-12.772c1.106-.594 1.674-1.762 1.674-3.104 0-1.874-1.473-3.411-3.32-3.515-.768-1.068-2.221-1.833-3.739-1.833-.971 0-1.78.322-2.582.964-1.292-.422-2.747-.143-3.795.792-2.155-.342-4.238 1.244-4.238 3.501 0 1.396.819 2.581 2 3.15v12.817c0 .664-.336 1.203-1 1.203v1.573h16v-1.573c-.664 0-1-.539-1-1.203zm-9-.224h-2v-12.719c.672.422 1.516.406 2 .267v12.452zm7.154-13.707c-.627 0-1.184-.296-1.539-.756l-.451.316c-1.522 1.178-.113 3.303-.01 4.324.102.977-.505 1.712-1.458 1.712-.93 0-1.475-.786-1.401-1.712.078-.978 1.562-2.918-.083-4.438l-.623-.568c-.425.497-1.056.813-1.761.813-.605 0-1.155-.231-1.568-.611-.354.487-.927.804-1.575.804-2.716 0-2.817-3.889 0-3.889.398 0 .77.12 1.077.326.384-.751 1.163-1.266 2.065-1.266.591 0 1.131.222 1.54.586.494-.814 1.39-1.359 2.412-1.359 1.255 0 2.32.82 2.685 1.955.213-.082.445-.126.689-.126 1.072 0 1.943.871 1.943 1.944s-.869 1.945-1.942 1.945zm7.846 5.159c0 2.539-1.791 5.75-5 6.963v-2.16c3.154-1.83 3.969-6.255 1.553-6.255h-1.553v-2h1.912c2.144 0 3.088 1.534 3.088 3.452z" />
  </svg>
);
