/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl font-extrabold sm:text-5xl  lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600">
              Hello, i'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mirui",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            voluptates temporibus deleniti neque at praesentium earum?
            Voluptates ea dolorum iusto quisquam fugiat? Placeat tempora neque
            facere quam velit molestias cum!
          </p>
          <button className="px-5 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 hover:bg-slate-200 text-white">
            Hire Me
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 bg-transparent text-white hover:bg-slate-800 mt-3  ">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4">
          <div
            className="rounded-full bg-[#181818] w-[250px]
          h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              loading="eager"
              alt="img"
              src="/images/pfp1.jpg"
              width={300}
              height={300}
              draggable="false"
              className="absolute transform -translate-x-1/2 rounded-full -translate-y-1/2 left-1/2 top-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
