// File: components/FeaturedProducts.js

import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-10 mt-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-medium text-gray-500">Featured Products</h2>
        <h1 className="text-3xl font-bold text-gray-800">
          BEST SELLER PRODUCTS
        </h1>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 mt-24">
        {/* Single Product */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="text-center">
            {/* Product Image */}
            <div className="bg-gray-200 h-72 w-full mb-4">
              {/* Image space (Leave blank as per instruction) */}
              <img src="/product-cover-1.png" alt="product" />
            </div>
            {/* Product Info */}
            <h3 className="text-lg font-semibold text-gray-800">
              Graphic Design
            </h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="text-lg mt-2">
              <span className="line-through text-gray-400">$16.48</span>{" "}
              <span className="font-bold text-green-500">$6.48</span>
            </div>
            {/* Color Options */}
            <div className="flex justify-center space-x-2 mt-4">
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;



export const FeaturedProducts2 = () => {
    return (
        <section className="bg-white py-10 mt-14">
    
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
            {/* Single Product */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                {/* Product Image */}
                <div className="bg-gray-200 h-72 w-full mb-4">
                    <img src="/product-cover-2.png" alt="" />
                  {/* Image space (Leave blank as per instruction) */}
                </div>
                {/* Product Info */}
                <h3 className="text-lg font-semibold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="text-lg mt-2">
                  <span className="line-through text-gray-400">$16.48</span>{" "}
                  <span className="font-bold text-green-500">$6.48</span>
                </div>
                {/* Color Options */}
                <div className="flex justify-center space-x-2 mt-4">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="w-4 h-4 rounded-full bg-green-500"></span>
                  <span className="w-4 h-4 rounded-full bg-red-500"></span>
                  <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

