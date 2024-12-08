export default function PromoSection() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        {/* Container */}
        <div className="flex w-[1439px] h-[482px]">
          {/* Left Section: Image */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/asian-woman-1.png"
              alt="Smiling couple in winter clothing"
              className="w-725 h-600 object-cover"
            />
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
              <button className="border border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-100 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }