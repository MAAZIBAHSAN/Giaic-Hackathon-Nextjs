
import Image from "next/image";
import React from "react";

export const FeaturedProducts = () => {
  const products = [
    {
      image: "/images/product-cover-1.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["blue", "green", "green", "red"],
    },
    {
      image: "/images/product-cover-2.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
    {
      image: "/images/product-cover-3.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
    {
      image: "/images/product-cover-4.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
  ];

  return (
    <section className="py-10 px-5">
      <div className="text-center mb-8 space-y-4">
      <p className="text-gray-700 text-lg">Featured Products</p>
        <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>
      <div className=" ml-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product, index) => (
            <div key={index} className="text-center w-[220px] h-[600px]">
              <Image
                src={product.image}
                alt={product.title}
                height={600}
                width={220}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.department}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-green-500 font-bold">{product.discountedPrice}</span>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`h-4 w-4 rounded-full bg-${color}-500`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};










export const FeaturedProducts2 = () => {
  const products = [
    {
      image: "/images/product-cover-5.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
    {
      image: "/images/product-cover-6.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
    {
      image: "/images/product-cover-7.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
    {
      image: "/images/product-cover-8.png",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["green", "blue", "green", "red"],
    },
  ];

  return (
    <section className="py-10 px-5">
      <div className=" ml-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product, index) => (
            <div key={index} className="text-center w-[220px] h-[600px]">
              <Image
                src={product.image}
                alt={product.title}
                height={600}
                width={220}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.department}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-green-500 font-bold">{product.discountedPrice}</span>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`h-4 w-4 rounded-full bg-${color}-500`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


