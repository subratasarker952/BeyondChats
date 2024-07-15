import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:hidden">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
