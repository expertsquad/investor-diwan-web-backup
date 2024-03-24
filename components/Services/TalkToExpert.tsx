import { serviceData } from "@/constants";
import Image from "next/image";
import React from "react";
import expertImg from "@/components/assets/images/services/talk-to-us.jpeg";
import ReasonBG from "../assets/svg/ReasonBG";
import ExpertImgBg from "../assets/svg/ExpertImgBg";

const TalkToExpert = () => {
  return (
    <section className="max-w-[1280px] mx-auto md:mb-36 mb-20">
      {/* top blur */}
      <div className="flex items-center justify-center">
        {" "}
        <div className="md:h-24 md:w-24 h-10 w-10 bg-[#AE00FF]  md:blur-[110px] blur-[50px]   "></div>
      </div>

      {/* top section */}
      <div className="flex justify-between items-center md:flex-row flex-col md:my-10 my-5">
        <div>
          {" "}
          <div className="md:h-32 md:w-32 h-10 w-10 bg-[#AE00FF]  md:blur-[160px] blur-[50px] opacity-50  "></div>
        </div>
        <div className="max-w-[700px] mx-auto text-black text-center flex flex-col items-center justify-center gap-7">
          <h4 className=" [font-size:_clamp(0.8em,4vw,1.1em)] tracking-[10px]">
          For Families
          </h4>
          <h2 className="[font-size:_clamp(1em,4vw,1.8em)] font-bold">
          Inclusive Participation
          </h2>
          <p className="[font-size:_clamp(0.6em,4vw,1em)]">
          Stay in the loop with instant access to your childs progress, upcoming assignments, and classroom announcements, making it easier to support their educational journey.
          </p>
        </div>
        <div>
          {" "}
          <div className="md:h-32 md:w-32 h-10 w-10 bg-[#AE00FF]  md:blur-[140px] blur-[50px]   "></div>
        </div>
      </div>

      <div className=" flex md:justify-between md:flex-row flex-col w-full mt-16 md:mt-28">
        {/* big img section */}

        <div className="  rounded-full flex items-center justify-center  relative ">
          <div className="animate-pulse overflow-hidden">
            <ExpertImgBg />
          </div>
          <div className="absolute  top-16 h-80 w-80 rounded-2xl ">
            <Image src={expertImg} alt="Expense image" className="rounded-2xl" />
          </div >
          <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[160px] blur-[50px] absolute top-0    "></div>
        </div>

        {/* list style  */}
        <div className="text-black md:w-1/2 w-full p-5 md:p-0">
          {serviceData.map((data, index) => (
            <div
              key={index}
              className="border-b border-b-white border-opacity-30 mb-10"
            >
              <ul className="">
                <li className="[font-size:_clamp(0.9em,4vw,1.3em)] mb-2 font-medium">
                  {data.title}
                </li>
              </ul>
              <p className="mb-5 md:mb-8 [font-size:_clamp(0.7em,4vw,1em)] text-black text-opacity-70 font-normal ">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalkToExpert;
