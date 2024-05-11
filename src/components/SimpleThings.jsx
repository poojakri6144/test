import React from "react";
import SimpleThingsCard from "./cards/SimpleThingsCard";

const cardsData = [
  {
    title: "Beauty in Simple Things",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gifUrl: "/simple.jpeg",
  },
  {
    title: "Beauty in Simple Things",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gifUrl: "/simple.jpeg",
  },
  {
    title: "Beauty in Simple Things",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gifUrl: "/simple.jpeg",
  },
];

const SimpleThings = () => {
  return (
    <div className="bg-gray-800">
      <p className="text-white mt-10 ml-20 text-sm font-bold">
        Beauty in Simple Things
      </p>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-between">
          {cardsData.map((card, index) => (
            <SimpleThingsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleThings;
