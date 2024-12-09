import Image from "next/image";
import React from "react";

const GreenDiv = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#1f846b] p-8">
      {/* Text Section */}
      <div className="text-white max-w-md text-center lg:text-left space-y-7">
        <p className="text-[20px] uppercase tracking-wide">Summer 2020</p>
        <h1 className="text-[49px] font-bold mt-2">Vita Classic Product</h1>
        <p className="mt-4 text-[17px]">
          We know how large objects will act. We know how are objects will act.
        </p>
        <div className="mt-6">
          <p className="text-[30px] tracking-wider font-bold">$16.48</p>
          <button className="bg-[#2dc071] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0 lg:ml-12">
        <Image src="/images/shop-hero-2-1.png" width={443} height={643} alt="man pic" className="pt-7 h-[632px]"/>
      </div>
    </div>
  );
};

export default GreenDiv;
