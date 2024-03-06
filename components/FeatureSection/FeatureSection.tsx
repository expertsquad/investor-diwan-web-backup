import React from "react";
import FeatureBG from "../assets/images/feautures.png";
import Image from "next/image";
import menWithPen from "@/components/assets/images/manwithpen.png";
import ManWithPenToCard from "../assets/svg/ManWithPenToCard";
import oneClickBalanceView from "../assets/images/oneClickBalanceView.png";
import developmentImg from "../assets/images/developmentImg.png";
import reasonImg from "../assets/images/3reasonImg.png";
import expenseImg from "../assets/images/expenseImg.png";
import { IconChevronDown, IconDeviceMobile } from "@tabler/icons-react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { IconStack2 } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import ExpenseBG from "../assets/svg/ExpenseBG";
import ReasonBG from "../assets/svg/ReasonBG";
import LineBG from "../assets/svg/LineBG";
import smallexpenseImg from "@/components/assets/images/smallexpenseImg.png";
import smallprofitImg from "@/components/assets/images/smallprofitImg.png";
import smallfinalImg from "@/components/assets/images/smallfinalImg.png";
import ThreeReason from "../Hero/ThreeReason";

const FeatureSection = () => {
  return (
    <section className="text-black  max-w-[1280px] mx-auto  ">
      {/* blur bg and feature text */}

      <div className="md:h-20 md:w-60 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px] hidden md:block"></div>
      <div className="flex items-center justify-center ">
        {/* <FeatureBG /> */}
        <div>
          <Image src={FeatureBG} alt="" />
        </div>
      </div>
      {/* men with pen curved design start */}

      {/* parent element start  */}
      <div className="relative  h-[2600px] w-full    ">
        <div className="  absolute  md:block hidden left-1/2 transform -translate-x-1/2 top-0    ">
          <Image src={menWithPen} alt="Men with pen " />
        </div>
        <div className="absolute  md:block hidden left-1/2 transform -translate-x-1/2  top-[-100px]    ">
          <LineBG />
        </div>

        {/* one click  balance view  start */}

        <div className="flex justify-between gap-7 md:flex-row flex-col absolute w-full top-[200px] ">
          {/* img */}
          <div className="  md:w-1/2 w-full flex items-center justify-center ">
            <div className="h-80 w-80 bg-gradient-to-l from-[#b0008fb3] to-[#0045e2b3] custom-animation-bg-changed rounded-full flex items-center justify-center overflow-hidden">
              <div className="h-56 w-56 ">
                <Image src={oneClickBalanceView} alt="One Click Balance View" />
              </div>
            </div>
          </div>
          {/* content  */}

          <div className="flex flex-col gap-3 p-8 md:w-1/2 w-full ">
            <div className="bg-white w-fit rounded-full p-4 ">
              <IconDeviceMobile className="text-black " />
            </div>
            <h3 className="[font-size:_clamp(1.5em,4vw,2.1em)]">
              Streamlined Academic Management{" "}
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Dive into an intuitive environment where every class, subject, and syllabus is meticulously organized. Our platform simplifies the academic workflow from routine scheduling to exam administration and grades management. Embrace the ease of automated promotions and a system that adapts to your educational needs, ensuring a smooth and efficient learning journey.
            </p>
            <IconArrowNarrowRight />
          </div>
        </div>
        {/* one click  balance view  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  md:block hidden  absolute top-[630px]   ">
          <Image src={smallexpenseImg} alt="Men with pen " />
        </div>

        {/* Expense with Our Limiter  start */}

        <div className="flex justify-between gap-7 md:flex-row flex-col-reverse  absolute w-full  top-[850px] ">
          {/* content  */}
          <div className="flex flex-col gap-3 p-8 md:w-1/2 w-full ">
            <div className="bg-black w-fit rounded-full p-4 ">
              <IconStack2 className="text-white" />
            </div>
            <h3 className="[font-size:_clamp(1.5em,4vw,2.1em)]">
              Integrated Financial Ecosystem
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Navigate the financial aspects of school management with unparalleled ease. From student fee collection to comprehensive expense tracking, our system is designed to optimize your financial operations. A seamless interface allows for straightforward budgeting and financial oversight, empowering your institution to thrive.
            </p>
            <IconArrowNarrowRight />
          </div>
          {/* img  */}
          <div
            className="  md:w-1/2 w-full    flex items-center  lg:justify-center overflow-hidden   md:justify-end justify-center
            "
          >
            <div className=" flex items-center justify-center  relative ">
              <div className="custom-animation-360deg overflow-hidden">
                <ExpenseBG />
              </div>

              <Image
                src={expenseImg}
                className="absolute top-20 "
                alt="Expense image"
              />
            </div>
          </div>
        </div>
        {/* Expense with Our Limiter  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  md:block hidden   absolute top-[1190px]   ">
          <Image src={smallprofitImg} alt="Men with pen " />
        </div>

        {/* Custom & Plugin Development.  start */}

        <div className="flex justify-between gap-7 md:flex-row flex-col absolute w-full  top-[1470px]">
          <div className="  md:w-1/2 w-full    flex items-center justify-center">
            <div className=" h-80 w-80  custom-animation-bg-changed rounded-full flex items-center justify-center  relative ">
              <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[50px] absolute top-0    "></div>

              <Image
                src={developmentImg}
                className="absolute top-6 "
                alt="Expense image"
              />
            </div>
          </div>
          {/* content  */}
          <div className="flex flex-col gap-3 p-8 md:w-1/2 w-full">
            <div className="bg-black w-fit rounded-full p-4 ">
              <IconStar className="text-white " />
            </div>
            <h3 className="[font-size:_clamp(1.5em,4vw,2.1em)]">
              Comprehensive School Management
            </h3>
            <p className="[font-size:_clamp(0.7em,4vw,1.1em)]">
              Unleash the full potential of your educational institution with our all-in-one management toolkit. From library to session management, our platform brings every resource at your fingertips. Enhanced by a digital noticeboard and a robust school manager, our system fosters a connected and efficient educational community.
            </p>
            <IconArrowNarrowRight />
          </div>
        </div>
        {/* Custom & Plugin Development.  end */}

        {/* small img */}
        <div className=" -translate-x-1/2 left-[40%]  md:block hidden   absolute top-[1850px]   ">
          <Image src={smallfinalImg} alt="Men with pen " />
        </div>

        {/* 3 Main Reaosn to Choose us.  start */}

        <div className="flex justify-between gap-7 md:flex-row flex-col-reverse absolute w-full  top-[2100px]">
          {/* content  */}

          <ThreeReason />
          {/* img */}
          <div className="  md:w-1/2 w-full overflow-hidden  md:overflow-visible  flex items-center justify-center">
            <div className=" h-80 w-80  rounded-full flex items-center justify-center  relative ">
              <div className="animate-pulse lg:overflow-visible overflow-hidden">
                <ReasonBG />
              </div>
              <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[50px] absolute top-0    "></div>

              <div className="absolute top-10 overflow-hidden  ">
                <Image src={reasonImg} alt="Expense image" />
              </div>
            </div>
          </div>
        </div>
        {/* 3 Main Reaosn to Choose us.  end */}
      </div>

      {/* curved parent element end  */}
    </section>
  );
};

export default FeatureSection;
