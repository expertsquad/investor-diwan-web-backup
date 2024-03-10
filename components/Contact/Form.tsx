import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

const Form = () => {
  return (
    <section className="relative">
      <form className="mb-24 md:mb-[250px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 place-items-center form-custom-style ">
        {/* -Name Input- */}
        <div className="flex items-center justify-end w-full">
          <label
            htmlFor=""
            className="text-black flex flex-col gap-2.5 w-full md:w-[364px]"
          >
            NAME
            <input
              type="text"
              id="hello"
              required
              className="w-full md:w-[360px]  bg-black bg-opacity-10 py-3 md:py-4 pl-5 rounded-full outline-none"
              placeholder="Your Name"
            />
          </label>
        </div>
        {/* -Email Input- */}
        <div className="flex items-center justify-start w-full">
          <label
            htmlFor=""
            className="text-black flex flex-col gap-2.5 w-full md:w-[364px]"
          >
            EMAIL
            <input
              type="email"
              id="hello"
              required
              className="w-full md:w-[360px]  bg-black bg-opacity-10 py-3 md:py-4 pl-5 rounded-full outline-none"
              placeholder="example@yourmail.com"
            />
          </label>
        </div>
        {/* -Company Input- */}
        <div className="flex items-center justify-end w-full">
          <label
            htmlFor=""
            className="text-black flex flex-col gap-2.5 w-full md:w-[364px]"
          >
            COMPANY
            <input
              type="text"
              id="hello"
              className="w-full md:w-[360px]  bg-black bg-opacity-10 py-3 md:py-4 pl-5 rounded-full outline-none"
              placeholder="Company Name"
            />
          </label>
        </div>
        {/* -Subject Input- */}
        <fieldset className="flex items-center justify-start w-full">
          <label
            htmlFor="frm-whatever"
            className="flex flex-col gap-2.5 w-full md:w-[364px] text-black"
          >
            SUBJECT
            <div className="relative w-full md:max-w-[360px]">
              <select
                className="appearance-none w-full md:max-w-[360px]  bg-black bg-opacity-10 py-3 md:py-4 pl-5 rounded-full outline-none cursor-pointer"
                name="whatever"
                id="frm-whatever"
              >
                {[
                  "Select a Subject",
                  "General Inquiries",
                  "Support",
                  ,
                  "Feedback",
                  "Careers",
                  "Other",
                ].map((value, index) => (
                  <option className="text-black" key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-black pr-5">
                <IconChevronDown />
              </div>
            </div>
          </label>
        </fieldset>
        {/* -Text Area Input- */}
        <div className=" md:col-span-2 w-full flex items-center justify-center">
          <textarea
            title="Please bellow your message about Student Diwan"
            className="bg-black bg-opacity-10 md:max-w-[770px] w-full rounded-xl resize-none p-5 outline-none text-black placeholder:text-sm md:placeholder:text-[18px] mb-5 "
            placeholder="Type Your Message"
            name="message"
            id="message"
            required
            cols={30}
            rows={4}
          ></textarea>
        </div>
        {/* -Submit BTN Input- */}
        <div className="w-full flex items-center justify-center md:col-span-2">
          <button
            type="submit"
            className="uppercase flex items-center justify-center mx-auto bg-gradient-to-r from-[#0045E2] to-[#B0008F] py-4 w-40 md:max-w-52 rounded-full font-medium text-white hover:bg-gradient-to-r hover:from-[#B0008F] hover:to-[#0045E2] transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* --Animation Div-- */}
      {/* <div className="h-[388px] w-[288px] bg-[#AE00FF]  blur-[130px] absolute hidden md:block md:top-[-100px] md:right-[-400px] overflow-x-hidden"></div> */}
    </section>
  );
};

export default Form;
