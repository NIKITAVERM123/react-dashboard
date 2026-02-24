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
    <div className="flex min-h-screen relative">

   
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

    
      <div className="flex-1 bg-slate-100 flex flex-col">

      
        <Header toggleSidebar={toggleSidebar} />


        <div className="p-8 flex-1">
          <Outlet />
        </div>

       
        <Footer />

      </div>
    </div>
  );
};

export default MainLayout;