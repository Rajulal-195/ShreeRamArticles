import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../Assest/logo.jpg'

export default function Footer() {
  return (
    <>
      <div className="bg-[#29426b] text-white font-sans ps-2">
        <footer className="px-6 py-3 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
            <div className="flex-shrink-0 max-w-sm mb-10 md:mb-0">
              <div className="flex items-center gap-2 mb-4 " >
                <Link to="/">

                <img
                  alt="Saatchi Art circular multicolor logo"
                  className="inline-block border"
                  height="100"
                  src='logo.jpg'
                  width="100"
                  />
                <span className="font-bold text-white tracking-widest text-lg ps-2">
                  SHREE RAM ARTICLES
                </span>
                  </Link>
              </div>

              <address>
                <p className="font-semibold mb-1 text-sm max-w-[280px]">

                  <Link to="https://maps.app.goo.gl/VxduDDPmy4kPMYPcA" target='blank'>

                    <i className="fas fa-map-marker-alt"></i> Address:- Ashok Nagar ,Bada Naya Gaon bundi (Raj.) 323024
                  </Link>
                </p>

                <p className='py-2'>
                  <i className="fas fa-envelope mr-2 text-white text-[18px]" aria-hidden="true"></i>

                  <Link to="mailto:support@shriramarticle.com" >support@shriramarticle.com</Link>
                </p>

                <p className="text-sm mb-6 max-w-[280px]">

                  <i className="fas fa-phone-alt text-white mr-2 text-[18px]">
                  </i>
                  <Link className="hover:underline" to="tel:+91 8742025990">
                    +91 8742025990
                  </Link>
                  <Link className="hover:underline px-2" to="tel:+91 9982146723">
                    +91 9982146723
                  </Link>

                </p>

              </address>

              <div className="flex gap-5 mt-6 text-white text-lg">
                <Link aria-label="Instagram" className="hover:text-gray-400" to="https://www.instagram.com/shri_ram_article?igsh=MXhicnhndTlsOHE5ag==" target='blank'>
                  <i className="fab fa-instagram"></i>


                </Link>

                <Link aria-label="Facebook" className="hover:text-gray-400" to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>

                <Link aria-label="YouTube" className="hover:text-gray-400" to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="grid py-5 grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 text-sm max-w-4xl flex-grow">
              <div>
                <h3 className="font-semibold mb-3 text-lg">For Collectors</h3>
                <ul className="space-y-2">
                  <li><Link className="hover:underline" to="/contact">Help Center</Link></li>
                  <li><Link className="hover:underline" to="/art-advisory">Art Advisory</Link></li>
                  <li>
                    <Link className="hover:underline flex items-center gap-2" to="/gift-card">
                      <i className="fas fa-gift"></i> Gift Card
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">For The Trade</h3>
                <ul className="space-y-2">
                  <li><Link className="hover:underline" to="/about">About</Link></li>
                  <li><Link className="hover:underline" to="/contact">Contact Art Consultant</Link></li>
                  <li><Link className="hover:underline" to="/careers">Careers</Link></li>
                  <li><Link className="hover:underline" to="/nodata">Affiliate Program</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Join Now </h3>
                <p className="font-semibold mb-1 text-sm max-w-[280px]">
                  Sign Up to Receive 10% Off Your First Order
                </p>
                <p className="text-sm mb-6 max-w-[280px]">
                  Discover new art and collections added weekly by our curators.
                </p>
                <form className="max-w-[280px]">
                  <label className="sr-only" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-md py-2 px-4 text-gray-800 placeholder-gray-500 focus:outline-none"
                      id="email"
                      placeholder="Enter Email Address"
                      type="email"
                    />
                    <button
                      aria-label="Submit email"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      type="submit"
                    >
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" text-white text-center    shadow-inner border-t-4 ">
            © 2025 Shree Ram Articles. All rights reserved.
          </div>

        </footer>
      </div>
    </>
  );
}
