import { chakra } from "@chakra-ui/react";

export const HeaderWrapper = chakra("header", {
  baseStyle: {
    w: "100%",
   // px: { base: "21px", xl: "160px" },
   // py: { base: "8px", xl: "0px" },
    h: { base: "50px", xl: "68px" },
    maxH: { base: "50px", xl: "85px" },
    display: "flex",
    alignItems: "center",
    bg: "#fff",
    boxSize: "border-box"
  },
});

export const HeaderContentWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    minW: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:'3px solid black'
  },
});

export const ShopLogo = chakra("img", {
  baseStyle: {
    w: { base: "62px", xl: "132px" },
    h: { base: "22px", xl: "47px" },
    bg: "#fff",
    cursor:'pointer'
  },
});

export const BurgerIcon = chakra("img", {
  baseStyle: {
    display: { base: "block", xl: "none" },
    mr: "22px",
    w: "18px",
    h: "12px",
  },
});

export const SearchIcon = chakra("img", {
  baseStyle: {
    display: { base: "block", xl: "none" },
    mr: "30px",
    w: "14px",
    h: "14px",
  },
});
