import { lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import MenuForDesktop from "./MenuForDesktop";
import MenuForMobile from "./MenuForMobile";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { logoutUser } from "../../redux/Actions";

const CartDrawer = lazy(
  () => import("../../components/ProductsCart/CartDrawer")
);

function CustomNavbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const showSnackbar = useAppSnackbar();
  const isTablet = useMediaQuery("(max-width: 935px)");

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
  const [userName, setUserName] = useState("");
  const [isProductsPage, setIsProductsPage] = useState(false);
  const isAdmin = false;
  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const cartItems = useSelector((state) => state.cart.items);
  const servicesItems = useSelector((state) => state.servicesCart.services);
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const totalProductsItems = cartItems.length;
  const totalServicesItems = servicesItems.length;

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
      const name = userProfile?.name?.split(" ")[0];
      setUserName(name);
    } else {
      setIsLoggedIn(false);
    }
  }, [sessionStorage.getItem("token")]);

  useEffect(() => {
    if (location.pathname.includes("products")) {
      setIsProductsPage(true);
    } else {
      setIsProductsPage(false);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    setIsConfirmingLogout(true);
    toggleMenu();
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setIsConfirmingLogout(false);
    sessionStorage.clear();
    navigate("/");
    dispatch(logoutUser());
    showSnackbar("Logged-out successfully!", "success");
  };

  const cancelLogout = () => {
    setIsConfirmingLogout(false);
  };

  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const navigateToServicesCart = () => {
    sessionStorage.removeItem("currentBookStep");
    navigate("/book-now/services-cart");
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

  return (
    <div className="flex flex-col bg-coal !text-white p-3 fixed top-0 left-0 w-full z-50">
      <div>
        <nav className="flex items-center justify-between px-2 md:!px-8">
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
          {isProductsPage ? (
            <button
              onClick={handleOpenCart}
              className={`relative ${isTablet ? "block" : "hidden"}`}
            >
              <FaCartShopping size="1.8rem" />
              {totalProductsItems > 0 && (
                <span className="absolute left-1/2 bottom-50 text-xs bg-skyn text-white rounded-full px-2 py-1">
                  {totalProductsItems}
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={navigateToServicesCart}
              className={`relative ${isTablet ? "block" : "hidden"}`}
            >
              <MdShoppingCartCheckout size="2rem" />
              {totalServicesItems > 0 && (
                <span className="absolute top-0 text-sm bg-skyn text-white rounded-full px-2">
                  {totalServicesItems}
                </span>
              )}
            </button>
          )}
        </nav>
        {!isTablet ? (
          <MenuForDesktop
            isActive={isActive}
            userName={userName}
            serviceItem={serviceItem}
            profileItem={profileItem}
            totalServicesItems={totalServicesItems}
            totalProductsItems={totalProductsItems}
            isAdmin={isAdmin}
            isProductsPage={isProductsPage}
            isLoggedIn={isLoggedIn}
            isTablet={isTablet}
          />
        ) : (
          <MenuForMobile
            userName={userName}
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
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
