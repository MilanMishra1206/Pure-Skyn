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

function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="mt-3">
      <div>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <AboutUs />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <ServicesOffered isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <WhyUs isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <BestSelling isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <TestimonialCarousel isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
        <Suspense fallback={<CustomLoader />}>
          <MotionWrapper>
            <ContactUs isMobile={isMobile} />
          </MotionWrapper>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
