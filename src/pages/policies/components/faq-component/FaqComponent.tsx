import { Box } from "@chakra-ui/react";
import { Text700, NormalText, LineComponent } from "../../PoliciesPage-style";

const FaqComponent = () => {
  return (
    <Box w="100%">
      <Text700 fontSize="32px">FAQ’s</Text700>
      <Box mb="16px" />
      <Text700 fontSize="24px">
        1. How long will it take for my order to be produced and shipped?
      </Text700>
      <Box mb="8px" />
      <NormalText>
        All orders are custom made and most will take 10-15 days to be produced
        and shipped.  In some cases, items available for sale are considered
        “pre-orders”.  In this case the product listing will include details
        about any extended production time required.
      </NormalText>
      <Box mb="16px" />
      <Text700 fontSize="24px">2. Who do I contact for order support</Text700>
      <Box mb="8px" />
      <NormalText>
        We will do our best to accommodate all customer support requests. Please
        email us at support@merchadise.com.  We strive to respond to all emails
        within 48 hours.
      </NormalText>
      <Box mb="32px" />
      <LineComponent />
      <Box mb="32px" />
    </Box>
  );
};

export default FaqComponent;
