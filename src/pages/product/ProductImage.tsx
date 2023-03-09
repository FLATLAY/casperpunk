import { useMemo , useState } from "react";
import { Image , Box ,Text } from "@chakra-ui/react";

import { ImageWrapper , ImagesFlex , ImageComponent} from "./ProductPage-style";
//import { getProductImage } from "../../utils/product/product-utils";

const ProductImage = ({ product }: { product: any }) => {

  const [mainImage , setMainImage] = useState(product.shopifyData.images[0].src)
  const images = useMemo(() => product.shopifyData.images.map((item:any) => item.src), []);
  //body_html
  const clickOnImage = (selectedImage:string) => setMainImage(selectedImage)
  return (
    <ImageWrapper >
      <Image src={mainImage} borderRadius="4px" w='100%' h='auto' />
      <ImagesFlex>
        {images.map((img:string) => <ImageComponent src={img} onClick={()=>clickOnImage(img)} border={(img==mainImage)?"1px solid":'0px'} />)}
      </ImagesFlex>
      <Box w='100%' maxW='100%' p='20px 10px' display={{ base: "none", lg: "block" }} >
        <Text color='#121314' fontSize='16px' fontWeight='400'  maxW='100%'   dangerouslySetInnerHTML={{ __html: product.shopifyData.body_html }}></Text>
      </Box>
    </ImageWrapper>
  );
};

export default ProductImage;
