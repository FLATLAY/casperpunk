import { Flex, Image, Text } from "@chakra-ui/react";

import casperLogo from "../../assets/images/casper-logo.svg";
import burgerIcon from "../../assets/icons/burger-icon.svg";
//

const Navbar = () => {
  return (
    <Flex
      w="100%"
      p={{base:'20px',md:"30px 24px 30px 100px"}}
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src={casperLogo} w={{base:'80px',md:"126px" }}h={{base:'24px',md:"39px" }} />

      <Flex w="auto" gap={{base:'12px' , xl:'24px'}} display={{base:'none' , md:'flex'}} >
        <TextComponent>WHITELIST</TextComponent>
        <TextComponent>ABOUT</TextComponent>
        <TextComponent>MINTING</TextComponent>
        <TextComponent>ROADMAP</TextComponent>
        <TextComponent>MARKETPLACE</TextComponent>
        <TextComponent color='#AD203E'>MERCH</TextComponent>
        <TextComponent>FAQ</TextComponent>
        <TextComponent>CREATE WALLET</TextComponent>
      </Flex>
      <Image src={burgerIcon} w="19px" h='19px' display={{base:'block' , md:'none'}} />
    </Flex>
  );
};

const TextComponent = ({ children, color }) => {
  return (
    <Text
      fontFamily="Montserrat"
      fontWeight="700"
      fontSize={{base:"4px" ,md:'8px' , xl:'15px'}}
      color={color ? color : "#161F2F"}
      cursor='pointer'
    >
      {children}
    </Text>
  );
};

export default Navbar;
