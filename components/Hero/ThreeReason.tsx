"use client";

import Image from "next/image";
import threeReasonLineImg from "@/components/assets/three-season-line-image.svg";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const ThreeReason = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index: any) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Array of objects containing title and content for each collapsible section
  const sections = [
    {
      title: "Accessibility",
      content:
        "The Investor Diwan simplifies investing, making it easy for everyone to turn their everyday spending into financial opportunities.",
    },
    {
      title: "Inclusive Solutions",
      content:
        "Whether you&apos;re new to investing or have limited resources, our platform provides tailored options to meet your financial goals.",
    },
    {
      title: "Empowering Community",
      content:
        "Join a community that values financial growth and empowerment, as we revolutionize the investment landscape together.",
    },
  ];

  return (
    <div className=" flex flex-col gap-3 p-8 md:w-1/2 w-full h-[500px]">
      <h6 className="text-sm md:text-xl text-black">GET STARTED IN MINUTES</h6>
      <h5 className="text-black font-bold text-[24px] md:text-[30px] lg:text-[40px] my-[15px]">
        3 Main Reason to Choose Us.
      </h5>
      <div>
        <Image src={threeReasonLineImg} alt="Three reason line image" />
      </div>
      <h5 className="text-black text-xl md:text-3xl font-medium">
        Financial Empowerment in just a Few Clicks
      </h5>
      <p className="[font-size:_clamp(14px,4vw,16px)] mt-4 md:mt-7 text-black text-opacity-70 leading-7">
        Explore a new era of accessible and inclusive investing with The
        Investor Diwan. Redefine your financial journey in just a few clicks—our
        streamlined process takes just 5 minutes, making investing accessible,
        efficient, and tailored to your goals.
      </p>

      {/* collapsible  */}

      <div className="w-full mt-6 mb-56 text-black">
        {sections.map((section, index) => (
          <div
            key={index}
            className="py-3.5 md:pt-6 border-t border-[#ffffff26]"
          >
            <p
              onClick={() => toggleSection(index)}
              className="question py-3 px-4 cursor-pointer select-none w-full outline-none flex justify-between items-center"
            >
              {section.title}
              <IconChevronDown />
            </p>
            <p
              className={`pt-1 pb-3 px-4 ${openSection === index ? "block" : "hidden"
                }`}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeReason;
