import { Flex, Text } from "@chakra-ui/react";

const ShippingItem = ({ shipping }: { shipping: any }) => {
  console.log("shipping item ", shipping);
//line ? "#262626"
//: "#EFECDC"
  return (
    <Flex
      w="100%"
      maxW="600px"
      border="1px solid"
     // borderColor='line'
      borderRadius="8px"
      p="12px 30px"
      mb="32px"
      alignItems="center"
      justifyContent="space-between"
      cursor='pointer'
    >
        <TextComponent>{shipping.service}</TextComponent>
        <TextComponent>{`$${shipping.retail_rate}`}</TextComponent>
    </Flex>
  );
};

const TextComponent = ({ children }: { children: string }) => {
  return (
    <Text fontSize="18px" fontWeight="600" color="#000">
      {children}
    </Text>
  );
};

export default ShippingItem;
