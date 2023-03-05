/* dep */
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
/* internal */

import { useApi } from "../../hooks/useApi/useApi";
import { getCollectionsByShopname } from "../../apis/collectionsApi";
import { getProductTitle } from "../../utils/product/product-utils";
import { useShop } from "../../hooks/useShop/useShop";
import { useToastify } from "../../context/ToastifyContext/ToastifyContext";
import {
  ShopPageWrapper,
  Sidebar,
  ProductsWrapper,
  CollectionNameText,
  FlexProducts,
  TopSection,
  LeftSide,
  TopSectionText,
  TopSectionButton,
  RightsideImage,
  MobileImageSide,
} from "./Landing-style";

/*components*/
import SearchBox from "./components/seachBox/SearchBox";
import Product from "./components/product/Product";
import Loading, { LOADING_SIZE } from "../../components/loading/Loading";

/*icons*/
import topsectionImage from "../../assets/images/banner-desktop.svg";
import mobileTopsectionImage from "../../assets/images/banner-mobile.svg";

const Landing = () => {
  const { getApi } = useApi();
  let { shopName } = useParams();
  const { shopData } = useShop();
  const { successToast } = useToastify();

  const [products, setProducts] = useState([]);
  const [loading, setLoadin] = useState(false);
  const [filterText, setFilterText] = useState("");

  const getBackgroundImage = () =>
    shopData && shopData.backgroundImage
      ? shopData.backgroundImage
      : topsectionImage;

  const getBackgroundImageSecondary = () =>
    shopData && shopData.backgroundImageSecondary
      ? shopData.backgroundImageSecondary
      : mobileTopsectionImage;

  const getBackgroundText = () =>
    shopData && shopData.backgroundText ? shopData.backgroundText : "";

  const backgroundImage = useMemo(getBackgroundImage, [shopData]);
  const backgroundImageSecondary = useMemo(getBackgroundImageSecondary, [
    shopData,
  ]);
  const backgroundText = useMemo(getBackgroundText, [shopData]);

  const getProducts = async () => {
    setLoadin(true);
    let result = await getApi(getCollectionsByShopname(shopName));
    setLoadin(false);
    if (result) {
      let resultProducts = [];
      result.forEach((collection) => {
        collection.products.forEach((product) => resultProducts.push(product));
      });
      setProducts(resultProducts);
    } else setProducts(null);
  };

  const checkPayment = () => {
    let params = new URL(document.location).searchParams;
    let status = params.get("redirect_status"); // null or string
    if (status == "succeeded") successToast("Payment successful");
  };

  useEffect(() => {
    getProducts();
    checkPayment();
  }, []);

  const ProductsComponent = () =>
    products
      .filter((product) => getProductTitle(product).includes(filterText))
      .map((product) => <Product product={product} />);

  if (!shopData) return <></>;

  return (
    <>
      <TopSection bg={shopData.primaryColor}>
        <LeftSide>
          <TopSectionText
            dangerouslySetInnerHTML={{ __html: backgroundText }}
            color={shopData.secondryColor}
          ></TopSectionText>
          <Box mb="32px"></Box>
          <TopSectionButton>SEE THIS PRODUCT</TopSectionButton>
        </LeftSide>
        <RightsideImage src={backgroundImage} />
        <MobileImageSide src={backgroundImageSecondary} />
      </TopSection>
      <ShopPageWrapper>
        <Sidebar>
          <SearchBox value={filterText} setValue={setFilterText} />
        </Sidebar>
        <ProductsWrapper>
          {products != null ? (
            <>
              <CollectionNameText>Some nice title</CollectionNameText>
              {loading && (
                <Flex w="100%" justifyContent="center" mb="50px">
                  <Loading size={LOADING_SIZE.LARGE} />
                </Flex>
              )}
              <FlexProducts>
                {products.length > 0 && <ProductsComponent />}
              </FlexProducts>
            </>
          ) : (
            <Flex w="100%" justifyContent="center">
              <CollectionNameText>Shop not found</CollectionNameText>
            </Flex>
          )}
        </ProductsWrapper>
      </ShopPageWrapper>
     
    </>
  );
};

export default Landing;
