import React from "react";
import Manga_Card from "./components/manga_card";

export default function Home() {
  const item = {
    imageSrc:
      "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1728/cover/processed-56c1dff6ad4c00b49717b7ffefe96fb2.jpg",
    name: "Item 1",
    subName: "Sub Name 1",
  };

  let items = [];

  for (let i = 0; i < 30; i++) items.push(item);

  return (
    <div className="flex-grow min-h-screen mx-2 py-8 lg:py-16">
      <div className="common-container mb-8 lg:mb-12 mx-12">
        <div className="uppercase font-bold text-xl text-gray-700">
          Danh sách truyện
        </div>
      </div>
      <div className="common-container">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mx-12">
          {items.map((item, index) => (
            <Manga_Card
              className="col-span-1"
              key={`${index}_${item.name}`}
              imageSrc={item.imageSrc}
              name={item.name}
              subName={item.subName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
