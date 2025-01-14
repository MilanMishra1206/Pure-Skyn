import { Link } from "react-router-dom";
import Resources from "../../config/Resources";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";

function CustomFooter() {
  const isAdmin = false;
  return (
    <div className="bottom-0 left-0 w-full bg-coal text-white p-8 font-poppins">
      <div className="flex flex-col px-4">
        <div
          className={`grid gap-4 ${isAdmin ? "md:!grid-cols-2" : "md:!grid-cols-4"}`}
        >
          <div className="flex flex-col items-center justify-center">
            <Link>
              <img
                src={Resources.images.NavBar.logo2}
                alt="branding"
                style={{ width: "9rem" }}
              />
            </Link>
          </div>
          {!isAdmin && (
            <div className="flex items-center md:items-start flex-col">
              <div className="text-gray-300 font-bold text-2xl text-center md:!text-left">
                Quick Links
              </div>
              <div className="flex flex-col text-center md:!text-left">
                <Link
                  to="/"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Home
                </Link>
                <Link
                  to="/services/laser-hair-removal"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Laser Hair Removal
                </Link>
                <Link
                  to="/services/skin/medi-facial"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Medi Facial
                </Link>
                <Link
                  to="/book-now"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Book Now
                </Link>
                <Link
                  to="/products"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Cart
                </Link>
                <Link
                  to="/faq"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  FAQs
                </Link>
              </div>
            </div>
          )}
          {!isAdmin && (
            <div className="flex items-center md:items-start flex-col">
              <div className="text-gray-300 font-bold text-2xl text-center md:!text-left">
                Packages
              </div>
              <div className="flex flex-col text-center md:!text-left mt-2">
                <Link
                  to="/services/laser-hair-removal-packages"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Laser Hair Removal Packages
                </Link>
                <Link
                  to="/services/skin/medi-facial-packages"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Medi Facial Packages
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center md:items-start flex-col">
            <div className="text-gray-300 font-bold text-2xl text-center md:!text-left">
              Contact Us
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mt-2">
                <IoPhonePortraitOutline />{" "}
                <div className="ml-2">+91-9898989898</div>
              </div>
              <div className="flex items-center mt-2">
                <FaPhoneAlt /> <div className="ml-2">+01511-111111</div>
              </div>
              <div className="flex items-center mt-2">
                <MdOutlineMail /> <div className="ml-2">mailer@mail.com</div>
              </div>
              <div className="flex items-center mt-2">
                <FaRegAddressBook />{" "}
                <div className="ml-2">
                  Abc Street, Gurgaon, Haryana - 122101
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50 px-8" />
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center text-center mt-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Pure Skyn. All Rights Reserved.</p>
        <div className="flex gap-2">
          <Link
            to="https://www.instagram.com/laserclinicindia/"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.instagram.com/laserclinicindia/"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <IoLogoFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/laserclinicindia/"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://www.instagram.com/laserclinicindia/"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <CiYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;
