import { Flex } from "@chakra-ui/react";

import { PageTitle } from "./PoliciesPage-style";

import SideComponent from "./components/side-component/SideComponent";
import PageContainer from "../../components/page-container/PageContainer";

const PoliciesPage = () => {
  return (
    <PageContainer>
      <PageTitle>Store Policies and FAQs</PageTitle>
      <Flex w="100px" pt="32px" gap="32px" justifyContent="space-between">
        <SideComponent />
      </Flex>
    </PageContainer>
  );
};

export default PoliciesPage;
