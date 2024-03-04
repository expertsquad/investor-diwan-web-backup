import Image from "next/image";
import React from "react";
import card1 from "@/components/assets/images/services/card1.jpeg";
import card2 from "@/components/assets/images/services/card2.jpeg";
import card3 from "@/components/assets/images/services/card3.jpeg";
import card4 from "@/components/assets/images/services/card4.jpeg";
import card5 from "@/components/assets/images/services/card5.jpeg";
import card6 from "@/components/assets/images/services/card6.jpeg";
import LeftLine from "../assets/svg/LeftLine";

const ServiceFeature = () => {
  return (
    <section className="text-black  ">
      {/* feature section start */}

      <div className="flex items-center justify-center flex-col gap-4 ">
        <h4 className=" [font-size:_clamp(0.8em,4vw,1.1em)] tracking-[10px]">
          Feature
        </h4>
        <h2 className="[font-size:_clamp(0.9em,4vw,1.8em)] font-bold">
          What We Do
        </h2>
      </div>
      {/* feature section end */}

      <div className="flex items-center  justify-between">
        <div className="md:block hidden">
          <LeftLine />
        </div>
        <div className="md:block hidden">
          <div className="md:h-20 md:w-20 h-10 w-12 bg-[#AE00FF]  md:blur-[100px] blur-[50px]    "></div>
        </div>
      </div>

      {/* 3 col small card stated */}
      <div
        className="max-w-[1240px] mx-auto grid grid-cols-1 md:divide-y divide-[#ffffff40] 
    "
      >
        {/* card 1 */}
        <div className="flex md:items-center md:justify-start justify-center group  items-center md:gap-12 gap-4  md:flex-row flex-col  w-full   p-7">
          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col ">
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[130px] blur-[50px]   "></div>
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)] md:text-right text-center">
              Swipe & Invest
            </h2>
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full  ">
            <div className=" md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card1}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-5/12 md:text-left text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Invest effortlessly with the swipe of your card, seamlessly integrating investing into your daily transactions.
          </div>
        </div>

        {/* card 2 */}
        <div className="flex md:items-center md:justify-start justify-center  items-center md:gap-12 gap-4  md:flex-row flex-col-reverse  w-full group p-7  ">
          <div className="md:w-5/12 md:text-end text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Enjoy effortless savings as you shop, making financial growth a natural by product of your everyday spending habits.
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full  ">
            <div className="round md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card2}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col-reverse ">
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)] md:text-left text-center">
              Save as You Shop
            </h2>
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[130px] blur-[50px]   "></div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex md:items-center md:justify-start justify-center  items-center md:gap-12 gap-4  md:flex-row flex-col  w-full  group  p-7 ">
          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col ">
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[140px] blur-[50px]   "></div>
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)]  md:text-right text-center">
              Early Returns, Instant Gratification
            </h2>
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full ">
            <div className="round md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card3}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-5/12 md:text-left text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Get returns on your savings even before making significant investments, ensuring your money works for you from the start.
          </div>
        </div>

        {/* card 4 */}
        <div className="flex md:items-center md:justify-start justify-center  items-center md:gap-12 gap-4  md:flex-row flex-col-reverse  w-full group   p-7 ">
          <div className="md:w-5/12 md:text-right text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Stay informed with our short, fun, and interactive informational videos, demystifying investment concepts for an engaging learning experience.
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full ">
            <div className="round md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card4}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col-reverse ">
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)]  md:text-left text-center">
              Interactive Investment Education
            </h2>
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[140px] blur-[50px]   "></div>
          </div>
        </div>
        {/* card 5 */}
        <div className="flex md:items-center md:justify-start justify-center  items-center md:gap-12 gap-4  md:flex-row flex-col  w-full group   p-7 ">
          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col ">
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[140px] blur-[50px]   "></div>
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)]  md:text-right text-center">
              Daily Investment News Alerts
            </h2>
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full ">
            <div className="round md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card5}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-5/12 md:text-left text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Stay updated on market trends with daily investment news tailored to your favorite securities, empowering you to make informed decisions.          </div>
        </div>

        {/* card 6 */}
        <div className="flex md:items-center md:justify-start justify-center  items-center md:gap-12 gap-4  md:flex-row flex-col-reverse  group w-full   p-7 ">
          <div className="md:w-5/12 md:text-end text-center w-full [font-size:_clamp(0.6em,4vw,1em)]">
            Start investing with your spare change now, breaking the misconception that you need to wait until a certain age. As a student or at any stage of life, build a substantial portfolio for financial freedom by the time you reach 40.
          </div>

          <div className=" bg-gradient-to-tr from-purple-700 via-blue-900 to-green-950 flex items-center justify-center md:p-2 p-1  rounded-full ">
            <div className="round md:h-40 md:w-40 h-10 w-10  rounded-full">
              <Image
                src={card6}
                alt="Rounded images"
                className="md:h-40 md:w-40 h-10 w-10  rounded-full"
              />
            </div>
          </div>

          <div className="md:w-4/12 w-full flex items-center justify-center md:flex-row flex-col-reverse ">
            <h2 className="[font-size:_clamp(1.3em,4vw,1.7em)]  md:text-start text-center">
              Invest with Spare Change
            </h2>
            <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[140px] blur-[50px]   "></div>
          </div>
        </div>
      </div>

      {/* 3 col small card end */}
    </section>
  );
};

export default ServiceFeature;
