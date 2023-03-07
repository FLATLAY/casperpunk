import { chakra } from "@chakra-ui/react";

export const CartPageWrapper = chakra("div", {
  baseStyle: {
    w: "100%",
    h: "auto",
    bg: "#F9F9F6",
   // pt: "100px",
    display: "flex",
    justifyContent: "center",
    p: { base: "20px 21px 50px 21px", lg: "100px 20px 90px 20px" },
  },
});

export const CartContent = chakra("div", {
  baseStyle: {
    w: "100%",
    maxW: "1200px",
  },
});

export const PageTitle = chakra("p", {
  baseStyle: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#27262B",
    fontFamily: "Helveticas",
  },
});

export const ContinueShippngText = chakra("p", {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#27262B",
    fontFamily: "Manrope",
    textDecoration: "underline",
    cursor: "pointer",
  },
});

export const TableContainer = chakra("table", {
  baseStyle: {
    w: "100%",
  },
});

export const TableHeader = chakra("th", {
  baseStyle: {
    fontFamily: "Manrope",
    fontSize: "16px",
    fontWeight: "600",
    color: "#27262B",
    textAlign: "start",
  },
});

export const TableRow = chakra("tr", {
  baseStyle: {
    h: "144px",
    maxH: "144px",
    w: "100%",
    mb: "32px",
  },
});

export const TableHeaderRow = chakra("tr", {
  baseStyle: {
    w:'100%',
    display:{base:'none',md:'table-row'}
  },
});

export const ProductComponent = chakra("td", {
  baseStyle: {
    h: "100%",
    w:'auto',
    display: "flex",
  },
});

export const ProductImage = chakra("img", {
  baseStyle: {
    h: "144px",
    w: "auto",
    mr: "32px",
  },
});

export const ProductTitle = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121314",
    mb:'8px'
  },
});

export const SkuText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "14px",
      color: "#27262B",
      mb:'8px'
    },
  });
  

  
export const PriceText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "14px",
      color: "#27262B",
    },
  });
  

    
export const DeleteIcon = chakra("div", {
    baseStyle: {
     w:'39px',
     h:'39px',
     borderRadius:'50%',
     bg:'#27262B',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     cursor:'pointer'
    },
  });


  export const SuttotalText = chakra("p", {
    baseStyle: {
     color:'#27262B',
     fontWeight: "400",
     fontSize: "16px",
     fontFamily: "Manrope",
    },
  });


  export const TotalPriceText = chakra("p", {
    baseStyle: {
     color:'#27262B',
     fontWeight: "700",
     fontSize: "24px",
     fontFamily: "Manrope",
    },
  });

  export const ShippingText = chakra("p", {
    baseStyle: {
     color:'#9E9E94',
     fontWeight: "400",
     fontSize: "14px",
     fontFamily: "Manrope",
     w:'100%',
     textAlign:'end',
     mb:'40px'
    },
  });


  export const ButtonComponent = chakra("button", {
    baseStyle: {
      w: "auto",
      h: "44px",
      cursor: "pointer",
      border: "1px solid",
//      borderColor: "#121314",
      p: {base:'8px 8px',md:"8px 16px"},
      borderRadius: "1px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Manrope",
    },
  });




