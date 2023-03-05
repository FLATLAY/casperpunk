import { ApiServiceType } from "../types/api-types/api-service-type";

export const getShopDataPublic = (shopName: string): ApiServiceType => {
  let apiObj = {
    url: `shop/public/${shopName}`,
  };
  return { ...apiObj };
};
