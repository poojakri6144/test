import React from "react";
import { FiUpload } from "react-icons/fi";

const BookmarkButton = () => {
  return (
    <button className="absolute right-2 top-2 p-2 rounded-full bg-white text-white">
      {/* Icon placeholder */}
      <FiUpload color="#000" />
    </button>
  );
};

export default BookmarkButton;
