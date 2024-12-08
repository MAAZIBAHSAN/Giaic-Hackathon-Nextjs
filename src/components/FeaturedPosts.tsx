// pages/index.js
import React from "react";

export default function FeaturedPosts() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Featured Posts</h1>
        <p className="text-center text-gray-600 mb-10">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/unsplash-1.png"
                alt="Colorful Street"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                Loudest à la Madison #1 (L'Integral)
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>22 April 2021</span>
                <span>10 comments</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/unsplash-2.png"
                alt="Pink Volkswagen Beetle"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                Loudest à la Madison #1 (L'Integral)
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>22 April 2021</span>
                <span>10 comments</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/unsplash-3.png"
                alt="Colorful Umbrellas"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                Loudest à la Madison #1 (L'Integral)
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>22 April 2021</span>
                <span>10 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}