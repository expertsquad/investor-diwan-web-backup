import TopRightAsset from "../Shared/TopRightAsset";
import DropBG from "./DropBG";
import Crosssvg from "./Crosssvg";
import Image from "next/image";
import heroImg from "@/components/assets/images/heroimg.png";
import DotBG from "../assets/svg/DotBG";
import MoveToBottom from "../assets/svg/MoveToBottom";
import { Cinzel } from "next/font/google";
import TopRightAssetSm from "../assets/svg/TopRightAssetSm";

const cinzel = Cinzel({ weight: ["700"], subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="w-full mx-auto  ">
      <div className="relative">
        {/* animation elements */}

        <div className="relative w-full  z-0">
          {/* drop bg in the middle */}
          <div className="top-[-200px] w-[200px] h-[200px] md:w-[500px]  absolute overflow-hidden translate-x-1/2 z-10">
            <DropBG />
          </div>

          {/* top right bg */}
          <div>
            <div className="top-[-200px] right-0 absolute  z-10 md:block hidden">
              <TopRightAsset />
            </div>
            <div className="top-[0px] right-0 absolute  z-10 md:hidden lg:hidden block">
              <TopRightAssetSm />
            </div>
          </div>

          {/* middle blur ball */}
          <div className="h-[288px] w-[288px] bg-[#AE00FF] hidden md:block blur-[150px] absolute top-[-310px] right-2/4 translate-x-1/2 z-10"></div>

          {/* left blur ball */}
          <div className="h-[288px] w-[288px] bg-[#AE00FF] blur-[150px] absolute top-[-300px] left-[-80px] z-10"></div>

          {/* rotate animation big one */}
          <div className="hidden h-12 w-12 md:h-16 md:w-16 -4 top-16 right-0 md:top-28 md:right-0 opacity-60  absolute rounded-sm z-10"></div>
          <div className="h-6 w-6 md:h-8 md:w-8 -4 top-16 right-0 md:top-28 md:right-40 opacity-40  absolute rounded-xl z-10"></div>

          {/* rotate animation running  */}
          <div className="overflow-hidden z-10">
            <div className="h-6 w-6 md:h-12 md:w-12 -4 top-0 right-0 md:top-0 md:right-40 opacity-40 custom-animation-running rounded-full absolute"></div>
          </div>

          {/* rotate animation */}
          <div className=" h-8 w-8 md:h-12 md:w-12 top-80 right-0 md:top-80 md:right-40 opacity-10  absolute hidden md:block rounded-sm z-10">
            <Crosssvg />
          </div>
        </div>

        {/* Content on top */}
        <div className="max-w-[1280px] md:h-[700px] h-[900px] lg:px-0   mx-auto flex md:flex-row flex-col-reverse items-center md:justify-between justify-center md:relative static  z-30 px-5  gap-5 md:mt-20  ">
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center md:text-start text-center  md:absolute  static md:top-[200px] top-0 left-0 ">
            <h1
              className={`[font-size:_clamp(1.6em,4vw,3.2em)] leading-tight text-black ${cinzel.className}`}
            >
              Embark on your journey to financial prosperity{" "}
              <span className="text-[#B0008F] ">with us!</span>
            </h1>
            <p className="text-base text-black text-opacity-70 [font-size:_clamp(0.7em,40vw,1.1em)] mt-5">
              Where Every Spend Becomes An Investment, Transforming Transactions Into Tomorrow&apos;s Wealth.
            </p>
            <div className="text-black mt-5 w-full ">


              {/* small animation */}

              <div className="overflow-hidden h-40 w-40">
                <div className="custom-animation-rotate overflow-hidden opacity-35">
                  <DotBG />
                </div>
              </div>
              <div className="h-[120px] w-[120px] bg-[#AE00FF] hidden md:block blur-[140px]"></div>
            </div>
          </div>
          <div className="text-black md:w-1/2 w-[320px] flex items-center justify-items-center md:absolute  static right-0 overflow-hidden  ">
            <Image
              src={heroImg}
              alt="Hero Images"
            // sizes="(max-width: 600px) 30vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>
        </div>
      </div>
      {/* move to bottom */}

      <div className=" flex items-center justify-center animate-bounce ">
        <MoveToBottom />
      </div>
    </section>
  );
};

export default Hero;
