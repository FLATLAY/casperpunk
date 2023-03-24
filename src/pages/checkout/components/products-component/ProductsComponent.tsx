import { Box, Text, Flex, Image } from "@chakra-ui/react";

import {
  getProductImage,
  getProductTitle,
} from "../../../../utils/product/product-utils";

const ProductsComponent = ({ cartItems }: { cartItems: any }) => {
  console.log("cartItems ", cartItems);

  return (
    <Box w="100%" maxW="600px" bg="#fff" borderRadius="16px" p="32px">
      <Text
        fontFamily="Manrope"
        fontWeight="700"
        fontSize="24px "
        color="#262626 "
        w="100%"
        textAlign="center"
        mb="32px"
      >
        Your Purchase
      </Text>
      <Box w="100%" borderBottom="1px solid" borderColor="#E9E9E2" mb="32px" />
      {cartItems.map((item: any, i: number) => {
        return (
          <Flex w="100%" alignItems="center" justifyContent="space-between" mb='16px'>
            <Image src={getProductImage(item.product)} w="64px" h="64px" />
            <Text
              fontFamily="Manrope"
              fontWeight="600"
              fontSize="16px"
              color="#262626"
            >
              {getProductTitle(item.product)}
            </Text>
            <Text
              fontFamily="Manrope"
              fontWeight="600"
              fontSize="16px"
              color="#262626"
            >
             x{item.quantity}
            </Text>
            <Text
              fontFamily="Manrope"
              fontWeight="600"
              fontSize="16px"
              color="#262626"
            >
              ${item.skuID.price}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default ProductsComponent;
