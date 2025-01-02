import { FaPhoneAlt, FaRegAddressBook } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Resources from "../../../config/Resources";
import CustomHeader from "../../../shared/CustomHeader";

function ContactUs({ isMobile }) {
  return (
    <div className="px-4 mb-5">
      <div className={`${isMobile ? "" : "px-4"}`}>
        <CustomHeader heading={"Contact Us"} />
      </div>
      <div className={`${isMobile ? "p-2" : "px-5"}`}>
        <div className="flex flex-col md:!flex-row md:!justify-between items-center">
          {isMobile && (
            <img src={Resources.images.ContactUs.contactUs} alt="why us" />
          )}
          <div className="flex flex-col">
            <div className="flex items-center mt-2">
              <div className="bg-skyn mr-2 no-underline p-2 rounded-5 text-white hover:opacity-80 text-2xl">
                <IoPhonePortraitOutline />{" "}
              </div>
              <div className="ml-2 text-xl font-poppins font-semibold">
                +91-9898989898
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-skyn mr-2 no-underline p-2 rounded-5 text-white hover:opacity-80 text-2xl">
                <FaPhoneAlt />
              </div>
              <div className="ml-2 text-xl font-poppins font-semibold">
                +01511-111111
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-skyn mr-2 no-underline p-2 rounded-5 text-white hover:opacity-80 text-2xl">
                <MdOutlineMail />
              </div>{" "}
              <div className="ml-2 text-xl font-poppins font-semibold">
                mailer@mail.com
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-skyn mr-2 no-underline p-2 rounded-5 text-white hover:opacity-80 text-2xl">
                <FaRegAddressBook />{" "}
              </div>
              <div className="ml-2 text-xl font-poppins font-semibold">
                Abc Street, Gurgaon, Haryana - 122101
              </div>
            </div>
          </div>
          {!isMobile && (
            <img
              src={Resources.images.ContactUs.contactUs}
              alt="why us"
              className="h-72"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
