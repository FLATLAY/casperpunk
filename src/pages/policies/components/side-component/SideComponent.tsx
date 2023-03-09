import { Box } from "@chakra-ui/react";

import { BoldText, NormalText } from "./SideComponent-style";

const SideComponent = () => {
  
  const navigateFunction = (id: string) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToRefund = () => navigateFunction("policies-refund-section");
  const navigateToFaq = () => navigateFunction("policies-faq-section");
  const navigateToTerms = () => navigateFunction("policies-terms-section");
  const navigateToPrivacy = () => navigateFunction("policies-privacy-section");

  return (
    <Box
      w="350px"
      minW="350px"
      h="270px"
      maxH="auto"
      borderRadius="8px"
      bgColor="#fff"
      padding="24px 32px"
      display={{ base: "none", xl: "block" }}
    >
      <BoldText>This document contains our:</BoldText>
      <NormalText onClick={navigateToRefund}>Refund Policy</NormalText>
      <NormalText onClick={navigateToFaq}>FAQs</NormalText>
      <NormalText onClick={navigateToTerms}>Terms of Service</NormalText>
      <NormalText onClick={navigateToPrivacy}>Privacy Policy</NormalText>
      <Box mb="28px" />
      <BoldText>About this store</BoldText>
      <NormalText fontSize="14px">
        This website is operated by Merchadise Inc.
      </NormalText>
    </Box>
  );
};

export default SideComponent;
