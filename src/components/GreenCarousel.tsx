import React from "react";

const GreenDiv = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#1f846b] p-8">
      {/* Text Section */}
      <div className="text-white max-w-md text-center lg:text-left">
        <p className="text-lg uppercase">Summer 2020</p>
        <h1 className="text-4xl font-bold mt-2">Vita Classic Product</h1>
        <p className="mt-4 text-sm">
          We know how large objects will act. We know how are objects will act.
        </p>
        <div className="mt-6">
          <p className="text-2xl font-bold">$16.48</p>
          <button className="bg-[#2dc071] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0 lg:ml-12">
        <img
          src="/shop-hero-2-1.png"
          alt="Product Image"
          className="w-443 h-685 rounded-md shadow-lg mt-10"
        />
      </div>
    </div>
  );
};

export default GreenDiv;
