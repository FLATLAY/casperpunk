import { chakra } from "@chakra-ui/react";

// export const ProductPageWrapper = chakra("div", {
//   baseStyle: {
//     w: "100%",
//     h: "auto",
//     bg: "#F9F9F6",
//     // pt: "100px",
//     display: "flex",
//     justifyContent: "center",
//     // pb: "90px",
//     p: { base: "20px 21px 50px 21px", lg: "100px 20px 90px 20px" },
//   },
// });

export const ProductDetialWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "1200px",
  },
});

export const Imagewrapper = chakra("div", {
  baseStyle: {
    w: "570px",
  },
});

export const ProductTitle = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "48px",
    fontWeight: "800",
    fontFamily: "Montserrat",
    mb: "24px",
  },
});

export const ProductPrice = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "48px",
    fontWeight: "500",
    fontFamily: "Manrope",
    mb: "32px",
  },
});

export const AdsText = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Manrope",
    mb: "32px",
  },
});

export const ImageWrapper = chakra("div", {
  baseStyle: {
    w: { base: "100%", lg: "520px" },
    h: "auto",
    mr: { base: "0px", md: "28px", lg: "55px" },
    mb: { base: "24px", md: "0px" },
    p: { base: "48px", md: "60px 39px" },
    position: "relative",
  },
});

export const ImagesFlex = chakra("div", {
  baseStyle: {
    pos: "absolute",
    top: "0px",
    left: "0px",
    display: "flex",
    w: "auto",
    h: "auto",
    flexDir: "column",
    gap: "8px",
  },
});

export const ImageComponent = chakra("img", {
  baseStyle: {
    w: "68px",
    h: "68px",
    borderRadius: "8px",
    cursor: "pointer",
    borderColor:'#121314'
  },
});
