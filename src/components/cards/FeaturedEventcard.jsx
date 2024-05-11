import React from "react";
import BookmarkButton from "../button/BookMarkButton";
import { SiPaytm } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import BookNowButton from "../button/BookNowButton";

const FeaturedEventCard = ({ event }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-black relative text-white">
      <BookmarkButton />
      <img src={event?.imageUrl} alt={event?.title} className="w-full" />
      <div className="p-4">
        <div className="flex space-x-2 absolute left-2 top-56">
          <span className="bg-teal-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            Online
          </span>
          <span className="bg-white text-teal-500 border-teal-500 border text-xs font-semibold px-2.5 py-0.5 rounded">
            Entertainment
          </span>
        </div>
        <p className="text-gray-300 mt-2">Sun 16, Oct | 6:30PM</p>

        <p className="text-lg font-semibold mb-2">
          Bharatnatyam Bollywood Fusion Sing Workshop (35 - 80 Years)
        </p>
        <p className="text-gray-100 mb-5">ZOOM INDIA</p>

        <div className="flex flex-row justify-between">
          <p className="text-white font-bold text-xl">₹250 Onwards</p>

          <div className=" bg-yellow-100 rounded-full flex flex-row">
            <FaStar
              className=" bg-yellow-600 rounded-full p-1 mt-1"
              size={24}
              color="#fff"
            />
            <span className="text-xs text-black p-2">50 care Points</span>
          </div>
        </div>
        <div className="h-px w-full bg-gray-3w00 mt-3 mb-3" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <SiPaytm color="blue" size={35} />
            <div className="ml-2">
              <p className="text-xs text-gray-500">Powered By</p>
              <p className="text-xs text-white font-semibold">Paytm</p>
            </div>
          </div>
          <BookNowButton />
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
