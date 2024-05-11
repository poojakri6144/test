"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavigationLinks = () => {
  const router = useRouter();

  // Function to apply styles based on the current route
  const linkStyle = (path) => {
    const baseStyle =
      "text-sm font-normal px-2 py-2 transition-colors duration-150 cursor-pointer inline-block"; // Added inline-block
    const activeStyle = "text-blue-500 border-b-2 border-blue-500"; // Active tab text and underline
    const inactiveStyle =
      "text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500"; // Inactive tab text and underline on hover
    return `${baseStyle} ${
      router.pathname === path ? activeStyle : inactiveStyle
    }`;
  };

  return (
    <div className="flex">
      <Link href="/events" className={linkStyle("/events")}>
        Events
      </Link>
      <Link href="/nursing" className={linkStyle("/nursing")}>
        Nursing
      </Link>
      <Link href="/care-packages" className={linkStyle("/care-packages")}>
        Sr. Care Packages
      </Link>
      <Link href="/celebrity" className={linkStyle("/celebrity")}>
        Celebrity
      </Link>
    </div>
  );
};

export default NavigationLinks;
