import { useParams } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";

import { useApi } from "../../hooks/useApi/useApi";
import { getProductById } from "../../apis/productsApi";
import { LineComponent } from "./ProductPage-style";
//import { ProductPageWrapper, ProductDetialWrapper ,ImageWrapper } from "./ProductPage-style";

import Loading, { LOADING_SIZE } from "../../components/loading/Loading";
import PageContainer from "../../components/page-container/PageContainer";
import Maylike from "./component/may-like/Maylike";
import ProductImage from "./ProductImage";
import Detail from "./component/detail/Detail";

const ProductPage = () => {
  const { productId } = useParams();
  const { getApi } = useApi();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    let result = await getApi(getProductById(productId));
    if (result) setProduct(result);
  };

  useEffect(() => {
    setProduct(null);
    getProduct();
  }, [productId]);

  if (!product)
    return (
      <PageContainer>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Loading size={LOADING_SIZE.LARGE} />
        </Flex>
      </PageContainer>
    );

  return (
    <PageContainer>
      <Box w="100%">
        <Flex flexDir={{ base: "column", lg: "row" }}>
          <ProductImage product={product} />
          <Box w={{ base: "100%", xl: "calc(100% - 575px)" }}>
            <Detail product={product} />
          </Box>
        </Flex>
        <LineComponent />
        {/* <Maylike /> */}
      </Box>
    </PageContainer>
  );
};
export default ProductPage;
