import { chakra } from "@chakra-ui/react";

export const SocialMedia = chakra("img", {
  baseStyle: {
    w: "42px",
    h: "42px",
    cursor:'pointer'
  },
});


export const Text15pxWhite = chakra("p", {
    baseStyle: {
        fontFamily: 'Montserrat' ,
        fontWight: '700' ,
        fontSize: '15px ' ,
        color: '#FFFFFF' ,
    },
  });



  export const CircleIcon = chakra("img", {
    baseStyle: {
      w: "20px",
      h: "20px",
    },
  });

  export const Text15pxRed = chakra("p", {
    baseStyle: {
        fontFamily: 'Montserrat' ,
        fontWight: '700' ,
        fontSize: '15px ' ,
        color: '#AD203E' ,
    },
  });
  export const Text15px400 = chakra("p", {
    baseStyle: {
        fontFamily: 'Montserrat' ,
        fontWight: '400' ,
        fontSize: '15px ' ,
        color: '#CACACA' ,
    },
  });
  
