import React from "react";
import FeaturedEventCard from "./cards/FeaturedEventcard";

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Event 1",
      type: "Music",
      date: "2024-05-10",
      cost: 0,
      imageUrl: "/dance.jpeg",
    },
    {
      id: 2,
      title: "Event 2",
      type: "Theatre",
      date: "2024-05-09",
      cost: 25,
      imageUrl: "/dance.jpeg",
    },
    {
      id: 3,
      title: "Event 3",
      type: "Music",
      date: "2024-05-11",
      cost: 0,
      imageUrl: "/dance.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {featuredEvents?.map((event, index) => (
        <FeaturedEventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default FeaturedEvents;
