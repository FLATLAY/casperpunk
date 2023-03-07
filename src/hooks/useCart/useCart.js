import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// import Client from "shopify-buy";

import { useApi } from "../useApi/useApi";
import { setCurrentCart, clearCurrentCart } from "../../store/cart/cart.action";
import {
  selectCurrentCartItems,
  selectCurrentCartType,
  selectCurrentNumberOfItems,
  selectCurrentCart,
} from "../../store/cart/cart.selector";

import {
  deleteSkuFromCart,
  putUpdateCart,
  postAddSkuToCart,
  getCart,
  deleteCart,
} from "../../apis/cartApi";
import { IMS_TYPES } from "../../constant/ims-types";

// const client = Client.buildClient({
//   storefrontAccessToken: "37cb11f9036adb12ba968aff9b8f7ca2",
//   domain: "paxsun.myshopify.com",
// });

export function useCart() {
  const { getApi, deleteApi, patchApi, postApi } = useApi();
  const dispatch = useDispatch();
  const { shopName } = useParams();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCurrentCartItems);
  const cart = useSelector(selectCurrentCart);
  const cartType = useSelector(selectCurrentCartType);
  const numberOfItems = useSelector(selectCurrentNumberOfItems);

  const updateCart = async () => {
    //  let localCart = JSON.parse(localStorage.getItem("cart"));
    //  if (!localCart) {
    //  }
  };

  const deleteItemFromCart = async (skuId) => {
    let newCartItems = cartItems.filter((item) => item.variant.id != skuId);
    dispatch(setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY }));
  };

  const increaseItemQuantity = async (item) => {
    let newCartItems = cartItems.map((currentItem) =>
      currentItem.variant.id == item.variant.id
        ? { ...currentItem, quantity: ++currentItem.quantity }
        : { ...currentItem }
    );
    dispatch(setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY }));
  };

  const decreaseItemQuantity = async (item) => {
    let newCartItems = cartItems.map((currentItem) =>
      currentItem.variant.id == item.variant.id
        ? { ...currentItem, quantity: --currentItem.quantity }
        : { ...currentItem }
    );
    newCartItems = newCartItems.filter((element) => element.quantity > 0);
    dispatch(setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY }));
  };

  const addShopifyItemToCart = async (product, variant, quantity) => {
    let itemsArray = [];

    const pushFirstProduct = () => {
      itemsArray.push({
        product: product,
        variant: variant,
        quantity: quantity,
      });
    };

    if (cartItems.length == 0) {
      pushFirstProduct();
    } else {
      if (cartItems[0].product.shopifyShopDomain != product.shopifyShopDomain) {
        pushFirstProduct();
      } else {
        let newCartItems = cartItems.map((item) =>
          item.variant.id == variant.id
            ? { ...item, quantity: quantity }
            : { ...item }
        );

        if (!cartItems.find((item) => item.variant.id == variant.id)) {
          newCartItems.push({
            product: product,
            variant: variant,
            quantity: quantity,
          });
        }

        itemsArray = newCartItems;
      }
    }

    dispatch(
      setCurrentCart({
        shopDomain: product.shopifyShopDomain,
        items: itemsArray,
        type: IMS_TYPES.SHOPIFY,
      })
    );
  };

  const isShopifyCart = () => true

  const continueShopping = () => navigate(`/${shopName}`);

  const checkout = async () => {
    // if (cartType == IMS_TYPES.SHOPIFY) {
    //   //   setLoading(true);
    //   await client.checkout
    //     .create()
    //     .then((res) => {
    //       // setCheckout(res);
    //       const checkoutId = res.id;
    //       const lineItemsToAdd = [];
    //       cartItems.forEach((item) => {
    //         lineItemsToAdd.push({
    //           variantId: `gid://shopify/ProductVariant/${item.variant.id}`,
    //           quantity: item.quantity,
    //         });
    //       });
    //       // Add an item to the checkout
    //       client.checkout
    //         .addLineItems(checkoutId, lineItemsToAdd)
    //         .then((check) => {
    //           window.open(check.webUrl);
    //           // setLoading(false);
    //         })
    //         .catch((error) => console.log("product not added"));
    //     })
    //     .catch((error) => {});
    // }
  };

  const discardCart = () => {
    dispatch(clearCurrentCart());
  };

  return {
    updateCart,
    deleteItemFromCart,
    decreaseItemQuantity,
    increaseItemQuantity,
    numberOfItems,
    cartItems,
    cartType,
    cart,
    isShopifyCart,
    addShopifyItemToCart,
    continueShopping,
    checkout,
    discardCart,
  };
}
