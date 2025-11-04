import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full">
      {/* Top Section */}
      <div className="w-11/12 mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <h2 className="text-white font-bold text-lg mb-2">CS — Ticket System</h2>
            <p className="text-sm leading-6 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-2">Information</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Join Us</a></li>
            </ul>
          </div>

          {/* Optional spacer for alignment */}
          <div>
            <h3 className="text-white font-semibold mb-2">Social Links</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition">
                <FaFacebookF /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <FaTwitter /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <FaInstagram /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <FaEnvelope /> support@cst.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="w-full px-4 py-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
