import { chakra, keyframes } from "@chakra-ui/react";

const animationKeyframes = keyframes`
  0% { transform: translateY(-300px); opacity: 0; }
  100% {  transform: translateY(0px); opacity: 1;}
`;

const animation = `${animationKeyframes} 0.5s`;

export const ModalWrapperComponent = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "30",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    bg: " rgba(43, 43, 43, 0.2) ",
    backdropFilter: " blur(5px)",
  //  padding: { base: "30px 30px 30px 30px", md: "100px 50px 50px 50px" },
  },
});

export const ModalContent = chakra("div", {
  baseStyle: {
    zIndex: "31",
    pos:'absolute',
    w: "100%",
    padding: { base: "30px 30px 30px 30px", md: "100px 50px 50px 50px" },
    h: "auto",
    margin:'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation:animation,
  },
});

// export const ModalContent = chakra("div", {
//   baseStyle: {
//     zIndex: "11",
//     boxSizing: "border-box",
//     height: "auto",
//     margin: "auto",
//     width: { base: "100%", md: "500px" },
//     background: "mainLayer",
//     borderRadius: "8px",
//     animation:animation,
//     padding: { base: "30px 20px 30px 20px", md: "40px 60px 40px 60px" },
//   },
// });
