import Image from "next/image";

export default function PromoSection() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        {/* Container */}
        <div className="flex w-[1439px] h-[482px]">
          {/* Left Section: Image */}
          <div className="w-1/2 flex items-center justify-center">
          <Image src="/images/asian-woman-1.png" width={735} height={702} alt="asian woman" className="w-[735px] h-[630px] object-cover"/>
            {/*
              src="/images/asian-woman-1.png"
              alt="Smiling couple in winter clothing"
              className="w-[735px] h-[702px] object-cover"
            */}
          </div>
  
          {/* Right Section: Text and Buttons */}
          <div className="w-1/2 flex flex-col justify-center px-10">
            {/* Subheading */}
            <p className="text-gray-500 uppercase text-sm mb-2">Summer 2020</p>
  
            {/* Heading */}
            <h1 className="text-4xl font-bold text-black mb-4">
              Part of the Neural Universe
            </h1>
  
            {/* Description */}
            <p className="text-gray-700 text-lg mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
  
            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Buy Now Button */}
              <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                BUY NOW
              </button>
  
              {/* Read More Button */}
              <button className="border text-lg border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-50 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }