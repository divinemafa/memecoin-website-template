"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "About Bitty", href: "#about" },
  { name: "Meme Gallery", href: "#memes" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "How to buy", href: "#buy" },
  { name: "Community", href: "#community" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Global"
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 ${
        isScrolled ? "h-20" : "h-28"
      }`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="/logo-coin.png"
              width={500}
              height={500}
              className={`transition-all duration-300 ${
                isScrolled ? "h-14 w-auto" : "h-20 w-auto"
              }`}
              alt="logo coin"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition duration-200 text-gray-900 text-shadow-bitty-not-hover text-2xl font-bold font-stopbuck tracking-wider hover:text-bitty hover:decoration-solid hover:decoration-gray-500`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buy Button */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://dexscreener.com/solana/FHXjd7u2TsTcfiiAkxTi3VwDm6wBCcdnw9SBF37GGfEg"
            target="_blank"
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-bitty shadow-2xl bg-black hover:bg-bitty hover:text-gray-800 hover:outline-black outline outline-2 outline-offset-0"
          >
            Buy $BITTY

          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
