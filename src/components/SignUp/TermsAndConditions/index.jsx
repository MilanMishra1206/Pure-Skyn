import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto text-coal font-poppins text-sm">
      <h1 className="text-3xl font-bold text-center mb-6">
        Terms and Conditions
      </h1>
      <p>
        By creating an account and signing up for services on Pure Skyn, you
        agree to be bound by these <strong>Terms and Conditions</strong>
      </p>
      <div className="space-y-4 mt-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Account Creation and Security
          </h2>
          <p className="text-sm">
            To access certain features on our website or app, including
            scheduling medi-facials, laser hair removal, or purchasing products,
            you must create an account. By signing up, you agree to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-sm">
            <li>
              Provide accurate, complete, and up-to-date information when
              registering.
            </li>
            <li>
              Maintain the confidentiality of your login credentials, including
              your password.
            </li>
            <li>
              Notify us immediately of any unauthorized use of your account or
              any other security breach.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Services and Purchases</h2>
          <h3 className="font-semibold mb-2 text-lg">
            Medi-Facials & Laser Hair Removal
          </h3>
          <p>By signing up for services, you agree to the following:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Eligibility for Treatments: Not all users may be suitable for
              medi-facial or laser hair removal treatments.
            </li>
            <li>
              Health Conditions: You must disclose any existing health
              conditions or medications.
            </li>
            <li>
              Treatment Results: Individual results may vary, and we do not
              guarantee specific outcomes.
            </li>
            <li>
              Post-Treatment Care: You are responsible for following
              post-treatment care instructions.
            </li>
            <li>
              Cancellations and Rescheduling: You must notify us in advance if
              you need to cancel or reschedule your treatment.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            E-Commerce for Products
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Product Availability: We make every effort to ensure the products
              listed on our website are available and in stock.
            </li>
            <li>
              Order Fulfillment: We reserve the right to cancel or modify any
              order due to out-of-stock products.
            </li>
            <li>
              Product Descriptions and Warranties: Product descriptions are for
              informational purposes and are not guaranteed to be accurate.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Payment and Fees</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Payment Method: You agree to provide valid payment information
              when purchasing services or products.{" "}
              <strong>
                For all the services, it is mandatory to pay 50% of the fee at
                the time of booking and rest after the service.
              </strong>
            </li>
            <li>
              Pricing: Prices are subject to change, and any changes will be
              communicated before confirming your purchase.
            </li>
            <li>
              Taxes and Fees: All purchases may be subject to applicable taxes,
              shipping fees, or handling charges.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Privacy and Data Collection
          </h2>
          <p>
            By signing up for an account, you agree to our{" "}
            <strong>Privacy Policy</strong>, which explains how we collect, use,
            and protect your personal data. Your personal information, and any
            communication related to the services you receive will be handled
            with the highest confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Modifications to Services and Terms
          </h2>
          <p>
            We reserve the right to modify or discontinue services, including
            medi-facials, laser hair removal, and the e-commerce store, at our
            discretion. We also reserve the right to update these Terms and
            Conditions at any time. Continued use of our services after changes
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Use our website, services, and products only for lawful purposes.
            </li>
            <li>Comply with all applicable laws, regulations, and policies.</li>
            <li>
              Not post or transmit any illegal, offensive, or inappropriate
              content.
            </li>
            <li>
              Ensure that your use of services, including treatments, does not
              harm or disrupt the experience of other users.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Pure Skyn shall
            not be liable for any direct, indirect, incidental, special, or
            consequential damages arising from your use of our services or
            products.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Dispute Resolution</h2>
          <p>
            Any disputes or claims arising out of or relating to these Terms and
            Conditions or your use of the service will be resolved through
            binding arbitration, as per the laws of India. By using our
            services, you agree to resolve disputes through arbitration rather
            than court proceedings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India. You agree to submit to the
            exclusive jurisdiction of the court for any disputes related to
            these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions, concerns, or feedback regarding these
            Terms and Conditions, please contact us at:
          </p>
          <ul className="list-none ml-6 space-y-2">
            <li>Email: mail@test.com</li>
            <li>Phone: +91-8789899871</li>
            <li>Address: Gurgaon</li>
          </ul>
        </section>

        <div className="mt-6 text-center">
          <p>
            By clicking "Sign Up" or creating an account, you confirm that you
            have read, understood, and agree to these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
