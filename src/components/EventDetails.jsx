import React from "react";
import { FaStar } from "react-icons/fa";
import BookNowButton from "./button/BookNowButton";
import { SiFreedesktopdotorg } from "react-icons/si";

const EventDetails = () => {
  return (
    <div className="p-4">
      <div className="flex space-x-2 absolute left-2 top-52">
        <span className="bg-teal-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          Online
        </span>
        <span className="bg-white text-teal-500 border-teal-500 border text-xs font-semibold px-2.5 py-0.5 rounded">
          Entertainment
        </span>
      </div>
      <p className="text-gray-500">Sun 16, Oct | 6:30PM</p>

      <p className="text-lg font-semibold mb-2">
        Bharatnatyam Bollywood Fusion Sing Workshop (35 - 80 Years)
      </p>
      <p className="text-gray-500 mb-5">ZOOM INDIA</p>

      <div className="flex flex-row justify-between">
        <p className="text-gray-700 font-bold text-xl">₹250 Onwards</p>

        <div className=" bg-yellow-100 rounded-full flex flex-row">
          <FaStar
            className=" bg-yellow-600 rounded-full p-1 mt-1"
            size={24}
            color="#fff"
          />
          <span className="text-xs p-2">50 care Points</span>
        </div>
      </div>
      <div className="h-px w-full bg-gray-200 mt-3 mb-3" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <SiFreedesktopdotorg color="blue" size={35} />
          <div className="ml-2">
            <p className="text-xs text-gray-400">Powered By</p>
            <p className="text-xs text-black font-semibold">Visit Care</p>
          </div>
        </div>
        <BookNowButton />
      </div>
    </div>
  );
};

export default EventDetails;

// import React from "react";

// const EventDetails = ({ event }) => {
//   return (
//     <div className="p-4">
//       <h3 className="text-lg font-bold">{event?.title}</h3>
//       <p className="text-gray-600">{event?.date}</p>
//       <p>{event?.cost === 0 ? "Free" : `Cost: ${event?.cost}`}</p>
//       <p className="text-sm text-gray-500">{event?.description}</p>
//     </div>
//   );
// };

// export default EventDetails;
