import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full h-[488px] flex flex-col items-center justify-between px-8 py-12">
      {/* Top Section */}
      <div className="w-full max-w-[1440px] flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900 mr-auto mt-3">Bandage</h1>
        <div className="flex space-x-4 ml-auto">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full max-w-[1440px] grid grid-cols-5 gap-8 mt-12">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Info</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Legal</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">iOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-[1440px] text-center mt-12">
        <p className="text-gray-600">
        Made With Heart ❤️ By Aazib Ahsan All Right Reserved ©
        </p>
      </div>
    </footer>
  );
}
