import { Box } from "@chakra-ui/react";
import { Text700, NormalText ,LineComponent } from "../../PoliciesPage-style";

const RefundPolicyComponent = () => {
  return (
    <Box w="100%">
      <Text700 fontSize="32px" id="policies-refund-section" >Refund Policy</Text700>
      <Box mb="24px" />
      <NormalText>
        All items are made to order and are non-refundable. Please check the
        size charts carefully as exchanges cannot be made for incorrect size
        orders.   Please inspect your order upon reception and contact us
        immediately if the item is defective, damaged or if you receive the
        wrong item, so that we can evaluate the issue and make it right. Returns
        will only be accepted for defective, damaged or incorrect items.  You
        can contact us for any return question at support@merchadise.com.
      </NormalText>
      <Box mb="24px" />
      <Text700 fontSize="24px">
        European Union 14 day cooling off period
      </Text700>
      <Box mb="8px" />
      <NormalText>
        Notwithstanding the above, if the merchandise is being shipped into the
        European Union, you have the right to cancel or return your order within
        14 days, for any reason and without a justification. Your item must be
        in the same condition that you received it, unworn or unused, with tags,
        and in its original packaging. You’ll also need the receipt or proof of
        purchase.
      </NormalText>
      <Box mb="24px" />
      <Text700 fontSize="24px">Approved Refunds</Text700>
      <NormalText>
        We will notify you once we’ve received and inspected your return, and
        let you know if the refund was approved or not. If approved, you’ll be
        automatically refunded on your original payment method within 10
        business days. Please remember it can take some time for your bank or
        credit card company to process and post the refund too. If more than 15
        business days have passed since we’ve approved your return, please
        contact us at support@merchadise.com.
      </NormalText>
      <Box mb="32px" />
      <LineComponent />
      <Box mb="32px" />
    </Box>
  );
};

export default RefundPolicyComponent;
