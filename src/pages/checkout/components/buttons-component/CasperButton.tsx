import { Box, Button } from "@chakra-ui/react";

import { useApi } from "../../../../hooks/useApi/useApi";
import { postCreateCasperCheckout } from "../../../../apis/checkoutsApi";

const CasperButton = () => {
  const { postApi } = useApi();

  const clickOnButton = async () => {
    const result = await postApi(postCreateCasperCheckout());
    console.log("result ", result);
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
