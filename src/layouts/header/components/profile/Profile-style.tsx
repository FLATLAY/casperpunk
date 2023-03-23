
import { chakra } from "@chakra-ui/react";

export const WalletIconWrapper = chakra("div", {
    baseStyle: {
      w: { base: "22px", xl: "56px" },
      h: { base: "22px", xl: "44px" },
      pos: "relative",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      ml:{base:'15px',md:'30px'}
    },
  });
  
  export const WalletIconComponent = chakra("img", {
    baseStyle: {

     w: { base: "22px", xl: "36px" },
      h: { base: "22px", xl: "36px" },
      cursor: "pointer",
    },
  });

  
export const WalletDropdownBgLayout = chakra("div", {
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
  
  export const WalletDropdownComponent = chakra("div", {
    baseStyle: {
      w: { base: "100%", md: "256px" },
      h: "auto",
      bg: "#F9F9F6",
      position: "absolute",
      top: { base: "50px", md:'159px' ,xl: "168px" },
      right: { base: "0px", md: "21px", xl: "48px" },
      p: "24px 16px",
      boxShadow: "0px 12px 40px -6px rgba(0, 0, 0, 0.12)",
      borderRadius: "8px 0px 8px 8px",
    },
  });
  
  export const DropdownButton = chakra("div", {
    baseStyle: {
      w: "100%",
      bg: "#FFFFFF",
      borderRadius: "8px",
      p: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#262626",
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "16px",
      cursor:'pointer'
    },
  });
  