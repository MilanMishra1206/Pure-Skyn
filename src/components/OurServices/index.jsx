import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import CustomCards from "../../shared/CustomCards";
import CustomHeader from "../../shared/CustomHeader";
import { servicesCardDetails } from "../../helpers/LaserServices";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import FadedLineBreak from "../../shared/CustomHrTag";

function LaserServices() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="mt-5">
      <div className={`mt-5 ${isMobile ? "p-3" : "p-5"}`}>
        <CustomHeader
          heading={"Services"}
          subHeading={"What We Offer"}
          showBackButton={true}
          navigateTo={"/"}
        />
        <div className="text-justify font-poppins text-cello">
          <p className="mb-4">
            At <strong>Pure Skyn</strong>, we believe in the power of self-care
            and rejuvenation, offering cutting-edge, non-invasive beauty and
            wellness treatments that bring out the best version of yourself. Our
            expertly designed services are tailored to cater to your skin's
            unique needs, leaving you feeling refreshed, revitalized, and
            glowing. Whether you're looking to tackle unwanted hair, rejuvenate
            your skin, or tighten and lift, we have the perfect solution for
            you.
          </p>
          {servicesCardDetails.map((service, index) => (
            <motion.div
              variants={FadeInWrapper("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div key={index}>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 place-items-center">
                  <div>
                    <p className="font-bold mb-2">
                      {index + 1}. {service.title}
                    </p>
                    <span>{service.description}</span>
                    <ol className="font-medium list-disc text-start p-4 ml-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex items-center">
                    <CustomCards
                      key={index}
                      title={service.cardTitle}
                      imgSrc={service.image}
                      linkTo={service.linkTo}
                    />
                  </div>
                </div>
                {index < servicesCardDetails.length - 1 && <FadedLineBreak />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaserServices;
