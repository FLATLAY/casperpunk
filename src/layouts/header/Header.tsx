import { Flex } from "@chakra-ui/react";

import {
  HeaderContentWrapper,
  HeaderWrapper,
  ShopLogo,
  BurgerIcon,
  SearchIcon,
} from "./Header-style";

import headerLogo from "../../assets/images/header-logo.svg";
import Profile from "./components/profile/Profile";
import Notification from "./components/notification/Notification";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Flex alignItems="center">
          <ShopLogo bg="transparent" src={headerLogo} />
        </Flex>
        <Flex alignItems="center">
          {/* <SearchIcon src={seacrhIcon} />
     
        <Cart />*/}
           <Notification />
        <Profile /> 
        </Flex>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
