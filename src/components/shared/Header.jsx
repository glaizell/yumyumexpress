import logo from "../../assets/image/logo@0.25x.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../hooks/context/cart-context";
import Sidebar from "./Sidebar";

const Header = ({ onShowCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={`w-full mx-auto px-4 z-[100] flex items-center justify-between mb-8 sticky top-0
    ${isScrolled ? "bg-gray-100 shadow-md z-[100]" : "bg-transparent"}`}
    >
      <div>
        <img src={logo} alt="" height="75px" width="75px" />
      </div>

      <ul className="hidden md:flex space-x-16 ">
        <NavLink to="/" className="hover:border-b-2 border-[#F20507]" end>
          <li>Home</li>
        </NavLink>
        <NavLink to="/menu" className="hover:border-b-2  border-[#F20507]">
          <li>Menu</li>
        </NavLink>
        <NavLink to="/about-us" className="hover:border-b-2  border-[#F20507]">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/contact" className="hover:border-b-2  border-[#F20507]">
          <li>Contact</li>
        </NavLink>
      </ul>
      <div>
        <button
          onClick={onShowCart}
          className={`flex space-x-4 bg-[#1a1a1a] px-4 py-2 rounded-3xl text-white ${
            btnIsHighlighted ? "bump" : ""
          }`}
        >
          <span>{numberOfItems}</span>
          <span>
            <BsFillCartCheckFill className="text-2xl" />
          </span>
          <span>My Cart</span>
        </button>
      </div>

      <div onClick={toggleSidebar} className="md:hidden">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </header>
  );
};

export default Header;
