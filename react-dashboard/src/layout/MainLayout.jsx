import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 flex flex-col">

        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Dynamic Page Content */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default MainLayout;