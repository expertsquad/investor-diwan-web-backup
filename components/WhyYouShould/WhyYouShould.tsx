import React from "react";
import BottomLine from "../assets/svg/BottomLine";
import LotsChoice from "../assets/svg/LotsChoice";
import MinimalRisk from "../assets/svg/MinimalRisk";
import HightProfit from "../assets/svg/HightProfit";
import Legal from "../assets/svg/Legal";

const WhyYouShould = () => {
  return (
    <section className="text-white max-w-[1280px] mx-auto  ">
      <div className="flex items-center justify-start md:h-44 md:w-44 h-20 w-20 ">
        {" "}
        {/* <div className="md:h-44 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[190px] blur-[70px]    "></div> */}
      </div>
      <div className="md:px-28 px-5">
        <h2 className="[font-size:_clamp(1.6em,4vw,2.5em)] font-semibold text-center">
          Discover The Investor Diwan Difference: Transformative Investing Made
          Simple and Enjoyable!
        </h2>
        <p className="[font-size:_clamp(0.7em,4vw,1.1em)] text-center md:px-32 px-10 text-white text-opacity-70 leading-tight mt-5">
          Your Path to Financial Success Starts Here – Effortless, Rewarding,
          and Tailored Just for You.
        </p>
      </div>

      <div className="flex items-center justify-end ">
        {" "}
        <div className="md:h-28 md:w-28 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[70px]    "></div>
      </div>

      {/* grid section start */}

      <div className="grid md:grid-cols-2 grid-col md:gap-9 gap-5  p-5  ">
        {/* item 1 */}
        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-white bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-tl-2xl">
          <div className="bg-white bg-opacity-10 p-4 w-fit rounded-lg hover:animate-pulse hover:ease-in-out hover:duration-1000 ">
            <LotsChoice />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Effortless Savings Integration
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Seamlessly integrate investing into your lifestyle by effortlessly
            saving with every purchase, making wealth-building a natural part of
            your routine.
          </p>
        </div>
        {/* item 2 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-white bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-tr-2xl">
          <div className="bg-white bg-opacity-10 p-4 w-fit rounded-lg hover:animate-bounce  ">
            <MinimalRisk />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Instant Returns on Spending
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Experience the unique advantage of earning returns on your savings
            even before making substantial investments, ensuring immediate
            financial gratification.
          </p>
        </div>

        {/* item 3 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-white bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-bl-2xl">
          <div className="bg-white bg-opacity-10 p-4 w-fit rounded-lg hover:animate-pulse  ">
            <HightProfit />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Engaging and Informative Experience
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Stay informed and entertained with our short, fun, and interactive
            informational videos, making learning about investments a delightful
            experience.
          </p>
        </div>

        {/* item 4 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-white bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-br-2xl">
          <div className="bg-white bg-opacity-10 p-4 w-fit rounded-lg hover:animate-ping  ">
            <Legal />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Invest with Spare Change Today
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Break free from the misconception that investing is a distant goal.
            Start building your portfolio now with spare change, ensuring
            financial independence at an early stage of life.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-start ">
        {" "}
        <div className="md:h-20 md:w-20 h-12 w-12 bg-[#AE00FF]  md:blur-[90px] blur-[70px]    "></div>
      </div>

      <div className="flex items-center justify-end ">
        {" "}
        <div className="md:h-20 md:w-20 h-12 w-12 bg-[#AE00FF]  md:blur-[90px] blur-[70px]    "></div>
      </div>
    </section>
  );
};

export default WhyYouShould;
