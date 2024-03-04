import Image from "next/image";
import projectLogo from "@/components/assets/projectLogo.svg";
import employeeLogo from "@/components/assets/employees-logo.svg";
import clientsLogo from "@/components/assets/clients-logo.svg";
import awardsLogo from "@/components/assets/awards-logo.svg";
import Customers from "../assets/svg/customers";
import Client from "../assets/svg/Client";
import Awards from "../assets/svg/Awards";

const CommonSummary = () => {
  return (
    <section className="flex justify-between lg:gap-24 lg:justify-center">
      <div className="flex flex-col items-center justify-around">
        <div className="bg-black bg-opacity-10 rounded-full p-2 flex items-center justify-center">
          <Image src={projectLogo} alt="Project Logo" width={40} height={40} />
        </div>
        <span className="text-black text-opacity-60 font-medium text-sm md:text-xl mb-1.5 mt-4">
          Projects
        </span>
        <span className="text-black text-[16px] md:text-2xl font-bold">
          580
        </span>
      </div>
      <div className="w-[1px] h-32 md:h-36 bg-white bg-opacity-15"></div>
      <div className="flex flex-col items-center justify-around">
        <div className="bg-black bg-opacity-10 rounded-full p-2 flex items-center justify-center">
          <Customers />
        </div>
        <span className="text-black text-opacity-60 font-medium text-sm md:text-xl mb-1.5 mt-4">
          Employees
        </span>
        <span className="text-black text-[16px] md:text-2xl font-bold">32</span>
      </div>
      <div className="w-[1px] h-32 md:h-36 bg-white bg-opacity-15"></div>
      <div className="flex flex-col items-center justify-around">
        <div className="bg-black bg-opacity-10 rounded-full p-2 flex items-center justify-center">
          <Client />
        </div>
        <span className="text-black text-opacity-60 font-medium text-sm md:text-xl mb-1.5 mt-4">
          Clients
        </span>
        <span className="text-black text-[16px] md:text-2xl font-bold">
          180
        </span>
      </div>
      <div className="w-[1px] h-32 md:h-36 bg-white bg-opacity-15"></div>
      <div className="flex flex-col items-center justify-around">
        <div className="bg-black bg-opacity-10 rounded-full p-2 flex items-center justify-center">
          <Awards />
        </div>
        <span className="text-black text-opacity-60 font-medium text-sm md:text-xl mb-1.5 mt-4">
          Awards
        </span>
        <span className="text-black text-[16px] md:text-2xl font-bold">
          180
        </span>
      </div>
    </section>
  );
};

export default CommonSummary;
