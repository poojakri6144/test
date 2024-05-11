// components/LocationComponent.js
import { AiFillCaretDown } from "react-icons/ai";

const LocationComponent = () => {
  return (
    <div className="flex items-center space-x-1 cursor-pointer text-gray-700 mt-2">
      <span className="text-gray-400 px-2 py-2">|</span>
      <span className="text-m">Mumbai</span>
      <AiFillCaretDown size={14} color="gray" />
      <span className="text-gray-400 px-2 py-2">|</span>
    </div>
  );
};

export default LocationComponent;
