"use client";
import React, { useState, useEffect } from "react";
import ScrollTop from "../assets/svg/ScrollTop";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    const handleScroll = () => {
      if (!isBrowser()) return;
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-[900] fixed bottom-4 right-4 p-3 hover:opacity-60 transition-all bg-[#1d1d1d33] border border-[#ffffff1a] rounded-full  ${isVisible ? "visible" : "hidden"
        }`}
    >
      {""}
      <ScrollTop />
    </button>
  );
};

export default ScrollButton;
