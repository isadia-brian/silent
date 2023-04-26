import React from "react";
import Container from "./Container";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "./Button";
import Navbar from "./Navbar";
import Link from "next/link";

const bellaberry = localFont({ src: "../public/bellaberry/Bellaberry.otf" });
const kugile = localFont({ src: "../public/kugile/Kugile_Demo.ttf" });

const Hero = () => {
  return (
    <div className="flex   justify-between flex-col w-full md:border-b-[0.2px]">
      <div className=" h-[70vh] md:h-[90vh] w-full  relative  md:m-0  md:rounded-none">
        <Image
          src="/hero.webp"
          alt="hero"
          fill
          className=" md:rounded-none"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-green-500 opacity-50"></div>
        <div className="absolute top-[40%] px-4 md:left-20 z-30 h-full  ">
          <p
            className={`${kugile.className} text-4xl md:text-7xl text-white font-bold`}
          >
            Silent
          </p>
          <p
            className={`${kugile.className}  text-4xl  md:text-7xl text-black `}
          >
            Palms Villa
          </p>
          <h1
            className={`max-w-[300px] md:max-w-[400px] text-sm md:text-lg text-white font-semibold mt-3 md:mt-2 md:mb-4`}
          >
            Silent Palms Villa is located at South Coast Diani Beach in lush
            green forests providing serenity experience to the guests.
          </h1>
          <div className="mt-8 flex items-center space-x-4">
            <button className="bg-green-800 px-6 max-w-[220px] text-white text-sm font-semibold rounded-full py-[14px] uppercase">
              Explore Houses
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" h-[40vh] md:h-[80vh] ml-6 md:ml-0">
        <div className="md:pl-20 h-full flex flex-col justify-center ">
          <p
            className={`${kugile.className} text-7xl md:text-7xl text-green-800`}
          >
            Silent
          </p>
          <p
            className={`${kugile.className}  text-6xl  md:text-7xl text-black `}
          >
            Palms Villa
          </p>
          <h1
            className={` md:max-w-[400px] text-gray-500 font-semibold mt-3 md:mt-6 md:mb-4`}
          >
            Silent Palms Villa is located at South Coast Diani Beach in lush
            green forests providing serenity experience to the guests.
          </h1>
          <div className="my-3 flex items-center space-x-4">
            <button className="bg-green-800 px-6 max-w-[220px] text-white font-semibold rounded-sm py-[14px] uppercase">
              Explore Houses
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
