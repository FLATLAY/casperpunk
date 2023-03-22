import { Box, Flex, Image, Text } from "@chakra-ui/react";

import {
  SocialMedia,
  Text15pxWhite,
  CircleIcon,
  Text15pxRed,
  Text15px400,
} from "./BottomComponent-style";

import shopLogo from "../../../../assets/images/casper-logo-dark.svg";

import casperFillLogo from "../../../../assets/icons/casper-wallet-fill-logo.svg";
import tLogo from "../../../../assets/icons/t-wallet-logo.svg";
import casperWalletLogo from "../../../../assets/icons/casper-wallet-logo.svg";

import twiitertLogo from "../../../../assets/icons/twitter-fill-logo.svg";
import telegramLogo from "../../../../assets/icons/telegram-fill-icon.svg";
import discordLogo from "../../../../assets/icons/discord-fill-icon.svg";
import mLogo from "../../../../assets/icons/m-fill-logo.svg";

import icon1 from "./1.svg";
import icon2 from "./2.svg";
import icon3 from "./3.svg";

const BottomComponent = () => {
  return (
    <Flex
      w="100%"
      bg="#000"
      p="40px 60px 60px 60px"
      h="auto"
      justifyContent="space-between"
      alignItems="end"
    >
      <Image src={shopLogo} w="220px" h="70px" />

      <Box w="auto" h="auto">
        <Flex w="auto" alignItems="center" gap="16px" mb="40px"  justifyContent="end" >
          <Text
            font-family="Montserrat"
            font-weight="700"
            font-size="15px"
            color="#FFFFFF"
          >
            Supported Wallets
          </Text>

          <Image src={casperWalletLogo} w="42px" h="42px" />
          <Image src={tLogo} w="42px" h="42px" />
          <Image src={casperFillLogo} w="42px" h="42px" />
        </Flex>

        <Flex
          w="auto"
          alignItems="center"
          justifyContent="end"
          gap="20px"
          mb="20px"
        >
          <SocialMedia src={twiitertLogo} />
          <SocialMedia src={telegramLogo} />
          <SocialMedia src={discordLogo} />
          <SocialMedia src={mLogo} />
        </Flex>

        <Flex
          w="auto"
          alignItems="center"
          justifyContent="end"
          gap="32px"
          mb="32px"
        >
          <Text15pxWhite>TERMS OF USE</Text15pxWhite>
          <Text15pxWhite>PRIVACY POLICY</Text15pxWhite>
          <Text15pxWhite>FAQ</Text15pxWhite>
        </Flex>

        <Flex w="auto" alignItems="center" justifyContent="end" gap="52px">
        <Flex>
            <Text15pxRed> Casper Punks </Text15pxRed>
            <Text15px400> © 2023 by </Text15px400>
            <Text15pxRed> Punk Games LTD </Text15pxRed>
            <Text15px400> . is licensed under CC BY-SA 4.0</Text15px400>
          </Flex>

          <Flex>
            <CircleIcon src={icon1} />
            <CircleIcon src={icon2} />
            <CircleIcon src={icon3} />
          </Flex>


        </Flex>
      </Box>
    </Flex>
  );
};

export default BottomComponent;
