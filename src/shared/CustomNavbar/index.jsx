import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { useMutation } from "react-query";
import MenuForDesktop from "./MenuForDesktop";
import MenuForMobile from "./MenuForMobile";
import Resources from "../../config/Resources";
import { useAppSnackbar } from "../../config/Context/SnackbarContext";
import { emptyServiceCart, logoutUser } from "../../redux/Actions";
import { saveServiceCart } from "../../services/ServiceCart";
import ConfirmationModal from "../../components/ProductsCart/ConfirmationModal";

const CartDrawer = lazy(
  () => import("../../components/ProductsCart/CartDrawer")
);
const CustomLoader = lazy(() => import("../CustomLoader"));

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [openCart, setOpenCart] = useState(false);

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
      setUserName("");
    }
  }, [sessionStorage.getItem("token")]);

  useEffect(() => {
    setIsAdmin(userProfile?.isAdmin || false);
  }, [userProfile]);

  useEffect(() => {
    setIsProductsPage(location.pathname.includes("products"));
  }, [location.pathname]);

  const { mutate: saveCartDetails, isLoading: isSavingCartDetails } =
    useMutation(saveServiceCart, {
      onSuccess: (res) => {
        if (res?.status !== "ERROR") {
          showSnackbar("Logged-out successfully!", "success");
          dispatch(emptyServiceCart());
        } else {
          showSnackbar("Something went wrong", "error");
        }
      },
      onError: () => {
        showSnackbar("Something went wrong", "error");
      },
    });

  const handleLogout = () => {
    setIsConfirmingLogout(true);
    toggleMenu();
  };

  const confirmLogout = () => {
    const reqBody = {
      userId: userProfile.userId,
      packageDetails: servicesItems,
    };
    sessionStorage.clear();
    saveCartDetails({ reqBody });
    setIsLoggedIn(false);
    setIsConfirmingLogout(false);
    dispatch(logoutUser());
    navigate("/");
  };

  const cancelLogout = () => {
    setIsConfirmingLogout(false);
  };

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
      action: () => navigate("/user-profile"),
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
      action: () => navigate("/services/laser-hair-removal/women"),
    },
    {
      id: 2,
      label: "Laser Hair Removal Men",
      action: () => navigate("/services/laser-hair-removal/men"),
    },
    {
      id: 3,
      label: "Oxy Hydra Facial",
      action: () => navigate("/services/skin/medi-facial/oxy-hydra-facial"),
    },
    {
      id: 4,
      label: "RF Skin Tightening",
      action: () => navigate("/services/skin/medi-facial/skin-tightening"),
    },
    {
      id: 5,
      label: "Derma Infusion Facial",
      action: () =>
        navigate("/services/skin/medi-facial/derma-infusion-facial"),
    },
    {
      id: 6,
      label: "Oxygeneo Facial",
      action: () => navigate("/services/skin/medi-facial/oxygeneo"),
    },
  ];

  return (
    <div className="flex flex-col bg-coal !text-white p-3 fixed top-0 left-0 w-full z-50">
      <Suspense fallback={<div>Logging Out..</div>}>
        <CustomLoader open={isSavingCartDetails} />
      </Suspense>

      <div>
        <nav
          className={`flex items-center px-2 md:!px-8 ${
            isAdmin ? "justify-between" : "justify-between"
          }`}
        >
          <button
            className={`${isTablet ? "block" : "hidden"} text-white focus:outline-none`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={"2rem"} />
          </button>
          <div
            className={`flex-1 flex justify-center ${isTablet ? "block" : "hidden"}`}
          >
            <Link to="/" className="no-underline font-bold">
              <img
                src={Resources.images.Common.logoNavbar}
                alt="branding"
                className="w-32 mx-auto"
              />
            </Link>
          </div>
          {!isAdmin &&
            (isProductsPage ? (
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
            ))}
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

      {isConfirmingLogout && (
        <ConfirmationModal
          title="Are you sure you want to logout?"
          handleCancel={cancelLogout}
          handlePrimaryButtonClick={confirmLogout}
          confirmButtonText="Logout"
          imageSrc={Resources.images.Common.Warning}
        />
      )}

      {openCart && (
        <AnimatePresence>
          <CartDrawer openCart={openCart} handleOpenCart={handleOpenCart} />
        </AnimatePresence>
      )}
    </div>
  );
}

export default CustomNavbar;
