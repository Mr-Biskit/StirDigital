import React from "react";
import GetStarted from "../ui/GetStarted";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  return (
    <div id="pricing" className=" overflow-hidden bg-main px-[5%] pb-24 pt-16">
      <div className="z-2 min-w-auto container relative mx-auto max-w-7xl text-center ">
        <div className="static">
          <div className="mx-auto max-w-[800px]  items-center justify-center">
            <h2 className="mb-3  block max-w-[600px] text-center text-4xl font-bold tracking-tight text-black md:max-w-none md:text-6xl">
              Membership levels
            </h2>
            <p className="text-thin-black mx-auto mt-10 max-w-[600px] text-2xl tracking-wide text-black">
              Choose a plan and setup thats right for you.
            </p>
            <img
              src="/images/cross.svg"
              alt="cross"
              className="mx-auto mt-16 max-w-full"
            />
          </div>
        </div>

        <div className="mt-14 grid auto-cols-fr auto-rows-auto grid-cols-1 gap-x-[2px] gap-y-[16px] px-4 lg:grid-cols-4 lg:gap-[2px] lg:px-0">
          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-between bg-creme p-8 text-left lg:min-h-[450px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Basic
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  For the essentials of a restaurant website.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="mt-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  €25/m
                </div>
                <div className="mb-[30px] mt-0 text-left text-[12px] text-black text-opacity-50">
                  Billed Monthly
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[476px] ">
              <div>
                <div className="text-left font-bold">What&apos;s included:</div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">Hosting Included</li>
                  <li className="mb-3 text-sm">Online Menu</li>
                  <li className="mb-3 text-sm">Social Media Integration</li>
                  <li className="mb-3 text-sm">
                    Essential Information (address, hours, phone, Google Maps)
                  </li>
                  <li className="mb-3 text-sm">
                    Reservation and Online Ordering Integration
                  </li>
                  <li className="mb-3 text-sm">
                    High-Quality Photo Optimization
                  </li>
                  <li className="mb-3 text-sm">Mobile Responsive</li>
                  <li className="mb-3 text-sm">Email Sign-Up Form</li>
                  <li className="mb-3 text-sm">Embedded CMS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-between bg-creme p-8 text-left lg:min-h-[450px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Premium
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  Perfect for growing restaurants aiming to connect with
                  customers.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="mt-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  €50/m
                </div>
                <div className="mb-[30px] mt-0 text-left text-[12px] text-black text-opacity-50">
                  Billed Monthly
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[476px] ">
              <div>
                <div className="text-left font-bold">What&apos;s included:</div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">
                    All features of the Basic Plan
                  </li>
                  <li className="mb-3 text-sm">Loyalty Program Integration</li>
                  <li className="mb-3 text-sm">
                    Gift Cards and Merchandise Sale
                  </li>
                  <li className="mb-3 text-sm">Embedded CMS Customisation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-between bg-creme p-8 text-left lg:min-h-[450px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Ultimate
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  Ideal for established restaurants aiming for a superior online
                  presence.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="mt-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  €199/m
                </div>
                <div className="mb-[30px] mt-0 text-left text-[12px] text-black text-opacity-50">
                  Billed Quarterly
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[476px] ">
              <div>
                <div className="text-left font-bold">What&apos;s included:</div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">
                    All features of the Premium Plan
                  </li>
                  <li className="mb-3 text-sm">Dedicated Web Designer</li>
                  <li className="mb-3 text-sm">Dedicated Content Manager</li>
                  <li className="mb-3 text-sm">Dedicated Web Strategist</li>
                  <li className="mb-3 text-sm">Dedicated SEO Manager</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-0  bg-main px-0 py-[32px] text-center text-black md:pr-[32px] lg:bg-creme lg:p-[32px]">
            <div className="mx-auto  border-b border-black pb-10 text-center sm:max-w-[300px] lg:text-left ">
              <img
                src="/images/chef.svg"
                alt="chef"
                className="mx-auto mb-5 block  max-w-full text-center align-middle"
              />
              <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                Book a call
              </div>
              <div className="mt-2 text-[15px] leading-[22px] ">
                Learn more about how StirDigital works and how it can help you.
              </div>
              <Link
                href="/"
                className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
              >
                Book a call
              </Link>
            </div>
            <div className="mx-auto mt-10 pb-0 text-center sm:max-w-[300px] lg:text-left ">
              <img
                src="/images/cogs.svg"
                alt="cogs"
                className="mx-auto mb-5 block  max-w-full text-center align-middle"
              />
              <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                Step 2: Choose Your Setup
              </div>
              <div className="mt-2 text-[15px] leading-[22px] ">
                Pick your setup: from simple cost-effective starts to custom,
                high-end digital experiences.
              </div>
              <Link
                href="#setup"
                className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
              >
                <ChevronDownIcon className="h-8 w-8 fill-black" />
              </Link>
            </div>
          </div>
        </div>
        {/* SetUp */}
        <div
          id="setup"
          className="mt-14 grid auto-cols-fr auto-rows-auto grid-cols-1 gap-x-[2px] gap-y-[16px] px-4 lg:grid-cols-3 lg:gap-[2px] lg:px-0"
        >
          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-evenly bg-creme p-8 text-left lg:min-h-[400px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Simple Setup
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  Affordable solution for startups and small restaurants.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="my-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  €0
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[300px] ">
              <div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">1 Year Contract</li>
                  <li className="mb-3 text-sm">
                    4 Pages Setup, including Menu
                  </li>
                  <li className="mb-3 text-sm">1 Revision Cycle</li>
                  <li className="mb-3 text-sm">
                    Average Turnaround Time: 3 weeks
                  </li>
                  <li className="mb-3 text-sm">
                    Theme Customization (Color & Fonts)
                  </li>
                  <li className="mb-3 text-sm">Access to 5 Templates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-evenly bg-creme p-8 text-left lg:min-h-[400px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Essential Setup
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  The most popular choice for fast-growing restaurants.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="my-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  €399
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[300px] ">
              <div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">No Contract</li>
                  <li className="mb-3 text-sm">
                    10 Pages Setup, including Menu
                  </li>
                  <li className="mb-3 text-sm">2 Revision Cycle</li>
                  <li className="mb-3 text-sm">
                    Average Turnaround Time: 1 week
                  </li>
                  <li className="mb-3 text-sm">
                    Theme Customization (Color & Fonts)
                  </li>
                  <li className="mb-3 text-sm">Access to 8 Templates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative flex min-h-0 flex-col justify-evenly bg-creme p-8 text-left lg:min-h-[400px] ">
              <div>
                <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black">
                  Custom Setup
                </div>
                <div className="mt-3 text-[15px] leading-[22px] text-black">
                  Customized solution for restaurants aiming for a unique
                  digital identity.
                </div>
              </div>
              <div className="mt-0 text-left lg:text-center">
                <div className="my-[30px] text-left text-[24px] font-bold leading-[30px] tracking-[0.5px] text-black ">
                  €1999
                </div>
                <GetStarted link="/" name="Get started" />
                <div className="text-left lg:text-center">
                  <Link
                    href="/"
                    className="underline-3 mx-auto mt-[24px] inline-block w-auto cursor-pointer text-center font-bold text-black decoration-gray-800 underline-offset-1 lg:decoration-dotted "
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-[2px] min-h-0 bg-creme p-8 text-left lg:min-h-[300px] ">
              <div>
                <ul className="mb-3 mt-5 block list-inside list-disc pl-2">
                  <li className="mb-3 text-sm">No Contract</li>
                  <li className="mb-3 text-sm">
                    30 Pages Setup, including Menu
                  </li>
                  <li className="mb-3 text-sm">3 Revision Cycle</li>
                  <li className="mb-3 text-sm">
                    Average Turnaround Time: 2 weeks
                  </li>
                  <li className="mb-3 text-sm">
                    Theme Customization (Color & Fonts)
                  </li>
                  <li className="mb-3 text-sm">
                    Custom Design (instead of Templates)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Addons */}
        <div className="mt-[2px] grid auto-cols-fr auto-rows-auto grid-cols-1 gap-x-[2px] gap-y-[16px] bg-black px-4 lg:grid-cols-4 lg:gap-[2px] lg:px-0">
          {/* Basic SEO */}
          <div className="flex max-h-[400px] flex-col items-center justify-center border-b border-white p-10 text-center lg:my-2 lg:border-b-0 lg:border-r lg:border-white">
            <div className="mb-6 inline-block rounded-xl bg-yellow-400 px-3 py-2 uppercase">
              <div className="text-center text-[10px] font-bold leading-[16px] tracking-[0.02em] text-black">
                ADD-ON
              </div>
            </div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white">
              Basic SEO Setup
            </div>
            <div className="mt-3 text-[15px] leading-[22px] text-white">
              Initial setup of SEO keywords, meta descriptions, and tags.
            </div>
            <div className="my-[30px] text-center text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white ">
              €150 <br />
              (one-time)
            </div>
          </div>

          {/* Advanced SEO */}
          <div className="flex max-h-[400px] flex-col items-center justify-center border-b border-white p-10 text-center lg:my-2 lg:border-b-0 lg:border-r lg:border-white">
            <div className="mb-6 inline-block rounded-xl bg-yellow-400 px-3 py-2 uppercase">
              <div className="text-center text-[10px] font-bold leading-[16px] tracking-[0.02em] text-black">
                ADD-ON
              </div>
            </div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white">
              Monthly SEO Maintenance
            </div>
            <div className="mt-3 text-[15px] leading-[22px] text-white">
              Ongoing optimization of website content and metadata for search
              engines.
            </div>
            <div className="my-[30px] text-center text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white ">
              €50 <br />
              (monthly)
            </div>
          </div>
          {/* Multilingual Support */}
          <div className="flex max-h-[400px] flex-col items-center justify-center border-b border-white p-10  text-center lg:my-2 lg:border-b-0 lg:border-r">
            <div className="mb-6 inline-block rounded-xl bg-yellow-400 px-3 py-2 uppercase">
              <div className="text-center text-[10px] font-bold leading-[16px] tracking-[0.02em] text-black">
                ADD-ON
              </div>
            </div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white">
              Multilingual Support
            </div>
            <div className="mt-3 text-[15px] leading-[22px] text-white">
              Initial setup for each additional language on the website.
            </div>
            <div className="my-[30px] text-center text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white ">
              €100 per language <br />
              (one-time)
            </div>
          </div>
          {/* Site Rebuild */}
          <div className="flex max-h-[400px] flex-col items-center justify-center  p-10  text-center lg:my-2 ">
            <div className="mb-6 inline-block rounded-xl bg-yellow-400 px-3 py-2 uppercase">
              <div className="text-center text-[10px] font-bold leading-[16px] tracking-[0.02em] text-black">
                ADD-ON
              </div>
            </div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white">
              Site Rebuild
            </div>
            <div className="mt-3 text-[15px] leading-[22px] text-white">
              Complete redesign and rebuild of the website every 2 years
            </div>
            <div className="my-[30px] text-center text-[24px] font-bold leading-[30px] tracking-[0.5px] text-white ">
              €500 <br />
              (one-time)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
