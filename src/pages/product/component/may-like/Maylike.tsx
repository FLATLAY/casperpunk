import { Box, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useApi } from "../../../../hooks/useApi/useApi";
import { getCollectionsByShopname } from "../../../../apis/collectionsApi";

import Product from "../../../landing/components/product/Product";

const Maylike = () => {
  const [products, setProducts] = useState<null | []>(null);

  const { getApi } = useApi();

  const getProducts = async () => {
    let result = await getApi(getCollectionsByShopname("testmerchproof"));
    if (result) {
      let resultProducts: any = [];
      result.forEach((collection: any , i:number) => {
            collection.products.forEach((product: any) =>
            resultProducts.push(product)
          );
      });
      setProducts(resultProducts);
    } else setProducts(null);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log("products ", products);

  if(products == null) return <></>

  return (
    <Box w="100%">
      <Text fontSize="24px" fontWeight="700" color="#121314" mb="64px">
        You may also like
      </Text>
      <Box
        display="grid"
        w="100%"
        gap="25px"
        gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
    gridAutoRows='1'
      >
        {products.filter((item:any,i:number)=>{ return i<3 }).map((item:any) =>  <Product product={item} />)}
      </Box>
    </Box>
  );
};

export default Maylike;
