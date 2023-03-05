import { IMS_TYPES } from "../constant/ims-types";

export const getProductImage = (product: any) =>
  product.type == IMS_TYPES.DROPLINKED
    ? product.media[0].url
    : product.shopifyData.images.length > 0
    ? product.shopifyData.images[0].src
    : "";

export const getProductTitle = (product: any) =>
  product.type == IMS_TYPES.DROPLINKED
    ? product.title
    : product.shopifyData.title;

export const getProductColors = (product: any) => {
  if (product.type == IMS_TYPES.SHOPIFY) {
    let findOption = product.shopifyData.options.find(
      (option: any) => option.name == "Color"
    );
    return findOption ? findOption.values : null;
  } else {
    return null;
  }
};
