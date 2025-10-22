import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <h2 className="text-gray-700 text-xl">Welcome to Dashboard</h2>;
      case "Master Data":
        return <h2 className="text-gray-700 text-xl">Master Data Content</h2>;
      case "Settings":
        return <h2 className="text-gray-700 text-xl">Settings Page</h2>;
      case "Calendars":
        return <h2 className="text-gray-700 text-xl">Calendars Overview</h2>;
      case "Bugs Report":
        return <h2 className="text-gray-700 text-xl">Bugs Report List</h2>;
      case "Archive":
        return <h2 className="text-gray-700 text-xl">Archived Data</h2>;
      case "Report":
        return <h2 className="text-gray-700 text-xl">Report Data</h2>;
      case "AI System":
        return <h2 className="text-gray-700 text-xl">AI Intelligence System</h2>;
      case "Workflow":
        return <h2 className="text-gray-700 text-xl">Workflow Automation</h2>;
      default:
        return <h2 className="text-gray-700 text-xl">Select a Menu</h2>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="border-b border-gray-200">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        {/* Content Area */}
        <main className="flex-1 bg-gray-50 flex justify-center items-center">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
