'use client'

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="py-3 z-40 sticky top-0 w-full fine-shadow bg-white bg-opacity-60 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            MangaDox
          </Link>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="login">
          <Link className="px-4 py-2 text-indigo-500 font-medium hover:text-indigo-700" href={`/login_signup`}>
            Login / SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;