import { Flex, Box } from "@chakra-ui/react";

import { useCart } from "../../hooks/useCart/useCart";

import PageContainer from "../../components/page-container/PageContainer";
import ProductsComponent from "./components/products-component/ProductsComponent";
import PriceComponent from "./components/price-component/PriceComponent";

const Checkout = () => {
  const { cart, cartItems } = useCart();
  console.log("cart ", cart);

  return (
    <PageContainer>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Box w='100%' maxW='600px' >
        <ProductsComponent cartItems={cartItems} />
        <Box mb="32px" />
        <PriceComponent />
        </Box>
      </Flex>
    </PageContainer>
  );
};
export default Checkout;
