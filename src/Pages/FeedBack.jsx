import React from 'react'

export default function FeedBack() {

  
  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes iconScaleColor {
            0%, 100% {
              transform: scale(1);
              color: #2563eb; /* blue-600 */
            }
            50% {
              transform: scale(1.1);
              color: #1e40af; /* blue-800 */
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }

          .animate-iconScaleColor {
            animation: iconScaleColor 3s ease-in-out infinite;
          }

          /* Button focus and smooth shadow */
          .btn-professional {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }

          .btn-professional:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5); /* blue-600 ring */
          }
        `}
      </style>

      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-50 to-[#0a3a5d]" >
        <div className=" rounded-xl p-12 max-w-xl w-full text-center animate-fadeInUp">
          <div className="mx-auto mb-8 w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 animate-iconScaleColor">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-[#0a3a5d] mb-4">
            Query Received!
          </h1>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            Thank you for reaching out to us. We have received your query and will
            get back to you as soon as possible.
          </p>
          <a
            href="/"
            className="btn-professional inline-block bg-[#0a3a5d] text-white font-medium px-10 py-3 rounded-lg shadow-md hover:bg-orange-400 focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
};


