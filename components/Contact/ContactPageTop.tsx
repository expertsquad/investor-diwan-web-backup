import ServiceUnderLine from "../assets/svg/ServiceUnderLine";

const ContactPageTop = () => {
  return (
    <div className="mb-10 md:mb-14">
      <h4 className="uppercase text-white font-medium text-[16px] md:text-2xl text-center mt-9 md:mt-32 mb-2">
        Contact Us
      </h4>
      <div className="flex items-center justify-center">
      <ServiceUnderLine/>
      </div>
      <h5 className="font-bold text-[22px] md:text-[50px] text-center my-3.5 md:my-6 text-white">
        Get In Touch With Investor Diwan
      </h5>
      <p className="text-sm font-medium md:text-xl text-white text-center">
        Invest in the future, Invest for the future….
      </p>
    </div>
  );
};

export default ContactPageTop;
