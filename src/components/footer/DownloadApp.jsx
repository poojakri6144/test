import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="text-center bg-deep-purple">
      <img className="w-full" src="/mobile.png" alt="Download" />
      <p className="font-normal text-xl  text-white">Download our</p>
      <p className="font-bold text-lg mb-2 text-yellow-500">
        i elderly care app
      </p>
      <div className="flex flex-row m-7">
        <div className="p-3 flex flex-row  bg-white shadow hover:bg-gray-600  items-center">
          <IoLogoGooglePlaystore color="#95e5f5" size={24} />
          <div className="flex flex-col">
            <p className="text-black text-xs font-light -ml-2">GET IT ON</p>
            <p className="text-black text-base font-semibold ml-2">
              Google Play
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-row bg-white shadow hover:bg-gray-600  items-center ml-3">
          <FaApple color="#000" size={24} />
          <div className="flex flex-col">
            <p className="text-black text-xs font-light -ml-2">
              Download on the
            </p>
            <p className="text-black text-base font-semibold ml-2">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
