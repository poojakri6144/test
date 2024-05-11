import React from "react";

const categories = [
  { name: "Health & Wellness", color: "bg-teal-300" },
  { name: "Games & Quizzes", color: "bg-pink-300" },
  { name: "Talks", color: "bg-yellow-300" },
  { name: "Entertainment", color: "bg-blue-300" },
  { name: "Celebrate", color: "bg-green-300" },
  { name: "Others", color: "bg-purple-300" },
];

const EventCategoriesTab = () => {
  return (
    <div className="flex justify-between space-x-4 p-10 mr-5 ml-5">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`flex-1 ${category.color} text-white font-medium py-2 px-4 rounded-lg shadow-md text-xs space-x-2`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default EventCategoriesTab;
