import { Box, Flex, Text } from "@chakra-ui/react";

import { useCart } from "../../../../hooks/useCart/useCart";

const PriceComponent = () => {
  const { cart } = useCart();

  const getTotalPrice = () =>{
    return cart.totalPriceCart + cart.selectedEasyPostShipmentRate
  }

  return (
    <Box w="100%" >
      <SubText>Subtotal: ${cart.totalPriceCart}</SubText>
      <SubText>Shipping: ${cart.selectedEasyPostShipmentRate}</SubText>
      <SubText>Estimated Taxes $0.00</SubText>
      <Box mb='32px' />
      <Text
      fontFamily="Manrope"
      fontWeight="500"
      fontSize="24px"
      color="#27262B"
      w='100%'
      textAlign='end'
    >
     Total payment: ${getTotalPrice()}
    </Text>
    </Box>
  );
};

const SubText = ({ children }: { children: any }) => {
  return (
    <Text
      fontFamily="Manrope"
      fontWeight="400"
      fontSize="16px"
      color="#27262B"
      w='100%'
      textAlign='end'
    >
      {children}
    </Text>
  );
};

export default PriceComponent;
