import { chakra } from "@chakra-ui/react";

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