import { ApiServiceType } from "../types/api-types/api-service-type";

export const getCollectionsByShopname = (
  shopName: string
): ApiServiceType => {
  let apiObj = {
    url: `collection/public/${shopName}`,
  };
  return { ...apiObj };
};
