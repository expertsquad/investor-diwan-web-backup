import Image from "next/image";
import mailIcon from "@/components/assets/mail-icon.svg";
import emailSubmitBTN from "@/components/assets/email-submit-btn.svg";

const SubscriptionTemplate = () => {
  return (
    <div className="absolute top-[-220px] md:top-[-320px] w-full h-60 bg-black bg-opacity-10 rounded-2xl mt-5 md:mt-48 flex items-center justify-center py-10 md:py-12 px-5 md:px-5 backdrop-blur-lg">
      <div className="">
        <h6 className="text-center font-medium text-[18px] md:text-[40px]">
          Schedule Your Personalized Free Demo
        </h6>
        <p className="text-sm md:text-[18px] text-center pb-5 pt-2 text-black text-opacity-70 md:px-10 font-extralight leading-tight">
          Experience the innovation of The Student Diwan firsthand. Book a free demo to see how we can tailor our LMS to suit your unique educational needs. Let's embark on a journey to redefine education together.{" "}
        </p>
        <form className="flex items-center justify-between bg-white w-72 md:w-[450px] rounded-md mx-auto pl-2.5 md:pl-5">
          <Image
            src={mailIcon}
            alt="mail icon"
            className="mr-2 animate-bounce"
          />
          <input
            title="user-email"
            type="email"
            placeholder="Your Email"
            className="bg-transparent outline-none placeholder:text-[#737373] text-black w-full"
          />
          <button type="submit">
            <Image src={emailSubmitBTN} alt="mail submit" />
            {""}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionTemplate;
