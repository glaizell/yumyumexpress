import logo from "../../assets/image/logo@0.25x.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black mt-16">
      <div className="container mx-auto px-8 py-6 text-white lg:grid grid-cols-3 items-center">
        <div className="mb-16">
          <div className="lg:border-r border-white pr-4 flex flex-col items-center mr-8 col-span-2">
            <Link to="/">
              <img src={logo} alt="" className="mb-6" />
            </Link>
            <div className="flex gap-6">
              <span className="border rounded-full p-1 cursor-pointer hover:border-[#F20507] transition duration-300 ease-in">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FaFacebookF />
                </Link>
              </span>
              <span className="border rounded-full p-1 cursor-pointer hover:border-[#F20507] transition duration-300 ease-in">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FaInstagram />
                </Link>
              </span>
              <span className="border rounded-full p-1 cursor-pointer hover:border-[#F20507] transition duration-300 ease-in">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FaTwitter />
                </Link>
              </span>
              <span className="border rounded-full p-1 cursor-pointer hover:border-[#F20507] transition duration-300 ease-in">
                <Link to="https://www.facebook.com/" target="_blank">
                  <FaYoutube />
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 col-span-2 justify-center gap-12">
          <div>
            <h4 className="mb-6">Services</h4>
            <div className="text-sm">
              <p>Online Order</p>
              <p>Pre-Reservation</p>
              <p>24/7 Services</p>
              <p>Foodie Place</p>
            </div>
          </div>
          <div>
            <h4 className="mb-6">Quick Links</h4>
            <div className="text-sm">
              <p>
                <span className="cursor-pointer hover:text-gray-400">Menu</span>
              </p>
              <p>
                <span className="cursor-pointer hover:text-gray-400">
                  Reviews
                </span>
              </p>
              <p>
                <span className="cursor-pointer hover:text-gray-400">
                  Reserve Table
                </span>
              </p>
              <p>
                <span className="cursor-pointer hover:text-gray-400">
                  Order Foods
                </span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="mb-6">About</h4>
            <div className="text-sm">
              <p>Our Story</p>
              <p>Career</p>
              <p>Benefits</p>
              <p>Our CHefs</p>
            </div>
          </div>
          <div>
            <h4 className="mb-6">Help</h4>
            <div className="text-sm">
              <p>Contact</p>
              <p>Support</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
