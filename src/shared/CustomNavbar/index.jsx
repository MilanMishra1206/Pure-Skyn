import { lazy, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@mui/material";
import MenuForDesktop from "./MenuForDesktop";
import MenuForMobile from "./MenuForMobile";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";

const CartDrawer = lazy(() => import("../../components/Cart/CartDrawer"));

function CustomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const packageButtonRefForMobile = useRef(null);
  const serviceButtonRefForMobile = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpenPackageForMobile, setIsOpenPackageForMobile] = useState(false);
  const [isOpenServicesForMobile, setIsOpenServicesForMobile] = useState(false);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
  const [userName, setUserName] = useState("");
  const isAdmin = false;

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isTablet = useMediaQuery("(max-width: 935px)");
  const showSnackbar = useAppSnackbar();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.length;

  useEffect(() => {
    // setIsLoggedIn(true);
    setUserName("Milan");
  }, []);

  const handleLogout = () => {
    setIsConfirmingLogout(true);
    toggleMenu();
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setIsConfirmingLogout(false);
    navigate("/");
    showSnackbar("Logged-out successfully!", "success");
  };

  const cancelLogout = () => {
    setIsConfirmingLogout(false);
  };

  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const profileItem = [
    {
      id: 1,
      label: "User Profile",
      icon: Resources.images.NavBar.userProfile,
      action: () => {
        navigate("/user-profile");
      },
    },
    {
      id: 2,
      label: "Logout",
      icon: Resources.images.NavBar.logout,
      action: handleLogout,
    },
  ];

  const serviceItemForMobile = [
    {
      id: 1,
      label: "Laser Hair Removal Women",
      link: "/services/laser-hair-removal/women",
    },
    {
      id: 2,
      label: "Laser Hair Removal Men",
      link: "/services/laser-hair-removal/men",
    },
    {
      id: 3,
      label: "Oxy Hydra Facial",
      link: "/services/skin/medi-facial/oxy-hydra-facial",
    },
    {
      id: 4,
      label: "RF Skin Tightening",
      link: "/services/skin/medi-facial/skin-tightening",
    },
    {
      id: 5,
      label: "Dermafrac Infusion Facial",
      link: "/services/skin/medi-facial/dermafrac-infusion-facial",
    },
    {
      id: 6,
      label: "Oxygeneo",
      link: "/services/skin/medi-facial/oxygeneo",
    },
  ];

  const packagesItemForMobile = [
    {
      id: 1,
      label: "Laser Hair Removal Packages",
      link: "/services/laser-hair-removal-packages",
    },
    {
      id: 2,
      label: "Medi Facial",
      link: "/services/skin/medi-facial-packages",
    },
  ];

  const serviceItem = [
    {
      id: 1,
      label: "Laser Hair Removal Women",
      action: () => {
        navigate("/services/laser-hair-removal/women");
      },
    },
    {
      id: 2,
      label: "Laser Hair Removal Men",
      action: () => {
        navigate("/services/laser-hair-removal/men");
      },
    },
    {
      id: 3,
      label: "Oxy Hydra Facial",
      action: () => {
        navigate("/services/skin/medi-facial/oxy-hydra-facial");
      },
    },
    {
      id: 4,
      label: "RF Skin Tightening",
      action: () => {
        navigate("/services/skin/medi-facial/skin-tightening");
      },
    },
    {
      id: 5,
      label: "Dermafrac Infusion Facial",
      action: () => {
        navigate("/services/skin/medi-facial/dermafrac-infusion-facial");
      },
    },
    {
      id: 6,
      label: "Oxygeneo",
      action: () => {
        navigate("/services/skin/medi-facial/oxygeneo");
      },
    },
  ];

  const packagesItem = [
    {
      id: 1,
      label: "Laser Hair Removal Packages",
      action: () => {
        navigate("/services/laser-hair-removal-packages");
      },
    },
    {
      id: 2,
      label: "Medi Facial Packages",
      action: () => {
        navigate("/services/skin/medi-facial-packages");
      },
    },
  ];

  return (
    <div className="flex flex-col bg-coal !text-white p-3 fixed top-0 left-0 w-full z-50">
      <div>
        <nav className="flex items-center justify-between gap-2">
          <button
            className={`${isTablet ? "block" : "hidden"} text-white focus:outline-none`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={"2rem"} />
          </button>
          <div className={`${isTablet ? "flex" : "hidden"}`}>
            <Link to="/" className="no-underline font-bold">
              <img
                src={Resources.images.NavBar.branding}
                alt="branding"
                className="w-32"
              />
            </Link>
          </div>
          <button
            onClick={handleOpenCart}
            className={`navbar-links mr-4 relative ${isTablet ? "block" : "hidden"}`}
          >
            <FaCartShopping size="1.8rem" />
            {totalItems > 0 && (
              <span className="absolute left-1/2 bottom-50 text-xs bg-skyn text-white rounded-full px-2 py-1">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
        {!isTablet ? (
          <MenuForDesktop
            isActive={isActive}
            userName={userName}
            serviceItem={serviceItem}
            profileItem={profileItem}
            packagesItem={packagesItem}
            isAdmin={isAdmin}
            isLoggedIn={isLoggedIn}
            isTablet={isTablet}
          />
        ) : (
          <MenuForMobile
            isActive={isActive}
            userName={userName}
            serviceItemForMobile={serviceItemForMobile}
            packagesItemForMobile={packagesItemForMobile}
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
            setIsOpenServicesForMobile={setIsOpenServicesForMobile}
            isOpenServicesForMobile={isOpenServicesForMobile}
            serviceButtonRefForMobile={serviceButtonRefForMobile}
            isOpenPackageForMobile={isOpenPackageForMobile}
            setIsOpenPackageForMobile={setIsOpenPackageForMobile}
            packageButtonRefForMobile={packageButtonRefForMobile}
            isAdmin={isAdmin}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            isTablet={isTablet}
          />
        )}
      </div>
      <AnimatePresence>
        {isConfirmingLogout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/20 backdrop-blur p-4 fixed inset-0 z-50 md:grid place-items-center place-content-center overflow-scroll"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg w-full max-w-lg"
            >
              <h3 className="text-coal font-bold text-lg mb-4">
                Are you sure you want to logout?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={cancelLogout}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {openCart && (
        <AnimatePresence>
          <CartDrawer openCart={openCart} handleOpenCart={handleOpenCart} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default CustomNavbar;
