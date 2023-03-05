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
    let result = await getApi(getCart());
    if (result && Object.keys(result).length > 0){
      dispatch(setCurrentCart({ ...result, type: IMS_TYPES.DROPLINKED }));
    }else{
      dispatch(setCurrentCart({ items:[], type: IMS_TYPES.DROPLINKED }));
    }
    
    //  }
  };

  const deleteItemFromCart = async (skuId) => {
    if (cartType == IMS_TYPES.DROPLINKED) {
      let result = await deleteApi(deleteSkuFromCart(skuId));
      if (result) updateCart();
    } else {
      let newCartItems = cartItems.filter((item) => item.variant.id != skuId);
      dispatch(
        setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY })
      );
    }
  };

  const increaseItemQuantity = async (item) => {
    if (cartType == IMS_TYPES.DROPLINKED) {
      let result = await patchApi(
        putUpdateCart(item.skuID._id, ++item.quantity)
      );
      if (result) updateCart();
    } else {
      let newCartItems = cartItems.map((currentItem) =>
        currentItem.variant.id == item.variant.id
          ? { ...currentItem, quantity: ++currentItem.quantity }
          : { ...currentItem }
      );
      dispatch(
        setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY })
      );
    }
  };

  const decreaseItemQuantity = async (item) => {
    if (cartType == IMS_TYPES.DROPLINKED) {
      let result;
      if (item.quantity > 1)
        result = await patchApi(putUpdateCart(item.skuID._id, --item.quantity));
      else result = await deleteItemFromCart(item.skuID._id);
    } else {
      let newCartItems = cartItems.map((currentItem) =>
        currentItem.variant.id == item.variant.id
          ? { ...currentItem, quantity: --currentItem.quantity }
          : { ...currentItem }
      );
      newCartItems = newCartItems.filter((element) => element.quantity > 0);
      dispatch(
        setCurrentCart({ items: newCartItems, type: IMS_TYPES.SHOPIFY })
      );
    }
  };

  const addDroplinkedItemToCart = async (skuId, quantity, wallet) => {
    console.log('wallet address : ' ,wallet)
    const result = await postApi(postAddSkuToCart(skuId, quantity, wallet));
    console.log('function result : ' ,result)
    if (result) {
      updateCart();
      return true;
    } else {
      return false;
    }
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

    if (cartType == IMS_TYPES.DROPLINKED) {
      if (cartItems.length > 0) deleteApi(deleteCart());
      pushFirstProduct();
    } else {
      if (cartItems.length == 0) {
        pushFirstProduct();
      } else {
        if (
          cartItems[0].product.shopifyShopDomain != product.shopifyShopDomain
        ) {
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
    }

    dispatch(
      setCurrentCart({
        shopDomain: product.shopifyShopDomain,
        items: itemsArray,
        type: IMS_TYPES.SHOPIFY,
      })
    );
  };

  const isShopifyCart = () => cartType == IMS_TYPES.SHOPIFY;

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
    addDroplinkedItemToCart,
    continueShopping,
    checkout,
    discardCart,
  };
}
