import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import {
  CollectionNameText,
  InRowIcon,
  BurgerIconComponent,
  FilterSectionWrapper,
  Text24px,
  Text16px,
} from "./Landing-style";

import threeInRowIcon from "../../assets/icons/three-in-row-icon.svg";
import fourInRowIcon from "../../assets/icons/four-in-row-icon.svg";
import burgerIcon from "../../assets/icons/burger-icon.svg";

const TopComponent = ({
  itemInRow,
  setItemInRow,
}: {
  itemInRow: number;
  setItemInRow: (counter: number) => void;
}) => {
  const [showFilter, setShowModal] = useState(false);

  const changeRowItem = (counter: number) => setItemInRow(counter);
  const toggleFilterComponent = () => setShowModal((p) => !p);

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      p="0px"
      mb={{ base: "25px", xl: "50px" }}
      position="relative"
    >
      <CollectionNameText>Cutefits for the Whole Family</CollectionNameText>
      <Flex
        alignItems="center"
        gap="16px"
        display={{ base: "none", xl: "flex" }}
      >
        <InRowIcon
          onClick={() => changeRowItem(3)}
          borderColor={itemInRow == 3 ? "#121314" : "#efecdc"}
          src={threeInRowIcon}
        />
        <InRowIcon
          onClick={() => changeRowItem(4)}
          borderColor={itemInRow == 4 ? "#121314" : "#efecdc"}
          src={fourInRowIcon}
        />
      </Flex>
      <BurgerIconComponent src={burgerIcon} onClick={toggleFilterComponent} />
      {showFilter && (
        <FilterSectionWrapper>
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mb="24px"
          >
            <Text24px>Filter By</Text24px>
            <BurgerIconComponent src={burgerIcon} onClick={toggleFilterComponent} />
          </Flex>
          <Text16px>Tops</Text16px>
          <Text16px>Bottoms</Text16px>
          <Text16px>Accessories</Text16px>
          <Text16px>Adults</Text16px>
          <Text16px>Kids</Text16px>
        </FilterSectionWrapper>
      )}
    </Flex>
  );
};

export default TopComponent;
