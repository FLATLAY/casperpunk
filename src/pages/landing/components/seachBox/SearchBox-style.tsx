import { chakra } from "@chakra-ui/react";

export const SearchBoxWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "256px",
    h: "55px",
    bg: "#fff",
    px: "22px",
    mr: "15px",
    display: "flex",
    alignItems: "center",
  },
});

export const SearchIconImg = chakra("img", {
  baseStyle: {
    w: "20px",
    h: "20px",
    mr: "14px",
  },
});

export const SearchInput = chakra("input", {
  baseStyle: {
    w: "100%",
    border: "none",
    color: "#262626",
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "Manrope",
    outline: "none",
    _focus: {
      outline: "none",
      border: "none",
    },

    _placeholder: {
      color: "#9E9E94",
    },
  },
});
