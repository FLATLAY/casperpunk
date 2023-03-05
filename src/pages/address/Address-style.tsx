import { chakra } from "@chakra-ui/react";

export const AddressButton = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "820px",
    display: "flex",
    bg: "#fff",
    borderRadius: "4px",
    border: "1px solid",
    borderColor: "#E9E9E2",
    p: "16px",
    alignItems: "center",
    cursor:'pointer'
  },
});

export const AddressButtonText = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: " 400 ",
    fontSize: " 16px ",
    color: "#6B6B61",
  },
});
