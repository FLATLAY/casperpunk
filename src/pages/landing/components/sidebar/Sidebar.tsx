//import { useState } from "react";
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
import { useShop } from "../../../../hooks/useShop/useShop";

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
  filterBy,
  setFilterBy,
}: {
  filterText: string;
  setFilterText: (arg1: string) => void;
  filterBy: string;
  setFilterBy: (arg1: string) => void;
}) => {
  const { shopData } = useShop();

  const selectTag = (tag: string) => setFilterBy(tag);

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

          <a href="https://www.supercuteworld.com" target="_blank">
            <IconComponent src={webIcon} />
          </a>
          <a href="https://www.instagram.com/supercuteofficial" target="_blank">
            <IconComponent src={instagramIcon} />
          </a>
          <a href="https://twitter.com/supercutenft" target="_blank">
            <IconComponent src={twitterIcon} />
          </a>
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
        <Text16px
          onClick={() => {
            selectTag("");
          }}
          color={filterBy === "" ?"#121314" : "#b3b3b3"  }
        >
          All
        </Text16px>
        {shopData.productsTags.map((tag: any, index: number) => {
          return (
            <Text16px
              key={index}
              onClick={() => {
                selectTag(tag);
              }}
              color={filterBy === tag ?"#121314" : "#b3b3b3" }
            >
              {tag}
            </Text16px>
          );
        })}
      </FilterSectionWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
