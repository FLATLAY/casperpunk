import { chakra } from "@chakra-ui/react";

export const AuthModalWrapper = chakra("div", {
  baseStyle: {
    w: { base: "100%", lg: "373px" },

    p: "38px 32px 36px 32px",
    bg: "#F9F6FE",
    border: "4px solid #E2D8F3",
    borderRadius: "32px",
    pos: "relative",
  },
});

export const CloseIconComponent = chakra("div", {
  baseStyle: {
    top: "16px",
    right: "16px",
    pos: "absolute",
    w: "34px",
    h: "34px",
    borderRadius: "50%",
    bg: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
});

export const CloseIconImg = chakra("img", {
  baseStyle: {
    w: "14px",
    h: "14px",
  },
});

export const ModalTitle = chakra("p", {
  baseStyle: {
    w: "100%",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "32px",
    color: "#150132",
    mb: "24px",
  },
});
