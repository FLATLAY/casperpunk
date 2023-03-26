// global dependency
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

// internall dependency
import { BuyButton } from "./Detail-style";
import { useToastify } from "../../../../context/ToastifyContext/ToastifyContext";
import { useProfile } from "../../../../hooks/useProfile/useProfile";
import { useCart } from "../../../../hooks/useCart/useCart";

// components


type Props = {
  product: any;
  selectedSku: any;
  quantity: number;
};

const ButtonsComponent = ({ product, selectedSku, quantity }: Props) => {
  //states
  const [loading, setLoading] = useState(false);

  // hooks
  const { errorToast } = useToastify();
  const { addItemToCart } = useCart();
  const { profile, openCasperWallet } = useProfile();

  // functions

  // return true if has problem
  const isNotValid = () => {
    let resutl = false;

    if (selectedSku == null) {
      errorToast("not enought quantity");
      resutl = true;
    }

    if (!profile) {
      openCasperWallet();
      resutl = true;
    }

    return resutl;
  };

  // const addToCartFunction = async () => {
  //    addItemToCart(product, selectedSku, quantity);

  //   successToast("Added successfully");
  //   return true;
  // };

  const addSkuToCart = async () => {
    if (isNotValid()) return false;
    setLoading(true);
    await addItemToCart(selectedSku._id, quantity);
    setLoading(false);
  };

  return (
    <BuyButton
      bg="white"
      color="#121314"
      onClick={addSkuToCart}
      mb={{ base: "60px", lg: "0px" }}
    >
      {loading ? <Spinner size="md" color="black" /> : "ADD TO CART"}
    </BuyButton>
  );
};

export default ButtonsComponent;
