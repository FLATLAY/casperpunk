

import { ApiServiceType } from "../types/api-types/api-service-type";

export const getProductById = (
  productId: ApiServiceType
): ApiServiceType => {
  let apiObj = {
    url: `product/public/${productId}`,
  };
  return { ...apiObj };
};
