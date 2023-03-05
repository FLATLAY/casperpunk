import { Box, Text, Flex } from "@chakra-ui/react";
import { IMS_TYPES } from "../../../../constant/ims-types";

const Sizes = ({ imsType, selectedSku, changeOption, option }) => {


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
        Size
      </Text>
      <Flex flexWrap="wrap">
        {option.values.map((size, i) => {
          return (
            <Box
              key={i}
              w="50px"
              h="50px"
              borderRadius="50%"
              border="1px solid"
              borderColor="#121314"
              bg={isSelected(size) ? "black" : "white"}
              mr={{ base: "8px", xl: "24px" }}
              fontSize="16px"
              fontWeight="400"
              color={isSelected(size) ? "#fff" : "#121314"}
              cursor="pointer"
              fontFamily="Manrope"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => changeOption(option.variantID, size)}
            >
              {size}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Sizes;
