import { useParams } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import { useState, useEffect , useMemo } from "react";

import { useApi } from "../../hooks/useApi/useApi";
import { getProductById } from "../../apis/productsApi";
//import { ProductPageWrapper, ProductDetialWrapper ,ImageWrapper } from "./ProductPage-style";

import Loading, { LOADING_SIZE } from "../../components/loading/Loading";
import PageContainer from "../../components/page-container/PageContainer";
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
    getProduct();
  }, []);

  return (
    <PageContainer>
      {product ? (
        <>
          <Flex flexDir={{base:'column' , lg:'row'}}>
            <ProductImage product={product} /> 

            <Box w={{base:'100%',xl:"calc(100% - 575px)"}}>
               <Detail product={product} />
            </Box>
          </Flex>
        </>
      ) : (
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Loading size={LOADING_SIZE.LARGE} />
        </Flex>
      )}
    </PageContainer>
  );
};
export default ProductPage;
