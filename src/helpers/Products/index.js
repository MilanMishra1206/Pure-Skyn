import Resources from "../../config/Resources";

const productContent = [
  {
    id: 1,
    name: "Description",
    content: `At Pureskyn, we believe that the foundation of real beauty is flawless, clear skin. We are thrilled to present Dermatica Aze Proactive Lotion, a revolutionary skincare solution created to effectively and gently treat acne, acne scars, and acne marks. With Dermatica Aze, your secret to bright, glowing skin, bid adieu to the aggravation of acne and the scarring that follows.`,
  },
  {
    id: 2,
    name: "Key Benefits",
    content: `<div class="grid gap-2">
        <div>
          <span class="font-bold">Fades Acne Marks: </span>
          <span>Acne marks can linger long after blemishes have healed. Our lotion works to fade these marks, allowing your skin to regain its even, flawless complexion.</span>
        </div>
        <div>
          <span class="font-bold">Reduces Acne Scars: </span>
          <span>Acne scars can be a source of insecurity, but Dermatica Aze is here to reduce their appearance. It helps diminish the visibility of scars, promoting a smoother, more refined skin texture.</span>
        </div>
        <div>
          <span class="font-bold">Multi-Action Formulation: </span>
          <span>We understand that acne and its aftermath require a multi-faceted approach. Dermatica Aze Proactive Lotion is formulated to take care of acne, acne marks, and acne scars in one gentle formulation.</span>
        </div>
        <div>
          <span class="font-bold">Gentle and Effective: </span>
          <span>Harsh treatments can worsen acne and scars. Our lotion is designed to be gentle on your skin while delivering effective results. It treats your skin with care, ensuring a soothing experience.</span>
        </div>
        <div>
          <span class="font-bold">Promotes Healthy Skin: </span>
          <span>Healthy skin is the foundation of beauty. Dermatica Aze not only addresses current concerns but also promotes the overall health and well-being of your skin.</span>
        </div>
      </div>`,
  },
  {
    id: 3,
    name: "How to Use",
    content: `<u class="space-y-4 list-disc no-underline">
                    <li>Take a sufficient of product in your palm</li>
                    <li>Apply on cleansed face and nect at night</li>
                    <li>Use regularly or as directed by your physician</li>
                  </u>`,
  },
  {
    id: 4,
    name: "Ingredients",
    content: `<u class="space-y-2 list-disc no-underline">
                    <li>DM Water</li>
                    <li>Porassium Azeloyl Diglycinate</li>
                    <li>DMDM Hydantoin</li>
                    <li>Lodopropynyl Butylcarbamate</li>
                  </u>`,
  },
  {
    id: 5,
    name: "Additional Information",
    content: `<div class="space-y-2">
                    <p>Make Dermatica Aze Proactive Lotion a part of your daily skincare routine, and watch as acne, marks, and scars become a thing of the past. Say goodbye to the insecurity of acne-related skin issues and hello to the confidence of clear, radiant beauty.</p> 
                    <p>Invest in your skin, invest in Dermatica Aze Proactive Lotion today!</p> 
                    <p>Rediscover the joy of clear, blemish-free skin with Dermatica Aze Proactive Lotion from Pureskyn. Embrace the confidence that comes with a clearer, more radiant complexion, and step out into the world with pride!</p>
                  </div>`,
  },
  {
    id: 6,
    name: "Shipping & Return",
    content: `<div class="font-bold text-xl">Returns Policy</div>
                    <div class="space-y-4 font-poppins">
                      <p class="mt-4">Personal use items once delivered cannot be returned. <b>Please record an unboxing video during opening of the package as this is necessary for issuing refund in case of wrong item delivery/damaged delivery. Please Note this is the policy of shipping partner and not pureskyn.com. Without unboxing video a refund will not be issued.</b></p>
                      <p>Once a return is raised we will get the return order picked up from the same address as the address of delivery.</p>
                      <p class="mb-4">You can expect the refund/replacement within 5-30 days of handing over the package for return, in most cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return order (5 to 10 business days) + the time it takes for us to process your return once we receive it (3 to 5 business days) + the time it takes for the bank to process the refund request (5 to 10 business days).</p>
                    </div>
                    <div class="font-bold text-xl">Shipping</div>
                    <div class="space-y-4">
                      <p class="mt-4">We can ship to majority countries across the world provided there are no restrictions on the products in the destinations country.</p>
                      <p>When you place an order, we will estimate shipping cost for you.</p>
                    </div>`,
  },
];

export const productList = {
  sunscreen: {
    "Dermatica Aze Proactive Lotion": {
      id: 1,
      productName: "Dermatica Aze Proactive Lotion",
      imgSrc:
        Resources.images.Products.products.sunscreen.dermaticaAzeProactiveLotion
          .img1,
      productDescription:
        "At Pureskyn, we believe that the foundation of real beauty is flawless, clear skin. We are thrilled to present Dermatica Aze Proactive Lotion, a revolutionary skincare solution created to effectively and gently treat acne, acne scars, and acne marks. With Dermatica Aze, your secret to bright, glowing skin, bid adieu to the aggravation of acne and the scarring that follows.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      productPrice: "1080",
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.dermaticaAzeProactiveLotion
      ),
      productsAdditionalDetails: productContent,
    },
    "Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50": {
      id: 2,
      productName: "Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50",
      imgSrc: Resources.images.Products.products.sunscreen.berlion.img1,
      productDescription:
        "Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50 shields your skin from UVA, UVB, blue light, and infrared radiation. It prevents photo-aging, sunburns, and skin imperfections, while serving as an excellent makeup base. Non-comedogenic, water-resistant, and paraben-free, it offers comprehensive protection for radiant, youthful skin.",
      ratings: 4,
      strikePrice: "2800",
      productPrice: "2250",
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.berlion
      ),
      productsAdditionalDetails: productContent,
    },
    "Ray Back Broad Spectrum Spf 50 +++": {
      id: 3,
      productName: "Ray Back Broad Spectrum Spf 50 +++",
      imgSrc: Resources.images.Products.products.sunscreen.rayback.img1,
      productDescription:
        "Ray Back Broad Spectrum Spf 50 +++ Sun's rays penetrate the skin and get absorbed at various depths in the form of UV Rays. UVA and UVB rays are the main cause of skin damage. Our SPF 50+++ sunscreen cream provides thorough protection from the Sun.Long lasting effect with no residue. No reapplication required for upto 4-6 hours. However, use more frequently incase of direct and prolonged sun exposure. Does not leave any white residue.",
      ratings: 4.5,
      productPrice: "250",
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.rayback
      ),
      productsAdditionalDetails: productContent,
    },
    "Seekcaus Hydra Sunscreen Gel SPF 50 PA++++": {
      id: 4,
      productName: "Seekcaus Hydra Sunscreen Gel SPF 50 PA++++",
      imgSrc: Resources.images.Products.products.sunscreen.seeckusSuncreen.img1,
      productDescription:
        "Seekcaus Hydra Sunscreen Gel SPF 50 PA++++ is a hydrating sun protection formula designed to shield your skin from harmful UV rays while providing essential moisture. This lightweight, non-greasy gel offers broad-spectrum protection with SPF 50 and PA++++, guarding against UVA and UVB rays. Enriched with hydrating ingredients like hyaluronic acid and aloe vera, it keeps your skin moisturized and refreshed throughout the day. Suitable for all skin types, it leaves no white cast and is perfect for daily use.",
      ratings: 5,
      strikePrice: "1000",
      productPrice: "700",
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.seeckusSuncreen
      ),
      productsAdditionalDetails: productContent,
    },
    "Ivatherm Sunlight SPF 50+ Dry Touch Cream": {
      id: 5,
      productName: "Ivatherm Sunlight SPF 50+ Dry Touch Cream",
      imgSrc: Resources.images.Products.products.sunscreen.sunlite.img1,
      productDescription:
        "Experience ultimate sun protection with Ivatherm Sunlight SPF 50+ Dry Touch Cream. This advanced sunscreen offers broad-spectrum protection against harmful UVA and UVB rays while imparting a dry touch finish, perfect for oily or combination skin. With its non-greasy formula enriched with antioxidants, it shields the skin from environmental stressors, ensuring a radiant and protected complexion all day.",
      ratings: 5,
      productPrice: "650",
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.sunlite
      ),
      productsAdditionalDetails: productContent,
    },
    "Dermatica Ray Protect Tint Mineral Sunscreen": {
      id: 6,
      productName: "Dermatica Ray Protect Tint Mineral Sunscreen",
      imgSrc: Resources.images.Products.products.sunscreen.tintSunscreen.img2,
      productDescription:
        "Dermatica Ray Protect Tint Mineral Sunscreen offers comprehensive protection from UVA, UVB, and Blue Light. Its hybrid formula combines light reflectants and absorbents in a non-sticky, lightweight, and fast-absorbing base. The subtle tint ensures seamless application, making it perfect for daily use indoors and outdoors, providing reliable and effective sun protection for all skin types.",
      ratings: 4,
      strikePrice: "2000",
      productPrice: "1500",
      smallDescription: [
        { id: 1, content: "Treats Acne" },
        { id: 2, content: "Reduces Acne Scars" },
      ],
      quantity: 1,
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.tintSunscreen
      ),
      productsAdditionalDetails: productContent,
    },
  },
};
