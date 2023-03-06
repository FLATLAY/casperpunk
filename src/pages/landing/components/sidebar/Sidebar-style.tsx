import { chakra } from "@chakra-ui/react";

export const SidebarWrapper = chakra("div", {
  baseStyle: {
    w: "256px",
    mr: "40px",
    display: { base: "none", xl: "block" },
    border: "1px solid red",
  },
});

export const InformationWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    bg: "#fff",
    borderRadius: "16px",
    border: " 1px solid #EFECDC",
    padding: "32px",
  },
});

export const LogoComponent = chakra("img", {
  baseStyle: {
    w: "192px",
    h: "192px",
  },
});

export const SocialIconsWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
    pt:'16px'
  },
});


export const IconComponent = chakra("img", {
  baseStyle: {
    w: "32px",
    h: "32px",
    cursor:'pointer'
  },
});