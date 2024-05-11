import React from "react";
import BookmarkButton from "../button/BookMarkButton";

const SimpleThingsCard = ({ title, description, gifUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 relative">
      <BookmarkButton />
      <div className="">
        {/* Assume the GIF URL is passed to the component */}
        <img
          src={gifUrl}
          alt="Card image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-1">{title}</div>
        <p className="text-gray-700 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default SimpleThingsCard;
