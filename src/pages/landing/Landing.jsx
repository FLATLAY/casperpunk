/* dep */
import { useEffect, useState, useMemo } from "react";
import { Box, Flex } from "@chakra-ui/react";
/* internal */

import { useApi } from "../../hooks/useApi/useApi";
import { getCollectionsByShopname } from "../../apis/collectionsApi";
import { getProductTitle } from "../../utils/product/product-utils";
import { useShop } from "../../hooks/useShop/useShop";
import { useToastify } from "../../context/ToastifyContext/ToastifyContext";
import {
  ShopPageWrapper,
  ProductsWrapper,
  CollectionNameText,
  FlexProducts,
} from "./Landing-style";

/*components*/
//import SearchBox from "./components/seachBox/SearchBox";
import Product from "./components/product/Product";
import Banner from "./components/banner/Banner";
import Sidebar from "./components/sidebar/Sidebar";
import TopComponent from "./TopComponent";
import Loading, { LOADING_SIZE } from "../../components/loading/Loading";

const Landing = () => {
  //hooks
  const { getApi } = useApi();
  const { shopData } = useShop();
  const { successToast } = useToastify();
  //states
  const [products, setProducts] = useState([]);
  const [itemInRow, setItemInRow] = useState(3);
  const [loading, setLoadin] = useState(false);
  const [filterText, setFilterText] = useState("");

  const getProducts = async () => {
    setLoadin(true);
    let result = await getApi(getCollectionsByShopname("testmerchproof"));
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
      <Banner />

      <ShopPageWrapper>
        <Sidebar />
        <ProductsWrapper>
          <TopComponent itemInRow={itemInRow} setItemInRow={setItemInRow} />
          {products != null ? (
            <>
             
              {loading && (
                <Flex w="100%" justifyContent="center" mb="50px">
                  <Loading size={LOADING_SIZE.LARGE} />
                </Flex>
              )}
              <FlexProducts
                gridTemplateColumns={
                  itemInRow == 3
                    ? { base: "1fr 1fr", md: "1fr 1fr 1fr" }
                    : { base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }
                }
              >
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
