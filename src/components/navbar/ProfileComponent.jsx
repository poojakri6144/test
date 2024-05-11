// components/ProfileComponent.js
import { FiStar } from "react-icons/fi";

const ProfileComponent = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative mt-1">
        <img
          src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
          alt="Profile"
          className="w-8 h-8 rounded-full "
        />
        <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
          <FiStar className="text-white" size={12} />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <span className="text-xs text-gray-800">Wasim</span>
        <span className="text-xs text-gray-600">20 CP</span>
      </div>
      <span className="text-gray-400 px-2 py-2">|</span>
    </div>
  );
};

export default ProfileComponent;
