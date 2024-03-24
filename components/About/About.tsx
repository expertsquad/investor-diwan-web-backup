import Image from "next/image";
import lineImage from "@/components/assets/line-image.svg";
import mapDesktop from "@/components/assets/map-location-desktop.svg";
import dollarMapDesktop from "@/components/assets/doller-map-desktop.svg";
import bridgeDesktop from "@/components/assets/bridge-Desktop.svg";
import movementImageDesktop from "@/components/assets/movementImage-Desktop.svg";
import userPageDemo from "@/components/assets/images/img-6.png";
import { yourSuccessDemoData } from "@/constants";
import earthImg from "@/components/assets/images/world.png";
import CustomSection from "./CustomSection";

const About = () => {
  return (
    <div className="bg-white px-5 md:px-4 max-w-[1280px] mx-auto mt-[150px] md:mt-44 lg:mt-56 mb-8 md:mb-48">
      <title className="text-center text-[22px] md:text-5xl text-black mb-2.5 md:mb-5 font-bold ">
        Student Diwan | About
      </title>

      {/* //--About Student Diwan-- */}
      <div className="relative mb-20 md:mb-28">
        {/* --Background Shape-- */}
        <div className="h-[288px] w-[288px] bg-[#AE00FF] hidden md:block blur-[290px] absolute left-[-500px] translate-x-1/2 "></div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="custom-animation-360deg-opacity max-w-[250px] md:max-w-[750px]">
            <Image src={earthImg} alt="service section earth img" className="opacity-40" />
          </div>
          <div className="flex items-center justify-center gap-5 flex-col absolute">
            <h3 className="text-center text-[22px] md:text-5xl text-black mb-2.5 md:mb-5 font-bold ">
            Welcome to Our World: <br/>The Student Diwan
            </h3>
            <div className="flex items-center justify-center [width:clamp(250px,50vw,500px)]">
              <Image src={lineImage} alt="line image" />
            </div>
            <p className="text-sm md:text-[18px] text-black text-opacity-70 text-center mt-4 md:mt-8 md:w-[900px] leading-8">
            Hey there,
We are really glad you stopped by to learn a bit more about us. You see, The Student Diwan is not just a project or a platform; it is the heartbeat of a dream that began in a small corner of Qatar, fueled by a group of friends passionate about changing the educational game.

            </p>
          </div>
        </div>
      </div>
      {/* //--spark of innovation-- */}
      <div className="bg-black bg-opacity-10 px-5 py-[30px] md:px-10 md:py-16 lg:px-16 lg:py-24 rounded-md mb-6 md:mb-16 ">
        <h4 className="text-[18px] md:text-[50px] font-bold text-center text-black animate-bounce">
        Why We Started        </h4>
        <p className="text-black text-opacity-70 text-center text-sm md:text-[18px] leading-tight mt-5 md:mt-7">
        Remember those days in school when you felt like just another face in the crowd, textbooks seemed like they were written in ancient code, and the classroom walls felt more like barriers than gateways? We do. That is exactly why we started The Student Diwan. We believed there had to be a way to make learning not just more accessible, but truly captivating—a journey that every student would want to embark on.        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
      {/* //--World & Map financial Navigation-- */}
      <CustomSection
        title="What We have Built"
text="So, what did we do? We rolled up our sleeves and built The Student Diwan from the ground up. It is our cozy corner of the internet where learning comes alive, where educators and students come together to share, explore, and grow. Our platform? It is as versatile as a Swiss Army knife, designed to fit your needs, whether you are mapping out a curriculum, diving into collaborative projects, or just looking for that spark of inspiration."        image={earthImg}
        reverse
      />

      <div className="flex items-center justify-between">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
      {/* //--Pathway of Financial ETC-- */}
      <CustomSection
        title="Our Tribe"
text="But what truly makes The Student Diwan special is the tribe that calls it home. We are a melting pot of curious minds, spirited educators, and supportive families, all united in our belief that education is the key to unlocking a world of possibilities. Here, every question is celebrated, every achievement is a collective victory, and no one ever has to learn alone."        image={dollarMapDesktop}
        reverse
        imageOrder
      />

      <div className="flex items-center justify-between">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
      {/* //--Bridging the Gap in Financial Understanding-- */}
      <CustomSection
        title="Come Join Us"
text="If you have ever believed that education could be more than just lectures and textbooks, that it could be an adventure that excites and empowers, then you are in the right place. We are inviting you to join us on this journey. Bring your ideas, your dreams, and your passion for learning. Together, we will turn the page to a new chapter in education.

This isn it just about us. It is about all of us. Welcome to The Student Diwan, where every lesson is an adventure waiting to happen.

With warmth and excitement,
The Team at The Student Diwan
"        image={bridgeDesktop}
        reverse
      />
      <div className="flex items-center justify-between">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
      {/* //--Movement for Financial Empowerment--
      <CustomSection
        title="Movement for Financial Empowerment"
        text="Today, The Student Diwan transcends being just a platform; it has evolved into a movement towards financial empowerment. Our journey persists as we innovate, educate, and break new ground, ensuring that the world of finance is no longer an elite playground but a community garden – thriving and accessible to all. Join us as we redefine the investment landscape, making financial growth and success a daily reality for everyone."
        image={movementImageDesktop}
        reverse
        imageOrder
      /> */}

      <div className="flex items-center justify-end">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
      {/* //--Your Success, Our Commitment-- */}
      <div className="px-5 md:px-10 pt-[45px] flex flex-col md:grid md:grid-cols-7 md:gap-7 bg-black bg-opacity-10 rounded-2xl md:mb-20 mb-44">
        <div className="col-span-3">
          <span className="text-black font-medium text-center md:text-left md:mb-5">
            OUR GOALS
          </span>
          <h6 className="text-black font-bold text-xl md:text-[44px] my-2.5 md:mb-5 leading-[45px]">
            Your Growth, Our Mission
          </h6>
          <p className="text-black text-sm md:text-[18px] mb-10 md:mb-20">
            The Student Diwan goes beyond traditional education. it is about investing in your potential. Embrace the journey with us and open pathways to academic achievement and personal development. Your future in learning begins now.
          </p>
          <div className="flex md:flex-col items-center justify-center md:justify-center py-10 md:py-0 mb-7">
            <Image
              src={userPageDemo}
              alt="User Page Demo"
              className="max-h-[600px] object-contain"
            />
          </div>
        </div>
        <div className="text-black col-span-4">
          {yourSuccessDemoData.map((data, index) => (
            <div
              key={index}
              className="border-b border-b-white border-opacity-30 mb-10"
            >
              <ul className="">
                <li className="text-lg md:text-[20px] mb-2 font-medium text-black">
                  {data.title}
                </li>
              </ul>
              <p className="mb-5 md:mb-8 text-sm md:text-[16px] text-black text-opacity-70 font-normal">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
        <div className="md:h-40 md:w-40 h-12 w-12 bg-[#AE00FF]  md:blur-[190px] blur-[60px]    "></div>
      </div>
    </div>
  );
};

export default About;
