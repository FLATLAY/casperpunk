import { Flex, Box } from "@chakra-ui/react";

import { PageTitle } from "./PoliciesPage-style";

import SideComponent from "./components/side-component/SideComponent";
import RefundPolicyComponent from "./components/refund-policy-component/RefundPolicyComponent";
import FaqComponent from "./components/faq-component/FaqComponent";
import TermsOfServiseComponent from "./components/terms-of-service-component/TermsOfServiseComponent";
import PageContainer from "../../components/page-container/PageContainer";

const PoliciesPage = () => {
  return (
    <PageContainer>
      <PageTitle>Store Policies and FAQs</PageTitle>
      <Flex w="100px" minW='100%' pt="32px" gap="32px" justifyContent="space-between">
        <SideComponent />
        <Box w="100%" >
          <RefundPolicyComponent />
          <FaqComponent />
          <TermsOfServiseComponent />
        </Box>
      </Flex>
    </PageContainer>
  );
};

export default PoliciesPage;
