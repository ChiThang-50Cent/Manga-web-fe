"use client";

import React from "react";
import Link from "next/link";

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
          <Link
            className="text-black hover:text-indigo-700"
            href={`/login_signup`}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
