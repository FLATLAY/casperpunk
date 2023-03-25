import { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/useCart/useCart";
import { useProfile } from "../../hooks/useProfile/useProfile";

import PageContainer from "../../components/page-container/PageContainer";
import ProductsComponent from "./components/products-component/ProductsComponent";
import PriceComponent from "./components/price-component/PriceComponent";
import ButtonComponent from "./components/buttons-component/ButtonComponent";

const Checkout = () => {
  const { cartItems } = useCart();
  const { profile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) navigate("/");
  }, []);

  return (
    <PageContainer>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Box w="100%" maxW="600px">
          <ProductsComponent cartItems={cartItems} />
          <Box mb="32px" />
          <PriceComponent />
          <Box
            pt="32px"
            borderBottom="1px solid"
            borderColor="#E9E9E2"
            mb="32px"
          />
          <ButtonComponent />
        </Box>
      </Flex>
    </PageContainer>
  );
};
export default Checkout;
