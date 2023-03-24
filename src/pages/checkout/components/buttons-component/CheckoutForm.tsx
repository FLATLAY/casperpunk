import { Box, Button } from "@chakra-ui/react";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://casper.droplinked.com/",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Box mb='32px' />
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
        type="submit"
        disabled={!stripe}
      >
        Pay
      </Button>
    </form>
  );
};

export default CheckoutForm;
