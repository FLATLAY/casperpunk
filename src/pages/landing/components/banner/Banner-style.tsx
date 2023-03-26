import { chakra } from "@chakra-ui/react";

export const DesktopBannerImage = chakra("img", {
  baseStyle: {
    w: "100%",
    h: "auto",
    display: { base: "none", md: "block" },
  },
});

export const MobileBannerImage = chakra("img", {
  baseStyle: {
    w: "100%",
    h: "auto",
    maxH: "470px",
    display: { base: "block", md: "none" },
  },
});
