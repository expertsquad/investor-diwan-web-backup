import React from "react";
import BottomLine from "../assets/svg/BottomLine";
import LotsChoice from "../assets/svg/LotsChoice";
import MinimalRisk from "../assets/svg/MinimalRisk";
import HightProfit from "../assets/svg/HightProfit";
import Legal from "../assets/svg/Legal";

const WhyYouShould = () => {
  return (
    <section className="text-black max-w-[1280px] mx-auto  ">
      <div className="flex items-center justify-start md:h-44 md:w-44 h-20 w-20 ">
        {" "}
        {/* <div className="md:h-44 md:w-44 h-20 w-20 bg-[#AE00FF]  md:blur-[190px] blur-[70px]    "></div> */}
      </div>
      <div className="md:px-28 px-5">
        <h2 className="[font-size:_clamp(1.6em,4vw,2.5em)] font-semibold text-center">
          Embrace the Student Diwan Experience: Revolutionizing Education with Innovation and Engagement!
        </h2>
        <p className="[font-size:_clamp(0.7em,4vw,1.1em)] text-center md:px-32 px-10 text-black text-opacity-70 leading-tight mt-5">
          Unlock Your Educational Potential – Empowering, Effective, and Customized for Every Learner.
        </p>
      </div>

      <div className="flex items-center justify-end ">
        {" "}
        <div className="md:h-28 md:w-28 h-12 w-12 bg-[#AE00FF]  md:blur-[130px] blur-[70px]    "></div>
      </div>

      {/* grid section start */}

      <div className="grid md:grid-cols-2 grid-col md:gap-9 gap-5  p-5  ">
        {/* item 1 */}
        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-black bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-tl-2xl">
          <div className="bg-black bg-opacity-10 p-4 w-fit rounded-lg hover:animate-pulse hover:ease-in-out hover:duration-1000 ">
            <LotsChoice />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Seamless Learning Integration
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Effortlessly blend education into your daily life with The Student Diwan, turning every moment into a learning opportunity and making knowledge acquisition a seamless part of your routine.
          </p>
        </div>
        {/* item 2 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-black bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-tr-2xl">
          <div className="bg-black bg-opacity-10 p-4 w-fit rounded-lg hover:animate-bounce  ">
            <MinimalRisk />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Instant Knowledge Application
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Unlock the power of immediate application with our educational platform, where the lessons you learn today can be applied tomorrow, offering instant enhancement to your academic and life skills.
          </p>
        </div>

        {/* item 3 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-black bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-bl-2xl">
          <div className="bg-black bg-opacity-10 p-4 w-fit rounded-lg hover:animate-pulse  ">
            <HightProfit />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Interactive and Engaging Learning
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Dive into our dynamic, short, and interactive lessons that make acquiring knowledge an enjoyable and captivating experience, ensuring that learning never feels like a chore.
          </p>
        </div>

        {/* item 4 */}

        <div className="flex flex-col  justify-start gap-4 md:gap-5 bg-black bg-opacity-10 p-7 rounded-lg md:rounded-none md:rounded-br-2xl">
          <div className="bg-black bg-opacity-10 p-4 w-fit rounded-lg hover:animate-ping  ">
            <Legal />
          </div>
          <h3 className="[font-size:_clamp(0.9em,4vw,1.5em)] font-semibold ">
            Start Your Educational Journey with Us
          </h3>
          <div>
            <BottomLine />
          </div>
          <p>
            Dispelling the myth that education is a monumental task, The Student Diwan invites you to begin your journey with small, manageable steps, paving the way to comprehensive knowledge and future success.
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
