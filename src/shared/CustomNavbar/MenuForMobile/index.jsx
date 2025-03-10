import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Resources from "../../../config/Resources";

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

const NavHeader = ({ toggleMenu, userName }) => (
  <header className="flex place-content-center items-center px-4 border-b border-gray-300">
    <button
      className="absolute top-2 right-4 text-2xl text-black"
      onClick={toggleMenu}
    >
      <IoIosCloseCircle size={"2rem"} />
    </button>
    <div className="flex flex-col p-4">
      <Link to="/" className="no-underline font-bold" onClick={toggleMenu}>
        <img
          src={Resources.images.Common.newLogoWhite}
          alt="branding"
          className="h-14 md:!h-16"
        />
      </Link>
      {userName && (
        <p className="text-coal text-xl font-bold text-center mt-2">
          Welcome, {userName}
        </p>
      )}
    </div>
  </header>
);

const NavButton = ({ onClick, name, link, isActive, hasSubNav, isList }) =>
  isList ? (
    <li
      onClick={() => onClick(name, link, hasSubNav)}
      className={`list-none flex items-center gap-2 cursor-pointer w-full px-6 py-3 font-bold text-coal hover:bg-gray-200 text-left transition ${
        isActive ? "!bg-skyn hover:!bg-skyn !text-white" : ""
      }`}
    >
      ► {name}
      {hasSubNav && <span className="float-right">{isActive ? "▲" : "▼"}</span>}
    </li>
  ) : (
    <button
      onClick={() => onClick(name, link, hasSubNav)}
      className={`w-full px-6 py-3 font-bold text-coal hover:bg-gray-200 text-left transition ${
        isActive ? "!bg-skyn hover:!bg-skyn !text-white" : ""
      }`}
    >
      {name}
      {hasSubNav && <span className="float-right">{isActive ? "▲" : "▼"}</span>}
    </button>
  );

const SubMenu = ({ item, activeItem, handleClick }) => (
  <div
    className={`overflow-hidden transition-all ${
      activeItem === item.name
        ? "overflow-y-auto"
        : "max-h-0 overflow-hidden"
    }`}
  >
    <div className="py-1">
      {item.items.map((subItem) => (
        <NavButton
          key={subItem.label}
          onClick={handleClick}
          name={subItem.label}
          link={subItem.link}
          isActive={activeItem === subItem.label}
          isList={true}
        />
      ))}
    </div>
  </div>
);

const MenuForMobile = ({
  userName,
  toggleMenu,
  menuOpen,
  isAdmin,
  isLoggedIn,
  handleLogout,
  isTablet,
}) => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const handleClick = (itemName, link, hasSubNav) => {
    setActiveItem(activeItem === itemName ? "" : itemName);
    navigate(link);
    !hasSubNav && toggleMenu();
  };

  const navigateToServicesCart = () => {
    sessionStorage.removeItem("currentBookStep");
    navigate("/book-now/services-cart");
    toggleMenu();
  };

  const menuItems = [
    { name: "Home", link: "/" },
    ...(!isAdmin
      ? [
          {
            name: "Services",
            items: serviceItemForMobile,
          },
          { name: "Book", link: "/book-now" },
          { name: "Shop", link: "/products" },
          { name: "Products Cart", link: "/products/product-cart" },
          { name: "Packages", link: "/packages" },
          { name: "Services Cart", link: "#", onClick: navigateToServicesCart },
        ]
      : []),

    ...(isLoggedIn
      ? [
          { name: "Profile", link: "/user-profile" },
          { name: "Logout", link: "#", onClick: handleLogout },
        ]
      : [{ name: "Sign-In", link: "/login" }]),
  ];

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      <aside
        className={`fixed font-poppins top-0 left-0 w-80 md:!w-1/2 bg-[#FFFF] z-50 transform h-full ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isTablet ? "block" : "hidden"} transition-all duration-500 ease-in-out overflow-scroll`}
      >
        <NavHeader toggleMenu={toggleMenu} userName={userName} />
        <div className="py-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="w-full px-6 py-3 font-bold text-coal hover:!bg-skyn text-left hover:!text-white transition"
                >
                  {item.name}
                </button>
              ) : (
                <NavButton
                  onClick={handleClick}
                  name={item.name}
                  link={item.link}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
              )}
              {item.items && (
                <SubMenu
                  item={item}
                  activeItem={activeItem}
                  handleClick={handleClick}
                />
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default MenuForMobile;
