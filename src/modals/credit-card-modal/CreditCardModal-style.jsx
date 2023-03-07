import { chakra } from "@chakra-ui/react";

export const CreditModalContainer = chakra("div", {
  baseStyle: {
    w: { base: "100%", lg: "500px" },
    p: { base: "20px 20px 36px 20px", lg: "20px 44px 36px 44px" },
    bg: "#F9F6FE",
    border: "4px solid #E2D8F3",
    borderRadius: "32px",
    pos: "relative",
  },
});

export const FlexRow = chakra("div", {
  baseStyle: {
    display: "flex",
    w: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "32px",
  },
});



export const ModalTitle = chakra("p", {
    baseStyle: {
      w: "100%",
      textAlign: "center",
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontSize: "32px",
      color: "#150132",
      mb: "16px",
    },
  });

  export const CloseIconComponent = chakra("div", {
    baseStyle: {
      top: "32px",
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
  
