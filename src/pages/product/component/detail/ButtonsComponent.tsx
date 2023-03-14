// global dependency
import { useState } from "react";

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
  const { addShopifyItemToCart } = useCart();
  const { profile } = useProfile();

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
    successToast("Added successfully");
    return true;
  };

  const addSkuToCart = async () => {
    if (isNotValid()) return false;

    return addToCartFunction();
  };


  return (
    <>
      <BuyButton bg="white" color="#121314" onClick={addSkuToCart} mb={{base:'60px' , lg:'0px'}}>
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
