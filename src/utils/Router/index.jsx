import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useRouteStatus } from "../../config/Context/RouteContext";
import ScrollToTopButton from "../../shared/CustomBackToTopButton";
import CustomLoader from "../../shared/CustomLoader";

// Lazy Loaded Routes
const PureSkynHome = lazy(() => import("../../pages/PureSkynHome"));
const PureSkynLogin = lazy(() => import("../../pages/PureSkynLogin"));
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
const PureSkynCart = lazy(() => import("../../pages/PureSkynCart"));
const CustomNavbar = lazy(() => import("../../shared/CustomNavbar"));
const CustomHeroSection = lazy(() => import("../../shared/CustomHeroSection"));
const PageNotFound = lazy(() => import("../../shared/PageNotFound"));
const CustomFooter = lazy(() => import("../../shared/CustomFooter"));

function RedirectToLogin() {
  return <Navigate to="/pureSkyn/login" />;
}

const routesConfig = [
  {
    path: "/login",
    Component: PureSkynLogin,
  },
  {
    path: "/",
    Component: PureSkynHome,
  },
  {
    path: "/services",
    Component: PureSkynServices,
  },
  {
    path: "/services/laser-hair-removal",
    Component: PureSkynLaserHairRemoval,
  },
  {
    path: "/services/laser-hair-removal/:category",
    Component: PureSkynLaserHairRemoval,
  },
  {
    path: "/services/laser-hair-removal-packages",
    Component: PureSkynLHRPackages,
  },
  {
    path: "/services/skin/medi-facial",
    Component: PureSkynSkinTreatment,
  },
  {
    path: "/services/skin/medi-facial-packages",
    Component: PureSkynMediFacialPackages,
  },
  {
    path: "/services/skin/medi-facial/:type",
    Component: PureSkynSkinTreatment,
  },
  {
    path: "/products",
    Component: PureSkynProducts,
  },
  {
    path: "/products/:productName",
    Component: PureSkynProductDetails,
  },
  {
    path: "/sign-up",
    Component: PureSkynSignUp,
  },
  {
    path: "/faq",
    Component: PureSkynFaq,
  },
  {
    path: "/user-profile",
    Component: PureSkynUserProfile,
  },
  {
    path: "/change-password",
    Component: PureSkynChangePassword,
  },
  {
    path: "/book-now",
    Component: PureSkynBookNow,
  },
  {
    path: "/cart",
    Component: PureSkynCart,
  },
  {
    path: "/logout",
    Component: PureSkynLogout,
  },
];

function Router() {
  const { setIsHomePage, setIsMedifacialPage } = useRouteStatus();
  const token = sessionStorage.getItem("token");
  const isAdmin = false;

  const location = useLocation();
  const showNavAndFooter = !["/login", "/sign-up"].includes(location.pathname);

  const showCarousel = ["/"].includes(location.pathname);

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
      {showCarousel && !isAdmin && (
        <Suspense fallback={<CustomLoader open={true} />}>
          <div className="mt-5 flex flex-col">
            <CustomHeroSection />
          </div>
        </Suspense>
      )}
      <Routes>
        {routesConfig.map(({ path, Component }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                true ? (
                  <Suspense fallback={<CustomLoader open={true} />}>
                    <Component />
                  </Suspense>
                ) : (
                  <RedirectToLogin />
                )
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
