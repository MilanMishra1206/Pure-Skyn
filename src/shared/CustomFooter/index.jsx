import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Resources from "../../config/Resources";

function CustomFooter() {
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(userProfile?.isAdmin || false);
  }, [userProfile]);

  return (
    <div className="bottom-0 left-0 w-full bg-coal text-white p-8 font-poppins">
      <div className="flex flex-col px-4">
        <div
          className={`grid gap-4 ${isAdmin ? "md:!grid-cols-2" : "md:!grid-cols-4"}`}
        >
          <div className="flex flex-col items-center justify-center">
            <Link>
              <img
                src={Resources.images.Common.logoNavbar}
                alt="branding"
                style={{ width: "9rem" }}
                className="rounded-2"
              />
            </Link>
            <div className="mt-2">
              <img
                src={Resources.images.Common.googlePlayButton}
                alt="branding"
                style={{ width: "9rem" }}
                className="rounded-2 cursor-pointer"
              />
            </div>
          </div>
          {!isAdmin && (
            <div className="flex items-center md:!items-start flex-col">
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
                  to="/faq"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  FAQs
                </Link>
              </div>
            </div>
          )}
          {!isAdmin && (
            <div className="flex items-center md:!items-start flex-col">
              <div className="text-gray-300 font-bold text-2xl text-center md:!text-left">
                Carts
              </div>
              <div className="flex flex-col text-center md:!text-left mt-2">
                <Link
                  to="/book-now/services-cart"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Services Cart
                </Link>
                <Link
                  to="/products/product-cart"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Products Cart
                </Link>
              </div>
            </div>
          )}
          {!isAdmin && (
            <div className="flex items-center md:!items-start flex-col">
              <div className="text-gray-300 font-bold text-2xl text-center md:!text-left">
                Packages
              </div>
              <div className="flex flex-col text-center md:!text-left mt-2">
                <Link
                  to="/packages"
                  className="text-skyn transition-colors duration-300 no-underline hover:opacity-80"
                >
                  Customised Packages
                </Link>
              </div>
            </div>
          )}
          {/* <div className="flex items-center md:!items-start flex-col">
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
          </div> */}
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50 px-8" />
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center text-center text-sm">
        <span>
          &copy; {new Date().getFullYear()} Pure Skyn. All Rights Reserved.
        </span>
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/pureskynindia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1Fr1FEZ4Zo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://www.instagram.com/ABDS/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-skyn no-underline p-2 rounded-5 text-white hover:opacity-80 text-lg"
          >
            <CiYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;
