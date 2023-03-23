import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import {
  HeaderContentWrapper,
  HeaderWrapper,
  ShopLogo,
  // BurgerIcon,
  // SearchIcon,
} from "./Header-style";

//import headerLogo from "../../assets/images/header-logo.svg";
import Profile from "./components/profile/Profile";
//import Notification from "./components/notification/Notification";
import Cart from "./components/cart/Cart";

const Header = () => {
  const navigate = useNavigate();

  const clickOnHeaderLogo = () => navigate(`/`);

  return (
    <HeaderWrapper>
      <Flex
        w="270px"
        alignItems="center"
        justifyContent="center"
        bg="#161F2F"
        // py={{base:"18px" , xl:"21px"}}
        height={{ base: "60px", xl: "68px" }}
      >
        <Text
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="700"
          fontSize={{ base: "18px", xl: "23px" }}
          color="#FFFFFF"
        >
          MERCH
        </Text>
      </Flex>
      <Flex
        w="calc(100% -  270px)"
        alignItems="center"
        justifyContent="end"
        bg="#ecb049"
        // py="21px"
        h="100%"
        minH="100%"
        pr="34px"
        height={{ base: "60px", xl: "68px" }}
      >
        <Cart />
        <Profile />
      </Flex>
      {/* <HeaderContentWrapper>
        <Flex alignItems="center">
          <ShopLogo
            bg="transparent"
            src={headerLogo}
            onClick={clickOnHeaderLogo}
          />
        </Flex>
        <Flex alignItems="center">

          <Cart />
          <Profile />
        </Flex>
      </HeaderContentWrapper> */}
    </HeaderWrapper>
  );
};

export default Header;

{
  /* <SearchIcon src={seacrhIcon} />
     
       */
}
{
  /* <Notification /> */
}
