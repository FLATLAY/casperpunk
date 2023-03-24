import { Flex, Text } from "@chakra-ui/react";

const ShippingItem = ({
  shipping,
  selectedShipping,
  setSelectedShippings,
}: {
  shipping: any;
  selectedShipping: any;
  setSelectedShippings: any;
}) => {

  const clickOnComponent = () => setSelectedShippings(shipping.id);

  return (
    <Flex
      w="100%"
      maxW="600px"
      border="1px solid"
      borderColor={selectedShipping === shipping.id ? "#262626" : "#EaECcc"}
      borderRadius="8px"
      p="12px 30px"
      mb="32px"
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
      onClick={clickOnComponent}
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
