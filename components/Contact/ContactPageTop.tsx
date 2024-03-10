import ServiceUnderLine from "../assets/svg/ServiceUnderLine";

const ContactPageTop = () => {
  return (
    <div className="mb-10 md:mb-14">
      <title className="text-center text-[22px] md:text-5xl text-black mb-2.5 md:mb-5 font-bold ">
        Student Diwan | Contact Us
      </title>
      <h4 className="uppercase text-black font-medium text-[16px] md:text-2xl text-center mt-9 md:mt-32 mb-2">
        Contact Us
      </h4>
      <div className="flex items-center justify-center">
        <ServiceUnderLine />
      </div>
      <h5 className="font-bold text-[22px] md:text-[50px] text-center my-3.5 md:my-6 text-black">
        Get In Touch With Student Diwan
      </h5>
      <p className="text-sm font-medium md:text-xl text-black text-center">
        Invest in the future, Invest for the future….
      </p>
    </div>
  );
};

export default ContactPageTop;
