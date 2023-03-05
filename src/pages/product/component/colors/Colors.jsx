import { Box, Text, Flex, Image } from "@chakra-ui/react";

import { IMS_TYPES } from "../../../../constant/ims-types";
import tickIcon from "../../../../assets/icons/tik-icon.svg";

const Colors = ({ imsType, selectedSku, changeOption, option }) => {
  
  const isSelected = (color) => {
    let result;
    if (imsType == IMS_TYPES.DROPLINKED) {
      result =
        selectedSku.options.find(
          (element) => element.variantID == option.variantID
        ).value == color
          ? true
          : false;
    } else {
      result =
        selectedSku.option_values.find(
          (element) => element.option_id == option.variantID
        ).value == color
          ? true
          : false;
    }
    return result;
  };

  return (
    <Box w="100%">
      <Text color="#121314" fontSize="18px" fontWeight="600" mb="18px">
        Color
      </Text>
      <Flex flexWrap="wrap">
        {option.values.map((color, i) => {
          return (
            <Box
              key={i}
              w="50px"
              h="50px"
              borderRadius="50%"
              borderColor="#121314"
              border="1px solid"
              bg={color}
              mr={{ base: "8px", xl: "24px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={() => changeOption(option.variantID, color)}
            >
              {isSelected(color) && (
                <Image
                  src={tickIcon}
                  stroke={color}
                  filter="hue-rotate(90deg)"
                />
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Colors;
