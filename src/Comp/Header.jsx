import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="  flex items-center justify-between px-4:lg ps-2 sm:px-6 md:px-10 lg:px-16 py-2 border-b border-gray-200">

        <Link to="/">
          <div className="flex items-center space-x-2  ps-2 ps-4-lg">
            <img
              alt='logo'
              className="w-24 h-24 object-contain rounded-full"
              src='/logo.jpg'

            />
            <div>
              <div className="flex items-center space-x-1">
                <span className="logo-font text-3xl font-extrabold text-[#0a3a5d] leading-none select-none">
                  SHREE RAM ARTICLES
                </span>
              </div>
              <div className="text-[10px] font-semibold text-[#e67e4a] tracking-widest pt-3 select-none">
                SHAPING HISTORY THROUGH SCULPTURE
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-normal select-none">
          <Link className="flex items-center hover:text-[#0a3a5d]" to="/">  <i class="fas fa-home icon" aria-hidden="true"></i>
 Home </Link>
          <Link className="flex items-center hover:text-[#0a3a5d]" to="/project">Projects </Link>
          <Link className="flex items-center hover:text-[#0a3a5d]" to="/about">About Us <i className="fas fa-caret-down ml-1 text-xs"></i></Link>
          <Link className="hover:text-[#0a3a5d]" to="/contact">Contact Us</Link>
          <Link className="hover:text-[#0a3a5d]" to="/adminlogin">Admin Login</Link>
          <Link className="bg-[#0a3a5d] text-white px-3 py-1 rounded-sm hover:bg-[#d46f3f] transition" to="/contact">Custom Requests</Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-800 border-b border-gray-200">
          <Link className="block hover:text-[#0a3a5d]" to="/">Home</Link>
          <Link className="block hover:text-[#0a3a5d]" to="/project">Project</Link>
          <Link className="block hover:text-[#0a3a5d]" to="/about">About Us</Link>
          <Link className="block hover:text-[#0a3a5d]" to="/contact">Contact Us</Link>
          <Link className="block bg-[#e67e4a] text-white px-3 py-1 rounded-sm hover:bg-[#d46f3f] transition" to="/custom">Custom Requests</Link>
        </div>
      )}
    </>
  );
}
