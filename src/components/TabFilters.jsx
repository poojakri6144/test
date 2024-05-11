"use client";
import React, { useState, useEffect } from "react";
import EventCard from "./cards/EventCard";
import eventsData from "../db/events.json"; // Path to your events data
import EventCategoriesTab from "./EventCategoriesTab";
import { IoMdHeart } from "react-icons/io";
import FeaturedEvents from "./FeaturedEvents";

const EventFilter = ({ filteredEvents, setFilteredEvents }) => {
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const filterEvents = () => {
      switch (selectedTab) {
        case "all":
          return eventsData.events;
        case "free":
          return eventsData.events.filter((event) => event.cost === 0);
        case "today":
          const today = new Date().toISOString().slice(0, 10);
          return eventsData.events.filter((event) => event.date === today);
        default:
          return eventsData.events;
      }
    };
    setFilteredEvents(filterEvents());
  }, [selectedTab]);

  return (
    <div className="flex flex-col items-center bg-white p-4">
      <div className="flex justify-center space-x-4 w-full">
        {/* Filter tabs */}
        {["all", "free", "today"].map((tab) => (
          <div
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`cursor-pointer py-2 px-4 rounded-lg border-2 text-xs ${
              selectedTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {tab === "all"
              ? "All Events"
              : tab === "free"
              ? "Free Events"
              : "Today's Events"}
          </div>
        ))}
        {/* Dropdown filter */}
        <div className="flex items-center ml-auto space-x-3">
          <div className="bg-gray-100 text-gray-700 py-2 px-5 rounded-md cursor-pointer text-xs">
            Filter By
          </div>
          <select className="cursor-pointer border text-xs border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-md focus:outline-none">
            <option>Event Type</option>
            <option>Workshop</option>
            <option>Seminar</option>
            <option>Conference</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center p-5 mt-5">
        <h1 className="font-bold text-2xl">Something for Every Elderly</h1>
      </div>
      <EventCategoriesTab />
      <div className="flex flex-row mb-3 justify-items-start">
        <IoMdHeart size={20} color="#f58cf5" />
        <p className="text-sm font-bold">Featured Events</p>
      </div>
      <FeaturedEvents />
      <div className="flex flex-row mb-4 mt-4 justify-items-start">
        <IoMdHeart size={20} color="#f58cf5" />
        <p className="text-sm font-bold">All Events</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventFilter;
