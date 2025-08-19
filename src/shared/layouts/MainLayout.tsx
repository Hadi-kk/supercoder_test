import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/organisms/Navbar/Navbar";
import Footer from "@/shared/components/organisms/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
