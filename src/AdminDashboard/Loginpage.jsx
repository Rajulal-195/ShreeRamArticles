  import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  

  export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
      if (username === 'admin' && password === 'admin') {
        alert('Welcome back, Stone Master!');
        navigate("/quary")
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };

    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative font-sans"
        style={{
          backgroundImage:
            "url('https://c4.wallpaperflare.com/wallpaper/468/447/794/line-strip-background-blue-wallpaper-preview.jpg')",
        }}
      >
        {/* Overlay for darkening background */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>

        <div className="relative bg-[#0a3a5d] bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-3xl max-w-lg w-full mx-4 p-12 flex flex-col items-center">
          

          <h1 className="text-4xl font-extrabold mb-10 text-white tracking-tight shadow-sm">
              SHREE RAM ARTICLES
          </h1>
          <h6 className='text-4xl font-bold text-gray-200  mb-10 tracking-tight shadow-sm'>

            Admin Pannel 
          </h6>

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-8 px-6 py-1 rounded-xl border border-gray-300 placeholder-gray-400 text-lg font-medium text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 shadow-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-10 px-6 py-1 rounded-xl border border-gray-300 placeholder-gray-400 text-lg font-medium text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button
            onClick={handleLogin}
            className="w-full text-white font-bold py-1 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.03] hover:text-[#0a3a5d] transition duration-300 focus:outline-none focus:ring-4  flex flex-col items-center justify-center   bg-gradient-to-r from-blue-50 to-[#0a3a5d]"
            aria-label="Login"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
