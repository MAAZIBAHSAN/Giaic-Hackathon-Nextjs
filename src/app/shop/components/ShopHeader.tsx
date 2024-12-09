// components/Header.jsx
import Link from 'next/link';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";


const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-emerald-600 text-white py-2 px-4 pl-36">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="flex items-center pr-36">
            <span className="mr-4">Follow Us and get a chance to win 80% off</span>
            <div className="flex items-center space-x-3">
              <span>Follow Us :</span>
              {/* Social Media Icons */}
              <Link href="#" className="text-white hover:text-gray-200">
                
                  <FaInstagram />
                
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                
                  <FaYoutube />
                
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                
                  <FaFacebook />
              
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                
                 <FaTwitter />
                
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 pl-24">
            Bandage
          </Link>
          
          <div className="flex items-center space-x-6 pr-16">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                Shop
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="/pages" className="text-gray-600 hover:text-gray-800">Pages</Link>
          </div>

          <div className="flex items-center space-x-5 pr-24">
            <Link href="/login" className="text-blue-500 hover:text-blue-600 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login / Register
            </Link>
            <button className="text-blue-500 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/cart" className="text-blue-500 hover:text-blue-600 flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="ml-1">1</span>
            </Link>
            <button className="text-blue-500 hover:text-blue-600 flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="ml-1">1</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;




