import React from "react";

function HostEvent() {
  return (
    <div className=" flex flex-row relative justify-center">
      {/*  <img
        className="absolute top-px left-0"
        src="/host.png"
        alt="Host an event"
  /> */}
      <div className="">
        <p>Host Your Event</p>
        <p>
          Got an event or an activity? Associate with us & get it listed on i
          elderly care
        </p>
        <div className="p-3 h-10 bg-blue-500 rounded-sm shadow hover:bg-blue-600  items-center">
          <button className="text-white text-sm font-semibold ml-2">
            Host An Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default HostEvent;
