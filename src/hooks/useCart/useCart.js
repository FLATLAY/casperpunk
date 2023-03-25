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
  selectCurrentCartTotalPrice,
} from "../../store/cart/cart.selector";

import {
  deleteSkuFromCart,
  putUpdateCart,
  postAddSkuToCart,
  getCart,
  deleteCart,
} from "../../apis/cartApi";
import { IMS_TYPES } from "../../constant/ims-types";
import { useProfile } from "../useProfile/useProfile";
import { useToastify } from "../../context/ToastifyContext/ToastifyContext";

// const client = Client.buildClient({
//   storefrontAccessToken: "37cb11f9036adb12ba968aff9b8f7ca2",
//   domain: "paxsun.myshopify.com",
// });

export function useCart() {
  const { getApi, deleteApi, patchApi, postApi } = useApi();
  const dispatch = useDispatch();
  const { errorToast, successToast } = useToastify();
  const { shopName } = useParams();
  const { walletAddress } = useProfile();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCurrentCartItems);
  const cart = useSelector(selectCurrentCart);
  const cartType = useSelector(selectCurrentCartType);
  const cartTotalPrice = useSelector(selectCurrentCartTotalPrice);
  const numberOfItems = useSelector(selectCurrentNumberOfItems);

  const updateCart = async () => {
    //  let localCart = JSON.parse(localStorage.getItem("cart"));
    //  if (!localCart) {
    //  }
    const result = await getApi(getCart());
    if (result) {
      if (Object.keys(result).length === 0) {
        dispatch(clearCurrentCart());
      } else {
        console.log("cart result ", result);
        dispatch(setCurrentCart({ ...result, type: IMS_TYPES.DROPLINKED }));
      }
    }
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

  const addItemToCart = async (skuID, quantity) => {
    let result = await postApi(
      postAddSkuToCart(skuID, quantity, walletAddress)
    );
    if (result) {
      successToast("Added successfully");
      updateCart();
    }
  };

  const isShopifyCart = () => true;

  const continueShopping = () => navigate(`/`);

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

  const discardCart = async () => {
    await deleteApi(deleteCart());
    updateCart();
    // dispatch(clearCurrentCart());
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
    cartTotalPrice,
    isShopifyCart,
    addItemToCart,
    continueShopping,
    checkout,
    discardCart,
  };
}
