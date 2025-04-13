import Resources from "../../config/Resources";

const shippingInformation = {
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
};

const productContent = {
  sunscreen: {
    "Dermatica Aze Proactive Lotion": [
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
      shippingInformation,
    ],
    "Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50": [
      {
        id: 1,
        name: "Description",
        content: `Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50 shields your skin from UVA, UVB, blue light, and infrared radiation. It prevents photo-aging, sunburns, and skin imperfections, while serving as an excellent makeup base. Non-comedogenic, water-resistant, and paraben-free, it offers comprehensive protection for radiant, youthful skin.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
              <span>Complete protection against UVA, UVB, blue light, and infrared radiation.</span>
              <span>Reduces skin imperfections and dark spots.</span>
              <span>Prevents photo-aging, fine lines, and wrinkles.</span>
              <span>Provides high-level SPF 50 sunburn protection.</span>
              <span>Non-comedogenic, water-resistant, and paraben-free.</span>            
          </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<u class="space-y-4 list-disc no-underline">
                        <li>Take a sufficient amount and apply a thin film on the face, neck, and all exposed areas.</li>
                        <li>Apply 15 minutes prior to sun exposure.</li>
                        <li>Reapply after swimming or sweating heavily, or as advised by a physician.</li>
                      </u>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<u class="space-y-2 list-disc no-underline">
                        <li>Ethylhexyl Methoxycinnamate</li>
                        <li>Butyl Methoxydibenzoylmethane</li>
                        <li>Benzophenone-3</li>
                        <li>Titanium dioxide</li>
                        <li>Botanical filters</li>
                      </u>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
                    <p>Shield your skin from the harmful effects of UVA and UVB rays with Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50. Lightweight, non-comedogenic, and enriched with skin-friendly ingredients, this sunscreen is designed to blend seamlessly into your skincare routine.</p> 
                    <p>Perfect for daily wear, it offers high sun protection without leaving a white cast, making it ideal for all skin types, including sensitive and acne-prone skin.</p> 
                    <p>Make sun safety effortless and effective—choose Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50 and step out with confidence, knowing your skin is protected and cared for, every day.</p>
                  </div>`,
      },
      shippingInformation,
    ],
    "Ray Back Broad Spectrum SPF 50+++": [
      {
        id: 1,
        name: "Description",
        content: `Ray Back Broad Spectrum SPF 50+++ offers advanced sun protection against both UVA and UVB rays, which are responsible for skin damage, sunburn, and premature aging. With its long-lasting, no-residue formula, it helps maintain healthy skin even during extended sun exposure.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Prevents skin darkening and sunburn.</span>
          <span>Offers oil-free and fast-absorbing application.</span>
          <span>Provides infrared (IR) protection with PA+++ rating.</span>
          <span>No white layers or greasy finish left on the skin.</span>
          <span>Delivers long-lasting sun protection up to 4-6 hours.</span>
          <span>Suitable for daily use under the sun.</span>       
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li>Apply generously to all exposed areas 15 minutes before sun exposure.</li>
          <li>Use more frequently in case of direct and prolonged sun exposure.</li>
          <li>No need for frequent reapplication under normal conditions (up to 4-6 hours).</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<p>Full list of ingredients not disclosed. However, the formulation includes sun filters and agents for broad-spectrum protection, suitable for regular sun exposure with IR and PA+++ rating.</p>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
          <p>Ray Back Broad Spectrum SPF 50+++ is designed for people who spend a lot of time outdoors. Its oil-free and fast-absorbing formula ensures comfort, while its advanced broad-spectrum protection guards your skin from the sun's harmful rays.</p> 
          <p>The sunscreen blends well into the skin without leaving any white residue, making it perfect for regular use without the greasy feel. With added PA+++ for IR protection, it's ideal for keeping your skin safe and glowing even under intense sunlight.</p>
        </div>`,
      },
      shippingInformation,
    ],
    "Seekcaus Hydra Sunscreen Gel SPF 50 PA++++": [
      {
        id: 1,
        name: "Description",
        content: `Seekcaus Hydra Sunscreen Gel SPF 50 PA++++ is a hydrating sun protection formula designed to shield your skin from harmful UV rays while providing essential moisture. This lightweight, non-greasy gel offers broad-spectrum protection with SPF 50 and PA++++, guarding against UVA and UVB rays. Enriched with hydrating ingredients like hyaluronic acid and aloe vera, it keeps your skin moisturized and refreshed throughout the day. Suitable for all skin types, it leaves no white cast and is perfect for daily use.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Provides broad-spectrum protection with SPF 50 PA++++.</span>
          <span>Shields skin from harmful UVA and UVB rays.</span>
          <span>Hydrates and moisturizes the skin.</span>
          <span>Lightweight, non-greasy formula ideal for daily use.</span>
          <span>Leaves no white cast and is suitable for all skin types.</span>       
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Application:</strong> Apply generously to the face and neck 15 minutes before sun exposure.</li>
          <li><strong>Reapplication:</strong> Reapply every 2 hours, or immediately after swimming, sweating, or towel drying.</li>
          <li><strong>Daily Use:</strong> Can be worn alone or under makeup for daily sun protection.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<u class="space-y-2 list-disc no-underline">
          <li>Hyaluronic Acid</li>
          <li>Aloe Vera Extract</li>
          <li>Vitamin E</li>
          <li>Green Tea Extract</li>
          <li>Niacinamide</li>
          <li>Squalane</li>
          <li>Titanium Dioxide</li>
          <li>Cyclopentasiloxane</li>
          <li>Dimethicone</li>
          <li>Chamomile Extract</li>
        </u>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
                    <p>Formulated with skin-loving ingredients like Hyaluronic Acid and Aloe Vera, Seekcaus Hydra Sunscreen Gel not only protects your skin from UV damage but also ensures it remains soft, supple, and hydrated all day long.</p>
                    <p>Its non-greasy, fast-absorbing texture makes it ideal for daily use, even under makeup. Designed to suit all skin types, this sunscreen leaves no white cast and offers strong protection with a PA++++ rating.</p>
                    <p>Experience advanced sun defense that feels just like skincare - wear it with confidence every day.</p>
                  </div>`,
      },
      shippingInformation,
    ],
    "Ivatherm Sunlight SPF 50+ Dry Touch Cream": [
      {
        id: 1,
        name: "Description",
        content: `Experience ultimate sun protection with Ivatherm Sunlight SPF 50+ Dry Touch Cream. This advanced sunscreen offers broad-spectrum protection against harmful UVA and UVB rays while imparting a dry touch finish, perfect for oily or combination skin. With its non-greasy formula enriched with antioxidants, it shields the skin from environmental stressors, ensuring a radiant and protected complexion all day.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Provides broad-spectrum SPF 50+ defense against UVA and UVB rays.</span>
          <span>Helps protect against environmental damage.</span>
          <span>Offers all-day protection, even in outdoor activities.</span>
          <span>Does not clog pores, maintaining skin clarity.</span>       
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Cleanse:</strong> Cleanse and hydrate the skin.</li>
          <li><strong>Application:</strong> Apply an appropriate amount to the face and neck.</li>
          <li><strong>Massage:</strong> Massage until completely absorbed.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<u class="space-y-2 list-disc no-underline">
          <li>Aqua</li>
          <li>Diethylamino Hydroxybenzoyl Hexyl Benzoate</li>
          <li>Phenylbenzimidazole Sulfonic Acid</li>
          <li>Glycerin</li>
          <li>Squalene</li>
          <li>Tocopherol</li>
        </u>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
          <p>Specially formulated for oily and combination skin, Ivatherm Sunlight SPF 50+ Dry Touch Cream delivers intense sun protection without compromising your skin's comfort. Its dry touch formula leaves a matte finish, reducing unwanted shine throughout the day.</p>
          <p>Enriched with powerful antioxidants, this sunscreen goes beyond UV protection by shielding your skin from environmental stress and premature aging.</p>
          <p>Enjoy all-day comfort and protection, even during extended outdoor activities, with a non-comedogenic, dermatologically tested formula that respects your skin.</p>
        </div>`,
      },
      shippingInformation,
    ],
    "Dermatica Ray Protect Tint Mineral Sunscreen": [
      {
        id: 1,
        name: "Description",
        content: `Dermatica Ray Protect Tint Mineral Sunscreen offers comprehensive protection from UVA, UVB, and Blue Light. Its hybrid formula combines light reflectants and absorbents in a non-sticky, lightweight, and fast-absorbing base. The subtle tint ensures seamless application, making it perfect for daily use indoors and outdoors, providing reliable and effective sun protection for all skin types.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Shields skin from harmful UVA, UVB, and Blue Light exposure.</span>
          <span>Non-sticky and quick-absorbing, making it comfortable for daily use.</span>
          <span>The subtle tint ensures even application and blends well with all skin tones.</span>
          <span>Gentle formulation ideal for sensitive, oily, and dry skin.</span>
          <span>Combines light reflectants and absorbents for superior sun defense.</span>     
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Step 1:</strong> Take a small amount of Dermatica Ray Protect Tint Mineral Sunscreen.</li>
          <li><strong>Step 2:</strong> Apply it on your face, neck and other exposed skin areas.</li>
          <li><strong>Step 3:</strong> Spread evenly across the skin.</li>
          <li><strong>Step 4:</strong> Use regularly before going out in the sun.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<u class="space-y-2 list-disc no-underline">
          <li>Ethylhexyl Methoxycinnamate</li>
          <li>Butyl Methoxydibenzoylmethane</li>
          <li>Triethanolamine</li>
          <li>Glycerine</li>
          <li>Octocrylene</li>
        </u>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
          <p>This hybrid mineral sunscreen is crafted with skin-friendly ingredients that provide optimal sun protection while maintaining a breathable, comfortable feel throughout the day.</p>
          <p>With a tinted formula that effortlessly blends into any complexion, it enhances your natural skin tone without leaving a white cast.</p>
          <p>Perfect for everyday protection, whether you're stepping out or staying in. Ideal for all skin types, including sensitive skin.</p>
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
        <p class="mt-4">We can ship to majority countries across the world provided there are no restrictions on the products in the destination country.</p>
        <p>When you place an order, we will estimate shipping cost for you.</p>
      </div>`,
      },
    ],
  },
  faceSerum: {
    "Agelite-X Serum": [
      {
        id: 1,
        name: "Description",
        content: `Agelite-X Serum is specially concocted with antioxidants that provide synergistic protection against oxidative stress in the skin. It works to brighten dull skin, improve hyperpigmentation, sun/photo-damaged skin, fine lines, and wrinkles.<br /><br />
    Vitamin C20 Serum contains a highly stable form of vitamin C, i.e., Ethyl Ascorbic Acid, that defends against environmental stressors and improves uneven skin tone for a radiant glow.<br /><br />
    Suitable for Normal, Oily & Dry Skin.<br />
    Available as: 15ml / 0.5 fl.oz.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Brightens dull skin and enhances natural glow.</span>
          <span>Improves hyperpigmentation and evens skin tone.</span>
          <span>Fights signs of aging like fine lines and wrinkles.</span>
          <span>Offers protection against environmental and oxidative stress.</span>
          <span>Contains a stable and effective form of Vitamin C.</span>     
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Step 1:</strong> Cleanse your face thoroughly and pat dry.</li>
          <li><strong>Step 2:</strong> Apply 2-3 drops of Agelite-X Serum to your face and neck.</li>
          <li><strong>Step 3:</strong> Gently massage until fully absorbed.</li>
          <li><strong>Step 4:</strong> Follow up with a moisturizer and sunscreen if used in the daytime.</li>
          <li>Use daily for best results, preferably in the morning.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
          <li>Purified Water</li>
          <li>Ethyl Ascorbic Acid</li>
          <li>Ethoxydiglycol</li>
          <li>Dimethyl Isosorbide</li>
          <li>Propanediol</li>
          <li>Ferulic Acid</li>
          <li>Xanthan Gum</li>
          <li>Sodium Hyaluronate</li>
          <li>DMDM Hydantoin (and) Iodopropynyl Butylcarbamate</li>
          <li>Vitamin E Acetate</li>
          <li>Suitable Base</li>
          <li>Perfume</li>
        </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
          <p>Agelite-X Serum combines powerful antioxidants in a lightweight, easily absorbed formula, suitable for all skin types including normal, oily, and dry skin.</p>
          <p>It's specially designed for daily use to combat dullness, uneven skin tone, and early signs of aging.</p>
          <p>Formulated with scientifically backed ingredients, it helps maintain a radiant, youthful complexion over time.</p>
        </div>`,
      },
      shippingInformation,
    ],
    "C Shine Serum": [
      {
        id: 1,
        name: "Description",
        content: `Illuminate your skin with the C Shine Serum, a luxurious blend of nourishing ingredients and Vitamin C. This serum works to even out skin tone, reduce the appearance of dark spots, and impart a radiant glow. Elevate your skincare regimen with the C Shine Serum for a luminous complexion that captivates.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
          <span>Brightens skin and enhances radiance.</span>
          <span>Reduces the appearance of dark spots and pigmentation.</span>
          <span>Boosts collagen production for firmer, youthful skin.</span>
          <span>Provides deep hydration and nourishment.</span>
          <span>Protects skin from environmental damage and free radicals.</span>     
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Step 1:</strong> Apply a few drops to clean, dry skin.</li>
          <li><strong>Step 2:</strong> Gently massage in circular motions until fully absorbed.</li>
          <li><strong>Step 3:</strong> Use daily, preferably in the morning, before applying sunscreen.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
          <li>Vitamin C</li>
          <li>Hyaluronic Acid</li>
          <li>Niacinamide</li>
          <li>Vitamin E</li>
          <li>Alpha Arbutin</li>
        </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
                <p>The C Shine Serum is perfect for all skin types, especially those seeking to combat dark spots, pigmentation, and uneven skin tone. Its potent blend of Vitamin C and other skin-loving ingredients offers intense hydration, helping to restore a natural glow.</p>
                <p>Whether used alone or as part of a broader skincare regimen, this serum will elevate your daily skincare routine and give your skin the radiance it deserves. Suitable for both day and night use, it can be applied under makeup or sunscreen for maximum benefits.</p>
                <p>For best results, use consistently as part of your morning routine, and combine with a broad-spectrum sunscreen for added protection against environmental stressors.</p>
              </div>`,
      },
      shippingInformation,
    ],
    "Lumiedge Serum": [
      {
        id: 1,
        name: "Description",
        content: `Lumiedge Serum is a lightweight and non-sticky daily-use skin serum which boosts luminosity and promotes healthy-looking skin. Effective for improving:
      `,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
          <span>Helps improve blemishes and hyperpigmentation.</span>
          <span>Revitalizes dull and stressed skin.</span>
          <span>Reduces dark spots and UV/photo-damage.</span>
          <span>Restores uneven skin tone.</span>
          <span>Minimizes the appearance of acne scars and wrinkles.</span>
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
          <li><strong>Step 1:</strong> Shake well before use.</li>
          <li><strong>Step 2:</strong> Press the dropper and take 4-5 drops of Lumiedge Face Serum on your fingertips.</li>
          <li><strong>Step 3:</strong> Apply over the face and neck with fingertips.</li>
          <li><strong>Step 4:</strong> Gently massage until completely absorbed.</li>
        </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
          <li>Purified Water</li>
          <li>Glycerin</li>
          <li>Propylene Glycol</li>
          <li>Betaine</li>
          <li>Pentylene Glycol</li>
          <li>Alpha Arbutin</li>
          <li>Niacinamide</li>
          <li>Aqua</li>
          <li>Potassium Sorbate</li>
          <li>Sodium Levulinate</li>
          <li>Sodium Citrate</li>
          <li>Ectoin</li>
          <li>D-Panthenol</li>
          <li>Salicylic Acid</li>
          <li>Sodium Hyaluronate</li>
          <li>Caffeine</li>
          <li>Sodium Gluconate</li>
          <li>Citric Acid</li>
          <li>Ocimum Sanctum Leaf Extract</li>
          <li>Melissa Officinalis Leaf Extract</li>
          <li>Perfume</li>
        </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
                <p>Lumiedge Serum is ideal for those looking to address multiple skin concerns like dullness, pigmentation, uneven skin tone, and signs of aging. Its lightweight, non-sticky formula is perfect for daily use and provides a radiant, healthy glow without feeling heavy on the skin.</p>
                <p>Best used in the morning and evening as part of a skincare routine to revitalize and refresh the skin, leaving it looking brighter, smoother, and more even-toned.</p>
                <p>Suitable for all skin types, including oily, dry, and sensitive skin. Always follow up with sunscreen during the day for maximum protection and optimal results.</p>
              </div>`,
      },
      shippingInformation,
    ],
  },
  facewash: {
    "Agelite Vitamin C Face Wash": [
      {
        id: 1,
        name: "Description",
        content: `Agelite Vitamin C Face Wash is designed to cleanse and brighten your skin, harnessing the powerful benefits of Vitamin C. This face wash effectively removes impurities, excess oil, and makeup while promoting a radiant complexion. Enriched with antioxidants, it helps to rejuvenate and protect the skin from environmental damage. Suitable for daily use, Agelite Vitamin C Face Wash leaves your skin feeling fresh, smooth, and glowing.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Cleanses and brightens the skin.</span>
      <span>Removes impurities, excess oil, and makeup.</span>
      <span>Enriched with Vitamin C and antioxidants.</span>
      <span>Rejuvenates and protects the skin.</span>
      <span>Suitable for daily use.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply a small amount to wet skin.</li>
      <li><strong>Step 2:</strong> Gently massage in circular motions, avoiding the eye area.</li>
      <li><strong>Step 3:</strong> Rinse thoroughly with water and pat dry.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Vitamin C</li>
      <li>Glycerin</li>
      <li>Aloe Vera Extract</li>
      <li>Citric Acid</li>
      <li>Antioxidants</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Agelite Vitamin C Face Wash is suitable for all skin types, including oily, dry, and combination skin. Its gentle formula makes it ideal for daily use without over-drying the skin.</p>
      <p>To achieve best results, use twice daily—morning and evening—as part of your regular skincare routine. Follow with a toner and moisturizer for enhanced hydration and protection.</p>
      <p>Store in a cool, dry place and avoid direct sunlight. For external use only.</p>
    </div>`,
      },
    ],
    "Aquaedge Cleanser": [
      {
        id: 1,
        name: "Description",
        content: `Aquaedge Cleanser is a refreshing, hydrating facial cleanser designed to gently remove dirt, impurities, and makeup without stripping the skin's natural moisture. Infused with natural extracts like Aloe Vera and Green Tea, this cleanser nourishes and revitalizes the skin while maintaining its balance. Suitable for all skin types, Aquaedge Cleanser leaves your skin feeling clean, refreshed, and perfectly hydrated.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Hydrates and refreshes the skin.</span>
      <span>Gently removes dirt, impurities, and makeup.</span>
      <span>Enriched with Aloe Vera and Green Tea.</span>
      <span>Maintains skin's natural moisture balance.</span>
      <span>Suitable for all skin types.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply a small amount to wet skin.</li>
      <li><strong>Step 2:</strong> Gently massage in circular motions.</li>
      <li><strong>Step 3:</strong> Rinse thoroughly with lukewarm water and pat dry.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Aloe Vera</li>
      <li>Green Tea Extract</li>
      <li>Vitamin E</li>
      <li>Glycerin</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Aquaedge Cleanser is designed to maintain skin hydration and balance, making it perfect for daily use. Its gentle yet effective formula cleanses the skin without compromising its natural moisture, leaving your face feeling soft and refreshed.</p>
      <p>Whether you have dry, oily, or combination skin, Aquaedge Cleanser provides the perfect balance to keep your skin clean, hydrated, and glowing throughout the day.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "DS Glow Facewash": [
      {
        id: 1,
        name: "Description",
        content: `DS Glow Facewash is your go-to solution for achieving whitening and vibrant skin. This gentle yet effective face wash helps reduce melanin pigment, making your skin appear whiter and youthful. It is free from SLS, soap, colorants, alcohol, and parabens, ensuring a safe and refreshing cleanse every time.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Reduces melanin pigment for a whiter complexion.</span>
      <span>Enriched with Dead Sea minerals for skin nourishment.</span>
      <span>Contains Dermawhite WF, White Lily Extract, Glycolic Acid, and L-Glutathione for effective whitening.</span>
      <span>Free from SLS, soap, alcohol, colorants, and parabens.</span>
      <span>Gentle and safe for daily use.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Put a dime-sized amount of DS Glow Facewash on your palm.</li>
      <li><strong>Step 2:</strong> Apply to a wet face and gently massage.</li>
      <li><strong>Step 3:</strong> Rinse thoroughly with water.</li>
      <li><strong>Step 4:</strong> Use daily for best results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Dermawhite WF</li>
      <li>White Lily Extract</li>
      <li>Glycolic Acid</li>
      <li>Castor Oil</li>
      <li>Rosemary Extract</li>
      <li>L-Glutathione</li>
      <li>Dead Sea Minerals</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>DS Glow Facewash is designed for all skin types, especially those seeking brighter and more radiant skin. Its gentle formula ensures a refreshing experience without irritating the skin.</p>
      <p>For best results, use as part of your morning and evening skincare routine. Follow up with a suitable moisturizer or sunscreen to keep your skin hydrated and protected throughout the day.</p>
      <p>Store in a cool, dry place away from direct sunlight.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Dermatica Tabula Rasa AST Perfectly Balanced Nourishing Cleanser": [
      {
        id: 1,
        name: "Description",
        content: `Dermatica Tabula Rasa AST Perfectly Balanced Nourishing Cleanser is a luxurious facial cleanser designed to provide a balanced, nourishing cleanse for all skin types. Infused with skin-nourishing ingredients like Hyaluronic Acid, Niacinamide, and Squalane, this cleanser effectively removes impurities and makeup without disrupting the skin's natural moisture balance. Its soothing and hydrating formula helps to calm irritation, reduce redness, and leave the skin feeling soft, smooth, and refreshed. Suitable for daily use, Dermatica Tabula Rasa AST ensures your skin stays perfectly balanced and nourished.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Gently cleanses and removes impurities.</span>
      <span>Maintains the skin's natural moisture balance.</span>
      <span>Nourishes and hydrates the skin.</span>
      <span>Calms irritation and reduces redness.</span>
      <span>Suitable for all skin types.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Wet your face with lukewarm water.</li>
      <li><strong>Step 2:</strong> Apply a small amount of Dermatica Tabula Rasa AST Perfectly Balanced Nourishing Cleanser to your hands and work into a lather.</li>
      <li><strong>Step 3:</strong> Gently massage onto your face in circular motions, then rinse thoroughly with water. Use twice daily, in the morning and evening.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Sodium Laureth Sulphate</li>
      <li>Glycerin</li>
      <li>Cocamidopropyl Betaine</li>
      <li>Maltooligosyl Glucoside</li>
      <li>Panthenol</li>
      <li>Betaine</li>
      <li>Sodium Lactate</li>
      <li>Alanine</li>
      <li>Triethanolamine</li>
      <li>Mushroom Extract</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
                <p>This nourishing cleanser is designed for daily use and is suitable for all skin types. It provides a refreshing cleanse, leaving your skin feeling smooth, hydrated, and perfectly balanced.</p>
                <p>With a soothing formula enriched with Hyaluronic Acid and Niacinamide, Dermatica Tabula Rasa AST works effectively to cleanse the skin without stripping its natural moisture, making it a perfect addition to your daily skincare routine.</p>
                <p>Ideal for those looking for a gentle, yet effective cleanser to maintain a healthy and hydrated complexion.</p>
              </div>`,
      },
      shippingInformation,
    ],
    "Uligo Cream 50g": [
      {
        id: 1,
        name: "Description",
        content: `Dermatica Tabula Rasa OS Sebum Regulating Cleanser is a specially formulated facial cleanser designed to control excess oil and reduce shine. Infused with powerful ingredients like Salicylic Acid, Niacinamide, and Tea Tree Oil, this cleanser effectively removes impurities, unclogs pores, and regulates sebum production. Its gentle yet effective formula helps prevent breakouts, minimizes the appearance of pores, and leaves the skin feeling fresh and balanced. Suitable for oily and acne-prone skin, Dermatica Tabula Rasa OS ensures a clearer, matte complexion with regular use.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Controls excess oil and reduces shine.</span>
      <span>Removes impurities and unclogs pores.</span>
      <span>Regulates sebum production.</span>
      <span>Helps prevent breakouts and minimizes pores.</span>
      <span>Suitable for oily and acne-prone skin.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Wet your face with lukewarm water.</li>
      <li><strong>Step 2:</strong> Apply a small amount of Dermatica Tabula Rasa OS Sebum Regulating Cleanser to your hands and work into a lather.</li>
      <li><strong>Step 3:</strong> Gently massage onto your face in circular motions, focusing on oily areas, then rinse thoroughly with water. Use twice daily, in the morning and evening.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Decyl Glucoside</li>
      <li>Cocamidopropyl Betaine</li>
      <li>Coco Glucoside</li>
      <li>Cetyl Betaine</li>
      <li>Phenoxyethanol</li>
      <li>Ethylhexylglycerin</li>
      <li>Betaine</li>
      <li>Orange Fruit Extract</li>
      <li>Lemon Fruit Extract</li>
      <li>Citric Acid</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Dermatica Tabula Rasa OS Sebum Regulating Cleanser is formulated to meet the needs of oily and acne-prone skin. This daily-use cleanser helps manage sebum production while ensuring the skin stays balanced and fresh. It is ideal for individuals looking to achieve clearer, matte skin while controlling oil throughout the day.</p>
      <p>Its effective yet gentle formula can be incorporated into both morning and evening skincare routines. With regular use, it helps improve the skin's overall texture and appearance, leaving the face refreshed and free from excess shine.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser": [
      {
        id: 1,
        name: "Description",
        content: `Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser is a soothing and hydrating facial cleanser designed for sensitive and dry skin. Enriched with mild, skin-loving ingredients like Hyaluronic Acid, Aloe Vera, and Chamomile Extract, this cleanser effectively removes impurities and makeup without stripping the skin's natural moisture barrier. Its ultra-gentle formula calms irritation, reduces redness, and leaves the skin feeling soft, smooth, and refreshed. Suitable for daily use, Dermatica Tabula Rasa DS ensures your skin stays hydrated and balanced.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Gently cleanses and removes impurities.</span>
      <span>Hydrates and soothes dry, sensitive skin.</span>
      <span>Maintains the skin's natural moisture barrier.</span>
      <span>Reduces redness and calms irritation.</span>
      <span>Suitable for daily use on all skin types, especially sensitive and dry skin.</span>     
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Wet your face with lukewarm water.</li>
      <li><strong>Step 2:</strong> Apply a small amount of Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser to your hands and work into a lather.</li>
      <li><strong>Step 3:</strong> Gently massage onto your face in circular motions, then rinse thoroughly with water. Use twice daily, in the morning and evening.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Sodium Laureth Sulphate</li>
      <li>C12-15 Alkyl Benzoate</li>
      <li>Cocamidopropyl Betaine</li>
      <li>Glyceryl Stearate</li>
      <li>Phenoxyethanol</li>
      <li>Ethylhexylglycerin</li>
      <li>Glycerin</li>
      <li>Sodium Cocoyl Isethionate</li>
      <li>Capric Triglyceride</li>
      <li>Poris Cocos Extract</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser is designed to cater to the needs of sensitive and dry skin. With its ultra-gentle formula, it ensures a deep cleanse without compromising the skin's natural moisture balance. The soothing ingredients make it perfect for individuals looking to calm irritation and keep the skin hydrated and refreshed throughout the day.</p>
      <p>Its gentle yet effective nature makes it an ideal choice for daily use, especially for those with sensitive or dry skin prone to irritation. With regular use, your skin will feel softer, smoother, and more hydrated.</p>
    </div>`,
      },
      shippingInformation,
    ],
  },
  moisturiser: {
    "Cerasoft Moisturising Cream": [
      {
        id: 1,
        name: "Description",
        content: `Cerasoft Moisturising Cream is an all-in-one skincare solution designed to whiten, hydrate, and perfect your skin. This cream provides a lighter, more radiant complexion while deeply moisturizing and keeping the skin looking smooth and flawless. Enriched with skin-loving ingredients, it helps to even out skin tone, reduce dark spots, and provide an oil-free finish. Ideal for daily use, Cerasoft Moisturising Cream ensures your skin stays hydrated, soft, and glowing.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Gives a lighter skin tone and instant fair look.</span>
      <span>Helps cover dark spots and blemishes.</span>
      <span>Evens out skin tone and provides an oil-free finish.</span>
      <span>Deeply hydrates and nourishes the skin.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply a small amount to clean, dry skin.</li>
      <li><strong>Step 2:</strong> Gently massage into your face and neck in circular motions.</li>
      <li><strong>Step 3:</strong> Use daily for best results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Sodium Citrate</li>
      <li>Squalene</li>
      <li>Aloe Vera</li>
      <li>Hyaluronic Acid</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Cerasoft Moisturising Cream combines multiple skincare benefits into one formula. It not only brightens and evens out skin tone, but it also provides long-lasting hydration and a smooth, oil-free finish. Suitable for all skin types, this cream is perfect for daily use to keep your skin soft, moisturized, and glowing.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Fi Moist Plus": [
      {
        id: 1,
        name: "Description",
        content: `Fi Moist Plus is a highly effective moisturizing cream designed to provide deep hydration and restore the skin's natural moisture balance. Infused with nourishing ingredients like Hyaluronic Acid and Vitamin E, this cream leaves the skin feeling soft, smooth, and plump. Its lightweight formula absorbs quickly, making it ideal for daily use to keep the skin moisturized and glowing. Perfect for dry and dehydrated skin, Fi Moist Plus ensures a refreshed and nourished complexion.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
        <span>Deeply hydrates and nourishes the skin.</span>
        <span>Restores the skin's natural moisture balance.</span>
        <span>Absorbs quickly without greasiness.</span>
        <span>Leaves skin soft, smooth, and plump.</span>
        <span>Ideal for daily use on dry skin.</span>
      </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
        <li><strong>Step 1:</strong> Apply a generous amount of Fi Moist Plus to clean, dry skin.</li>
        <li><strong>Step 2:</strong> Gently massage into your face and neck in upward circular motions.</li>
        <li><strong>Step 3:</strong> Use daily, preferably in the morning and evening for optimal results.</li>
      </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
        <li>Hyaluronic Acid</li>
        <li>Vitamin E</li>
        <li>Glycerin</li>
        <li>Aloe Vera</li>
      </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
        <p>Fi Moist Plus is designed to provide continuous moisture throughout the day. It helps to soothe and hydrate dry skin while giving it a soft, smooth texture. This lightweight yet effective cream works well for all skin types, especially for dry and dehydrated skin. For best results, use consistently to maintain a healthy and hydrated complexion.</p>
      </div>`,
      },
      shippingInformation,
    ],
    "Moiser FM Moisturising Gel 50ml": [
      {
        id: 1,
        name: "Description",
        content: `Moiser FM Moisturising Gel is a hydrating gel formulated to provide deep moisturization and soothe the skin. It contains a blend of natural extracts and moisturizing agents that help maintain the skin's moisture balance, leaving it soft and supple. Suitable for all skin types, especially for dry or sensitive skin.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Deep hydration to restore moisture balance.</span>
      <span>Soothes irritated or sensitive skin.</span>
      <span>Non-greasy formula absorbs quickly.</span>
      <span>Improves skin texture, making it smoother and more elastic.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply a thin layer of the gel to clean, dry skin.</li>
      <li><strong>Step 2:</strong> Gently massage in circular motions until absorbed.</li>
      <li><strong>Step 3:</strong> Use in the morning and evening for best results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Aloe Vera Extract</li>
      <li>Glycerin</li>
      <li>Niacinamide</li>
      <li>Hyaluronic Acid</li>
      <li>Allantoin</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Warnings",
        content: `<div class="space-y-2">
      <p><strong>Patch Test Advised:</strong> Perform a patch test before extensive use to avoid allergic reactions.</p>
      <p><strong>Avoid Eye Contact:</strong> If contact occurs, rinse immediately with plenty of water.</p>
    </div>`,
      },
      {
        id: 6,
        name: "Side Effects",
        content: `<div class="space-y-2">
      <p><strong>Skin Irritation:</strong> In rare cases, mild skin irritation may occur. Discontinue use if this happens.</p>
      <p><strong>Allergic Reactions:</strong> Avoid use if allergic to any of the ingredients listed above.</p>
    </div>`,
      },
      {
        id: 7,
        name: "Safety Information",
        content: `<div class="space-y-2">
      <p><strong>For External Use Only:</strong> Do not ingest.</p>
      <p><strong>Store in a Cool Place:</strong> Keep in a cool, dry place away from direct sunlight.</p>
    </div>`,
      },
      {
        id: 8,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Moiser FM Moisturising Gel is ideal for individuals with dry or sensitive skin. Its lightweight texture makes it perfect for everyday use, offering instant relief from dryness while keeping your skin moisturized and protected throughout the day.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Relizema Ultra Hydrating Lotion": [
      {
        id: 1,
        name: "Description",
        content: `Relizema Ultra Hydrating Lotion is a revitalizing skincare product designed to restore your skin's natural barrier. Specially crafted for sensitive and dry skin, it boosts hydration and elasticity while providing long-lasting moisture and protection. Perfect for daily use, it nourishes and protects your skin from dryness and environmental stressors.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Replenishes the skin's natural protective barrier.</span>
      <span>Increases moisture levels for a healthy glow.</span>
      <span>Boosts skin's suppleness and elasticity.</span>
      <span>Offers protection and nourishment for sensitive and dry skin.</span>
      <span>Keeps skin hydrated throughout the day.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> After cleansing, pump the lotion dispenser once or twice.</li>
      <li><strong>Step 2:</strong> Apply a small amount onto your hands and massage gently into the skin.</li>
      <li><strong>Step 3:</strong> Ensure the lotion is fully absorbed for smooth, hydrated skin.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Butyrrospermum Parkii Butter</li>
      <li>Glycerin</li>
      <li>Prunus Amygdalus Dulcis Oil</li>
      <li>Linum Usitatissimum Seed Oil</li>
      <li>Olea Europaea Fruit Oil</li>
      <li>Borago Officinalis Seed Oil</li>
      <li>Tocopherol</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Relizema Ultra Hydrating Lotion is a great choice for those seeking to boost their skin's hydration levels and protect it from dryness and environmental stress. Its gentle formula is ideal for sensitive skin types and ensures that your skin remains moisturized and supple throughout the day.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Uligo Cream 50g": [
      {
        id: 1,
        name: "Description",
        content: `Uligo Cream 50g is an effective moisturizer designed to relieve dryness and restore the skin's natural moisture barrier. Enriched with nourishing ingredients, it deeply hydrates, leaving the skin soft, smooth, and supple. Ideal for dry and dehydrated skin, Uligo Cream prevents further moisture loss and provides long-lasting hydration. Dermatologically tested and suitable for all skin types, it absorbs quickly without leaving a greasy residue.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Relieves dryness and restores moisture barrier.</span>
      <span>Deeply hydrates and nourishes the skin.</span>
      <span>Prevents further moisture loss and keeps skin supple.</span>
      <span>Non-greasy formula absorbs quickly into the skin.</span>
      <span>Suitable for all skin types, including dry and sensitive skin.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Cleanse and dry the skin thoroughly.</li>
      <li><strong>Step 2:</strong> Apply a small amount of Uligo Cream to the desired area.</li>
      <li><strong>Step 3:</strong> Gently massage the cream in circular motions until fully absorbed.</li>
      <li><strong>Step 4:</strong> Use daily for best results, on both face and body.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Glycerin</li>
      <li>Aloe Vera Extract</li>
      <li>Squalene</li>
      <li>Vitamin E</li>
      <li>Lanolin</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Uligo Cream is dermatologically tested, ensuring safety and suitability for all skin types, especially for dry and sensitive skin. Its non-greasy formula provides instant relief and long-lasting hydration, making it ideal for daily use on both the face and body.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Uresoft Moisturising Cream": [
      {
        id: 1,
        name: "Description",
        content: `Uresoft Moisturising Cream is a deeply hydrating and nourishing cream formulated to provide relief for dry, rough, and cracked skin. Enriched with urea and other moisturizing agents, it restores the skin’s natural moisture balance, softens hardened skin, and improves overall texture. Its non-greasy formula absorbs quickly, making it ideal for daily use on all skin types, especially those with severely dry skin conditions.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Provides deep hydration and nourishment.</span>
      <span>Restores the skin’s natural moisture balance.</span>
      <span>Softens rough and hardened skin areas.</span>
      <span>Improves overall skin texture.</span>
      <span>Ideal for daily use, especially for dry skin.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Cleanse and dry the skin thoroughly.</li>
      <li><strong>Step 2:</strong> Apply a generous amount of Uresoft Moisturising Cream to the desired area.</li>
      <li><strong>Step 3:</strong> Massage gently until the cream is fully absorbed.</li>
      <li><strong>Step 4:</strong> Use twice daily for optimal results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Dimethicone</li>
      <li>Glycerin</li>
      <li>Pentylene Glycol</li>
      <li>Amodimethicone</li>
      <li>Phenoxyethanol</li>
      <li>Sodium Hydroxide</li>
      <li>Lecithin</li>
      <li>Glycyrrhiza Inflata Root Extract</li>
      <li>Scutellaria Baicalensis Root Extract</li>
      <li>Soybean Ferment Extract</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Uresoft Moisturising Cream is ideal for dry and rough skin, offering long-lasting hydration and skin restoration. Its fast-absorbing formula makes it suitable for daily use, leaving skin soft and smooth without a greasy feeling.</p>
    </div>`,
      },
      shippingInformation,
    ],
  },
  pigmentation: {
    "Glambak Gel": [
      {
        id: 1,
        name: "Description",
        content: `Glambak Gel is a topical gel formulated with Kojic Acid Dipalmitate, Arbutin, Octinoxate, Vitamin E, Pine Bark Extract, Allantoin, and Niacinamide. It provides an effective solution for treating melasma, hyperpigmentation, photomelanosis, and dark discoloration. This gel works both from the inside and outside, ensuring long-lasting results while enhancing the overall health and beauty of the skin.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>Kojic Acid helps lighten the skin by disrupting melanin production.</span>
      <span>Allantoin restores moisture and prevents further water loss from the skin.</span>
      <span>Niacinamide reduces skin blotchiness, wrinkles, and fine lines.</span>
      <span>Vitamin E protects against oxidative stress and free radicals.</span>
      <span>Octinoxate provides powerful sun protection from UV damage.</span>
      <span>Pine Bark Extract improves blood flow and delivers oxygen to skin cells.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Take a small amount of Glambak Gel.</li>
      <li><strong>Step 2:</strong> Gently rub the gel onto your face in circular motions.</li>
      <li><strong>Step 3:</strong> Use after washing your face to see visible effects.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Aqua</li>
      <li>Glycerin</li>
      <li>Kojic Acid Dipalmitate</li>
      <li>Arbutin</li>
      <li>Octinoxate</li>
      <li>Vitamin E</li>
      <li>Pine Bark Extract</li>
      <li>Allantoin</li>
      <li>Niacinamide</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Glambak Gel is ideal for those with pigmented skin, targeting dark spots, uneven skin tone, melasma, and discoloration. Suitable for both men and women, the gel provides visible results when used regularly as part of your skincare routine.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Kclite Gold Advanced Skin Lightening Cream": [
      {
        id: 1,
        name: "Description",
        content: `Kclite Gold Advanced Skin Lightening Cream is a premium formulation designed to brighten the skin tone and reduce the appearance of dark spots, pigmentation, and uneven skin tone. Enriched with powerful ingredients like Kojic Acid, Arbutin, and Vitamin C, this cream works to inhibit melanin production, providing a radiant and even complexion. Its lightweight, non-greasy formula absorbs quickly into the skin, delivering intense hydration while improving skin texture and clarity. Suitable for all skin types, Kclite Gold is ideal for daily use to achieve a brighter, smoother, and more youthful-looking skin.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Brightens skin tone and reduces dark spots and pigmentation.</span>
      <span>Inhibits melanin production for a more even complexion.</span>
      <span>Lightweight, non-greasy formula that absorbs quickly.</span>
      <span>Hydrates and improves skin texture and clarity.</span>
      <span>Suitable for all skin types, ideal for daily use.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Cleanse your face thoroughly before application.</li>
      <li><strong>Step 2:</strong> Apply a small amount of Kclite Gold Advanced Skin Lightening Cream to the face and neck.</li>
      <li><strong>Step 3:</strong> Gently massage into the skin using upward circular motions until fully absorbed. Use twice daily, morning and night, for best results. Follow with sunscreen during the day.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Octyl Methoxycinnamate</li>
      <li>Cetyl Alcohol</li>
      <li>Niacinamide</li>
      <li>Kojic Acid DIpalmitate</li>
      <li>Lactic Acid</li>
      <li>Ethyl Ascorbic Acid</li>
      <li>Stearic Acid</li>
      <li>Licorice Root Extract</li>
      <li>Allantoin</li>
      <li>Potassium Sorbate</li>
      <li>Phenoxyethanol</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Kclite Gold Advanced Skin Lightening Cream is formulated to give you a brighter and even skin tone by reducing dark spots, blemishes, and pigmentation. Its unique blend of natural ingredients ensures that your skin remains healthy and radiant without harsh chemicals. Ideal for all skin types, including sensitive skin.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Lumiedge Skin Brightening Cream": [
      {
        id: 1,
        name: "Description",
        content: `Lumiedge Skin Brightening Cream is a potent formula designed to lighten dark spots, even skin tone, and enhance overall radiance. Infused with advanced brightening agents and natural extracts, this cream targets hyperpigmentation and reduces the appearance of blemishes. Its lightweight, non-greasy texture ensures quick absorption, making it suitable for daily use on all skin types. Achieve a brighter, more luminous complexion with regular application of Lumiedge Skin Brightening Cream.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Lightens dark spots and evens skin tone</span>
      <span>Enhances overall skin radiance</span>
      <span>Targets hyperpigmentation and reduces blemishes</span>
      <span>Lightweight and non-greasy texture</span>
      <span>Suitable for daily use on all skin types</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply a small amount to clean, dry skin.</li>
      <li><strong>Step 2:</strong> Gently massage until fully absorbed.</li>
      <li><strong>Step 3:</strong> Use twice daily for best results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Niacinamide</li>
      <li>Kojic Acid</li>
      <li>Vitamin C</li>
      <li>Hyaluronic Acid</li>
      <li>Glycolic Acid</li>
      <li>Vitamin E</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Lumiedge Skin Brightening Cream is designed to restore and enhance your skin’s natural radiance. The inclusion of Niacinamide and Vitamin C helps with hyperpigmentation and uneven skin tone, while Hyaluronic Acid provides hydration for a plump, youthful appearance. Ideal for those looking to brighten and refresh their complexion.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Lumiedge-TX Cream": [
      {
        id: 1,
        name: "Description",
        content: `Lumiedge-TX Cream is a powerhouse blend of skincare heroes. With Alpha Arbutin, Tranexamic Acid, and Kojic Acid Dipalmitate, it targets stubborn dark spots and uneven skin tone. Enhanced with Nonapeptide-1 and Tetrahydrocurcumin for anti-aging benefits, while N-Butyl Resorcinol and Glycolic Acid provide gentle exfoliation and brightening for radiant, youthful skin.`,
      },
      {
        id: 2,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Purified Water</li>
      <li>Octyl Methoxy Cinnamate</li>
      <li>Kojic Acid Dipalmitate</li>
      <li>Cetyl Alcohol</li>
      <li>Niacinamide</li>
      <li>Glycerin</li>
      <li>Tranexamic Acid</li>
      <li>Stearic Acid</li>
      <li>PEG 100 Stearate & Glyceryl Stearate</li>
      <li>Alpha Arbutin</li>
      <li>Butylene Glycol (and) Water (and) Actinidia Chinensis (Kiwi) Fruit Extract</li>
      <li>Geranium Robertianum Extract</li>
      <li>Paeonia Suffruticosa Root Extract</li>
      <li>Alpinia Katsumadai Seed Extract</li>
      <li>Glycolic Acid</li>
      <li>Sodium Acrylate/Sodium Acryloyldimethyltaurate Copolymer (and) Isohexadecane (and) Polysorbate 80</li>
      <li>Cyclopentasiloxane</li>
      <li>Tapioca Starch (and) Polymethylsilsquioxane</li>
      <li>Dimethicone (and) Titanium Dioxide (and) Aluminium Hydroxide</li>
      <li>Tetrahydrocurcumin</li>
      <li>Phenoxyethanol</li>
      <li>Allantoin</li>
      <li>4-n-Butyl Resorcinol</li>
      <li>Potassium Sorbate</li>
      <li>Tetrahydropiperine</li>
      <li>Nonapeptide-1</li>
    </ul>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Take 2-3 fingertip size drops of Lumiedge-TX Cream.</li>
      <li><strong>Step 2:</strong> Apply evenly at affected areas after cleansing the skin.</li>
      <li><strong>Step 3:</strong> Use twice daily for best results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Lumiedge-TX Cream is suitable for treating stubborn dark spots and pigmentation. With its potent ingredients, this formula helps reduce pigmentation and even out the skin tone while improving skin texture. A must-have for anyone dealing with uneven skin or post-inflammatory pigmentation.</p>
    </div>`,
      },
      {
        id: 5,
        name: "Shipping Information",
        content: `<div class="space-y-2">
      <p>Free standard shipping on orders above $50. Delivery times vary by location.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Melalumin Ultra Depigmenting Cream": [
      {
        id: 1,
        name: "Description",
        content: `Melalumin Ultra Depigmenting Cream is a depigmenting and skin-lightening cream formulated to treat skin hyperpigmentation and reduce the appearance of dark spots. It helps promote skin vitality and even out the skin tone.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">   
      <span>The cream targets excess melanin production, helping to reduce dark spots, melasma, and other forms of hyperpigmentation.</span>
      <span>It promotes an even skin tone and helps fade dark spots and discoloration.</span>
      <span>Contains nourishing ingredients that improve the overall health and vitality of the skin.</span>
      <span>Effective for various pigmentation issues caused by sun damage, hormonal imbalances, or post-inflammatory hyperpigmentation.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply twice daily on the face after washing.</li>
      <li><strong>Step 2:</strong> Gently massage the cream onto the face until absorbed.</li>
      <li><strong>Step 3:</strong> Use consistently for visible results.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Niacinamide - 4%</li>
      <li>Glycolic Acid - 3%</li>
      <li>Kojic Acid - 2%</li>
      <li>Arbutin - 2%</li>
      <li>Alpha Melight - 1%</li>
      <li>Cosmevit DCX - 1%</li>
      <li>Microfine Ti02 - 0.5%</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Melalumin Ultra Depigmenting Cream is ideal for treating various forms of skin pigmentation, including sun damage, melasma, and post-inflammatory pigmentation. Suitable for all skin types, it works effectively when used regularly.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Transglo HD Cream": [
      {
        id: 1,
        name: "Description",
        content: `Transglo HD Cream is a topical solution designed to address skin concerns like dark spots and hyperpigmentation. This cream rejuvenates the skin, making it brighter and youthful-looking, while targeting stubborn dark spots and enhancing overall radiance for a clear, even skin tone.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Targets and reduces the appearance of dark spots and hyperpigmentation.</span>
      <span>Enhances the overall radiance of the skin, giving it a youthful glow.</span>
      <span>Helps promote an even skin tone by lightening brown spots.</span>
      <span>Reduces signs of aging and gives clearer, brighter skin with consistent use.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Apply the cream daily in the morning and/or night.</li>
      <li><strong>Step 2:</strong> Take a pea-sized amount and apply it to your face.</li>
      <li><strong>Step 3:</strong> Avoid contact with eyes, mouth, and other mucous membranes.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Arbutin</li>
      <li>Kojic Acid</li>
      <li>Hydroquinone</li>
      <li>Vitamin E</li>
      <li>Glycerine</li>
      <li>Lactic Acid</li>
      <li>Niacinamide</li>
      <li>Licorice Extract</li>
      <li>Grape Seed Oil</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Transglo HD Cream is ideal for those with dark spots, hyperpigmentation, and uneven skin tone. It nourishes the skin and improves its health, leaving it brighter, youthful, and smoother with long-term use.</p>
    </div>`,
      },
      shippingInformation,
    ],
  },
  skinAntioxidant: {
    "C WIZ ORANGE FLAVOUR Effervescent Tablet": [
      {
        id: 1,
        name: "Description",
        content: `C WIZ ORANGE FLAVOUR Effervescent Tablet is a potent antioxidant formula designed to boost the body's immune system, enhance mental alertness, and improve skin, nail, and hair health. With active ingredients like Vitamin C, B complex vitamins, Magnesium, Calcium, and Zinc, it supports immune function, cognitive health, and overall wellness.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Boosts immune health and cognitive function with Vitamin C and B complex vitamins.</span>
      <span>Supports skin health by reducing wrinkles, promoting collagen production, and protecting against sun damage.</span>
      <span>Helps lighten dark spots and reduce scars for healthier skin.</span>
      <span>Enhances nail, hair, and overall body health by providing essential nutrients.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Drop a tablet in 200ml of water and wait for it to dissolve completely.</li>
      <li><strong>Step 2:</strong> Consume once dissolved (no stirring needed).</li>
      <li><strong>Step 3:</strong> Do not exceed the recommended dosage and replace the cap tightly after use.</li>
      <li><strong>Step 4:</strong> Consult your doctor if you have pre-existing conditions before use.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Natural Vitamin C (Amla Extract)</li>
      <li>Ascorbic Acid</li>
      <li>Vitamin B1 (Thiamine)</li>
      <li>Vitamin B2 (Riboflavin)</li>
      <li>Vitamin B3 (Nicotinamide)</li>
      <li>Vitamin B5 (Pantothenic Acid)</li>
      <li>Vitamin B6</li>
      <li>Biotin</li>
      <li>Folic Acid</li>
      <li>Vitamin B12</li>
      <li>Magnesium</li>
      <li>Calcium</li>
      <li>Zinc</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>C WIZ ORANGE FLAVOUR Effervescent Tablet is a convenient and effective supplement for boosting immunity, improving skin, hair, and nail health, and enhancing mental clarity. It’s ideal for overall wellness and maintaining healthy, youthful skin.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "L Glutathione Soft Gelation Lozenges with Astaxanthin": [
      {
        id: 1,
        name: "Description",
        content: `L Glutathione Soft Gelation Lozenges with Astaxanthin are formulated to improve skin moisture content, enhance skin elasticity, and reduce wrinkles. This unique combination of Glutathione and Astaxanthin helps rejuvenate the skin, promoting a youthful and radiant appearance. The lozenges work effectively to maintain skin health by offering antioxidant benefits and improving skin’s overall texture and appearance.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Improves skin moisture content to maintain hydration.</span>
      <span>Enhances skin elasticity for a more youthful look.</span>
      <span>Reduces the appearance of wrinkles and fine lines.</span>
      <span>Provides antioxidant protection to promote skin health.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Take the recommended dosage as directed by your healthcare provider.</li>
      <li><strong>Step 2:</strong> Consume the lozenges directly or dissolve them as per the instructions.</li>
      <li><strong>Step 3:</strong> For optimal results, use regularly as part of your skincare routine.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Glutathione</li>
      <li>Astaxanthin</li>
      <li>Vitamin C</li>
      <li>Vitamin E</li>
      <li>Collagen</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>L Glutathione Soft Gelation Lozenges with Astaxanthin are ideal for individuals seeking to improve skin moisture, elasticity, and reduce the appearance of wrinkles. Regular use supports healthy, glowing skin with long-term benefits.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Skinjoy-GL Fizz Effervescent Tablet": [
      {
        id: 1,
        name: "Description",
        content: `Skinjoy-GL Fizz Effervescent Tablet is an effective nutritional supplement used to manage and treat various medical conditions resulting from nutritional deficiencies and long-term disorders. It is also beneficial in treating skin problems such as freckles, melasma (chloasma), and lentigo. The combination of L Glutathione and Vitamin C helps to improve skin health, detoxify the body, and promote a youthful and radiant complexion. Glutathione is known for its detoxification properties, while Vitamin C contributes to maintaining healthy skin and boosting immunity.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Improves skin tone and texture, reducing freckles, melasma, and lentigo.</span>
      <span>Supports immune health and detoxifies the body through Glutathione.</span>
      <span>Promotes collagen production for firmer, youthful skin.</span>
      <span>Contains Vitamin C to enhance skin health and protect against oxidative damage.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Shake the bottle well before each use.</li>
      <li><strong>Step 2:</strong> Take the suggested dose as directed by your healthcare practitioner, using the provided measuring cup, dosing syringe, or dropper.</li>
      <li><strong>Step 3:</strong> Follow the dosage instructions carefully, and do not exceed the recommended dose.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>L Glutathione</li>
      <li>Vitamin C (Ascorbic Acid)</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Skinjoy-GL Fizz Effervescent Tablet helps improve skin health, enhances the immune system, and reduces the appearance of skin imperfections like freckles and melasma. It is recommended for individuals experiencing nutritional deficiencies or those with skin concerns that require effective treatment.</p>
      <p>Consult your doctor before using this supplement, especially if you have pre-existing conditions or are pregnant or breastfeeding.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "Glotamin Skin Brightening & Anti-Ageing Tablet": [
      {
        id: 1,
        name: "Description",
        content: `Glotamin Skin Brightening & Anti-Ageing Tablet is a powerful oral supplement formulated to enhance skin radiance, reduce signs of aging, and improve overall skin health. Enriched with potent antioxidants such as Glutathione, Vitamin C, and Collagen, this tablet works to lighten dark spots, reduce pigmentation, and promote an even skin tone. It also helps to boost skin elasticity, reduce fine lines and wrinkles, and protect the skin from oxidative stress caused by environmental damage. Suitable for individuals looking for a comprehensive solution to achieve brighter, youthful skin from within.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Brightens skin and reduces the appearance of dark spots and pigmentation.</span>
      <span>Reduces fine lines, wrinkles, and other visible signs of aging.</span>
      <span>Boosts collagen production for improved skin elasticity.</span>
      <span>Protects the skin from oxidative stress and environmental damage.</span>
      <span>Promotes an even skin tone and a youthful, radiant complexion.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Take one tablet daily with water, preferably after a meal.</li>
      <li><strong>Step 2:</strong> Use consistently for at least 3-6 months for best results.</li>
      <li><strong>Step 3:</strong> Consult with a healthcare professional for personalized dosage recommendations.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Glutathione</li>
      <li>Astaxanthin</li>
      <li>Alpha Lipoic Acid</li>
      <li>Co Enzyme Q10</li>
      <li>Resveratrol</li>
      <li>Grape Seed Extract</li>
      <li>Vitamin A</li>
      <li>Vitamin C</li>
      <li>Magnesium Stearate</li>
      <li>Di Calcium Phosphate</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>Glotamin Skin Brightening & Anti-Ageing Tablet is a comprehensive skincare supplement designed to target signs of aging and pigmentation. Regular use helps improve overall skin health by lightening dark spots, reducing wrinkles, and enhancing elasticity, all while offering antioxidant protection against environmental damage.</p>
    </div>`,
      },
      shippingInformation,
    ],
    "L Glutathione Soft Gelation Lozenges with Vitamin C": [
      {
        id: 1,
        name: "Description",
        content: `L Glutathione Soft Gelation Lozenges with Vitamin C are designed to improve skin lightening and toning while promoting healthy skin. These lozenges also help boost immune and autoimmune responses, preventing early signs of aging. They offer protection against environmental pollutants, promoting healthier, more radiant skin. Additionally, they support liver health, enhancing overall well-being.`,
      },
      {
        id: 2,
        name: "Key Benefits",
        content: `<div class="grid gap-2">
      <span>Skin lightening and toning for a brighter complexion.</span>
      <span>Enhances immune and autoimmune response.</span>
      <span>Promotes healthy skin and prevents early signs of aging.</span>
      <span>Protects skin from pollution and environmental damage.</span>
      <span>Supports liver health for overall wellness.</span>
    </div>`,
      },
      {
        id: 3,
        name: "How to Use",
        content: `<ul class="space-y-4 list-disc pl-4">
      <li><strong>Step 1:</strong> Take the recommended dosage as directed by your healthcare provider.</li>
      <li><strong>Step 2:</strong> Consume the lozenges directly or as instructed by the manufacturer.</li>
      <li><strong>Step 3:</strong> For optimal results, use regularly as part of your wellness routine.</li>
    </ul>`,
      },
      {
        id: 4,
        name: "Key Ingredients",
        content: `<ul class="space-y-2 list-disc no-underline">
      <li>Glutathione</li>
      <li>Vitamin C</li>
    </ul>`,
      },
      {
        id: 5,
        name: "Additional Information",
        content: `<div class="space-y-2">
      <p>L Glutathione Soft Gelation Lozenges with Vitamin C are ideal for individuals seeking to improve their skin's appearance, protect it from pollutants, and boost their immune system. Regular use can help prevent early aging signs and support overall health, including liver function.</p>
    </div>`,
      },
      shippingInformation,
    ],
  },
};

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

      productPrice: "1080",
      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.dermaticaAzeProactiveLotion
      ),
      productsAdditionalDetails:
        productContent?.sunscreen["Dermatica Aze Proactive Lotion"],
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
        { id: 1, content: "SPF 50 protection" },
        { id: 2, content: "Lightweight & tinted" },
      ],

      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.berlion
      ),
      productsAdditionalDetails:
        productContent?.sunscreen[
          "Dermatica Ray Protect Barelyon Fluid Sunscreen SPF 50"
        ],
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
        { id: 1, content: "Broad-spectrum SPF 50+++" },
        { id: 2, content: "Non-greasy daily sunscreen" },
      ],

      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.rayback
      ),
      productsAdditionalDetails:
        productContent?.sunscreen["Ray Back Broad Spectrum SPF 50+++"],
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
        { id: 1, content: "Hydrating SPF 50 PA++++" },
        { id: 2, content: "Lightweight, no white cast" },
      ],

      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.seeckusSuncreen
      ),
      productsAdditionalDetails:
        productContent?.sunscreen["Seekcaus Hydra Sunscreen Gel SPF 50 PA++++"],
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
        { id: 1, content: "Dry Touch SPF 50+" },
        { id: 2, content: "Non-greasy shield" },
      ],

      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.sunlite
      ),
      productsAdditionalDetails:
        productContent?.sunscreen["Ivatherm Sunlight SPF 50+ Dry Touch Cream"],
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
        { id: 1, content: "Tinted Mineral SPF" },
        { id: 2, content: "Lightweight & gentle" },
      ],

      category: "sunscreen",
      allImages: Object.values(
        Resources.images.Products.products.sunscreen.tintSunscreen
      ),
      productsAdditionalDetails:
        productContent?.sunscreen[
          "Dermatica Ray Protect Tint Mineral Sunscreen"
        ],
    },
  },
  faceSerum: {
    "Agelite-X Serum": {
      id: 1,
      productName: "Agelite-X Serum",
      imgSrc: Resources.images.Products.products.faceSerum.ageliteSerum.img1,
      productDescription:
        "Agelite-X Serum is specially concocted with antioxidants that provides synergistic protection against oxidative stress in skin. It works to brighten dull Skin, improve hyperpigmentation, sun/photo-damaged skin, fine lines and wrinkles.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Reduces hyperpigmentation" },
        { id: 2, content: "Minimizes wrinkles" },
      ],

      productPrice: "999",
      category: "faceSerum",
      allImages: Object.values(
        Resources.images.Products.products.faceSerum.ageliteSerum
      ),
      productsAdditionalDetails: productContent?.faceSerum["Agelite-X Serum"],
    },
    "C Shine Serum": {
      id: 2,
      productName: "C Shine Serum",
      imgSrc: Resources.images.Products.products.faceSerum.cshine.img1,
      productDescription:
        "Illuminate your skin with the C Shine Serum, a luxurious blend of nourishing ingredients and Vitamin C. This serum works to even out skin tone, reduce the appearance of dark spots, and impart a radiant glow. Elevate your skincare regimen with the C Shine Serum for a luminous complexion that captivates.",
      ratings: 4,
      strikePrice: "2200",
      productPrice: "1800",
      smallDescription: [
        { id: 1, content: "Brightens skin" },
        { id: 2, content: "Fades dark spots" },
      ],

      category: "faceSerum",
      allImages: Object.values(
        Resources.images.Products.products.faceSerum.cshine
      ),
      productsAdditionalDetails: productContent?.faceSerum["C Shine Serum"],
    },
    "Lumiedge Serum": {
      id: 3,
      productName: "Lumiedge Serum",
      imgSrc: Resources.images.Products.products.faceSerum.ilumeSerum.img1,
      productDescription:
        "Lumiedge Serum is a lightweight and non-sticky daily-use skin serum which boosts luminosity and promotes healthy-looking skin.",
      ratings: 4.5,
      productPrice: "1100",
      smallDescription: [
        { id: 1, content: "Improves Blemishes" },
        { id: 2, content: "Reduces Dark Spots" },
      ],

      category: "faceSerum",
      allImages: Object.values(
        Resources.images.Products.products.faceSerum.ilumeSerum
      ),
      productsAdditionalDetails: productContent?.faceSerum["Lumiedge Serum"],
    },
  },
  facewash: {
    "Agelite Vitamin C Face Wash": {
      id: 1,
      productName: "Agelite Vitamin C Face Wash",
      imgSrc: Resources.images.Products.products.facewash.agelite.img1,
      productDescription:
        "Agelite Vitamin C Face Wash is designed to cleanse and brighten your skin, harnessing the powerful benefits of Vitamin C.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Brightens & refreshes" },
        { id: 2, content: "Removes excess oil" },
      ],

      productPrice: "999",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.agelite
      ),
      productsAdditionalDetails:
        productContent?.facewash["Agelite Vitamin C Face Wash"],
    },
    "Aquaedge Cleanser": {
      id: 2,
      productName: "Aquaedge Cleanser",
      imgSrc: Resources.images.Products.products.facewash.aquaedege.img1,
      productDescription:
        "Aquaedge Cleanser is a refreshing, hydrating facial cleanser designed to gently remove dirt, impurities, and makeup without stripping the skin's natural moisture. Infused with natural extracts like Aloe Vera and Green Tea, this cleanser nourishes and revitalizes the skin while maintaining its balance. Suitable for all skin types, Aquaedge Cleanser leaves your skin feeling clean, refreshed, and perfectly hydrated.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Hydrates and refreshes the skin" },
        { id: 2, content: "Gently removes dirt and makeup" },
      ],

      productPrice: "999",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.aquaedege
      ),
      productsAdditionalDetails: productContent?.facewash["Aquaedge Cleanser"],
    },
    "DS Glow Facewash": {
      id: 3,
      productName: "DS Glow Facewash",
      imgSrc: Resources.images.Products.products.facewash.dsglow.img1,
      productDescription:
        "DS Glow Facewash is your go-to solution for achieving whitening and vibrant skin. This gentle yet effective face wash helps reduce melanin pigment, making your skin appear whiter and youthful. It is free from SLS, soap, colorants, alcohol, and parabens, ensuring a safe and refreshing cleanse every time.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Reduces melanin for whiter skin" },
        { id: 2, content: "Gentle and safe for daily use" },
      ],

      productPrice: "999",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.dsglow
      ),
      productsAdditionalDetails: productContent?.facewash["DS Glow Facewash"],
    },
    "Dermatica Tabula Rasa AST": {
      id: 4,
      productName: "Dermatica Tabula Rasa AST",
      imgSrc: Resources.images.Products.products.facewash.tabulaAst.img1,
      productDescription:
        "Dermatica Tabula Rasa AST Perfectly Balanced Nourishing Cleanser is a luxurious facial cleanser designed to provide a balanced, nourishing cleanse for all skin types. Infused with skin-nourishing ingredients like Hyaluronic Acid, Niacinamide, and Squalane, this cleanser effectively removes impurities and makeup without disrupting the skin's natural moisture balance. Its soothing and hydrating formula helps to calm irritation, reduce redness, and leave the skin feeling soft, smooth, and refreshed. Suitable for daily use, Dermatica Tabula Rasa AST ensures your skin stays perfectly balanced and nourished.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Gently cleanses and hydrates" },
        { id: 2, content: "Suitable for all skin types" },
      ],

      productPrice: "655",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.tabulaAst
      ),
      productsAdditionalDetails:
        productContent?.facewash["Dermatica Tabula Rasa AST"],
    },
    "Dermatica Tabula Rasa OS Sebum Regulating Cleanser": {
      id: 5,
      productName: "Dermatica Tabula Rasa OS Sebum Regulating Cleanser",
      imgSrc: Resources.images.Products.products.facewash.tabulaOs.img1,
      productDescription:
        "Dermatica Tabula Rasa OS Sebum Regulating Cleanser is designed to cleanse and brighten your skin, harnessing the powerful benefits of Vitamin C.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Controls excess oil and shine" },
        { id: 2, content: "Minimizes pores" },
      ],

      productPrice: "1000",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.tabulaOs
      ),
      productsAdditionalDetails:
        productContent?.facewash[
          "Dermatica Tabula Rasa OS Sebum Regulating Cleanser"
        ],
    },
    "Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser": {
      id: 6,
      productName: "Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser",
      imgSrc: Resources.images.Products.products.facewash.tabulaRasaDs.img1,
      productDescription:
        "Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser is a soothing and hydrating facial cleanser designed for sensitive and dry skin. Enriched with mild, skin-loving ingredients like Hyaluronic Acid, Aloe Vera, and Chamomile Extract, this cleanser effectively removes impurities and makeup without stripping the skin's natural moisture barrier. Its ultra-gentle formula calms irritation, reduces redness, and leaves the skin feeling soft, smooth, and refreshed. Suitable for daily use, Dermatica Tabula Rasa DS ensures your skin stays hydrated and balanced.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Hydrates sensitive skin" },
        { id: 2, content: "Maintains moisture balance" },
      ],

      productPrice: "999",
      category: "facewash",
      allImages: Object.values(
        Resources.images.Products.products.facewash.tabulaRasaDs
      ),
      productsAdditionalDetails:
        productContent?.facewash[
          "Dermatica Tabula Rasa DS Ultra Gentle Hydrating Cleanser"
        ],
    },
  },
  moisturiser: {
    "Cerasoft Moisturising Cream": {
      id: 1,
      productName: "Cerasoft Moisturising Cream",
      imgSrc: Resources.images.Products.products.moisturiser.cerasoft.img1,
      productDescription:
        "Cerasoft Moisturising Cream is designed to cleanse and brighten your skin, harnessing the powerful benefits of Vitamin C.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Brightens & Evens" },
        { id: 2, content: "Hydrates & Moisturizes" },
      ],

      productPrice: "999",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.cerasoft
      ),
      productsAdditionalDetails:
        productContent?.moisturiser["Cerasoft Moisturising Cream"],
    },
    "Fi Moist Plus": {
      id: 2,
      productName: "Fi Moist Plus",
      imgSrc: Resources.images.Products.products.moisturiser.fiMoist.img1,
      productDescription:
        "Fi Moist Plus is a highly effective moisturizing cream designed to provide deep hydration and restore the skin's natural moisture balance. Infused with nourishing ingredients like Hyaluronic Acid and Vitamin E, this cream leaves the skin feeling soft, smooth, and plump. Its lightweight formula absorbs quickly, making it ideal for daily use to keep the skin moisturized and glowing. Perfect for dry and dehydrated skin, Fi Moist Plus ensures a refreshed and nourished complexion.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Deep Hydration" },
        { id: 2, content: "Soft & Smooth" },
      ],

      productPrice: "999",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.fiMoist
      ),
      productsAdditionalDetails: productContent?.moisturiser["Fi Moist Plus"],
    },
    "Moiser FM Moisturising Gel 50ml": {
      id: 3,
      productName: "Moiser FM Moisturising Gel 50ml",
      imgSrc: Resources.images.Products.products.moisturiser.moiser.img1,
      productDescription:
        "Moiser FM Moisturising Gel is a hydrating gel formulated to provide deep moisturization and soothe the skin. It contains a blend of natural extracts and moisturizing agents that help maintain the skin's moisture balance, leaving it soft and supple. Suitable for all skin types, especially for dry or sensitive skin.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Hydrating & Soothing" },
        { id: 2, content: "Non-Greasy Formula" },
      ],

      productPrice: "999",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.moiser
      ),
      productsAdditionalDetails:
        productContent?.moisturiser["Moiser FM Moisturising Gel 50ml"],
    },
    "Relizema Ultra Hydrating Lotion": {
      id: 4,
      productName: "Relizema Ultra Hydrating Lotion",
      imgSrc: Resources.images.Products.products.moisturiser.relizmaLotion.img1,
      productDescription:
        "Relizema Ultra Hydrating Lotion is a revitalizing skincare product designed to restore your skin's natural barrier. Specially crafted for sensitive and dry skin, it boosts hydration and elasticity while providing long-lasting moisture and protection. Perfect for daily use, it nourishes and protects your skin from dryness and environmental stressors.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Ultimate Hydration" },
        { id: 2, content: "Nourishes Sensitive Skin" },
      ],

      productPrice: "655",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.relizmaLotion
      ),
      productsAdditionalDetails:
        productContent?.moisturiser["Relizema Ultra Hydrating Lotion"],
    },
    "Uligo Cream 50g": {
      id: 5,
      productName: "Uligo Cream 50g",
      imgSrc: Resources.images.Products.products.moisturiser.uligo.img1,
      productDescription:
        "Uligo Cream 50g is an effective moisturizer designed to relieve dryness and restore the skin's natural moisture barrier. Enriched with nourishing ingredients, it deeply hydrates, leaving the skin soft, smooth, and supple. Ideal for dry and dehydrated skin, Uligo Cream prevents further moisture loss and provides long-lasting hydration. Dermatologically tested and suitable for all skin types, it absorbs quickly without leaving a greasy residue.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Instant Moisture Relief" },
        { id: 2, content: "Restores Skin's Barrier" },
      ],

      productPrice: "499",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.uligo
      ),
      productsAdditionalDetails: productContent?.moisturiser["Uligo Cream 50g"],
    },
    "Uresoft Moisturising Cream": {
      id: 6,
      productName: "Uresoft Moisturising Cream",
      imgSrc: Resources.images.Products.products.moisturiser.uresoft.img1,
      productDescription:
        "Uresoft Moisturising Cream is a deeply hydrating and nourishing cream formulated to provide relief for dry, rough, and cracked skin. Enriched with urea and other moisturizing agents, it restores the skin’s natural moisture balance, softens hardened skin, and improves overall texture. Its non-greasy formula absorbs quickly, making it ideal for daily use on all skin types, especially those with severely dry skin conditions.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Deep Hydration & Nourishment" },
        { id: 2, content: "Softens Rough Skin" },
      ],

      productPrice: "1200",
      category: "moisturiser",
      allImages: Object.values(
        Resources.images.Products.products.moisturiser.uresoft
      ),
      productsAdditionalDetails:
        productContent?.moisturiser["Uresoft Moisturising Cream"],
    },
  },
  pigmentation: {
    "Glambak Gel": {
      id: 1,
      productName: "Glambak Gel",
      imgSrc: Resources.images.Products.products.pigmentation.glambakUltra.img1,
      productDescription:
        "Glambak Gel is a topical gel formulated with Kojic Acid Dipalmitate, Arbutin, Octinoxate, Vitamin E, Pine Bark Extract, Allantoin, and Niacinamide. It provides an effective solution for treating melasma, hyperpigmentation, photomelanosis, and dark discoloration. This gel works both from the inside and outside, ensuring long-lasting results while enhancing the overall health and beauty of the skin.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Treats Pigmentation & Dark Spots" },
        { id: 2, content: "Sun Protection with Octinoxate" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.glambakUltra
      ),
      productsAdditionalDetails: productContent?.pigmentation["Glambak Gel"],
    },
    "Kclite Gold Advanced Skin Lightening Cream": {
      id: 2,
      productName: "Kclite Gold Advanced Skin Lightening Cream",
      imgSrc: Resources.images.Products.products.pigmentation.kcliteGold.img1,
      productDescription:
        "Kclite Gold Advanced Skin Lightening Cream is a premium formulation designed to brighten the skin tone and reduce the appearance of dark spots, pigmentation, and uneven skin tone. Enriched with powerful ingredients like Kojic Acid, Arbutin, and Vitamin C, this cream works to inhibit melanin production, providing a radiant and even complexion. Its lightweight, non-greasy formula absorbs quickly into the skin, delivering intense hydration while improving skin texture and clarity. Suitable for all skin types, Kclite Gold is ideal for daily use to achieve a brighter, smoother, and more youthful-looking skin.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Reduces Dark Spots & Hyperpigmentation" },
        { id: 2, content: "Promotes Even Skin Tone" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.kcliteGold
      ),
      productsAdditionalDetails:
        productContent?.pigmentation[
          "Kclite Gold Advanced Skin Lightening Cream"
        ],
    },
    "Lumiedge Skin Brightening Cream": {
      id: 3,
      productName: "Lumiedge Skin Brightening Cream",
      imgSrc:
        Resources.images.Products.products.pigmentation.lumiedgeCream.img1,
      productDescription:
        "Lumiedge Skin Brightening Cream is a potent formula designed to lighten dark spots, even skin tone, and enhance overall radiance. Infused with advanced brightening agents and natural extracts, this cream targets hyperpigmentation and reduces the appearance of blemishes. Its lightweight, non-greasy texture ensures quick absorption, making it suitable for daily use on all skin types. Achieve a brighter, more luminous complexion with regular application of Lumiedge Skin Brightening Cream.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Brightens & Evens Skin Tone" },
        { id: 2, content: "Reduces Dark Spots & Pigmentation" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.lumiedgeCream
      ),
      productsAdditionalDetails:
        productContent?.pigmentation["Lumiedge Skin Brightening Cream"],
    },
    "Lumiedge-TX Cream": {
      id: 4,
      productName: "Lumiedge-TX Cream",
      imgSrc: Resources.images.Products.products.pigmentation.lumiedgeTx.img1,
      productDescription:
        "Lumiedge-TX Cream is a powerhouse blend of skincare heroes. With Alpha Arbutin, Tranexamic Acid, and Kojic Acid Dipalmitate, it targets stubborn dark spots and uneven skin tone. Enhanced with Nonapeptide-1 and Tetrahydrocurcumin for anti-aging benefits, while N-Butyl Resorcinol and Glycolic Acid provide gentle exfoliation and brightening for radiant, youthful skin.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Targets Dark Spots & Uneven Skin Tone" },
        { id: 2, content: "Brightens & Exfoliates for Radiant Skin" },
      ],

      productPrice: "1800",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.lumiedgeTx
      ),
      productsAdditionalDetails:
        productContent?.pigmentation["Lumiedge-TX Cream"],
    },
    "Melalumin Ultra Depigmenting Cream": {
      id: 5,
      productName: "Melalumin Ultra Depigmenting Cream",
      imgSrc:
        Resources.images.Products.products.pigmentation.melaluminUltra.img1,
      productDescription:
        "Melalumin Ultra Depigmenting Cream is a depigmenting and skin-lightening cream formulated to treat skin hyperpigmentation and reduce the appearance of dark spots. It helps promote skin vitality and even out the skin tone.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Reduces Dark Spots & Hyperpigmentation" },
        { id: 2, content: "Promotes Even Skin Tone & Radiance" },
      ],

      productPrice: "499",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.melaluminUltra
      ),
      productsAdditionalDetails:
        productContent?.pigmentation["Melalumin Ultra Depigmenting Cream"],
    },
    "Transglo HD Cream": {
      id: 6,
      productName: "Transglo HD Cream",
      imgSrc: Resources.images.Products.products.pigmentation.transglowHd.img1,
      productDescription:
        "Transglo HD Cream is a topical solution designed to address skin concerns like dark spots and hyperpigmentation. This cream rejuvenates the skin, making it brighter and youthful-looking, while targeting stubborn dark spots and enhancing overall radiance for a clear, even skin tone.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Reduces Dark Spots & Hyperpigmentation" },
        { id: 2, content: "Promotes Even Skin Tone" },
      ],

      productPrice: "1200",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.pigmentation.transglowHd
      ),
      productsAdditionalDetails:
        productContent?.pigmentation["Transglo HD Cream"],
    },
  },
  skinAntioxidant: {
    "C WIZ ORANGE FLAVOUR Effervescent Tablet": {
      id: 1,
      productName: "C WIZ ORANGE FLAVOUR Effervescent Tablet",
      imgSrc: Resources.images.Products.products.skinAntioxidant.cwiz.img1,
      productDescription:
        "C WIZ ORANGE FLAVOUR Effervescent Tablet is a potent antioxidant formula designed to boost the body's immune system, enhance mental alertness, and improve skin, nail, and hair health. With active ingredients like Vitamin C, B complex vitamins, Magnesium, Calcium, and Zinc, it supports immune function, cognitive health, and overall wellness.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Immune Boost" },
        { id: 2, content: "Skin Health" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.skinAntioxidant.cwiz
      ),
      productsAdditionalDetails:
        productContent?.skinAntioxidant[
          "C WIZ ORANGE FLAVOUR Effervescent Tablet"
        ],
    },
    "L Glutathione Soft Gelation Lozenges with Astaxanthin": {
      id: 2,
      productName: "L Glutathione Soft Gelation Lozenges with Astaxanthin",
      imgSrc:
        Resources.images.Products.products.skinAntioxidant.glutasurgeA.img1,
      productDescription:
        "L Glutathione Soft Gelation Lozenges with Astaxanthin are formulated to improve skin moisture content, enhance skin elasticity, and reduce wrinkles. This unique combination of Glutathione and Astaxanthin helps rejuvenate the skin, promoting a youthful and radiant appearance. The lozenges work effectively to maintain skin health by offering antioxidant benefits and improving skin’s overall texture and appearance.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Skin Rejuvenation" },
        { id: 2, content: "Wrinkle Reduction" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.skinAntioxidant.glutasurgeA
      ),
      productsAdditionalDetails:
        productContent?.skinAntioxidant[
          "L Glutathione Soft Gelation Lozenges with Astaxanthin"
        ],
    },
    "Skinjoy-GL Fizz Effervescent Tablet": {
      id: 3,
      productName: "Skinjoy-GL Fizz Effervescent Tablet",
      imgSrc: Resources.images.Products.products.skinAntioxidant.glFizz.img1,
      productDescription:
        "Skinjoy-GL Fizz Effervescent Tablet is an effective nutritional supplement used to manage and treat various medical conditions resulting from nutritional deficiencies and long-term disorders. It is also beneficial in treating skin problems such as freckles, melasma (chloasma), and lentigo. The combination of L Glutathione and Vitamin C helps to improve skin health, detoxify the body, and promote a youthful and radiant complexion. Glutathione is known for its detoxification properties, while Vitamin C contributes to maintaining healthy skin and boosting immunity.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Skin Brightening" },
        { id: 2, content: "Age Spot Reduction" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.skinAntioxidant.glFizz
      ),
      productsAdditionalDetails:
        productContent?.skinAntioxidant["Skinjoy-GL Fizz Effervescent Tablet"],
    },
    "Glotamin Skin Brightening & Anti-Ageing Tablet": {
      id: 4,
      productName: "Glotamin Skin Brightening & Anti-Ageing Tablet",
      imgSrc: Resources.images.Products.products.skinAntioxidant.glootamin.img1,
      productDescription:
        "Glotamin Skin Brightening & Anti-Ageing Tablet is a powerful oral supplement formulated to enhance skin radiance, reduce signs of aging, and improve overall skin health. Enriched with potent antioxidants such as Glutathione, Vitamin C, and Collagen, this tablet works to lighten dark spots, reduce pigmentation, and promote an even skin tone. It also helps to boost skin elasticity, reduce fine lines and wrinkles, and protect the skin from oxidative stress caused by environmental damage. Suitable for individuals looking for a comprehensive solution to achieve brighter, youthful skin from within.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Brightens Skin" },
        { id: 2, content: "Reduces Wrinkles" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.skinAntioxidant.glootamin
      ),
      productsAdditionalDetails:
        productContent?.skinAntioxidant[
          "Glotamin Skin Brightening & Anti-Ageing Tablet"
        ],
    },
    "L Glutathione Soft Gelation Lozenges with Vitamin C": {
      id: 5,
      productName: "L Glutathione Soft Gelation Lozenges with Vitamin C",
      imgSrc:
        Resources.images.Products.products.skinAntioxidant.glutasurgeC.img1,
      productDescription:
        "L Glutathione Soft Gelation Lozenges with Vitamin C are designed to improve skin lightening and toning while promoting healthy skin. These lozenges also help boost immune and autoimmune responses, preventing early signs of aging. They offer protection against environmental pollutants, promoting healthier, more radiant skin. Additionally, they support liver health, enhancing overall well-being.",
      ratings: 4,
      smallDescription: [
        { id: 1, content: "Skin Lightening" },
        { id: 2, content: "Immune Support" },
      ],

      productPrice: "999",
      category: "pigmentation",
      allImages: Object.values(
        Resources.images.Products.products.skinAntioxidant.glutasurgeC
      ),
      productsAdditionalDetails:
        productContent?.skinAntioxidant[
          "L Glutathione Soft Gelation Lozenges with Vitamin C"
        ],
    },
  },
};

export const getShippingDate = (daysToAdd = 7) => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd);
  return today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
};
