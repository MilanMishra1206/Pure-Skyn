import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useRouteStatus } from "../../config/Context/RouteContext";
import ScrollToTopButton from "../../shared/CustomBackToTopButton";
import CustomLoader from "../../shared/CustomLoader";
import PureSkynLogin from "../../pages/PureSkynLogin";

// Lazy Loaded Routes
const PureSkynHome = lazy(() => import("../../pages/PureSkynHome"));
const PureSkynLogout = lazy(() => import("../../pages/PureSkynLogout"));
const PureSkynServices = lazy(() => import("../../pages/PureSkynServices"));
const PureSkynProducts = lazy(() => import("../../pages/PureSkynProducts"));
const PureSkynProductDetails = lazy(
  () => import("../../pages/PureSkynProductDetails")
);
const PureSkynSignUp = lazy(() => import("../../pages/PureSkynSignUp"));
const PureSkynFaq = lazy(() => import("../../pages/PureSkynFaq"));
const PureSkynUserProfile = lazy(
  () => import("../../pages/PureSkynUserProfile")
);
const PureSkynChangePassword = lazy(
  () => import("../../pages/PureSkynChangePassword")
);
const PureSkynBookNow = lazy(() => import("../../pages/PureSkynBookNow"));
const PureSkynLaserHairRemoval = lazy(
  () => import("../../pages/PureSkynLaserHairRemoval")
);
const PureSkynSkinTreatment = lazy(
  () => import("../../pages/PureSkynSkinTreatment")
);
const PureSkynLHRPackages = lazy(
  () => import("../../pages/PureSkynLHRPackages")
);
const PureSkynMediFacialPackages = lazy(
  () => import("../../pages/PureSkynMediFacialPackages")
);
const PureSkynServicesCart = lazy(
  () => import("../../pages/PureSkynServicesCart")
);
const PureSkynCart = lazy(() => import("../../pages/PureSkynCart"));
const CustomNavbar = lazy(() => import("../../shared/CustomNavbar"));
const PageNotFound = lazy(() => import("../../shared/PageNotFound"));
const CustomFooter = lazy(() => import("../../shared/CustomFooter"));

const routesConfig = [
  {
    path: "/login",
    Component: PureSkynLogin,
    accessRule: "redirectIfAuth",
  },
  {
    path: "/sign-up",
    Component: PureSkynSignUp,
    accessRule: "redirectIfAuth",
  },
  {
    path: "/",
    Component: PureSkynHome,
    accessRule: "public",
  },
  {
    path: "/services",
    Component: PureSkynServices,
    accessRule: "public",
  },
  {
    path: "/services/laser-hair-removal",
    Component: PureSkynLaserHairRemoval,
    accessRule: "public",
  },
  {
    path: "/services/laser-hair-removal/:category",
    Component: PureSkynLaserHairRemoval,
    accessRule: "public",
  },
  {
    path: "/services/laser-hair-removal-packages",
    Component: PureSkynLHRPackages,
    accessRule: "public",
  },
  {
    path: "/services/skin/medi-facial",
    Component: PureSkynSkinTreatment,
    accessRule: "public",
  },
  {
    path: "/services/skin/medi-facial-packages",
    Component: PureSkynMediFacialPackages,
    accessRule: "public",
  },
  {
    path: "/services/skin/medi-facial/:type",
    Component: PureSkynSkinTreatment,
    accessRule: "public",
  },
  {
    path: "/products",
    Component: PureSkynProducts,
    accessRule: "public",
  },
  {
    path: "/products/:productName",
    Component: PureSkynProductDetails,
    accessRule: "public",
  },
  {
    path: "/faq",
    Component: PureSkynFaq,
    accessRule: "public",
  },
  {
    path: "/user-profile",
    Component: PureSkynUserProfile,
    accessRule: "requireAuth",
  },
  {
    path: "/change-password",
    Component: PureSkynChangePassword,
    accessRule: "public",
  },
  {
    path: "/book-now",
    Component: PureSkynBookNow,
    accessRule: "public",
  },
  {
    path: "/products/product-cart",
    Component: PureSkynCart,
    accessRule: "public",
  },
  {
    path: "/book-now/services-cart",
    Component: PureSkynServicesCart,
    accessRule: "public",
  },
  {
    path: "/logout",
    Component: PureSkynLogout,
    accessRule: "public",
  },
];

const RouteWrapper = ({ Component, accessRule }) => {
  const token = sessionStorage.getItem("token");

  switch (accessRule) {
    case "requireAuth":
      return token ? <Component /> : <Navigate to="/login" />;
    case "redirectIfAuth":
      return !token ? <Component /> : <Navigate to="/" />;
    case "public":
    default:
      return <Component />;
  }
};

function Router() {
  const { setIsHomePage, setIsMedifacialPage } = useRouteStatus();
  const location = useLocation();

  const showNavAndFooter = !["/login", "/sign-up"].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
      setIsMedifacialPage(false);
    } else if (location.pathname === "/services/skin/medi-facial") {
      setIsMedifacialPage(true);
      setIsHomePage(false);
    } else {
      setIsHomePage(false);
      setIsMedifacialPage(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {showNavAndFooter && (
        <Suspense fallback={<CustomLoader open={true} />}>
          <div className="mb-5">
            <CustomNavbar />
          </div>
        </Suspense>
      )}
      <Routes>
        {routesConfig.map(({ path, Component, accessRule }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<CustomLoader open={true} />}>
                  <RouteWrapper Component={Component} accessRule={accessRule} />
                </Suspense>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <Suspense fallback={<CustomLoader open={true} />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>

      <ScrollToTopButton />

      {showNavAndFooter && (
        <Suspense fallback={<CustomLoader open={true} />}>
          <CustomFooter />
        </Suspense>
      )}
    </div>
  );
}

export default Router;
