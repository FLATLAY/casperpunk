import { Flex, Box } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import BasicButton, {
  BUTTON_TYPE,
} from "../../../components/basic-button/BasicButton";
import { useCart } from "../../../hooks/useCart/useCart";
import { getShopifyData } from "./address-utils";
import { useApi } from "../../../hooks/useApi/useApi";
import { postCreatCheckout } from "../../../apis/shopifyApi";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { useToastify } from "../../../context/ToastifyContext/ToastifyContext";
import { postAddCheckoutAddress } from "../../../apis/checkoutsApi";

const AddressPageButtons = ({ selectedAddress }: { selectedAddress: any }) => {
  //state
  const [loading, setLoading] = useState(false);
// hooks
  const navigate = useNavigate();
  const { shopName } = useParams();
  const { postApi } = useApi();
  const { cartItems, isShopifyCart } = useCart();
  const { errorToast } = useToastify();
  const profile = useSelector(selectCurrentUser);

  const navigateToShipping = async () => {
    if (!selectedAddress) {
      errorToast("Select address");
      return;
    }
    if (isShopifyCart()) {
      const shopifyData = getShopifyData(
        selectedAddress,
        cartItems,
        profile.email
      );
      setLoading(true);
      let result = await postApi(
        postCreatCheckout(shopifyData, cartItems[0].product.shopifyShopDomain)
      );
      setLoading(false);
      if (result) {
        window.open(result.checkout.web_url);
      }
    } else {
      setLoading(true);
      let result = await postApi(postAddCheckoutAddress(selectedAddress._id))
      setLoading(false);
      if(result) navigate(`/${shopName}/shipping`);
    }
  };

  const navigateToCart = () => navigate(`/${shopName}/cart`);

  return (
    <Flex
      w="100%"
      maxW="820px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w={{ base: "100px", md: "200px" }}>
        <BasicButton
          type={BUTTON_TYPE.LIGHT}
          width="100%"
          maxWidth="100%"
          click={navigateToCart}
          loading={loading}
        >
          Back
        </BasicButton>
      </Box>

      <Box w={{ base: "100px", md: "200px" }}>
        <BasicButton
          click={navigateToShipping}
          type={BUTTON_TYPE.DARK}
          width="100%"
          maxWidth="100%"
          loading={loading}
        >
          Continue
        </BasicButton>
      </Box>
    </Flex>
  );
};

export default AddressPageButtons;
