import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/image/logo@0.25x.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar, setIsSidebarOpen }) => {
  return (
    <div
      className={
        isSidebarOpen
          ? "md:hidden fixed left-0 top-0 w-full h-screen  bg-white/5 backdrop-blur text-white"
          : ""
      }
    >
      {/* Side Drawer Menu */}
      <div
        className={
          isSidebarOpen
            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] text-white h-screen  bg-[#1a1a1a] border-r p-8 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
        }
      >
        <div className="mb-14">
          <div className="flex w-full items-center justify-between">
            <img src={logo} alt="" height="75px" width="75px" />
            <div
              onClick={toggleSidebar}
              className="rounded-full shadow shadow-gray-400 p-3 cursor-pointer"
            >
              <RxCross1 className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="py-4 flex flex-col">
          <div className="mb-14">
            <ul className="uppercase flex flex-col gap-y-10">
              <Link to="/" className="">
                <li
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:text-[#F20507] transition-colors duration-300"
                >
                  Home
                </li>
              </Link>
              <Link to="/menu" className="">
                <li
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:text-[#F20507] transition-colors duration-300"
                >
                  Menu
                </li>
              </Link>
              <Link to="/about-us" className="">
                <li
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:text-[#F20507] transition-colors duration-300"
                >
                  About Us
                </li>
              </Link>
              <Link to="/contact" className="">
                <li
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover:text-[#F20507] transition-colors duration-300"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
