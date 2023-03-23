import { chakra } from "@chakra-ui/react";

export const CartIconWrapper = chakra("div", {
  baseStyle: {
    w: { base: "22px", xl: "56px" },
    h: { base: "22px", xl: "44px" },
    pos: "relative",
    ml:{base:'15px',md:'30px'}
  },
});

export const CartIcon = chakra("img", {
  baseStyle: {
    w: { base: "22px", xl: "41px" },
    h: { base: "22px", xl: "34px" },
    cursor: "pointer",
  },
});

export const CartCounter = chakra("div", {
  baseStyle: {
    w: {base:'15px',xl:"20px"},
    h: {base:'15px',xl:"20px"},
    pos: "absolute",
    top: "0px",
    right: "0px",
    bg: "#202020",
    border: "2px solid #FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});

export const CartCounterNumber = chakra("div", {
  baseStyle: {
    fontSize: {base:'8px',xl:"14px"},
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Manrope",
  },
});



export const CartDropdownBgLayout = chakra("div", {
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
  
  export const CartDropdownComponent = chakra("div", {
    baseStyle: {
      w: { base: "100%", lg: "350px" },
      h: "auto",
      position: "absolute",
      top: { base: "50px", md:'159px' ,xl: "168px" },
      right: { base: "0px", lg: "52px", xl: "102px" },
      p: "16px",
      boxShadow: "0px 12px 40px -6px rgba(0, 0, 0, 0.12)",
      borderRadius: "0px 0px 4px 4px",
      bg: "#fff",
    },
  });
  
  export const MultipliedIcon = chakra("img", {
    baseStyle: {
      w: "12px",
      h: "12px",
      cursor: "pointer",
    },
  });
  
  export const CartButton = chakra("button", {
    baseStyle: {
      w: "100%",
      h: "44px",
      cursor: "pointer",
      border: "1px solid",
      borderColor: "#121314",
      p: "8px 16px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Manrope",
      _disabled:{
        cursor:'wait'
      }
    },
  });
  
  export const ContinueText = chakra("p", {
    baseStyle: {
      color: "#121314",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Manrope",
      textDecoration: "underline",
      cursor: "pointer",
      w: "100%",
      textAlign: "center",
    },
  });
  
  export const NoItemWrapper = chakra("div", {
    baseStyle: {
      w: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: " 8px 16px",
      gap: "8px",
      background: "#FFFFFF",
      borderRadius: "8px",
    },
  });
  
  export const NoItemText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "16px",
      color: "#262626",
    },
  });
  