import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  CartDropdownBgLayout,
  CartDropdownComponent,
  MultipliedIcon,
  CartButton,
  ContinueText,
  NoItemWrapper,
  NoItemText,
} from "./Cart-style";
import { useCart } from "../../../../hooks/useCart/useCart";
import { useProfile } from "../../../../hooks/useProfile/useProfile";

import multipliedIcon from "../../../../assets/icons/multiplied-icon.svg";
import AddressEmailModal from "../../../../modals/address-email-modal/AddressEmailModal";
import ProductComponent from "./ProductComponent";

interface Props {
  close: () => void;
  show: boolean;
  cartItems: any;
}

const CartDropdown = ({ close, show, cartItems }: Props) => {

  const navigate = useNavigate();
  const { numberOfItems, continueShopping } = useCart();
  const { profile } = useProfile();

  const [loading, setLoading] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const toggleAddressModal = () => setShowAddressModal((p) => !p);

  const handleChildClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  if (!show) return null;

  const navigateToCart = () => {
    close();
    navigate(`cart`);
  };

  const onClickCheckout = async () => {
    if (!profile) {
      toggleAddressModal();
    } else {
      navigate(`/address`);
    }
    close();
  };

  return (
    <CartDropdownBgLayout onClick={close}>
      <CartDropdownComponent onClick={handleChildClick}>
        {cartItems.length > 0 ? (
          <Flex flexDir="row-reverse" p="6px" mb="24px">
            <MultipliedIcon src={multipliedIcon} onClick={close} />
          </Flex>
        ) : (
          <NoItemWrapper>
            <NoItemText fontWeight="400">No items to show yet.</NoItemText>
            <NoItemText fontWeight="600">Start now!</NoItemText>
          </NoItemWrapper>
        )}
        <Box w="100%" border="1px solid #121314" mb="24px"></Box>
        {cartItems.map((item: any) => {
          return <ProductComponent item={item} key={item._id} />;
        })}
        <Box mb="16px"></Box>
        <CartButton bg="#fff" color="#121314" onClick={navigateToCart}>
          View My Cart ({numberOfItems})
        </CartButton>
        <Box mb="24px"></Box>
        <CartButton
          bg="#121314"
          color="#fff"
          onClick={onClickCheckout}
          disabled={loading}
        >
          {loading ? (
            <Spinner size="sm" thickness="2px" color="#fff" />
          ) : (
            `Checkout`
          )}
        </CartButton>
        <Box mb="24px"></Box>
        <ContinueText onClick={continueShopping}>
          Continue Shopping
        </ContinueText>
      </CartDropdownComponent>
      <AddressEmailModal show={showAddressModal} close={toggleAddressModal} />
    </CartDropdownBgLayout>
  );
};

export default CartDropdown;
