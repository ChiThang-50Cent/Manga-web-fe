import React from "react";
import Link from "next/link";

export default function Chapter_Item({chapter_order, chapter_name}) {
  return (
    <div>
      <div className="flex fine-transition overflow-hidden hover:bg-gray-200 mb-1 border-l-4 border-gray-300 h-[56px] bg-gray-50">
        <Link
          href="/chapters/32118"
          className="pl-2 truncate flex-grow flex items-center group outline-none focus:ring fine-transition"
        >
          <div className="p-1 flex font-bold text-gray-800">
            <span className="hidden md:inline mr-1">Chương</span>
            <span className="md:hidden inline mr-1">C.</span>
            <span>{chapter_order || 0}</span>
          </div>
          <div className="p-2 flex flex-col flex-grow justify-between overflow-hidden">
            <div className="truncate flex-grow text-gray-800 text-left">
              <span>{chapter_name || ''}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
