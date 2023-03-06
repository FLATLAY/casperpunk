import { Flex } from "@chakra-ui/react";

import { CollectionNameText, InRowIcon } from "./Landing-style";

import threeInRowIcon from "../../assets/icons/three-in-row-icon.svg";
import fourInRowIcon from "../../assets/icons/four-in-row-icon.svg";

const TopComponent = ({
  itemInRow,
  setItemInRow,
}: {
  itemInRow: number;
  setItemInRow: (counter:number) => void;
}) => {

const changeRowItem = (counter:number) => setItemInRow(counter)

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      p="0px"
      mb={{ base: "25px", xl: "50px" }}
    >
      <CollectionNameText>Cutefits for the Whole Family</CollectionNameText>
      <Flex alignItems="center" gap="16px" display={{base:'none' , md:'flex'}} >
        <InRowIcon onClick={()=>changeRowItem(3)} borderColor={(itemInRow == 3) ?'#121314': '#efecdc'} src={threeInRowIcon} />
        <InRowIcon onClick={()=>changeRowItem(4)} borderColor={(itemInRow == 4) ?'#121314': '#efecdc'} src={fourInRowIcon} />
      </Flex>
    </Flex>
  );
};

export default TopComponent;
