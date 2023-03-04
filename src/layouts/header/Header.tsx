import { Flex } from "@chakra-ui/react";

import {
  HeaderContentWrapper,
  HeaderWrapper,
  ShopLogo,
  BurgerIcon,
  SearchIcon,
} from "./Header-style";

import headerLogo from "../../assets/images/header-logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Flex alignItems="center">
          <ShopLogo bg="transparent" src={headerLogo} />
        </Flex>
        <Flex alignItems="center">
          {/* <SearchIcon src={seacrhIcon} />
        <NotificationIcon />
        <Cart />
        <WalletIcon /> */}
        </Flex>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
