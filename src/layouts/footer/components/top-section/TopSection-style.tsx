import { chakra } from "@chakra-ui/react";

export const Text16px = chakra("p", {
  baseStyle: {
    fontFamily: 'Manrope' ,
    fontWeight: '400' ,
    fontSize: '16px' ,
    color: '#505049' ,
    pl:'23px' ,
    cursor:'pointer'
   // borderLeft:'1px solid',
  //  borderColor:'#B6B6AF',
  },
});

export const CenterLine = chakra("div", {
    baseStyle: {
     w:'100%' ,
     my:'24px' ,
     borderTop:'1px solid',
     borderColor:'#E9E9E2'
    },
  });


  export const TextGray = chakra("p", {
    baseStyle: {
        fontFamily: 'Manrope' ,
        fontWeight: '400' ,
        fontSize: '14px' ,
        color: '#B6B6AF' ,
    },
  });
  
  
