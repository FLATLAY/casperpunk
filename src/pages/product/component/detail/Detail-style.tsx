import { chakra } from "@chakra-ui/react";

export const ProductTitle = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize:{base:'32px' ,lg:"48px"},
    fontWeight: "800",
    fontFamily: "Montserrat",
    mb: {base:'8px' ,lg:"24px"},
  },
});

export const ProductPrice = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize:{base:'24px' ,lg:"48px"},
    fontWeight: "500",
    fontFamily: "Manrope",
    mb: {base:'6px' ,lg:"32px"},
  },
});

export const AdsText = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Manrope",
    mb: {base:'24px' ,lg:"32px"},
  },
});

export const QuantityTitle = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Manrope",
    mb: "18px",
  },
});

export const QuantityCounter = chakra("div", {
  baseStyle: {
    maxW: "120px",
    w: "auto",
    border: "1px solid",
    borderColor: "#121314",
    p: "8px 16px",
    borderRadius: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "25px",
    mb:{base:'24px' ,lg:"32px"},
  },
});

export const QuantityIcons = chakra("img", {
  baseStyle: {
    w: "11px",
    h: "11px",
    cursor: "pointer",
  },
});

export const QuantityNumber = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "400",
    fontSize: "16px",
    color: "#121314",
  },
});

export const BuyButton = chakra("div", {
  baseStyle: {
    w: "100%",
    py: "13px",
    fontSize: "16px",
    fontWeight:{base:'400' ,lg:"700"},
    border: "1px solid ",
    borderColor: "#121314",
    borderRadius: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor:'pointer'
  },
});
