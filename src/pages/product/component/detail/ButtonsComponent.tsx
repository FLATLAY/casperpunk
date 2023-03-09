// global dependency
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

// internall dependency
import { BuyButton } from "./Detail-style";
import { useToastify } from "../../../../context/ToastifyContext/ToastifyContext";
import { useProfile } from "../../../../hooks/useProfile/useProfile";
import { useCart } from "../../../../hooks/useCart/useCart";

// components
import WalletModal from "../../../../modals/wallet-modal/WalletModal";
import EmailModal from "../../../../modals/email-modal/EmailModal";

type Props = {
  product: any;
  selectedSku: any;
  quantity: number;
};

const ButtonsComponent = ({ product, selectedSku, quantity }: Props) => {
  //states
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // hooks
  const { errorToast, successToast } = useToastify();
  // const { postApi } = useApi();
  const { addShopifyItemToCart } = useCart();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { shopName } = useParams();

  // functions
  const toggleModal = () => setShowWalletModal((p) => !p);
  const toggleEmailModal = () => setShowEmailModal((p) => !p);

  // return true if has problem
  const isNotValid = () => {
    let resutl = false;

    if (selectedSku == null) {
      errorToast("not enought quantity");
      resutl = true;
    }

    if (profile && !profile.email) {
      toggleEmailModal();
      resutl = true;
    }

    return resutl;
  };

  const addToCartFunction = async () => {
    addShopifyItemToCart(product, selectedSku, quantity);
    successToast("Added succeessfully");

    return true;
  };

  const addSkuToCart = async () => {
    if (isNotValid()) return false;

    return addToCartFunction();
  };

  const buy = async () => {
    let resutl = await addSkuToCart();
    if (resutl) navigate(`/cart`);
  };

  const addToCart = () => addSkuToCart();

  return (
    <>
      <BuyButton bg="#121314" color="white" onClick={buy}>
        BUY
      </BuyButton>
      <Box mb={{ base: "18px", lg: "32px" }}></Box>
      <BuyButton bg="white" color="#121314" onClick={addToCart} mb={{base:'60px' , lg:'0px'}}>
        ADD TO CART
      </BuyButton>
      {showWalletModal && (
        <WalletModal show={showWalletModal} close={toggleModal} />
      )}
      <EmailModal show={showEmailModal} close={toggleEmailModal} />
    </>
  );
};

export default ButtonsComponent;
