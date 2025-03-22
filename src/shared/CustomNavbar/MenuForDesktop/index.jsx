import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { lazy, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MdShoppingCartCheckout } from "react-icons/md";
import Resources from "../../../config/Resources";
import FlyoutLink from "../FlayoutLink";
import Dropdown from "../Dropdown";
import DropdownContent, { handleKeyPress } from "../Dropdown/DropdownContent";

const CartDrawer = lazy(
  () => import("../../../components/ProductsCart/CartDrawer")
);

const MenuForDesktop = ({
  isActive,
  userName,
  serviceItem,
  profileItem,
  totalServicesItems,
  totalProductsItems,
  isAdmin,
  isProductsPage,
  isLoggedIn,
  isTablet,
}) => {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const navigateToServicesCart = () => {
    sessionStorage.removeItem("currentBookStep");
    navigate("/book-now/services-cart");
  };

  return (
    <div
      className={`${isTablet ? "hidden" : "flex justify-between"} items-center px-8`}
    >
      <Link to="/" className="no-underline font-bold">
        <img
          src={Resources.images.Common.logoNavbar}
          alt="branding"
          style={{ width: "10rem" }}
        />
      </Link>
      <div
        className="flex items-center p-2 rounded-2xl"
        style={{
          boxShadow:
            "inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        }}
      >
        {isAdmin && (
          <FlyoutLink href="/" isActive={isActive("/")} className="mr-2">
            Home
          </FlyoutLink>
        )}
        {!isAdmin && (
          <div className="flex items-center gap-2">
            <FlyoutLink href="/" isActive={isActive("/")} className="mr-2">
              Home
            </FlyoutLink>
            <div className="flex items-center navbar-links p-1 xl:!px-4">
              <Dropdown
                header={"Services"}
                items={serviceItem}
                FlyoutContent={({ items }) => (
                  <DropdownContent
                    className="mx-4"
                    items={items}
                    handleKeyPress={handleKeyPress}
                  />
                )}
              />
            </div>
            <FlyoutLink href="/packages" isActive={isActive("/packages")}>
              Packages
            </FlyoutLink>
            <FlyoutLink href="/book-now" isActive={isActive("/book-now")}>
              Book
            </FlyoutLink>
            <FlyoutLink href="/products" isActive={isActive("/products")}>
              Shop
            </FlyoutLink>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        {!isAdmin &&
          (isProductsPage ? (
            <button
              onClick={handleOpenCart}
              className="hover:opacity-80 text-white relative"
            >
              <FaCartShopping size={"2rem"} />
              {totalProductsItems > 0 && (
                <span className="absolute left-1/2 bottom-50 text-xs bg-skyn text-white rounded-full px-2 py-1">
                  {totalProductsItems}
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={navigateToServicesCart}
              className="hover:opacity-80 text-white relative"
            >
              <MdShoppingCartCheckout size={"2rem"} />
              {totalServicesItems > 0 && (
                <span className="absolute bottom-50 text-xs bg-skyn text-white rounded-full px-2 py-1">
                  {totalServicesItems}
                </span>
              )}
            </button>
          ))}
        {isLoggedIn && (
          <div className="flex navbar-links">
            <Dropdown
              header={`Welcome ${userName}`}
              items={profileItem}
              FlyoutContent={({ items }) => (
                <DropdownContent
                  items={items}
                  handleKeyPress={handleKeyPress}
                />
              )}
            />
          </div>
        )}
        {!isLoggedIn && <FlyoutLink href="/login">Sign-In</FlyoutLink>}
      </div>
      {openCart && (
        <AnimatePresence>
          <CartDrawer openCart={openCart} handleOpenCart={handleOpenCart} />
        </AnimatePresence>
      )}
    </div>
  );
};

export default MenuForDesktop;
