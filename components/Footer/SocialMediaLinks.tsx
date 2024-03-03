import Image from "next/image";
import Link from "next/link";
import facebook from "@/components/assets/Facebook.svg";
import reddit from "@/components/assets/Reddit.svg";
import youtube from "@/components/assets/YouTube.svg";
import whatsapp from "@/components/assets/WhatsApp.svg";
import pinterest from "@/components/assets/Pinterest.svg";

const socialMediaData = [
  { name: "Facebook", icon: facebook },
  { name: "Reddit", icon: reddit },
  { name: "Youtube", icon: youtube },
  { name: "Whatsapp", icon: whatsapp },
  { name: "Pinterest", icon: pinterest },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      {socialMediaData.map((socialMedia, index) => (
        <Link
          key={index}
          href={"/"}
          className="social-media-links"
          style={{
            animationDelay: `${1.2 + index}s`,
            animationDuration: `${5}s`,
          }}
        >
          <Image src={socialMedia.icon} alt={socialMedia.name} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
