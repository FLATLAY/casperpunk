import { Flex, Box } from "@chakra-ui/react";
import { useMemo } from "react";

import { useShop } from "../../../../hooks/useShop/useShop";
import {
  FooterComponentWrapper,
  FooterIcon,
  Text16W400,
  VerticalLine,
  Text14W400,
} from "./Footer-style";

import shopIcon from "../../assets/icons/shop-name-icon.svg";

const Footer = () => {

  const { shopData } = useShop();

  const getIcon = () => ((shopData && shopData.headerIcon) ? shopData.headerIcon : shopIcon);
  const getEmail = () => ((shopData && shopData.infoEmail )? shopData.infoEmail : '');

  const footerIcon = useMemo(getIcon, [shopData]);
  const infoEmail = useMemo(getEmail, [shopData]);
  if(shopData == null) return null

  
  return (
    <FooterComponentWrapper>
      <Box
        display={{ base: "block", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        pb="24px"
        borderBottom="1px solid #E9E9E2"
      >
        <FooterIcon src={footerIcon} />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
          gap={{ base: "24px", md: "8px", xl: "20px" }}
        >
          <Text16W400>
            Any questions? Contact us at {infoEmail}
          </Text16W400>
          <VerticalLine />
          <Text16W400>Terms & Conditions</Text16W400>
          <VerticalLine />
          <Text16W400>Returns & FAQ</Text16W400>
        </Flex>
      </Box>
      <Box mb="24px" />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "start", md: "center" }}
        gap={{ base: "8px", md: "24px" }}
      >
        <Text14W400>Powered by Merchproof</Text14W400>
        <VerticalLine h="10px" />
        <Text14W400>© 2023 Merchproof, All Rights Reserved</Text14W400>
      </Flex>
    </FooterComponentWrapper>
  );
};

export default Footer;
