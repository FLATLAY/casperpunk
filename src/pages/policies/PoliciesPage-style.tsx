import { chakra } from "@chakra-ui/react";

export const PageTitle = chakra("p", {
  baseStyle: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "26px",
    color: "#121314",
    pb: "32px",
    borderBottom: "1px solid #E9E9E2",
  },
});

export const Text700 = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "700",
    color: "#121314",
  },
});

export const NormalText = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#121314",
  },
});


export const LineComponent = chakra("div", {
  baseStyle: {
   w:'100%',
   borderBottom:'1px solid',
   borderColor:'#E9E9E2',
  },
});

