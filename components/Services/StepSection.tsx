import React from "react";
import OurJourney from "../assets/svg/OurJourney";
import Image from "next/image";
import stepMd from "../assets/images/stepMd.png";
import stepSm from "../assets/images/stepSm.png";

const StepSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto mt-36   ">
      {/* blur ball */}

      <div className="flex items-center justify-between">
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]"></div>
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]"></div>
      </div>

      {/* top heading */}
      <div className="text-white ">
        <h2 className="[font-size:_clamp(1.5em,4vw,2.8em)] text-center">
          Our Journey
        </h2>
        <div className="flex items-center justify-center">
          <OurJourney />
        </div>
        <div className="flex items-center justify-center">
          <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]    "></div>
        </div>
      </div>

      {/* step start */}
      <div className="flex items-center justify-items-center ">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <Image
              className="md:block hidden"
              src={stepMd}
              width={1240}
              height={500}
              alt="Picture of the author"
            />
            <Image
              className="md:hidden block"
              src={stepSm}
              width={330}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* blur ball */}

      <div className="flex items-center justify-between ">
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50   "></div>
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50    "></div>
        <div className="md:h-20 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[160px] blur-[70px]  opacity-50    "></div>
      </div>
    </section>
  );
};

export default StepSection;
