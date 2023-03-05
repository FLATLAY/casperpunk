import { chakra } from "@chakra-ui/react";

export const FooterComponentWrapper = chakra("footer", {
  baseStyle: {
    w: "100%",
    p: { base: "48px 32px", lg: "85px 64px", xl: "85px 125px" },
    //  p: { base: "20px", lg: "109px 80px", xl: "85px 125px" },
    bg: "#fff",
    border:'4px solid red'
  },
});

export const FooterIcon = chakra("img", {
  baseStyle: {
    w: "132px",
    h: "47px",
    mb:{base:'24px',md:'0px'}
  },
});

export const Text16W400 = chakra("p", {
  baseStyle: {
    color: "#505049",
    fontSize: { base: "16px", md: "12px", xl: "16px" },
    fontWeight: "400",
    fontFamily: "Manrope",
    cursor: "pointer",
  },
});

export const VerticalLine = chakra("div", {
  baseStyle: {
    h: "16px",
    w: "1px",
    border: "1px solid #B6B6AF",
   display:{ base: "none", md: "block" },
  },
});

export const Text14W400 = chakra("p", {
  baseStyle: {
    color: "#B6B6AF",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Manrope",
  },
});

// export const FooterComponentWrapper = chakra("footer", {
//   baseStyle: {
//     w: "100%",
//     p:{base:'20px' ,lg:'109px 80px' ,xl:"109px 125px 109px 125px"},
//     bg: "#fff",
//   },
// });

// export const DetailText = chakra("p", {
//   baseStyle: {
//     color: "#505049",
//     fontSize: "16px",
//     fontWeight: "600",
//     fontFamily: "Manrope",
//   },
// });

// export const Text400 = chakra("p", {
//   baseStyle: {
//     color: "#505049",
//     fontSize: "16px",
//     fontWeight: "400",
//     fontFamily: "Manrope",
//   },
// });

// export const TextBold = chakra("p", {
//   baseStyle: {
//     color: "#262626",
//     fontSize: "16px",
//     fontWeight: "600",
//     fontFamily: "Manrope",
//   },
// });

// export const Icon24 = chakra("img", {
//   baseStyle: {
//     w: "24px",
//     h: "24px",
//     cursor: "pointer",
//   },
// });
