import { useState } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

import {
  SidebarWrapper,
  InformationWrapper,
  LogoComponent,
  SocialIconsWrapper,
  IconComponent,
  Line
} from "./Sidebar-style";

import SearchBox from "../seachBox/SearchBox";
// assets
import logoImage from "../../../../assets/images/shop-logo.svg";
import shopNameImage from "../../../../assets/images/shop-name-image.svg";
import discordIcon from "../../../../assets/icons/discord-icon.svg";
import webIcon from "../../../../assets/icons/web-icon.svg";
import instagramIcon from "../../../../assets/icons/instagram-icon.svg";
import twitterIcon from "../../../../assets/icons/twitter-icon.svg";

const Sidebar = () => {
  const [filterText, setFilterText] = useState("");

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
    </SidebarWrapper>
  );
};

export default Sidebar;
