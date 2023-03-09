


import { chakra } from "@chakra-ui/react";

export const BoldText = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121314",
    mb:'4px'
  },
});


export const NormalText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      color: "#121314",
      mb:'4px',
      cursor:'pointer'
    },
  });



