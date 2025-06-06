import { Suspense, useEffect } from "react";
import { lazy } from "react";
import { useMediaQuery } from "@mui/material";
import MotionWrapper from "../../config/MotionFramer/MotionWrapper";
import CustomLoader from "../../shared/CustomLoader";
import Resources from "../../config/Resources";
import FadedLineBreak from "../../shared/CustomHrTag";

const BestSelling = lazy(() => import("./BestSelling"));
const MostPopularLhr = lazy(() => import("./MostPopularLhr"));
const TestimonialCarousel = lazy(() => import("./TestimonialCarousel"));
const ServicesOffered = lazy(() => import("./ServicesOffered"));
// const ContactUs = lazy(() => import("./ContactUs"));
const AboutUs = lazy(() => import("./AboutUs"));
const CustomHeroSection = lazy(() => import("../../shared/CustomHeroSection"));

function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1023px)");

  useEffect(() => {
    sessionStorage.removeItem("currentBookStep");
    sessionStorage.removeItem("packageName");
    sessionStorage.removeItem("packagePrice");
    sessionStorage.removeItem("treatmentName");
  }, []);

  return (
    <div className="mt-3">
      <div>
        <Suspense fallback={<CustomLoader open={true} />}>
          <div className="mt-5 flex flex-col">
            <CustomHeroSection />
          </div>
        </Suspense>
        <FadedLineBreak />
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <ServicesOffered
              isMobile={isMobile}
              isLargeScreen={isLargeScreen}
            />
          </MotionWrapper>
        </Suspense>
        {!isMobile && (
          <Suspense fallback={<CustomLoader open={true} />}>
            <MotionWrapper>
              <AboutUs />
            </MotionWrapper>
          </Suspense>
        )}
        {!isMobile && (
          <img
            src={Resources.images.Common.ourFeature}
            alt="what-we-offer"
            className="w-full mt-4 mb-4"
          />
        )}
        {!isMobile && (
          <Suspense fallback={<CustomLoader open={true} />}>
            <MotionWrapper>
              <MostPopularLhr
                isMobile={isMobile}
                isLargeScreen={isLargeScreen}
              />
            </MotionWrapper>
          </Suspense>
        )}
        <FadedLineBreak />
        <MotionWrapper>
          <BestSelling isMobile={isMobile} isLargeScreen={isLargeScreen} />
        </MotionWrapper>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <TestimonialCarousel isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        {/* <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <ContactUs isMobile={isMobile} />
          </MotionWrapper>
        </Suspense> */}
      </div>
    </div>
  );
}

export default Home;
