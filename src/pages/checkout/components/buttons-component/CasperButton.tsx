import { useState } from "react";
import { Spinner, Button } from "@chakra-ui/react";

import { useApi } from "../../../../hooks/useApi/useApi";
import { useProfile } from "../../../../hooks/useProfile/useProfile";
import { postCreateCasperCheckout } from "../../../../apis/checkoutsApi";
import { customerPayment1 } from "./casper-utils";

const CasperButton = () => {

  const[loading, setLoading]  = useState(false)
  const { postApi } = useApi();
  const { profile } = useProfile();

  console.log("publicKey ", profile.publicKey);

  const clickOnButton = async () => {
    setLoading(true)
    const result = await postApi(postCreateCasperCheckout());
    console.log("checkout result ", result);
    if (result) {
      console.log("sender_publicKey ", profile.publicKey);
      console.log(
        "reciver_publicKey ",
        "011679fd79847ec3a5939953f2bd1cc0dd89d90b1c748bfbbdeaae99c265b3a91d"
      );
      console.log("reciver_publicKey ", result.totalPrice);
      const casperResult = await customerPayment1(
        profile.publicKey,
        "011679fd79847ec3a5939953f2bd1cc0dd89d90b1c748bfbbdeaae99c265b3a91d",
        result.totalPrice
      );
      setLoading(false)
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
    >{loading?<Spinner size='sm' color='white' />:"Pay Casper"}
      
    </Button>
  );
};

export default CasperButton;
