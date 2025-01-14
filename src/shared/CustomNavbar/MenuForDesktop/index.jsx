import { Link } from "react-router-dom";
import Resources from "../../../config/Resources";
import FlyoutLink from "../FlayoutLink";
import Dropdown from "../Dropdown";
import DropdownContent, { handleKeyPress } from "../Dropdown/DropdownContent";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const MenuForDesktop = ({
  isActive,
  userName,
  serviceItem,
  profileItem,
  packagesItem,
  isAdmin,
  isLoggedIn,
}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.length;

  return (
    <div className="hidden lg:flex lg:justify-between items-center">
      <Link to="/" className="ml-4 xl:!ml-16 no-underline font-bold">
        <img
          src={Resources.images.NavBar.branding}
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
        <FlyoutLink href="/" isActive={isActive("/")} className="mr-2">
          Home
        </FlyoutLink>
        {!isAdmin && (
          <div className="flex items-center gap-2">
            <div className="flex items-center navbar-links">
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
            <div className="flex items-center navbar-links">
              <Dropdown
                header={"Packages"}
                items={packagesItem}
                FlyoutContent={({ items }) => (
                  <DropdownContent
                    items={items}
                    handleKeyPress={handleKeyPress}
                  />
                )}
              />
            </div>
            <FlyoutLink href="/book-now" isActive={isActive("/book-now")}>
              Book Now
            </FlyoutLink>
            <FlyoutLink href="/products" isActive={isActive("/products")}>
              Products
            </FlyoutLink>
          </div>
        )}
      </div>
      <div className="flex items-center navbar-links">
        {!isAdmin && (
          <Link
            to="/cart"
            className="mr-5 hover:opacity-80 text-white relative"
          >
            <FaCartShopping size={"2rem"} />
            {totalItems > 0 && (
              <span className="absolute left-1/2 bottom-50 text-xs bg-skyn text-white rounded-full px-2 py-1">
                {totalItems}
              </span>
            )}
          </Link>
        )}
        {isLoggedIn && (
          <div className="flex">
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
      </div>
      {!isLoggedIn && <FlyoutLink href="/login">Login</FlyoutLink>}
    </div>
  );
};

export default MenuForDesktop;
