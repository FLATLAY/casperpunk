import { chakra } from "@chakra-ui/react";

export const NotificationIconWrapper = chakra("div", {
  baseStyle: {
    w: { base: "22px", xl: "56px" },
    h: { base: "22px", xl: "44px" },
    pos: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const NotificationIconComponent = chakra("img", {
  baseStyle: {
    w: { base: "21px", xl: "31px" },
    h: { base: "24px", xl: "44px" },
    cursor: "pointer",
  },
});

export const NotificationDropdownBgLayout = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "100%",
    position: "fixed",
    overflow: "auto",
    top: "0",
    left: "0",
    zIndex: "20",
  },
});

export const NotificationDropdownComponent = chakra("div", {
  baseStyle: {
    w: { base: "100%", md: "256px" },
    h: "auto",
    bg: "#F9F9F6",
    position: "absolute",
    top: { base: "50px", xl: "85px" },
    right: { base: "0px", md: "120px", xl: "330px" },
    p: "24px 16px",
    boxShadow: "0px 12px 40px -6px rgba(0, 0, 0, 0.12)",
    borderRadius: "8px 0px 8px 8px",
  },
});

export const NotificationText = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "400",
    fontSize: "16px",
    color: "#262626",
  },
});
