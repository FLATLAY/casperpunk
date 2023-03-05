import { chakra } from "@chakra-ui/react";

export const ProductComponent = chakra("div", {
  baseStyle: {
    h:'auto',
    w:'100%',
    cursor: "pointer",
    overflow: "hidden",
  },
});

export const ProductTitle = chakra("p", {
  baseStyle: {
    color: "#121314",
    fontSize: "16px",
    fontWeight: "700",
    w: "100%",
    maxW: "100%",
    textAlign: "center",
    fontFamily: "Manrope",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

export const ProductPrice = chakra("p", {
  baseStyle: {
    color: "#9E9E94",
    fontSize: "16px",
    fontWeight: "500",
    w: "100%",
    textAlign: "center",
    fontFamily: "Manrope",
  },
});

export const ProductImage = chakra("img", {
  baseStyle: {
    maxH:'100%',
    w:'auto'
  },
});

export const ImageWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    h: {base:"200px",md:"260px"},
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
});
