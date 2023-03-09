import { Box } from "@chakra-ui/react";

import { BoldText, NormalText } from "./SideComponent-style";

const SideComponent = () => {
  return (
    <Box
      w="350px"
      minW="350px"
      h='270px'
      maxH='auto'
      borderRadius="8px"
      bgColor="#fff"
      padding="24px 32px"
      display={{ base: "none", xl: "block" }}
    >
        <BoldText>This document contains our:</BoldText>
        <NormalText>Refund Policy</NormalText>
        <NormalText>FAQs</NormalText>
        <NormalText>Terms of Service</NormalText>
        <NormalText>Privacy Policy</NormalText>
        <Box mb='28px' />
        <BoldText>About this store</BoldText>
        <NormalText fontSize='14px' >This website is operated by Merchadise Inc.</NormalText>
    </Box>
  );
};

export default SideComponent;
