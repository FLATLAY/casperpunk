import { Flex, Box } from "@chakra-ui/react";

import { Text16px, CenterLine, TextGray } from "./TopSection-style";

const TopSection = () => {
  return (
    <Box w="100%" p="85px 125px 28px 125px">
      <Flex w="100%" h="auto" justifyContent="center" gap="24px">
        <Text16px>Terms & Conditions</Text16px>
        <Text16px>Returns & FAQ</Text16px>
      </Flex>
      <CenterLine />
      <Flex w="100%" gap="24px" alignItems="center">
        <TextGray>Powered by droplinked</TextGray>
        <Box
          w="1px"
          h="12px"
          borderRight="2px solid"
          borderColor="#B6B6AF"
        ></Box>
        <TextGray>© 2023 CasperPunks, All Rights Reserved</TextGray>
      </Flex>
    </Box>
  );
};

export default TopSection;
