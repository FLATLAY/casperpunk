import { Box, Button } from "@chakra-ui/react";

import { useApi } from "../../../../hooks/useApi/useApi";
import { useProfile } from "../../../../hooks/useProfile/useProfile";
import { postCreateCasperCheckout } from "../../../../apis/checkoutsApi";
import { customerPayment1 } from "./casper-utils";

const CasperButton = () => {
  const { postApi } = useApi();
  const { walletAddress } = useProfile();

  console.log("walletAddress ", walletAddress);

  const clickOnButton = async () => {
    const result = await postApi(postCreateCasperCheckout());
    console.log("checkout result ", result);
    if (result) {
      console.log("sender_publicKey ", "01db4b7d69aa6db30da21b50647dde6d05992eb6dd9380b83533dbe81a74ab9ba3");
      console.log(
        "reciver_publicKey ",
        "02025327c2eba8b6feedf57b04e92ec6fbeea6ab3e1ae0c19545a7bd7625e7907e3b"
      );
      console.log("reciver_publicKey ", result.totalPrice);
      const casperResult = await customerPayment1(
        "01db4b7d69aa6db30da21b50647dde6d05992eb6dd9380b83533dbe81a74ab9ba3",
        "02025327c2eba8b6feedf57b04e92ec6fbeea6ab3e1ae0c19545a7bd7625e7907e3b",
        result.totalPrice
      );
      console.log("casper result ", casperResult);
    }
  };
  return (
    <Button
      onClick={clickOnButton}
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
    >
      Pay Casper
    </Button>
  );
};

export default CasperButton;
