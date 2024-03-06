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
        <h2 className="[font-size:_clamp(1.6em,4vw,2.5em)] text-black font-semibold text-center">
          Explore The Student Diwan Advantage: Transforming Education with Passion and Precision!
        </h2>
        <p className="[font-size:_clamp(0.7em,4vw,1.1em)] text-center text-black text-opacity-70 mt-5 md:mt-2">
          Embark on a Journey of Empowerment – Seamless, Inspiring,
          and Custom-Crafted for Your Success.
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
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)] mt-4 text-black">
              Effortless Education
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)]  opacity-60 text-black mt-4 ">
              Engage with learning like never before. The Student Diwan makes education as easy and enjoyable as your favorite online experience, blending security, simplicity, and fun into every lesson, transforming the way you learn.
            </p>
          </div>

          {/* item 2 */}

          <div className="flex items-center justify-center flex-col  ">
            <div>
              <AllinOneIcon />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)] text-black mt-4">
              Security and Peace of Mind{" "}
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)]  opacity-60 text-black mt-4">
              Experience unparalleled safety with The Student Diwan. Our cutting-edge security systems protect your educational data with advanced encryption and rigorous protocols, ensuring peace of mind for students and educators alike.
            </p>
          </div>

          {/* item 3 */}

          <div className="flex items-center justify-center flex-col ">
            <div>
              <EasyToUseIcon />
            </div>
            <h3 className="[font-size:_clamp(1em,4vw,1.8em)] text-black mt-4">
              Unified Learning Hub
            </h3>
            <p className="[font-size:_clamp(0.8em,4vw,1em)] opacity-60 text-black mt-4  ">
              Discover the ease of centralized education with The Student Diwan. From intuitive course navigation to streamlined communication, everything you need is in one place, simplifying your learning journey for unparalleled convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestInnovations;
