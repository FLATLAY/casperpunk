import { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import {
  ProductComponent,
  ProductTitle,
  ProductPrice,
  ProductImage,
  ImageWrapper,
} from "./Product-style";
//import { IMS_TYPES } from "../../../../../../constant/ims-types";
import {
  getProductImage,
  getProductTitle,
  getProductPrice,
} from "./product-utils";
import { getProductColors } from "../../../../utils/product/product-utils";

import ColorComponent from "./ColorComponent";

const Product = ({ product }: { product: any }) => {

  const navigate = useNavigate();

  const pricePrice = useMemo(() => getProductPrice(product), []);
  const productImage = useMemo(() => getProductImage(product), []);
  const productTitle = useMemo(() => getProductTitle(product), []);

  const navigateToProductPage = () => navigate(`product/${product._id}`);

  return (
    <ProductComponent onClick={navigateToProductPage}>
      <ImageWrapper>
        <ProductImage alt="product" src={productImage} />
      </ImageWrapper>
      <Box mb="10px" />
      <Box h="48px" mb='4px'>
        <ProductTitle>{productTitle}</ProductTitle>
        <ProductPrice>{pricePrice} USD</ProductPrice>
      </Box>
      {getProductColors(product) && (
        <ColorComponent colors={getProductColors(product)} />
      )}
    </ProductComponent>
  );
};

export default Product;
