import Link from "next/link";
import React from "react";

const Manga_Card = ({ imageSrc, name, subName, time }) => {
  return (
    <div>
      <div className="w-full flex flex-none flex-col justify-between items-stretch rounded-lg snap-start">
        <Link
          href={"123"}
          className="block flex-grow rounded-lg shadow hover:shadow-lg fine-transition overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={name}
            className="w-full rounded-lg h-auto object-cover"
          />
        </Link>

        <div className="mt-2 flex flex-col items-start justify-start md:justify-between">
          <Link href={"123"}>
            <h3 className="text-gray-800 font-bold text-sm mb-1 line-clamp-2">
              {name}
            </h3>
          </Link>
          <h4 class="text-xs uppercase tracking-wide color text-gray-700 line-clamp-1">
            <Link href="/mangas/1728/chapters/32117">
              <span className="font-semibold">{subName}</span> -{" "}
              <span>{time}</span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Manga_Card;
