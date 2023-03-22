import { Flex, Image, Text } from "@chakra-ui/react";

import casperLogo from "../../assets/images/casper-logo.svg";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      p="30px 24px 30px 100px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src={casperLogo} w="126px" h="39px" />

      <Flex w="auto" gap="24px">
        <TextComponent>WHITELIST</TextComponent>
        <TextComponent>ABOUT</TextComponent>
        <TextComponent>MINTING</TextComponent>
        <TextComponent>ROADMAP</TextComponent>
        <TextComponent>MARKETPLACE</TextComponent>
        <TextComponent color='#AD203E'>MERCH</TextComponent>
        <TextComponent>FAQ</TextComponent>
        <TextComponent>CREATE WALLET</TextComponent>
      </Flex>
    </Flex>
  );
};

const TextComponent = ({ children, color }) => {
  return (
    <Text
      font-family="Montserrat"
      font-style="normal"
      font-weight="700"
      font-size="15px"
      color={color ? color : "#161F2F"}
      cursor='pointer'
    >
      {children}
    </Text>
  );
};

export default Navbar;
