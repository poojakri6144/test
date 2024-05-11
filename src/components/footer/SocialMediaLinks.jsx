import React from "react";

const SocialMediaLinks = () => {
  const icons = ["facebook", "twitter", "instagram", "youtube"];
  return (
    <div className="mt-4 flex justify-center space-x-4">
      {icons.map((icon) => (
        <a key={icon} href="#" className="hover:text-gray-300">
          <i className={`fab fa-${icon}`}></i>{" "}
          {/* Assuming Font Awesome is used */}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
