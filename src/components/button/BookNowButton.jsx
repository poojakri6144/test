import React from "react";
import { FaTicketAlt } from "react-icons/fa";

const BookNowButton = () => {
  return (
    <div className="p-3 flex flex-row  bg-blue-500 rounded-md shadow hover:bg-blue-600 w-36 items-center">
      <FaTicketAlt size={20} color="#fff" />
      <button className="text-white text-sm font-semibold ml-2">
        BOOK NOW
      </button>
    </div>
  );
};

export default BookNowButton;
