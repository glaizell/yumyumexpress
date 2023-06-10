import logo from "../../assets/image/logo@0.25x.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../hooks/context/cart-context";

const Header = ({ onShowCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  return (
    <header
      className={`w-full mx-auto px-4 flex  items-center  justify-between mb-8 sticky top-0 z-30 
      ${isScrolled ? "bg-gray-100 shadow-md" : "bg-transparent"}`}
    >
      <div className="md:hidden flex items-center">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
      </div>
      <div>
        <img src={logo} alt="" height="75px" width="75px" />
      </div>

      <ul className="hidden md:flex space-x-16">
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
    </header>
  );
};
export default Header;
