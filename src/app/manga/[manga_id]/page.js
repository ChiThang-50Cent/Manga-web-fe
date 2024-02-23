import React from "react";
import Manga_Header from "../../components/manga_header";
import Chapter_Item from "../../components/chapter_item";

export default function Manga({params}) {
  
  const props = {
    ava_url:
      "https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/702/cover/processed-9d7feb625606303b172fa88bf4674b7e.jpg",
    manga_name: "Sousou no Frieren",
    auth: "Yamada Kanehito, Abe Tsukasa",
    last_update: "2",
    tag: "Hey",
    description: "None",
  };

  return (
    <div className="w-full h-fit flex flex-col">
      <Manga_Header {...props} />
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        <div className="ml-4 text-black text-lg font-bold">
            Danh sách chương
        </div>
        <div className="w-full h-96 my-4 p-4 bg-white shadow-lg rounded-md overflow-y-auto">
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
          <Chapter_Item />
        </div>
      </div>
    </div>
  );
}
