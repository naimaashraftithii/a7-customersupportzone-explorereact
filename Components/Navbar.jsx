import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <header className="w-12/12 sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className=" w-11/12 mx-auto max-w-7xl  px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/*  Logo section */}
        <div className="text-lg sm:text-xl font-extrabold text-gray-900">
          CS — <span className="font-bold">Ticket System</span>
        </div>

        {/*  Navbar and Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#changelog" className="hover:text-indigo-600">Changelog</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#download" className="hover:text-indigo-600">Download</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          {/* New Ticket  Button */}
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-purple-600 transition">
            <span className="text-base">＋</span> New Ticket
          </button>

          {/* For Nobile button*/}
          <button
            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Drop Down */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-700 text-sm">
          <a href="#home" className="block hover:text-indigo-600">Home</a>
          <a href="#faq" className="block hover:text-indigo-600">FAQ</a>
          <a href="#changelog" className="block hover:text-indigo-600">Changelog</a>
          <a href="#blog" className="block hover:text-indigo-600">Blog</a>
          <a href="#download" className="block hover:text-indigo-600">Download</a>
          <a href="#contact" className="block hover:text-indigo-600">Contact</a>
          <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-purple-600 transition">
            ＋ New Ticket
          </button>
        </div>
      )}
    </header>
  );
}
