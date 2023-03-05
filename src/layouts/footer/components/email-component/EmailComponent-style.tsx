import { chakra } from "@chakra-ui/react";

export const InputEmail = chakra("input", {
  baseStyle: {
    w:'100%',
    p: "16px 18px",
    bg: "transparent",
    outline: "none",
    border: "none",
    fontSize: "14px",
    fontWeight: "400",
    color: "#262626",
    fontFamily: "Manrope",
    _placeholder: {
      color: "#DADADA",
    },
    _focus: { outline: "none", border: "none" },
    _hover: { border: "none" },
  },
});
