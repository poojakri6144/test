// components/Sidebar.js

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={onClose}
        className="absolute top-0 left-0 p-4 bg-blue-300 w-full"
      >
        X
      </button>
      <ul className="mt-16">
        <li className="my-2">Home</li>
        <li className="my-2">About</li>
        <li className="my-2">Services</li>
        <li className="my-2">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
