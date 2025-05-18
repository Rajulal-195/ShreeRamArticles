import React, { useEffect, useState } from 'react';

export default function Nodata() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setVisible(true);
  }, []);

  return (
    <div
      className={`
        flex flex-col items-center justify-center min-h-[250px] p-8
        bg-gradient-to-r from-blue-50 to-[#0a3a5d]  shadow-xl
        text-center space-y-6
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}
      `}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* New magnifying glass with cross icon */}
      <svg
        className="w-20 h-20 text-[#0a3a5d] animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16.656" y1="16.657" x2="21" y2="21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h2 className="text-3xl font-extrabold text-[#0a3a5d] tracking-wide">
        No Data Found
      </h2>
      <p className="text-[#0a3a5d] text-lg max-w-xs">
        We are working on it. Please check back soon!
      </p>
    </div>
  );
}
