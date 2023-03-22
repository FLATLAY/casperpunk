import { Box } from "@chakra-ui/react";

import TopSection from "./components/top-section/TopSection";
import BottomComponent from "./components/bottom-component/BottomComponent"

const Footer = () => {
  return (
    <Box w="100%">
      <TopSection />
      <BottomComponent />
    </Box>
  );
};

export default Footer;
