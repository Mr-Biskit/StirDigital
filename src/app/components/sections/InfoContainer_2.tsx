import React from "react";

export const InfoContainer_2 = () => {
  return (
    <div className="overflow-hidden bg-orange px-[5%] pb-24 pt-14 md:overflow-visible ">
      <div className="z-2 min-w-auto container relative mx-auto max-w-7xl text-center">
        <div className="max-auto mx-auto max-w-[540px] text-center lg:max-w-[800px]">
          <h2 className="mb-3  block max-w-[600px] text-center text-4xl font-bold tracking-tight text-black md:max-w-none md:text-6xl">
            It&apos;s Time to
            <span className="decoration-6 underline decoration-main underline-offset-8">
              &quot;Savor&quot;
            </span>
            The Web
          </h2>
          <p className="text-thin-black mx-auto mt-10 max-w-[600px] text-2xl tracking-wide text-black">
            StirDigital sidesteps unpredictable freelancers and overpriced
            firms, providing quality designs for a consistent monthly rate that
            gets you online before you can say &quot;table for two&quot;
          </p>
        </div>
        <div className="mt-[60px] grid auto-rows-auto grid-cols-1 gap-x-14 gap-y-14 md:mt-[100px] md:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center bg-creme px-7 py-10 text-center md:text-left ">
            <img
              src="/images/quote.svg"
              alt="quotation"
              className="mx-auto mb-7 max-w-full"
              loading="lazy"
            />
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Design is everything, and these guys have nailed it.
            </div>
          </div>
          <div className="pr-10 ">
            <div className="mb-10 text-left ">
              <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
                Fully Async
              </div>
              <div className="max-w-[490px] text-[17px] leading-6 text-black">
                Who needs meetings? We sure don&apos;t. We&apos;ve ditched them
                for good.
              </div>
            </div>
            <div className="mb-10 text-left ">
              <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
                Trello-Based Management
              </div>
              <div className="max-w-[490px] text-[17px] leading-6 text-black">
                Supervise your design process using Trello. Easily track active,
                queued, and completed tasks.
              </div>
            </div>
            <div className="mb-10 text-left ">
              <div className="mb-5 text-[20px] font-bold leading-7 tracking-[.5px] text-black">
                All Hands on Deck
              </div>
              <div className="max-w-[490px] text-[17px] leading-6 text-black">
                Invite as many team members as you like, so they can input
                requests and follow their progress.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
