import Link from "next/link";
import React from "react";

export default function Chapter_Footer() {
  return (
    <div className="my-10 ">
      <div className="w-full flex justify-center">
        <Link
          href="/"
          className="button w-full max-w-screen-sm button-primary py-3 px-3 text-center bg-blue-700 rounded-lg"
        >
          <div className="uppercase font-bold text-white">Xem tiếp</div>
        </Link>
      </div>
      <div className="mt-2 w-full flex justify-center">
        <div className="max-w-screen-sm w-full flex">
          <Link
            href="/"
            className="uppercase button bg-neutral-800 hover:bg-neutral-600 text-gray-300 w-full p-2 mr-1 text-center rounded-lg"
          >
            Chương trước
          </Link>
          <button className="uppercase button bg-neutral-800 hover:bg-neutral-600 text-gray-300 w-full p-2 ml-1 text-center rounded-lg">
            Lên đầu
          </button>
        </div>
      </div>
    </div>
  );
}
