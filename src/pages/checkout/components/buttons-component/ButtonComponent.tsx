import { Flex, Button } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

import { useApi } from "../../../../hooks/useApi/useApi";
import { postCreateCheckout } from "../../../../apis/checkoutsApi";

import CheckoutForm from "./CheckoutForm";
import CasperButton from "./CasperButton";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const ButtonComponent = () => {
  const [clientSecret, setClientSecret] = useState(null);

  const { postApi } = useApi();

  const clickOnPay = async () => {
    const result = await postApi(postCreateCheckout());
    if (result) setClientSecret(result.client_secret);
  };

  return (
    <Flex w="100%" alignItems="center" justifyContent="end" gap='40px' >
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <CheckoutForm />
        </Elements>
      ) : (
        <>
          <Button
            //  display="flex"
            //  justifyContent="center"
            //  alignItems="center"
            padding="16px 60px"
            gap="8px"
            width="77px"
            height="55px"
            background="#27262B"
            borderRadius="4px"
            color="white"
            onClick={clickOnPay}
          >
            Fiat payment
          </Button>
          <CasperButton />
        </>
      )}
    </Flex>
  );
};

export default ButtonComponent;
