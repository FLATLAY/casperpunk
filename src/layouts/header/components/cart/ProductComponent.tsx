import { useMemo } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

// import {
//   getProductImage,
//   getProductTitle,
// } from "../../../../../../utils/product-utils";
// import { IMS_TYPES } from "../../../../../../constant/ims-types";
const ProductComponent = ({ item }: any) => {

 // const productTitle = useMemo(() => getProductTitle(item.product), [item]);

 // const productImage = useMemo(() => getProductImage(item.product), [item]);

  return (
    <Flex w="100%" mb="8px">
      {/* <Image src={productImage} w="50%" h="auto" minH="160px" /> */}
      <Box h="100%" pt="37px" w="50%" pl="8px">
        <Text
          fontSize="16px"
          fontWeight="600"
          color="#121314"
          fontFamily="Manrope"
          mb="8px"
        >
          {/* <b> {productTitle}</b> */}
        </Text>
        {/* {item.product.type == IMS_TYPES.DROPLINKED && (
          <>
            {item.skuID.options.map((option: any, i: number) => {
              return (
                <VariantComponent
                  name={
                    option.variantID == "62a989ab1f2c2bbc5b1e7153"
                      ? "Color"
                      : "Size"
                  }
                  value={option.value}
                />
              );
            })}
          </>
        )} */}

        {/* {item.product.type == IMS_TYPES.SHOPIFY && (
          <>
            {item.variant.option_values.map((option: any, i: number) => {
              return (
                <VariantComponent
                  key={i}
                  name={option.name}
                  value={option.value}
                />
              );
            })}
          </>
        )} */}
      </Box>
    </Flex>
  );
};

const VariantComponent = ({ name, value }: { name: string; value: any }) => {
  return (
    <Flex>
      <Text
        fontSize="14px"
        fontWeight="600"
        color="#121314"
        fontFamily="Manrope"
        mb="8px"
      >
        <b>{name}</b>
      </Text>
      <Text
        fontSize="14px"
        fontWeight="400"
        color="#121314"
        fontFamily="Manrope"
        mb="8px"
      >
        {value}
      </Text>
    </Flex>
  );
};

export default ProductComponent;
