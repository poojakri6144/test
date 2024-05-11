// import React from "react";
// import FooterLinks from "./FooterLinks";
// import SocialMediaLinks from "./SocialMediaLinks";
// import DownloadApp from "./DownloadApp";

// const Footer = () => {
//   return (
//     <div className="bg-purple-700 text-white p-5">
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
//         <FooterLinks />
//         <DownloadApp />
//       </div>
//       <SocialMediaLinks />
//     </div>
//   );
// };

// export default Footer;
// components/Footer.js
import React from "react";
import Image from "next/image";
import HostEvent from "./HostEvent";
import SocialMediaLinks from "./SocialMediaLinks";
import FooterLinks from "./FooterLinks";
import DownloadApp from "./DownloadApp";

const Footer = () => {
  return (
    <footer className="">
      <img className=" w-screen" src="/footer.png" alt="Footer" />
      <div className="bg-custom-purple py-8 text-white w-full flex justify-center flex-col">
        {/* Host your Event section */}
        <HostEvent />
        <div className="flex flex-row">
          <FooterLinks />
          <DownloadApp />
        </div>
        {/* Download our elderly care app section */}
      </div>
    </footer>
  );
};

export default Footer;
