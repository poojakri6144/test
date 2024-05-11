import React from "react";

const FooterLinks = () => {
  const footerLinks = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Jaipur",
    "Gurgaon",
    "Noida",
    "Kolkata",
    "Pune",
    "Chandigarh",
    "Navi Mumbai",
    "Lucknow",
    "Coimbatore",
    "Surat",
  ];

  return (
    <div className="flex flex-col space-x-4 mt-5 p-5">
      <p>Discover your city with iElderlyCare</p>
      <div className="grid grid-cols-4 gap-1">
        {footerLinks.map((link, index) => (
          <div key={index} className="mb-1  hover:text-gray-300">
            {/* Removed the unnecessary <ul> and <li> for cleaner grid display */}
            <a className="font-normal" href="#">
              {link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
