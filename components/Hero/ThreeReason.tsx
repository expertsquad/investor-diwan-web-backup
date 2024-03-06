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
      title: "Unmatched User Experience",
      content:
        "The Student Diwan elevates the educational journey with an intuitive, user-friendly interface designed for the digital age. Our platform ensures that students, educators, and administrators find navigation effortless, making education more engaging and accessible than ever before.",
    },
    {
      title: "Adaptive Learning Technologies",
      content:
        "At the heart of The Student Diwan is our commitment to fostering personalized education. Our platform utilizes cutting-edge technologies to adapt to individual learning styles and needs, providing tailored educational paths that enhance student engagement and learning outcomes.",
    },
    {
      title: "Community and Collaboration Focus",
      content:
        "Beyond academic and administrative solutions, The Student Diwan champions a vibrant educational community. Our platform facilitates seamless communication and collaboration among students, teachers, and parents, nurturing a supportive and interactive learning environment.",
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
        Unlock Your Learning Potential in Moments
      </h5>
      <p className="[font-size:_clamp(14px,4vw,16px)] mt-4 md:mt-7 text-black text-opacity-70 leading-7">
        Dive into the future of education with The Student Diwan. Redefine your academic and personal growth journey with just a few clicks. Our streamlined enrollment and learning process, taking mere minutes, opens the door to a world of accessible, engaging, and personalized education. Embrace a learning experience designed with your ambitions in mind, making education not just accessible but profoundly empowering.
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
