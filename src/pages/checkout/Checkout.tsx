import { Flex, Box } from "@chakra-ui/react";

import { useCart } from "../../hooks/useCart/useCart";

import PageContainer from "../../components/page-container/PageContainer";
import ProductsComponent from "./components/products-component/ProductsComponent";

const Checkout = () => {
  const { cart , cartItems } = useCart();
  console.log("cart ", cart);

  return (
    <PageContainer>
      <Flex w="100%" alignItems="center" justifyContent="center" flexDir='column' >
        <ProductsComponent cartItems={cartItems} />
      </Flex>
    </PageContainer>
  );
};
export default Checkout;
