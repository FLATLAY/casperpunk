import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  PageTitle,
  ContinueShippngText,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  SuttotalText,
  TotalPriceText,
  ShippingText,
  ButtonComponent,
} from "./CartPage-style";
import { useCart } from "../../hooks/useCart/useCart";
import { IMS_TYPES } from "../../constant/ims-types";
import { useProfile } from "../../hooks/useProfile/useProfile";

import ItemComponent from "./components/item-component/ItemComponent";
import AddressEmailModal from "../../modals/address-email-modal/AddressEmailModal";
import PageContainer from "../../components/page-container/PageContainer";

const CartPage = () => {
  const { cartItems, cartType, continueShopping, discardCart } = useCart();
  const { shopName } = useParams();
  const { profile } = useProfile();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const toggleAddressModal = () => setShowAddressModal((p) => !p);

  const getTotalPrice = () => {
    if (cartItems.length == 0) return 0.0;

    let total = 0;

    cartItems.forEach(
      (item: any) => (total += parseFloat(item.variant.price) * item.quantity)
    );

    return total.toFixed(2);
  };

  const onClickCheckout = async () => {
    if (!profile) {
      toggleAddressModal();
    } else {
      navigate(`/address`);
    }
  };

  return (
    <PageContainer>
      {cartItems.length > 0 ? (
        <>
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mb="32px"
          >
            <PageTitle>Your Cart</PageTitle>
            <ContinueShippngText onClick={continueShopping}>
              Continue shopping
            </ContinueShippngText>
          </Flex>

          <TableContainer>
            <TableHeaderRow>
              <TableHeader>Product</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Cost per Unit</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader> </TableHeader>
            </TableHeaderRow>
            <Box mb="32px"></Box>
            {cartItems.map((item: any) => {
              return <ItemComponent item={item} />;
            })}
          </TableContainer>

          <Box border="1px solid #E9E9E2" w="100%" mb="32px"></Box>

          <Flex w="100%" justifyContent="end" alignItems="end" mb="16px">
            <SuttotalText>Subtotal: </SuttotalText>
            <TotalPriceText>${getTotalPrice()}</TotalPriceText>
          </Flex>
          <ShippingText>Taxes and shipping calculated at checkout</ShippingText>
          <Flex justifyContent="end" gap={{ base: "8px", md: "32px" }}>
            <ButtonComponent
              color="#121314"
              bg="transparent"
              borderColor="transparent"
              onClick={discardCart}
            >
              Discard
            </ButtonComponent>
            <ButtonComponent
              color="#121314"
              bg="transparent"
              borderColor="#121314"
              onClick={continueShopping}
            >
              Continue Shopping
            </ButtonComponent>
            <ButtonComponent
              onClick={onClickCheckout}
              color="#fff"
              bg="#121314"
              borderColor="#121314"
              disabled={loading}
              cursor={loading ? "wait" : "pointer"}
            >
              Checkout
            </ButtonComponent>
          </Flex>
        </>
      ) : (
        <Flex w="100%" alignItems="center" flexDir="column">
          <PageTitle>Your Cart is Empty</PageTitle>
          <Box mb="16px"></Box>
          <ButtonComponent
            color="#fff"
            bg="#121314"
            borderColor="#121314"
            w="254px"
            onClick={continueShopping}
          >
            Continue Shopping
          </ButtonComponent>
        </Flex>
      )}
      <AddressEmailModal show={showAddressModal} close={toggleAddressModal} />
    </PageContainer>
  );
};

export default CartPage;
