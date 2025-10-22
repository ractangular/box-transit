import {
  BiArchive,
  BiBug,
  BiCog,
  BiData,
  BiGitBranch,
} from "react-icons/bi";
import { GoPackageDependents } from "react-icons/go";
import { TbHome } from "react-icons/tb";
import { GoCpu } from "react-icons/go";
import { GrPieChart } from "react-icons/gr";
import { PiCalendarDotsBold } from "react-icons/pi";

const Sidebar = ({ isOpen, toggleSidebar, activeMenu, setActiveMenu }) => {
  const menuItems = [
    { section: "Main Menu", items: ["Dashboard", "Master Data", "Settings", "Calendars"] },
    { section: "Reports", items: ["Bugs Report", "Archive", "Report"] },
    { section: "Intelligence", items: ["AI System", "Workflow"] },
  ];

  const icons = {
    "Dashboard": <TbHome size={20} />,
    "Master Data": <BiData size={20} />,
    "Settings": <BiCog size={20} />,
    "Calendars": <PiCalendarDotsBold size={20} />,
    "Bugs Report": <BiBug size={20} />,
    "Archive": <BiArchive size={20} />,
    "Report": <GrPieChart size={20} />,
    "AI System": <GoCpu size={20} />,
    "Workflow": <BiGitBranch size={20} />,
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={toggleSidebar} />
      )}

      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <GoPackageDependents color="blue" size={32} className="mr-4" />
            <h1 className="text-xl font-bold">
              <span className="text-gray-800">Box</span>
              <span className="text-blue-600">Transit</span>
            </h1>
          </div>
          <button className="md:hidden text-gray-500 text-xl" onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-6 text-sm">
          {menuItems.map((group) => (
            <div key={group.section}>
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                {group.section}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setActiveMenu(item);
                      toggleSidebar(); // close on mobile
                    }}
                    className={`flex items-center p-2 rounded-lg cursor-pointer transition relative
                      ${
                        activeMenu === item
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                  >
                    {icons[item]}
                    <span className="ml-3">{item}</span>

                    {/* Badge */}
                    {item === "Dashboard" && (
                      <span className="absolute right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-sm">
                        25
                      </span>
                    )}
                    {item === "Bugs Report" && (
                      <span className="absolute right-3 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-sm">
                        125
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
