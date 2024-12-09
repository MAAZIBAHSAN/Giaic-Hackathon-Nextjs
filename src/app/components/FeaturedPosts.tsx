

// components/FeaturedPosts.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPosts = () => {
  const posts = [
    {
      image: "/images/unsplash-1.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      image: "/images/unsplash-2.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      image: "/images/unsplash-3.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <section className="py-12 px-5">
      <div className="text-center mb-10 space-y-6">
      <h2 className="text-lg font-bold text-blue-500">Practice adivce</h2>
        <h2 className="text-4xl font-bold text-black">Featured Posts</h2>
        <p className="text-gray-600 text-[18px]">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={320}
                height={600}
                className="w-full leading-8 h-[400px]"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded space-y-5">
                NEW
              </span>
            </div>
            <div className="p-5">
              <div className="text-[15px] text-gray-500 uppercase flex space-x-3 ">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="space-y-6 h-16">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-gray-400 text-xs">
                <span className=" h-[50px] ">{post.date}</span>
                <span>{post.comments}</span>
              </div>
              <Link
                href="#"
                className="text-green-500 font-semibold text-sm mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;