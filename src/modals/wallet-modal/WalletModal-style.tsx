import { chakra } from "@chakra-ui/react";

export const WalletModalWrapper = chakra("div", {
  baseStyle: {
    w: "373px",
    p: "38px 32px 36px 32px",
    bg: "#F9F6FE",
    border: "4px solid #E2D8F3",
    borderRadius: "32px",
    pos: "relative",
  },
});

export const WalletTitle = chakra("p", {
  baseStyle: {
    w: "100%",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "32px",
    color: "#150132",
    mb: "38px",
  },
});

export const WalletComponent = chakra("div", {
  baseStyle: {
    w: "100%",
    bg: "#fff",
    p: "14px 16px",
    fontFamily: "Manrope",
    fontWeight: "400",
    fontSize: "16px",
    color: "#9E9E94",
    cursor: "pointer",
    borderRadius: "12px",
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

export const LoadingWrapper = chakra("div", {
  baseStyle: {
    w: "100",
   display:'flex',
   justifyContent:'center',
   h:'40px'
  },
});

