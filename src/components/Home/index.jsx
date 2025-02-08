import { Suspense } from "react";
import { lazy } from "react";
import { useMediaQuery } from "@mui/material";
import MotionWrapper from "../../config/MotionFramer/MotionWrapper";
import CustomLoader from "../../shared/CustomLoader";

const BestSelling = lazy(() => import("./BestSelling"));
const TestimonialCarousel = lazy(() => import("./TestimonialCarousel"));
const ServicesOffered = lazy(() => import("./ServicesOffered"));
const WhyUs = lazy(() => import("./WhyUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const AboutUs = lazy(() => import("./AboutUs"));
const CustomHeroSection = lazy(() => import("../../shared/CustomHeroSection"));

function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeScreen = useMediaQuery("(min-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1336px)");

  return (
    <div className="mt-3">
      <div>
        <Suspense fallback={<CustomLoader open={true} />}>
          <div className="mt-5 flex flex-col">
            <CustomHeroSection />
          </div>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <AboutUs />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <ServicesOffered
              isMobile={isMobile}
              isLargeScreen={isLargeScreen}
              isLaptop={isLaptop}
            />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <WhyUs isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <BestSelling isMobile={isMobile} isLargeScreen={isLargeScreen} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <TestimonialCarousel isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader open={true} />}>
          <MotionWrapper>
            <ContactUs isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
