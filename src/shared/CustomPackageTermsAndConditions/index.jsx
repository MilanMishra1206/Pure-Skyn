import { AnimatePresence, motion } from "framer-motion";

function CustomPackageTermsAndConditions({
  isOpenTandCModal,
  setIsOpenTandCModal,
  buttonText,
  antiButtonText,
}) {
  return (
    <AnimatePresence>
      {isOpenTandCModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-slate-900/20 backdrop-blur p-4 md:!p-8 fixed inset-0 z-50 grid place-items-center overflow-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "-12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.35 }}
            className={`bg-gradient-to-br bg-white text-coal rounded-lg w-full max-w-lg shadow-xl cursor-default h-100 overflow-scroll`}
          >
            <div className="p-3 flex flex-col justify-between">
              <div className="p-4 mx-auto text-coal font-poppins text-sm">
                <h1 className="text-3xl font-bold text-center mb-6">
                  Terms and Conditions
                </h1>
                <p>
                  Welcome to Pureskyn! These Terms and Conditions govern your
                  use of our website, products, and home care services,
                  including laser hair removal, medi-facials, and other skincare
                  treatments. By accessing our website or using our services,
                  you agree to be bound by these
                  <strong> Terms and Conditions.</strong>
                </p>
                <div className="space-y-4 mt-4">
                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      1. General Terms
                    </h2>
                    <ul className="list-disc space-y-2 text-sm">
                      <li>
                        These Terms apply to all users of the Pureskyn website
                        and customers availing of our home care services and
                        purchasing our products.
                      </li>
                      <li>
                        By using our services or purchasing products, you
                        confirm that you are at least 18 years old or have legal
                        parental/guardian consent.
                      </li>
                      <li>
                        Pureskyn reserves the right to update, modify, or change
                        these Terms at any time without prior notice. Your
                        continued use of the website and services constitutes
                        acceptance of any revised Terms.
                      </li>
                      <li>
                        Users are responsible for providing accurate personal
                        information when booking services or purchasing
                        products.
                      </li>
                      <li>
                        Pureskyn's website may contain links to third-party
                        websites. We are not responsible for the content,
                        policies, or practices of these external websites.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">2. Services</h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        Pureskyn provides home care services, including but not
                        limited to laser hair removal, medi-facials, and
                        skincare treatments.
                      </li>
                      <li>
                        Service appointments must be booked in advance through
                        our website or customer service.
                      </li>
                      <li>
                        We reserve the right to refuse service to anyone for
                        reasons including but not limited to safety concerns,
                        medical conditions, or non-compliance with our policies.
                      </li>
                      <li>
                        Clients must disclose any medical conditions, allergies,
                        or skin sensitivities before availing of any service.
                      </li>
                      <li>
                        Services are performed based on industry standards, and
                        while we aim for the best results, individual results
                        may vary.
                      </li>
                      <li>
                        Pureskyn reserves the right to modify, discontinue, or
                        limit any services at its discretion.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">
                      3. Product Purchases
                    </h3>
                    <ul className="list-disc space-y-2">
                      <li>
                        Pureskyn offers skincare products for sale through our
                        website.
                      </li>
                      <li>
                        Prices are subject to change without prior notice. We
                        are not responsible for typographical errors in pricing.
                      </li>
                      <li>
                        Orders are subject to availability. In case of
                        non-availability, we will notify you and provide a
                        refund or alternative options.
                      </li>
                      <li>
                        All product purchases are final. Returns are accepted
                        only in cases of manufacturing defects or incorrect
                        product delivery.
                      </li>
                      <li>
                        Users must follow the provided instructions for product
                        usage. Pureskyn is not liable for any adverse effects
                        resulting from incorrect usage.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      4. Payments & Refunds
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        Payments for services and products must be made in full
                        at the time of booking or purchase.
                      </li>
                      <li>
                        We accept credit/debit cards, UPI and net banking.
                      </li>
                      <li>
                        Refunds for services are only applicable in cases of
                        cancellations made at least 24 hours before the
                        scheduled appointment.
                      </li>
                      <li>
                        In case of service dissatisfaction, customers may
                        contact customer support for resolution, but refunds
                        will be granted at Pureskyn's discretion.
                      </li>
                      <li>
                        Refunds for product purchases will only be processed if
                        the product is defective or incorrect. Refund requests
                        must be made within [insert number] days of purchase.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      5. Cancellations & Rescheduling
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        Clients must notify us at least 24 hours in advance for
                        cancellations or rescheduling of appointments.
                      </li>
                      <li>
                        Last-minute cancellations or no-shows may be subject to
                        a cancellation fee.
                      </li>
                      <li>
                        Pureskyn reserves the right to cancel or reschedule
                        appointments due to unforeseen circumstances, in which
                        case clients will be notified in advance.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      6. Liability & Disclaimers
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        Pureskyn is not responsible for any adverse reactions
                        resulting from services or product use if clients fail
                        to disclose medical conditions or allergies.
                      </li>
                      <li>
                        Our services are intended for cosmetic and wellness
                        purposes only. We do not provide medical advice or
                        treatments.
                      </li>
                      <li>
                        We do not guarantee specific results from our services,
                        as results may vary from person to person.
                      </li>
                      <li>
                        Pureskyn is not liable for any indirect, incidental, or
                        consequential damages arising from the use of our
                        website, products, or services.
                      </li>
                      <li>
                        Users agree to use Pureskyn's services and products at
                        their own risk.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      7. Privacy Policy
                    </h2>
                    <p>You agree to:</p>
                    <ul className="list-disc space-y-2">
                      <li>
                        Your personal information is collected and processed in
                        accordance with our Privacy Policy.
                      </li>
                      <li>
                        We do not share personal data with third parties except
                        as required to fulfill our services or legal
                        obligations.
                      </li>
                      <li>
                        Users consent to receive promotional communications from
                        Pureskyn, which they can opt out of at any time.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      8. Intellectual Property
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        All content on the Pureskyn website, including text,
                        images, logos, and branding, is the property of Pureskyn
                        and may not be copied, reproduced, or used without prior
                        written consent.
                      </li>
                      <li>
                        Unauthorized use of any Pureskyn materials may result in
                        legal action.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      9. Termination
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        Pureskyn reserves the right to suspend or terminate
                        access to its services for users who violate these Terms
                        and Conditions.
                      </li>
                      <li>
                        Termination may occur without prior notice if a user
                        engages in fraudulent activity, misconduct, or any other
                        behavior deemed inappropriate.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      10. Governing Law & Dispute Resolution
                    </h2>
                    <ul className="list-disc space-y-2">
                      <li>
                        These Terms shall be governed by and construed in
                        accordance with the laws of India.
                      </li>
                      <li>
                        Any disputes shall first be attempted to be resolved
                        amicably. If not resolved, disputes will be subject to
                        arbitration or legal proceedings in courts.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-2">
                      11. Contact Us
                    </h2>
                    <p>
                      For any inquiries regarding these Terms, please contact us
                      at: Email: mail@test.com Phone: +91-8789899871
                    </p>
                  </section>

                  <div className="mt-6 text-center">
                    <p>
                      By clicking "I Agree", you confirm that you have read,
                      understood, and agree to these Terms and Conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mb-5">
                {buttonText && (
                  <button
                    onClick={() => setIsOpenTandCModal(false)}
                    className="border rounded-lg shadow !bg-skyn text-white hover:bg-white/10 transition-colors font-semibold w-full md:!w-50 py-2 hover:!opacity-80"
                  >
                    {buttonText}
                  </button>
                )}
                {antiButtonText && (
                  <button
                    onClick={() => setIsOpenTandCModal(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-coal font-semibold w-full py-2 rounded"
                  >
                    {antiButtonText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CustomPackageTermsAndConditions;
