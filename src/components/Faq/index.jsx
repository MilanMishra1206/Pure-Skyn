import { useEffect, useState } from "react";
import {
  dermoFracAccordianFaqContent,
  laserHairRemovalFaq,
  mediFacialFaq,
  oxygeneoFaqAccordianContent,
  OxyHydraAccordianFaqContent,
  SkinTighteningFaqAccordianContent,
} from "../../helpers/AccordianContent";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import FadeInWrapper from "../../config/MotionFramer/FadeInWrapper";
import CustomHeader from "../../shared/CustomHeader";
import CustomAccordian from "../../shared/CustomAccordian";

function Faq() {
  const location = useLocation();
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const [activeFaq, setActiveFaq] = useState("Laser Hair Removal");

  const faqData = [
    {
      label: "Laser Hair Removal",
      id: "laser-hair-removal",
      title: "Laser Hair Removal - FAQs",
      content: laserHairRemovalFaq,
    },
    {
      label: "Medi Facial",
      id: "medi-facial",
      title: "Medi Facial - FAQs",
      content: mediFacialFaq,
    },
    {
      label: "Dermafrac Infusion Facial",
      id: "dermaFraq",
      title: "Dermafrac Infusion Facial - FAQs",
      content: dermoFracAccordianFaqContent,
    },
    {
      label: "Oxy Hydra Facial",
      id: "oxy-hydra",
      title: "Oxy Hydra Facial + Glow Peel - FAQs",
      content: OxyHydraAccordianFaqContent,
    },
    {
      label: "Oxygeneo",
      id: "oxygeneo",
      title: "Oxygeneo - FAQs",
      content: oxygeneoFaqAccordianContent,
    },
    {
      label: "RF Skin Tightening",
      id: "skin-tightening",
      title: "RF Skin Tightening - FAQs",
      content: SkinTighteningFaqAccordianContent,
    },
  ];

  useEffect(() => {
    const targetFaq = decodeURIComponent(location.hash.replace("#", ""));
    if (targetFaq) {
      setActiveFaq(targetFaq);
    }
  }, [location.hash, faqData]);

  const handleButtonClick = (label) => {
    setActiveFaq(label);
    navigate("/faq", { replace: true });
  };

  return (
    <div>
      <div className="mt-3">
        <motion.div
          variants={FadeInWrapper("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-4"
        >
          <div className="mt-5">
            <CustomHeader
              heading={"Frequently Asked Questions"}
              subHeading={"Let's answer some questions"}
              showBackButton={true}
            />
          </div>
        </motion.div>
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`gap-3 grid md:grid-cols-2 lg:!grid-cols-3 mb-4 mt-5 ${isTablet ? "px-4" : "px-5"}`}
        >
          {faqData.map(({ label }) => (
            <Button
              key={label}
              className={`p-4 font-poppins font-bold cursor-pointer text-white !bg-coal hover:!bg-skyn hover:!text-white 
                transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${
                  activeFaq === label ? "!bg-skyn !text-white" : ""
                }`}
              onClick={() => handleButtonClick(label)}
            >
              {label}
            </Button>
          ))}
        </motion.div>
        {faqData.map(
          ({ label, id, title, content }) =>
            activeFaq === label && (
              <motion.div
                variants={FadeInWrapper("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`flex flex-col py-5 ${isTablet ? "w-full px-4" : "w-4/5 px-5"}`}
                id={id}
                key={id}
              >
                <div className="text-3xl font-bold text-kashmirBlue">
                  {title}
                </div>
                <div className="mt-4">
                  <CustomAccordian accordionData={content} />
                </div>
                <hr className="border-t-4 my-4" />
              </motion.div>
            )
        )}
      </div>
    </div>
  );
}

export default Faq;
