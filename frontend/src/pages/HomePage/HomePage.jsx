import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      {/* 🌌 Dark background image */}
      <img
        src={assets.bg}
        alt="Dark Space Background"
        className="absolute top-0 left-0 w-full h-full  opacity-60"
      />

      {/* 🔲 Optional dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🔳 Foreground content */}
      <div className="relative z-10 text-center px-6 py-12 bg-black/70 backdrop-blur-md rounded-3xl shadow-lg max-w-xl w-[90%] border border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          Welcome to Gemini
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Begin your AI journey. Login to continue.
        </p>

        <Link
          to="/login"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
