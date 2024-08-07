import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Common/Sidebar";
import ChatList from "../Common/ChatList";


const Navbar = () => {
  const location = useLocation();


  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full  sticky top-0 lg:hidden">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 font-bold ">Telegram</div>
            <div className="hidden flex-none lg:block">
            
            </div>
          </div>
          {/* Page content here */}
          <div className="flex max-h-screen">
            <div className="hidden lg:block w-[350px]">
              <ChatList />
            </div>
            <div
              className={`w-full hidden lg:${
                location.pathname == "/" ? "hidden" : "block"
              }`}
            >
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-gray-800 text-white min-h-full w-80">
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
