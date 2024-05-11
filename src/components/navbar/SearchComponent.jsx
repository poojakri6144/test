"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the search input

  const toggleSearch = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide the search input
  };

  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 mt-2"
        onClick={toggleSearch}
      >
        <FiSearch size={17} color="gray" />
        <span className="text-sm text-gray-500">Search</span>
      </button>
      {isOpen && ( // Conditionally render the input field
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 p-2 w-full rounded border border-gray-300"
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchComponent;
