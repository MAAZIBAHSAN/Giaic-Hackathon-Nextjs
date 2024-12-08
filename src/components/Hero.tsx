// components/HeroSection.js
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#01b7dc] text-white h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="text-center md:text-left absolute left-32">
          <p className="text-lg uppercase tracking-wide mb-12">Summer 2020</p>
          <h1 className="text-7xl font-bold mb-4 space-x-1">New Collection</h1>
          <p className="text-lg mb-6">
            We know how large objects will act,<br /> but things on a small scale.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        {/* Image Placeholder */}
        <Image src="/shop-hero-2.png" alt="women" width={1440} height={722} className="cursor-pointer relative right-14 w-[1444px] h-[634px]"/>
        <div className="mt-8 md:mt-0 md:ml-8">
          {/* Leave this blank for the image */}
          

          <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;