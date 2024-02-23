import React from "react";

export default function Manga_Header({
  ava_url,
  manga_name,
  auth,
  last_update,
  tag,
  description,
}) {
  return (
    <div className="flex flex-row w-full h-96 max-w-4xl mx-auto my-8 py-4 bg-white shadow-lg rounded-md">
      <div className="w-1/3 rounded-md">
        <img
          src={ava_url || ""}
          alt="Avatar"
          className="h-full object-cover rounded-md mx-auto"
        />
      </div>
      <div className="flex flex-col w-2/3">
        <div className="h-5/6">
          <h1 className="text-2xl font-bold mb-2">{manga_name || ""}</h1>
          <div className="text-gray-600 mb-1">
            <p>{auth || ""}</p>
            <p>{last_update || ""}</p>
            <p>{tag || ""}</p>
            <p>{description || ""}</p>
          </div>
        </div>
        <div className="h-1/6 flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Đọc từ chương 1
          </button>
        </div>
      </div>
    </div>
  );
}
