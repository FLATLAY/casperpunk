import { chakra } from "@chakra-ui/react";

export const CartIconWrapper = chakra("div", {
  baseStyle: {
    w: { base: "22px", xl: "56px" },
    h: { base: "22px", xl: "44px" },
    pos: "relative",
    ml:{base:'15px',md:'30px'}
  },
});

export const CartIcon = chakra("img", {
  baseStyle: {
    w: { base: "22px", xl: "41px" },
    h: { base: "22px", xl: "34px" },
    cursor: "pointer",
  },
});

export const CartCounter = chakra("div", {
  baseStyle: {
    w: {base:'15px',xl:"20px"},
    h: {base:'15px',xl:"20px"},
    pos: "absolute",
    top: "0px",
    right: "0px",
    bg: "#202020",
    border: "2px solid #FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});

export const CartCounterNumber = chakra("div", {
  baseStyle: {
    fontSize: {base:'8px',xl:"14px"},
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Manrope",
  },
});
