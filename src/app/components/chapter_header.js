import Link from "next/link";
import React from "react";

export default function Chapter_Header({manga_name, chapter_order, chapter_name}) {
  return (
    <div className="w-full max-w-screen-sm mx-auto px-2 py-4">
      <div className="flex justify-between mb-4">
        <Link
          href="/"
          className="text-sm mb-2 text-gray-400 hover:text-gray-200 py-1 flex items-center router-link-active"
        >
          <span
            aria-label="Arrow Left icon"
            role="img"
            className="material-design-icon arrow-left-icon inline-block mr-1"
          >
            <svg
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="material-design-icon__svg"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z">
                <title>Arrow Left icon</title>
              </path>
            </svg>
          </span>
          {manga_name || ''}
        </Link>
      </div>
      <h1 className="text-xl text-gray-100 mb-6">
        <span>Chương {chapter_order || 0}</span>
        <span>: {chapter_name || ''}</span>
      </h1>
      <div className="flex items-stretch flex-col gap-2">
        <div>
          <Link
            href="/"
            className="flex justify-center items-center button bg-blue-900 hover:bg-blue-800 text-blue-100 px-3 py-2 text-sm uppercase font-bold rounded-md"
          >
            Chương sau
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="flex justify-center items-center button bg-gray-800 hover:bg-gray-700 text-gray-100 px-3 py-2 text-sm uppercase font-bold rounded-md"
          >
            Chương trước
          </Link>
        </div>
      </div>
    </div>
  );
}
