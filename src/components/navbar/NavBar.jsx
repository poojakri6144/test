// components/Navbar.js
import Link from "next/link";
import LocationComponent from "./LocationComponent";
import SearchComponent from "./SearchComponent";
import ProfileComponent from "./ProfileComponent";
import MenuIconComponent from "./MenuIconComponent";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-12 py-1 px-16">
      <div className="flex flex-row">
        <img src="/logo.png" alt="Logo" className="h-10 w-15 mr-7" />
        <NavigationLinks />
      </div>
      <div className="flex items-center space-x-4">
        <SearchComponent />

        <LocationComponent />

        <ProfileComponent />
        <MenuIconComponent />
      </div>
    </nav>
  );
};

export default Navbar;
