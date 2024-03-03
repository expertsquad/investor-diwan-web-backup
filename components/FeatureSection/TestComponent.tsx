import React from "react";
import FeatureBG from "../assets/svg/FeatureBG";
import Image from "next/image";
import menWithPen from "@/components/assets/images/manwithpen.png";
import ManWithPenToCard from "../assets/svg/ManWithPenToCard";
import oneClickBalanceView from "../assets/images/oneClickBalanceView.png";
import developmentImg from "../assets/images/developmentImg.png";
import reasonImg from "../assets/images/3reasonImg.png";
import expenseImg from "../assets/images/expenseImg.png";
import { IconDeviceMobile } from "@tabler/icons-react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { IconStack2 } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import ExpenseBG from "../assets/svg/ExpenseBG";
import ReasonBG from "../assets/svg/ReasonBG";
import LineBG from "../assets/svg/LineBG";

const TestComponent = () => {
  return (
    <section className="text-white mb-80 max-w-[1280px] mx-auto">
      {/* blur bg and feature text */}

      <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[140px] blur-[70px]    "></div>
      <div className="flex items-center justify-center ">
        <FeatureBG />
      </div>
      {/* men with pen curved design start */}

      {/* parent element start  */}
      <div className="relative  h-[2800px] ">
        <div className=" flex justify-around absolute  left-1/4 translate-x-[50%] ">
          <Image src={menWithPen} alt="Men with pen " />
        </div>
        <div className="absolute top-16 mr-32   ">
          <LineBG />
        </div>

        {/* one click  balance view  start */}

        <div className="flex justify-between gap-7 absolute top-[200px]">
          <div className="w-1/2">
            <div className="h-80 w-80 bg-gradient-to-l from-[#b0008fb3] to-[#0045e2b3] custom-animation-bg-changed rounded-full flex items-center justify-center overflow-hidden   ">
              <div className="h-56 w-56 ">
                <Image src={oneClickBalanceView} alt="One Click Balance View" />
              </div>
            </div>
          </div>
          {/* content  */}

          <div className="flex flex-col gap-3 p-8 ">
            <div className="bg-white w-fit rounded-full p-4 ">
              <IconDeviceMobile className="text-black " />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,2.1em)]">
            Swipe & Save{" "}
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups.
            </p>
            <IconArrowNarrowRight />
          </div>
        </div>
        {/* one click  balance view  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  lg:block   absolute top-[680px]   ">
          <Image src={menWithPen} alt="Men with pen " />
        </div>

        {/* Expense with Our Limiter  start */}

        <div className="flex justify-between gap-7 absolute top-[1000px]">
          <div className="flex flex-col gap-3 p-8 ">
            <div className="bg-white w-fit rounded-full p-4 ">
              <IconStack2 className="text-black " />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,2.1em)]">
              Expense with Our Limiter
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups.
            </p>
            <IconArrowNarrowRight />
          </div>

          <div className="w-1/2">
            <div className=" h-80 w-80  flex items-center justify-center  relative ">
              <div className="custom-animation-360deg">
                <ExpenseBG />
              </div>

              <Image
                src={expenseImg}
                className="absolute top-20"
                alt="Expense image"
              />
              <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[50px] absolute top-0    "></div>
            </div>
          </div>
          {/* content  */}
        </div>
        {/* Expense with Our Limiter  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  lg:block   absolute top-[1400px]   ">
          <Image src={menWithPen} alt="Men with pen " />
        </div>

        {/* Custom & Plugin Development.  start */}

        <div className="flex justify-between gap-7 absolute top-[1600px]">
          <div className="w-1/2">
            <div className=" h-80 w-80  custom-animation-bg-changed rounded-full flex items-center justify-center  relative ">
              <Image
                src={developmentImg}
                className="absolute top-6 "
                alt="Expense image"
              />
              <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[50px] absolute top-0    "></div>
            </div>
          </div>
          {/* content  */}
          <div className="flex flex-col gap-3 p-8 ">
            <div className="bg-white w-fit rounded-full p-4 ">
              <IconStar className="text-black " />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,2.1em)]">
              Custom & Plugin Development.
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups.
            </p>
            <IconArrowNarrowRight />
          </div>
        </div>
        {/* Custom & Plugin Development.  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  lg:block   absolute top-[2200px]   ">
          <Image src={menWithPen} alt="Men with pen " />
        </div>

        {/* 3 Main Reaosn to Choose us.  start */}

        <div className="flex justify-between gap-7 absolute top-[2400px]">
          {/* content  */}
          <div className="flex flex-col gap-3 p-8 ">
            <div className="bg-white w-fit rounded-full p-4 ">
              <IconStar className="text-black " />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,2.1em)]">
              Custom & Plugin Development.
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Commonly used in the graphic, print & publishing industris for
              previewing visual layout and mockups.
            </p>
            <IconArrowNarrowRight />
          </div>

          <div className="w-1/2">
            <div className=" h-80 w-80  rounded-full flex items-center justify-center  relative ">
              <div className="animate-pulse">
                <ReasonBG />
              </div>
              <Image
                src={reasonImg}
                className="absolute top-10 "
                alt="Expense image"
              />
              <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[50px] absolute top-0    "></div>
            </div>
          </div>
        </div>
        {/* 3 Main Reaosn to Choose us.  end */}
      </div>

      {/* curved parent element end  */}
    </section>
  );
};

export default TestComponent;
