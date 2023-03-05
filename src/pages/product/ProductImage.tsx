import { useMemo } from "react";
import { Image } from "@chakra-ui/react";

import { ImageWrapper } from "./ProductPage-style";
import { getProductImage } from "../../utils/product/product-utils";

const ProductImage = ({ product }: { product: any }) => {
  const productImage = useMemo(() => getProductImage(product), []);
  return (
    <ImageWrapper>
      <Image src={productImage} borderRadius="4px" />
    </ImageWrapper>
  );
};

export default ProductImage;
