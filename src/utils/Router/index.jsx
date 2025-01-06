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
    path: "/logout",
    Component: PureSkynLogout,
  },
];

function Router() {
  const { setIsHomePage, setIsMedifacialPage } = useRouteStatus();
  const token = sessionStorage.getItem("token");
  const isAdmin = false;

  const location = useLocation();
  const showNavAndFooter = [
    "/",
    "/services",
    "/products",
    "/faq",
    "/user-profile",
    "/change-password",
    "/book-now",
    "/services/laser-hair-removal",
    "/services/laser-hair-removal/men",
    "/services/laser-hair-removal/women",
    "/services/laser-hair-removal-packages",
    "/services/skin/medi-facial",
    "/services/skin/medi-facial-packages",
    "/services/skin/medi-facial/oxy-hydra-facial",
    "/services/skin/medi-facial/skin-tightening",
    "/services/skin/medi-facial/dermafrac-infusion-facial",
    "/services/skin/medi-facial/oxygeneo",
  ].includes(location.pathname);

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
        <Suspense fallback={<CustomLoader />}>
          <div className="mb-5">
            <CustomNavbar />
          </div>
        </Suspense>
      )}
      {showCarousel && !isAdmin && (
        <Suspense fallback={<CustomLoader />}>
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
                  <Suspense fallback={<CustomLoader />}>
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
            <Suspense fallback={<CustomLoader />}>
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
      <ScrollToTopButton />
      {showNavAndFooter && (
        <Suspense fallback={<CustomLoader />}>
          <CustomFooter />
        </Suspense>
      )}
    </div>
  );
}

export default Router;
