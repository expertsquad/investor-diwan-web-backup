"use client";
import logoText from "@/components/assets/images/studentDiwan_logo.png";
import phoneIcon from "@/components/assets/contact-icon.svg";
import { IconMenu2, IconPhone, IconPhoneCall, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";
import { UrlObject } from "url";

interface ImenuItems {
  label: string;
  link: UrlObject;
  key: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    const handleScroll = () => {
      if (!isBrowser()) return;
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Close menu functionality
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Close menu functionality
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-opacity-20 ${isScrolled ? "bg-[#001e07]  backdrop-blur-3xl duration-500 " : ""
        } go-to-top-animation-header `}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between md:py-5 py-5 px-5 md:px-0">
        <Link href={"/"}>
          <div className="w-40">
            <Image src={logoText} alt="logo" />
          </div>
        </Link>

        <div className="hidden md:flex items-center md:gap-10 lg:gap-14 text-black text-[18px] cursor-pointer">
          {menuItems?.map((menuItem) => (
            <Link
              key={menuItem.key}
              className={` ${pathname === menuItem?.link
                ? "cursor-pointer border-b-2 border-b-fuchsia-300  transition-all ease-in-out pb-0.5  "
                : ""
                }`}
              href={menuItem.link || ""}
            >
              {menuItem.label}
            </Link>
          ))}
        </div>

        <div className="">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-black focus:outline-none"
          >
            {""}
            <IconMenu2 />
          </button>
          <Link
            href={"/contact"}
            className="hidden md:flex gap-3 items-center bg-white bg-opacity-15 px-4 py-2.5 rounded-3xl text-black"
          >
            <span>
              <IconPhoneCall stroke={1} height={20} width={20} />
            </span>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[999] bg-white backdrop-blur-lg ">
          <div className="py-5 px-5 h-screen z-[999] relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-5 top-5 text-black focus:outline-none"
            >
              <IconX className="h-7 w-7" />{" "}
            </button>
            <div className="flex items-center justify-center mt-16 ">
              <div className=" w-40">
                <Image src={logoText} alt="logo" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-12 text-black  cursor-pointer mt-24">
              <Link onClick={closeMenu} className="cursor-pointer" href="/">
                Home
              </Link>
              <Link
                onClick={closeMenu}
                className="cursor-pointer"
                href="/about"
              >
                About
              </Link>
              <Link
                onClick={closeMenu}
                className="cursor-pointer"
                href="/services"
              >
                Services
              </Link>
              <Link
                onClick={closeMenu}
                href={"/contact"}
                className="flex gap-3 items-center text-black"
              >
                <span>
                  <Image src={phoneIcon} alt="Phone Icon" />
                </span>
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
          <div className=" h-28 w-20 bg-[#AE00FF]  blur-[70px]    "></div>
        </div>
      )}
    </header>
  );
};

export default Header;
