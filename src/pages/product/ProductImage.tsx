import { useMemo , useState } from "react";
import { Image } from "@chakra-ui/react";

import { ImageWrapper , ImagesFlex , ImageComponent} from "./ProductPage-style";
import { getProductImage } from "../../utils/product/product-utils";

const ProductImage = ({ product }: { product: any }) => {

  const [mainImage , setMainImage] = useState(product.shopifyData.images[0].src)
  const images = useMemo(() => product.shopifyData.images.map((item:any) => item.src), []);
  console.log('product ' ,images  )
  const clickOnImage = (selectedImage:string) => setMainImage(selectedImage)
  return (
    <ImageWrapper>
      <Image src={mainImage} borderRadius="4px" w='100%' h='auto' />
      <ImagesFlex>
        {images.map((img:string) => <ImageComponent src={img} onClick={()=>clickOnImage(img)} border={(img==mainImage)?"1px solid":'0px'} />)}
      </ImagesFlex>
    </ImageWrapper>
  );
};

export default ProductImage;
