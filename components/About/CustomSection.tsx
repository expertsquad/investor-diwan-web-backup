import Image from "next/image";
import React from "react";

const CustomSection = ({ title, text, image, reverse, imageOrder }: any) => {
  return (
    <div
      className={`flex items-center flex-col md:flex-row gap-5 md:gap-10 mb-6 md:mb-16 relative`}
    >
      <div
        className={`flex-1 flex justify-center items-center ${reverse ? "md:mr-0" : "md:ml-0"
          } ${imageOrder && "md:order-2"} [width:clamp(240px,50vw,450px)]`}
      >
        <Image src={image} alt="World | Map" className="" />
      </div>

      <div
        className={` flex-1 ${reverse ? "md:pl-0" : "md:pr-0"} ${imageOrder && "md:order-1"
          }`}
      >
        <p className="text-[17px] md:text-[44px] leading-tight font-bold mb-2.5 md:mb-7 text-black">
          {title}
        </p>
        <p className="text-black text-opacity-70 leading-tight text-sm md:text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CustomSection;
