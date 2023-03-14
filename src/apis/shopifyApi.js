export const postCreatCheckout = (chekcout, shopDomain) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `shopify/checkout`,
    token: token,
    body: {
      shopDomain: shopDomain,
      checkoutItem: chekcout,
    },
  };
  return { ...apiObj };
};

export const postGetShippingRates = (shopDomain, checkoutID) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `shopify/checkout/shipping-rate`,
    token: token,
    body: {
      shopDomain: shopDomain,
      checkoutID: checkoutID,
    },
  };
  return { ...apiObj };
};

export const putUpdateShopifyCheckout = (
  shopDomain,
  shippingHandle,
  checkoutID
) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `shopify/checkout`,
    token: token,
    body: {
      shopDomain: shopDomain,
      checkoutItem: {
        checkout: {
          token: checkoutID,
          shipping_line: {
            handle: shippingHandle,
          },
        },
      },
      checkoutID: checkoutID,
    },
  };
  return { ...apiObj };
};


export const postCreatPublicCheckout = (chekcout, shopDomain) => {
  let apiObj = {
    url: `shopify/public/checkout/no-reg`,
    body: {
      shopDomain: shopDomain,
      checkoutItem: chekcout,
    },
  };
  return { ...apiObj };
};