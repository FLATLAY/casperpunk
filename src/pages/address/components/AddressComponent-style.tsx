import { chakra } from "@chakra-ui/react";

export const ComponentWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "820px",
    padding: { base: "32px", md: "64px 48px" },
    bg: "#fff",
    border: " 1px solid",
    borderRadius: "16px",
    cursor:'pointer'
  },
});

export const ButtonWrapper = chakra("div", {
    baseStyle: {
      w:'200px',

    },
  });

export const Text700 = chakra("div", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "700 ",
      fontSsize: "24px ",
      color: "#262626 ",
    },
  });
  
  export const Text400 = chakra("div", {
      baseStyle: {
        fontFamily: "Manrope",
        fontWeight: "400 ",
        fontSsize: "24px ",
        color: "#262626 ",
      },
    });
  
