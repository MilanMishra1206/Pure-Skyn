/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /** ------------------------------------------------------------
       *
       * Border Radius
       *
       * ------------------------------------------------------------
       */
      borderRadius: {
        "1.25lg": "0.625rem" /* 10px */,
        "custom-top": "12px 12px 0 0",
        "custom-bottom": "0 0 12px 12px",
      },
      /** ------------------------------------------------------------
       *
       * Font Color
       *
       * ------------------------------------------------------------
       */
      colors: {
        aliceBlue: { 1: "#F5F9FF", 2: "#F0F4FA" },
        cello: "#465465",
        denim: "#3074AE",
        coal: "#313440",
        skyn: "#EE6503",
        lightYellow: "#E2C9AB",
        coffee: "#B18260",
        linkWater: "#C5CFDE",
        kashmirBlue: "#607083",
        solitude: { 1: "#ECF2FB", 2: "#DBE9FF" },
        licorice: "#2F3741",
        whiteSmoke: "#F5F5F5",
        raven: "#637283",
        freeSpeechAquamarine: "#149C72",
        lightningYellow: "#FDA527",
        bitterSweet: "#FF6262",
        lightGreen: "#B8E1D4",
        Green: "#139C72",
        lightRed: "#FFD0D0",
        Red: "#FE7E7D",
        'navbar-dark': '#313440',
        'navbar-darker': '#1F2428',
        'navbar-darker2': '#1A1F23',
      },
      /** ------------------------------------------------------------
       *
       * Font Family
       *
       * ------------------------------------------------------------
       */
      fontFamily: {
        poppins: "Poppins",
      },
      /** ------------------------------------------------------------
       *
       * Font Size
       *
       * ------------------------------------------------------------
       */
      fontSize: {
        "4.3xl": "2.5rem" /* 40px */,
        "1.5xl": "1.375rem" /* 22px */,
      },
      /** ------------------------------------------------------------
       *
       * Height
       *
       * ------------------------------------------------------------
       */
      height: {
        102.25: "25.56rem" /* 409px */,
        17.25: "4.3125rem" /* 69px */,
      },
      /** ------------------------------------------------------------
       *
       * Margin
       *
       * ------------------------------------------------------------
       */
      margin: {
        10.5: "2.625rem" /* 42px */,
        7.5: "1.875rem" /* 30px */,
        22: "5.5rem" /* 88px */,
        30: "7.5rem" /* 120px */,
      },
      /** ------------------------------------------------------------
       *
       * Padding
       *
       * ------------------------------------------------------------
       */
      padding: {
        15: "3.75rem" /* 60px */,
        17: "4.25rem" /* 68px */,
        25.5: "6.375rem" /* 102px */,
        54.75: "13.6875rem" /* 219px */,
      },
      /** ------------------------------------------------------------
       *
       * Width
       *
       * ------------------------------------------------------------
       */
      width: {
        "45/100": "45%",
        "53/100": "53%",
        "55/100": "55%",
        "67/100": "67%",
        "815/1000": "81.5%",
        25.25: "6.3125rem" /* 101px */,
        75.5: "18.875rem" /* 302px */,
        "315/1000": "31.5%",
        "937/1000": "93.7%",
        "297/1000": "29.7%",
        26: "6.5rem" /* 104px */,
        85: "21.25rem" /* 340px */,
        46: "184px",
      },

      /** ------------------------------------------------------------
       *
       * Text Shadow
       *
       * ------------------------------------------------------------
       */
      dropShadow: {
        leadsChart: "0px 1px 2px #0000004D",
      },
      /** ------------------------------------------------------------
       *
       * Box Shadow
       *
       * ------------------------------------------------------------
       */
      boxShadow: {
        dashCard: "3px 3px 6px #BFC3CF7F",
        addAttendeeButton: "3px 3px 6px #0000001A",
        chartTotal: "3px 3px 20px #24415D4D",
        chartDataPoint: "0px 0px 17px #0000002A",
        fieldOuterShadow: "0px 6px 12px #185EC414",
        uploadInsetShadow:
          "inset 3px 3px 6px #00000014, inset -3px -3px 6px #FFFFFFCC",
        crossButtonShadow: "-3px -3px 6px #FFFFFF80",
        browseFileButtonShadow: "0px 3px 6px #185EC414",
        reportessDropDownShadow: "inset -3px -3px 4px #FFFFFFE6",
        dataCategoryDropDownShadow: "inset 3px 3px 4px #00000014;",
        backArrowShadow: "3px 3px 6px #00000014",
        docUploadCard: "3px 3px 6px #bfc3cf, -3px -3px 6px #fff",
        buttonShadow: "-3px -3px 6px #fff, 3px 3px 6px #bfc3cf",
      },
      backgroundImage: {
        docUploadHeader: "linear-gradient(35deg, #c6dcff, #f0f4fa)",
      },
    },
  },

  plugins: [],
};
