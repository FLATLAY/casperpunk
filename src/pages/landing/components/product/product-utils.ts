import { IMS_TYPES } from "../../../../../../constant/ims-types";


export const getProductImage = (product:any) =>
product.type == IMS_TYPES.DROPLINKED
  ? product.media[0].url
  : product.shopifyData.images.length > 0
  ? product.shopifyData.images[0].src
  : "";

export const getProductTitle = (product:any) =>
product.type == IMS_TYPES.DROPLINKED
  ? product.title
  : product.shopifyData.title;

export const getProductPrice = (product:any) =>
product.type == IMS_TYPES.DROPLINKED
  ? product.skus[0].price.toFixed(2)
  : product.shopifyData.variants[0].price;