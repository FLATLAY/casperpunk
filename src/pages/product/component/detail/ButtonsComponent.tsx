// global dependency
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

// internall dependency
import { BuyButton } from "./Detail-style";
import { useToastify } from "../../../../context/ToastifyContext/ToastifyContext";
import { IMS_TYPES } from "../../../../constant/ims-types";
import { useProfile } from "../../../../hooks/useProfile/useProfile";
import { useCart } from "../../../../hooks/useCart/useCart";
import { useApi } from "../../../../hooks/useApi/useApi";
import { hasRule } from "../../../../utils/rules/rules-utils";

// components
import WalletModal from "../../../../modal/wallet-modal/WalletModal";
import EmailModal from "../../../../modal/email-modal/EmailModal";

type Props = {
  product: any;
  selectedSku: any;
  quantity: number;
};

const ButtonsComponent = ({ product, selectedSku, quantity }: Props) => {
  //states
  const [loading, setLoading] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // hooks
  const { errorToast, successToast } = useToastify();
  // const { postApi } = useApi();
  const { addShopifyItemToCart, addDroplinkedItemToCart } = useCart();
  const navigate = useNavigate();
  const { profile, stackAddress, walletAddress } = useProfile();
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

    if (product.type == IMS_TYPES.DROPLINKED && selectedSku.quantity < 1) {
      errorToast("not enought quantity");
      resutl = true;
    }

    if (product.type == IMS_TYPES.DROPLINKED && !profile) {
      toggleModal();
      resutl = true;
    }

    if (profile && !profile.email) {
      toggleEmailModal();
      resutl = true;
    }

    return resutl;
  };

  const addToCartFunction = async () => {
    let result = true;
    setLoading(true);
    if (product.type == IMS_TYPES.DROPLINKED) {
      result = await addDroplinkedItemToCart(
        selectedSku._id,
        quantity,
        hasRule(product.ruleSet) ? walletAddress : ""
      );
      console.log("checkout result ", result);
      if (result) successToast("Added succeessfully");
    } else {
      addShopifyItemToCart(product, selectedSku, quantity);
      successToast("Added succeessfully");
    }
    setLoading(false);
    return result ? true : false;
  };

  const addSkuToCart = async () => {
    if (isNotValid()) return false;

    // if (productHasRule) {
    //   let result = await gatedPassesRules(stackAddress, product.ruleSet);
    //   if (result) addToCartFunction();
    //   else errorToast("Gated error");
    // } else {
    //   return addToCartFunction();
    // }
    return addToCartFunction();
  };

  const buy = async () => {
    let resutl = await addSkuToCart();
    if (resutl) navigate(`/${shopName}/cart`);
  };

  const addToCart = () => addSkuToCart();

  return (
    <>
      <BuyButton bg="#121314" color="white" onClick={buy}>
        {loading ? (
          <Spinner size="sm" thickness="3px" color="#121314" />
        ) : (
          "BUY"
        )}
      </BuyButton>
      <Box mb={{ base: "18px", lg: "32px" }}></Box>
      <BuyButton bg="white" color="#121314" onClick={addToCart}>
        {loading ? (
          <Spinner size="sm" thickness="3px" color="#121314" />
        ) : (
          "ADD TO CART"
        )}
      </BuyButton>
      {showWalletModal && (
        <WalletModal show={showWalletModal} close={toggleModal} />
      )}
      <EmailModal show={showEmailModal} close={toggleEmailModal} />
    </>
  );
};

export default ButtonsComponent;
