import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomPricingTable from "../../../../../shared/CustomPricingTable";
import {
  allPackageDetails,
  laserHairMenPackage,
  laserHairWomenPackage,
} from "../../../../../helpers/LaserServices";
import FadeInWrapper from "../../../../../config/MotionFramer/FadeInWrapper";
import Resources from "../../../../../config/Resources";

const WomenAndMenTabs = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const createPricingContent = (data) => {
    let pricingContent = [];
    Object.keys(data).forEach((category) => {
      const treatments = data[category];
      treatments.forEach((treatment) => {
        pricingContent.push({
          label: treatment.name,
          pricing: treatment.price,
          packageName: treatment.name,
          serviceId: treatment.serviceId,
          subServiceId: treatment.subServiceId,
          featureName: treatment.featureName,
          selectedPackageImg: treatment.imgSrc,
          isMediFacial: false,
        });
      });
    });

    return pricingContent;
  };

  const womenPricingContent = createPricingContent(allPackageDetails.LHRWomen);
  const menPricingContent = createPricingContent(allPackageDetails.LHRMen);

  return (
    <div className="font-poppins">
      <p className="font-bold text-center text-3xl mb-5 mt-3">
        Book Your Package Today!!
      </p>

      <div className="flex justify-center">
        <button
          className={`py-2 px-4 md:!p-4 lg:!p-5 lg:text-xl rounded-l-md ${activeTab === 1 ? "bg-coffee text-white" : "bg-gray-300"}`}
          onClick={() => handleTabChange(1)}
        >
          Laser Hair Removal For Women
        </button>
        <button
          className={`py-2 px-4 md:!p-4 lg:!p-5 lg:text-xl rounded-r-md ${activeTab === 2 ? "bg-coffee text-white" : "bg-gray-300"}`}
          onClick={() => handleTabChange(2)}
        >
          Laser Hair Removal For Men
        </button>
      </div>
      {activeTab === 1 && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`flex flex-col items-center justify-center mt-5 ${isMobile ? "p-1" : "p-4"}`}
        >
          <p className="font-bold text-center text-4xl mb-5 text-coffee">
            Laser Hair Removal For Women
          </p>
          <div
            className="bg-cover bg-center bg-repeat flex p-5 place-content-center w-full"
            style={{
              backgroundImage: `url(${Resources.images.Common.cardBg2})`,
            }}
          >
            <motion.div
              variants={FadeInWrapper("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:!grid-cols-5 gap-4 bg-[#FAFAFA]"
            >
              {laserHairWomenPackage.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-md shadow-lg place-items-center"
                >
                  <img
                    src={item.imgSrc}
                    className="h-32 md:!h-50 xl:!h-32 object-cover p-3"
                    alt={item.packageName}
                  />
                  <div className="w-full p-2 backdrop-blur-sm text-center">
                    <span className="font-poppins text-coffee font-bold text-base text-center">
                      {item.packageName}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <CustomPricingTable
            pricingContent={womenPricingContent}
            treatmentName="Laser Hair Removal Women"
          />
        </motion.div>
      )}
      {activeTab === 2 && (
        <motion.div
          variants={FadeInWrapper("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`flex flex-col items-center justify-center mt-5 ${isMobile ? "p-1" : "p-4"}`}
        >
          <p className="font-bold text-center text-4xl mb-5 text-coffee">
            Laser Hair Removal For Men
          </p>
          <div
            className="bg-cover bg-center bg-repeat flex p-5 place-content-center w-full"
            style={{
              backgroundImage: `url(${Resources.images.Common.cardBg2})`,
            }}
          >
            <motion.div
              variants={FadeInWrapper("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#FAFAFA]">
                {laserHairMenPackage.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-md shadow place-items-center"
                  >
                    <img
                      src={item.imgSrc}
                      className="h-32 object-cover p-3"
                      alt={item.packageName}
                    />
                    <div className="w-full p-2 backdrop-blur-sm text-center">
                      <span className="font-poppins text-coffee font-bold text-base text-center">
                        {item.packageName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <CustomPricingTable
            pricingContent={menPricingContent}
            treatmentName="Laser Hair Removal Men"
          />
        </motion.div>
      )}
    </div>
  );
};

export default WomenAndMenTabs;
