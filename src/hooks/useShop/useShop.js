import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useApi } from "../useApi/useApi";
import { getShopDataPublic } from "../../apis/shopApi";
import { setCurrentShop } from "../../store/shop/shop.action";
import { selectCurrentShop } from "../../store/shop/shop.selector";

export function useShop() {
  const dispatch = useDispatch();
  const { getApi } = useApi();
  const { shopName } = useParams();

  const shopData = useSelector(selectCurrentShop);

  const updateShopData = async () => {
    if (shopName) {
      let result = await getApi(getShopDataPublic(shopName));
      if (result) dispatch(setCurrentShop(result));
    }
  };

  return {
    shopData,
    updateShopData,
  };
}
