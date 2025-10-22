import { FaBars } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="h-16 flex justify-between items-center bg-white px-4 md:px-6 shadow-sm">
      {/* Tombol sidebar */}
      <button
        className="md:hidden text-gray-600 text-xl"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Profil di kanan */}
      <div className="flex items-center space-x-3 ml-auto">
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">Asep Septiadi</p>
            <p className="text-xs text-gray-500">septiadi.imail@gmail.com</p>
          </div>
          <img
            src={profileImg}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
