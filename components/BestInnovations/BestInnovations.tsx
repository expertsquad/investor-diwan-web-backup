import React from "react";
import GradientLine from "../assets/svg/GradientLine";
import GranteeSaftyIcon from "../assets/svg/GranteeSaftyIcon";
import AllinOneIcon from "../assets/svg/AllinOneIcon";
import EasyToUseIcon from "../assets/svg/EasyToUseIcon";

const BestInnovations = () => {
  return (
    <section className="text-white max-w-[1280px] mx-auto ">
      <div className="flex items-center justify-end ">
        {" "}
        <div className="md:h-44 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]    "></div>
      </div>
      <div className="md:px-28 px-5">
        <h2 className="[font-size:_clamp(1.6em,4vw,2.5em)] font-semibold text-center">
          Our Best Innovations for Your Financial Growth
        </h2>
        <p className="[font-size:_clamp(0.7em,4vw,1.1em)] text-center text-white text-opacity-70 mt-5 md:mt-2">
          At The Investor Diwan, we are dedicated to offering our best
          innovations for your financial growth.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <GradientLine />
      </div>

      {/* main     content 3 item */}

      <div className="mt-10">
        <div className="flex items-center justify-center ">
          {" "}
          <div className="md:h-16 md:w-16 h-12 w-12 bg-[#AE00FF]  md:blur-[90px] blur-[70px]    "></div>
        </div>
        <div className="flex  items-center justify-center md:flex-row flex-col p-5 text-center gap-8     ">
          {/* item 1 */}

          <div className="flex items-center justify-center flex-col ">
            <div>
              <GranteeSaftyIcon />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)] mt-4">
              Safety First
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)]  opacity-60 text-fuchsia-100 mt-4 ">
              Rest assured with our top-notch security measures, ensuring your
              financial data is protected through robust encryption and
              stringent safety protocols.
            </p>
          </div>

          {/* item 2 */}

          <div className="flex items-center justify-center flex-col  ">
            <div>
              <AllinOneIcon />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)]  mt-4">
              All-in-One Convenience{" "}
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)]  opacity-60 text-fuchsia-100 mt-4">
              Enjoy the convenience of having all your investment needs in one
              app. From secure transactions to a user-friendly interface,
              we&apos;ve streamlined the process for a seamless investing
              experience.
            </p>
          </div>

          {/* item 3 */}

          <div className="flex items-center justify-center flex-col ">
            <div>
              <EasyToUseIcon />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)] mt-4">
              Seamless Investing
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)] opacity-60 text-fuchsia-100 mt-4  ">
              Simplify your financial journey with our easy-to-use platform.
              Invest with confidence, knowing that safety and simplicity are at
              the core of every feature, making investing as straightforward as
              a shopping spree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestInnovations;
