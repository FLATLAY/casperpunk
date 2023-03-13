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
import { useShop } from "../../hooks/useShop/useShop";

import threeInRowIcon from "../../assets/icons/three-in-row-icon.svg";
import fourInRowIcon from "../../assets/icons/four-in-row-icon.svg";
import burgerIcon from "../../assets/icons/burger-icon.svg";

const TopComponent = ({
  itemInRow,
  setItemInRow,
  filterBy,
  setFilterBy,
}: {
  itemInRow: number;
  setItemInRow: (counter: number) => void;
  filterBy: string;
  setFilterBy: (arg1: string) => void;
}) => {
  const { shopData } = useShop();

  const [showFilter, setShowModal] = useState(false);

  const changeRowItem = (counter: number) => setItemInRow(counter);
  const toggleFilterComponent = () => setShowModal((p) => !p);

  const selectTag = (tag: string) =>{
     setFilterBy(tag)
   // toggleFilterComponent()
  }

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
      )}
    </Flex>
  );
};

export default TopComponent;
