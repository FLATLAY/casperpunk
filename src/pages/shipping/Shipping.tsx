import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { useApi } from "../../hooks/useApi/useApi";
import { getCartShippingRates } from "../../apis/checkoutsApi";

import PageContainer from "../../components/page-container/PageContainer";
import Loading, { LOADING_SIZE } from "../../components/loading/Loading";

const Shipping = () => {
  const [shippings, setShippings] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { getApi } = useApi();

  const getShippings = async () => {
    const result = await getApi(getCartShippingRates());
    if (result) setShippings(result.shippingPrice);
  };

  useEffect(() => {
    getShippings();
  }, []);

  if (!shippings)
    return (
      <PageContainer>
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Loading size={LOADING_SIZE.LARGE} />
        </Flex>
      </PageContainer>
    );

  return (
    <PageContainer>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        w="100%"
      ></Flex>
    </PageContainer>
  );
};

export default Shipping;
