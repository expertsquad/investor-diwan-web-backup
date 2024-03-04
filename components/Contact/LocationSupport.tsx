import Image from "next/image";
import mailIcon from "@/components/assets/customize-mail.svg";
import Link from "next/link";
import MailBlack from "../assets/svg/MailBlack";

// Reusable component for email link
const EmailLink = ({ href }: any) => (
  <div className="flex items-center gap-1 md:gap-2">
    <div className="bg-black bg-opacity-10 rounded-full p-2">
      <MailBlack />
    </div>
    <Link
      className="text-black text-[12px] md:text-[18px] hover:underline transition-all"
      href={`mailto:${href}`}
    >
      {href}
    </Link>
  </div>
);

const LocationSupport = () => (
  <div className="mt-24 md:mt-[250px] relative">
    <h2 className="text-center text-black font-medium text-[18px] md:text-[46px]">
      Office Location
    </h2>
    <p className="text-sm md:text-xl font-thin text-center text-black text-opacity-70 py-2.5 md:py-5">
      Come visit us at our headquarters for a face-to-face consultation
    </p>
    <address className="text-sm md:text-xl text-center text-black text-opacity-70 mb-5 md:mb-11">
      Address :- Qatar Financial Center, 9th Floor, Office No. 1, Fintech
      Circle, QFC Tower 1
    </address>
    <div className="mx-auto mb-5 md:mb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.318368989841!2d51.52612677538603!3d25.327095677627536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4b97c06f793%3A0x4dc8fe5f8857e84f!2sQatar%20Financial%20Centre%20(QFC%20TOWER%201)!5e0!3m2!1sen!2sbd!4v1707746853436!5m2!1sen!2sbd"
        // --Dark Version Tailwind--
        // filter grayscale-[100%] invert-[100%]
        className="w-full h-36 md:h-96 border-none rounded-lg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="flex items-center justify-center gap-3 md:gap-14 flex-wrap hover:underline">
      {[
        "info@studentdiwan.com"
      ].map((data, index) => (
        <EmailLink key={index} href={data} />
      ))}
    </div>

    {/* --Animation Div-- */}
    <div className="h-[388px] w-[288px] bg-[#AE00FF]  blur-[330px] absolute hidden md:block md:top-[250px] md:left-[-400px]"></div>
  </div>
);

export default LocationSupport;
