import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApi } from "../../../../hooks/useApi/useApi";
import { useCart } from "../../../../hooks/useCart/useCart";
import { postAddShippingRate } from "../../../../apis/checkoutsApi";
import { useToastify } from "../../../../context/ToastifyContext/ToastifyContext";

import BasicButton, {
  BUTTON_TYPE,
} from "../../../../components/basic-button/BasicButton";

const ButtonsComponent = ({
  selectedShipping,
}: {
  selectedShipping: string;
}) => {

  const [loading, setLoading] = useState(false);

  const { postApi } = useApi()
  const { updateCart } =useCart()
  const navigate = useNavigate();
  const { errorToast } = useToastify()

  const checkout = async() => {
    if(selectedShipping === null){
      errorToast("Shipping")
      return
    }
    setLoading(true)
    const reslut =  await postApi(postAddShippingRate(selectedShipping))
    if(reslut){
        await updateCart()
        navigate('/checkout')
    }
    setLoading(false)
  }

  const backToAddress = () => navigate('/address')

  return (
    <Flex
      w="100%"
      maxW="600px"
      alignItems="center"
      justifyContent="space-between"
      pt="44px"
    >
      <Box w={{ base: "100px", md: "200px" }}>
        <BasicButton
          type={BUTTON_TYPE.LIGHT}
          width="100%"
          maxWidth="100%"
          click={backToAddress}
          loading={loading}
        >
          Back
        </BasicButton>
      </Box>

      <Box w={{ base: "100px", md: "200px" }}>
        <BasicButton
          click={checkout}
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
export default ButtonsComponent;
