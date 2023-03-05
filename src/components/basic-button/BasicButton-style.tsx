import { chakra } from "@chakra-ui/react";

export const DarkButton = chakra("button", {
  baseStyle: {
    w: { base: "100%", lg: "500px" },
    p: { base: "20px 20px 36px 20px", lg: "20px 44px 36px 44px" },
    bg: "#F9F6FE",
    border: "4px solid #E2D8F3",
    borderRadius: "32px",
    pos: "relative",
  },
});