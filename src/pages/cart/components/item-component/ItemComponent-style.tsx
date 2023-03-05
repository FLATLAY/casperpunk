import { chakra } from "@chakra-ui/react";


//
export const TableRow = chakra("tr", {
  baseStyle: {
    h: "144px",
    maxH: "144px",
    w: "100%",
    mb: {base:'0px',md:'32px'},
    display:{base:'none',md:'table-row'}
  },
});
//
export const ProductComponent = chakra("td", {
  baseStyle: {
    h: "100%",
    w:'auto',
    display: "flex",
  },
});
//
export const ProductImage = chakra("img", {
  baseStyle: {
    h: "144px",
    w: "auto",
    mr: {base:'0px',md:'32px'},
  },
});
//
export const ProductTitle = chakra("p", {
  baseStyle: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "16px",
    color: "#121314",
    mb:'8px'
  },
});
//
export const SkuText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "14px",
      color: "#27262B",
      mb:'8px'
    },
  });
  

  //
export const PriceText = chakra("p", {
    baseStyle: {
      fontFamily: "Manrope",
      fontWeight: "400",
      fontSize: "14px",
      color: "#27262B",
    },
  });
  

    //
export const DeleteIcon = chakra("div", {
    baseStyle: {
     w:'39px',
     minW:'39px',
     h:'39px',
     borderRadius:'50%',
     bg:'#27262B',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     cursor:'pointer',
    },
  });


  export const ItemWrapper = chakra("div", {
    baseStyle: {
     w:'100%'
    },
  });

  export const TableHeader = chakra("th", {
    baseStyle: {
      fontFamily: "Manrope",
      fontSize: "16px",
      fontWeight: "600",
      color: "#27262B",
      textAlign: "start",
      mb:'16px'
    },
  });




