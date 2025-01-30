import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Resources from "../../../config/Resources";

const MenuForMobile = ({
  isActive,
  userName,
  serviceItemForMobile,
  packagesItemForMobile,
  toggleMenu,
  menuOpen,
  setIsOpenServicesForMobile,
  isOpenServicesForMobile,
  serviceButtonRefForMobile,
  setIsOpenPackageForMobile,
  isOpenPackageForMobile,
  packageButtonRefForMobile,
  isAdmin,
  isLoggedIn,
  handleLogout,
  isTablet,
}) => {
  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      <div
        className={`fixed top-0 left-0 w-4/5 md:!w-3/5 bg-[#FAFAFA] z-50 transform h-full ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isTablet ? "block" : "hidden"} transition-all duration-500 ease-in-out overflow-scroll`}
      >
        <button
          className="absolute top-4 mr-5 right-4 text-2xl text-black"
          onClick={toggleMenu}
        >
          <IoIosCloseCircle size={"2rem"} />
        </button>
        <div className="flex flex-col items-center justify-center mt-4 space-y-4 mb-5">
          <Link to="/" className="no-underline font-bold" onClick={toggleMenu}>
            <img
              src={Resources.images.NavBar.logo2}
              alt="branding"
              style={{ width: "10rem" }}
            />
          </Link>
          {isLoggedIn && (
            <Link className="font-poppins no-underline text-xl text-center">
              <div>
                <span className="font-extrabold text-kashmirBlue text-2xl">
                  Welcome,{" "}
                </span>
                <span className="font-extrabold text-kashmirBlue text-2xl">
                  {userName}
                </span>
              </div>
            </Link>
          )}
          <Link
            to="/"
            className={`navbar-links !text-black !ml-0 ${isActive("/about-us") ? "bg-skyn !rounded-lg w-64 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 text-center hover:!text-white"}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          {!isAdmin && (
            <div className="flex flex-col items-center">
              <div className="flex items-center navbar-links mb-2 ml-3">
                <div className="flex flex-col">
                  <div ref={serviceButtonRefForMobile}>
                    <Link
                      className="font-extrabold text-black no-underline"
                      onClick={() => {
                        setIsOpenServicesForMobile((isOpen) => !isOpen);
                        setIsOpenPackageForMobile(false);
                      }}
                      onKeyDown={() => {
                        setIsOpenServicesForMobile((isOpen) => !isOpen);
                        setIsOpenPackageForMobile(false);
                      }}
                    >
                      Services
                    </Link>
                  </div>
                </div>
                {!isOpenServicesForMobile && (
                  <MdOutlineKeyboardArrowDown
                    className="text-black text-2xl cursor-pointer active:outline-none"
                    tabIndex={0}
                    onClick={() => {
                      setIsOpenServicesForMobile(true);
                      setIsOpenPackageForMobile(false);
                    }}
                  />
                )}
                {isOpenServicesForMobile && (
                  <MdOutlineKeyboardArrowUp
                    className="text-black text-2xl cursor-pointer active:outline-none"
                    tabIndex={0}
                    onClick={() => {
                      setIsOpenServicesForMobile(false);
                      setIsOpenPackageForMobile(false);
                    }}
                  />
                )}
              </div>
              <div
                className={`${
                  isOpenServicesForMobile
                    ? "flex flex-col items-center rounded shadow p-2"
                    : "hidden"
                } space-y-3 mb-2 pl-4`}
              >
                {serviceItemForMobile.map((item) => (
                  <Link
                    to={item.link}
                    key={item.id}
                    onClick={toggleMenu}
                    className={`navbar-links text-justify !text-black !ml-0 !text-[17px] ${isActive(item.link) ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center navbar-links mb-2 ml-3">
                <div className="flex flex-col">
                  <div ref={packageButtonRefForMobile}>
                    <Link
                      className="font-extrabold text-black no-underline"
                      onClick={() => {
                        setIsOpenPackageForMobile((isOpen) => !isOpen);
                        setIsOpenServicesForMobile(false);
                      }}
                      onKeyDown={() => {
                        setIsOpenPackageForMobile((isOpen) => !isOpen);
                        setIsOpenServicesForMobile(false);
                      }}
                    >
                      Packages
                    </Link>
                  </div>
                </div>
                {!isOpenPackageForMobile && (
                  <MdOutlineKeyboardArrowDown
                    className="text-black text-2xl cursor-pointer active:outline-none"
                    tabIndex={0}
                    onClick={() => {
                      setIsOpenPackageForMobile(true);
                      setIsOpenServicesForMobile(false);
                    }}
                  />
                )}
                {isOpenPackageForMobile && (
                  <MdOutlineKeyboardArrowUp
                    className="text-black text-2xl cursor-pointer active:outline-none"
                    tabIndex={0}
                    onClick={() => {
                      setIsOpenPackageForMobile(false);
                      setIsOpenServicesForMobile(false);
                    }}
                  />
                )}
              </div>
              <div
                className={`${
                  isOpenPackageForMobile
                    ? "flex flex-col items-center rounded shadow p-2"
                    : "hidden"
                } space-y-3 mb-2 pl-4`}
              >
                {packagesItemForMobile.map((item) => (
                  <Link
                    to={item.link}
                    key={item.id}
                    onClick={toggleMenu}
                    className={`navbar-links !p-1 text-justify !text-black !ml-0 !text-[17px] ${isActive(item.link) ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/book-now"
                className={`navbar-links mb-2 !text-black !ml-0 ${isActive("/book-now") ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
                onClick={toggleMenu}
              >
                Book
              </Link>
              <Link
                to="/products"
                className={`navbar-links !text-black !ml-0 ${isActive("/products") ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/cart"
                className={`navbar-links flex justify-center items-center gap-2 !text-black !ml-0 ${isActive("/cart") ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
                onClick={toggleMenu}
              >
                Cart
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <Link
              to="/user-profile"
              className={`navbar-links !text-black !ml-0 ${isActive("/user-profile") ? "bg-skyn !rounded-lg w-64 mb-1 text-center !text-white" : "hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"}`}
              onClick={toggleMenu}
            >
              Profile
            </Link>
          )}
          {isLoggedIn && (
            <button
              className="navbar-links !text-black !ml-0 hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {!isLoggedIn && (
            <Link
              className="navbar-links !text-black !ml-0 hover:bg-skyn hover:!rounded-lg w-64 mb-1 text-center hover:!text-white"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuForMobile;
