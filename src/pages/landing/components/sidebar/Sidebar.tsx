import { useState } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

import {
  SidebarWrapper,
  InformationWrapper,
  LogoComponent,
  SocialIconsWrapper,
  IconComponent,
  Line,
  FilterSectionWrapper,
  Text24px,
  BurgerIconComponent,
  Text16px,
} from "./Sidebar-style";

import SearchBox from "../seachBox/SearchBox";
// assets
import logoImage from "../../../../assets/images/shop-logo.svg";
import shopNameImage from "../../../../assets/images/shop-name-image.svg";
import discordIcon from "../../../../assets/icons/discord-icon.svg";
import webIcon from "../../../../assets/icons/web-icon.svg";
import instagramIcon from "../../../../assets/icons/instagram-icon.svg";
import twitterIcon from "../../../../assets/icons/twitter-icon.svg";
import burgerIcon from "../../../../assets/icons/burger-icon.svg";

const Sidebar = ({
  filterText,
  setFilterText,
}: {
  filterText: string;
  setFilterText: (arg1: string) => void;
}) => {
  return (
    <SidebarWrapper>
      <InformationWrapper>
        <LogoComponent src={logoImage} />
        <Box mb="18px" />
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Image src={shopNameImage} w="100%" />
        </Flex>
        <SocialIconsWrapper>
          <IconComponent src={discordIcon} />
          <IconComponent src={webIcon} />
          <IconComponent src={instagramIcon} />
          <IconComponent src={twitterIcon} />
        </SocialIconsWrapper>
      </InformationWrapper>
      <Line />
      <SearchBox value={filterText} setValue={setFilterText} />
      <Box mb="18px" />
      <FilterSectionWrapper>
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="24px"
        >
          <Text24px>Filter By</Text24px>
          <BurgerIconComponent src={burgerIcon} />
        </Flex>
        <Text16px>Tops</Text16px>
        <Text16px>Bottoms</Text16px>
        <Text16px>Accessories</Text16px>
        <Text16px>Adults</Text16px>
        <Text16px>Kids</Text16px>
      </FilterSectionWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
