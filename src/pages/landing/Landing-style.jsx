import { chakra } from "@chakra-ui/react";

export const ShopPageWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "auto",
    bg: "#F9F9F6",
    p: { base: "25px 20px 90px 20px", xl: "109px 160px 100px 160px" },
    display: "flex",
  },
});

export const ProductsWrapper = chakra("div", {
  baseStyle: {
    w: { base: "100%", xl: "calc(100% - 296px)" },
  },
});

export const CollectionNameText = chakra("p", {
  baseStyle: {
    color: "#262626",
    fontSize: { base: "25px", xl: "32px" },
    fontWeight: "700",
   maxW:{base:'300px',md:'100%'}
  },
});

export const FlexProducts = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "100%",
    display: "grid",
    gap: {
      base: "16px 16px",
      lg: "32px 16px",
      xl: "60px 10px",
      "2xl": "60px 30px",
    },
    // gridTemplateColumns: { base: "1fr 1fr", md: "1fr 1fr 1fr" },
  },
});

export const ShopComponent = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "auto",
  },
});

export const TopSection = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "495px",
    pos: "relative",
    //  bg: "#D8D3C5",
  },
});

export const LeftSide = chakra("div", {
  baseStyle: {
    w: "auto",
    h: "auto",
    pos: "absolute",
    top: { base: "120px", xl: "110px" },
    left: { base: "27px", xl: "160px" },
    // border: "1px solid red",
    //pb: "66px",
    zIndex: "5",
    boxSizing: "border-box",
  },
});

export const TopSectionText = chakra("p", {
  baseStyle: {
    //maxW:'510px',
    fontFamily: "Helvetica",
    fontSize: { base: "23px", xl: "56px" },
    fontWeight: "800",
    color: "#262626",
  
  },
});

export const TopSectionButton = chakra("button", {
  baseStyle: {
    fontFamily: "Manrope",
    w: "256px",
    py: "16px",
    borderRadius: "2px",
    borderColor: "#262626",
    display: "flex",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: { base: "700", xl: "400" },
    bg: "#262626",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    outline: "none",
    shadow: "none",
  },
});

export const RightsideImage = chakra("img", {
  baseStyle: {
    w: "auto",
    h: "100%",
    pos: "absolute",
    right: "0px",
    display: { base: "none", xl: "block" },
  },
});

export const MobileImageSide = chakra("img", {
  baseStyle: {
    w: "100%",
    h: "100%",
    pos: "absolute",
    right: "0px",
    top: "0px",
    display: { base: "block", xl: "none" },
  },
});

export const InRowIcon = chakra("img", {
  baseStyle: {
    w: "43px",
    h: "43px",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "8px",
    cursor:'pointer'
  },
});


export const BurgerIconComponent = chakra("img", {
  baseStyle: {
    w: "19px",
    h: "16px",
    cursor:'pointer',
    display:{base:'block' , xl:'none'},
   
  },
});

export const FilterSectionWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    bg: "#fff",
    p: "56px 24px",
    h: "auto",
    borderRadius: "16px",
    display:{base:'block' , xl:'none'},
    position:'absolute',
    top:'-20px',
   right:'-20px',
   width:'100vw'
  },
});


export const Text24px = chakra("p", {
  baseStyle: {
    fontFamily: "Helvetica",
    fontWeight: "700",
    fontSize: "24px",
    color: "#121314",
  },
});

export const Text16px = chakra("p", {
  baseStyle: {
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: "16px",
    height: '28px',
    cursor:'pointer'
  },
});