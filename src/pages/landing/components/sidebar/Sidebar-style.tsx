import { chakra } from "@chakra-ui/react";

export const SidebarWrapper = chakra("div", {
  baseStyle: {
    w: "256px",
    mr: "40px",
    display: { base: "none", xl: "block" },
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
    justifyContent: "space-between",
    pt: "16px",
  },
});

export const IconComponent = chakra("img", {
  baseStyle: {
    w: "32px",
    h: "32px",
    cursor: "pointer",
  },
});

export const Line = chakra("div", {
  baseStyle: {
    my: "32px",
    w: "100%",
    border: "1px solid",
    borderColor: "#EFECDC",
  },
});

export const FilterSectionWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    bg: "#fff",
    p: "24px",
    h: "auto",
    borderRadius: "16px",
  },
});

export const Text24px = chakra("p", {
  baseStyle: {
    fontFamily: "Helvetica",
    fontWeight: "700",
    fontSize: "24px",
    color: "#121314",
  },
});


export const BurgerIconComponent = chakra("img", {
  baseStyle: {
    w: "19px",
    h: "16px",
    cursor:'pointer'
  },
});



export const Text16px = chakra("p", {
  baseStyle: {
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: "16px",
    height: '28px',
    cursor:'pointer'
  },
});


export const Text18px = chakra("p", {
  baseStyle: {
    fontFamily: 'Manrope',
    color:'#000000',
    fontWeight: "700",
    fontSize: "18px",
    height: '32px',
   // cursor:'pointer'
  },
});