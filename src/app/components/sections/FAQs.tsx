"use client";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = () => {
  return (
    <div id="faqs" className=" overflow-hidden bg-creme px-[5%] py-28">
      <div className="z-2 min-w-auto container relative mx-auto max-w-7xl text-center ">
        <h2 className="mb-3  block max-w-[600px] text-center text-4xl font-bold tracking-tight text-black md:max-w-none md:text-6xl">
          FAQs
        </h2>
        <div className="mx-auto mt-16 max-w-[800px] overflow-hidden">
          <FAQItem
            question="Why wouldn't I just hire an agency or freelancer?"
            answer="StirDigital offers budget-friendly solutions tailored to restaurants. Unlike agencies or freelancers, we provide ongoing updates and support, saving you costs in the long run. Our service bundles design, updates, and SEO at an affordable monthly rate, allowing you to focus on running your restaurant."
          />
          <FAQItem
            question="Does the cost include the domain or photographs?"
            answer="While our pricing structure does not directly cover domain registration or professional photographs, we've intentionally designed it this way. By focusing our costs on essential technical services like building, optimizing, and maintaining your website, we free up your budget to invest in a domain name and quality photography that truly captures your restaurant's essence."
            answer2="However, we do offer high-quality image optimization as part of all our plans. This ensures that the photographs you choose to represent your restaurant are displayed at their absolute best. Also, our pricing includes website hosting, so there's no need for you to seek a separate hosting provider."
          />
          <FAQItem
            question="Does your plan include reservation software or online ordering?"
            answer="Our plans do not directly include reservation software or online ordering systems, but there's a reason behind this. We understand that every restaurant or bar is unique and operates differently. The market is filled with a myriad of reservation and Point-of-Sale (POS) systems, and our aim is to offer you the flexibility to choose the one that best fits your needs."
            answer2="Our talented team of developers is skilled in integrating virtually any provider you currently use into your new website. If you don't have a preferred provider, we'd be more than happy to recommend some of our favorites. In this way, we ensure that the system you use aligns seamlessly with your business model and operational flow."
          />
          <FAQItem
            question="What is under the hood of the websites?"
            answer="Our websites are meticulously designed and coded as standalone web applications. We steer clear of cookie-cutter solutions like WordPress templates or generic online web designers. Instead, we work with robust and modern technology stacks like React and TypeScript, and employ up-to-date styling techniques."
            answer2="The primary advantage of this approach is scalability. As your business grows and your needs evolve, our coded solutions can adapt and scale along with you, providing a high degree of flexibility and performance."
          />
          <FAQItem
            question="How can I update the website once it's completed?"
            answer="At StirDigital, we understand the dynamic nature of the restaurant industry. That's why all our plans include an intuitive and user-friendly Content Management System (CMS) that allows you to update the site as needed. However, if you need any technical assistance, our team is always ready to help."
          />
          <FAQItem
            question="What happens if my website goes down or encounters an issue?"
            answer="We provide constant monitoring for your website to ensure maximum uptime. In the unlikely event of a downtime or any issue, our team is on standby to address the problem promptly to reduce any potential disruption to your business."
          />
          <FAQItem
            question="Can my website handle online events or promotions?"
            answer="Absolutely. Our websites are built to be flexible and functional. You can easily add information about events, special promotions, or any other news to keep your customers informed and engaged."
          />
          <FAQItem
            question="Will my website be mobile-friendly?"
            answer="Yes. All our websites are designed with a responsive layout, which means they adapt to the screen size of the device they're viewed on. Whether your customers are using a desktop, tablet, or mobile phone, your website will look great and function well."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

type FAQProps = {
  question: string;
  answer: string;
  answer2?: string;
};

const FAQItem = ({ question, answer, answer2 }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="mb-8 flex cursor-pointer  items-start justify-between overflow-hidden border-b border-black pb-5 text-left"
      onClick={handleToggle}
    >
      <div className="text-left">
        <div className="mb-5 text-[20px] font-bold leading-7">{question}</div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {answer}
          <br />
          <br />
          {answer2}
        </div>
      </div>
      <div className="h-8 w-8">
        <motion.div
          animate={{ rotateZ: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src="/images/arrow.svg" alt="arrow" className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
};
