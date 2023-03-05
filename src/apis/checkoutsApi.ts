export const postCreateCheckout = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `checkout`,
    //body: {},
    token: token,
  };
  return { ...apiObj };
};

export const postAddCheckoutAddress = (addressBookId: string) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `checkout/add-address`,
    body: {
      addressBookID: addressBookId,
    },
    token: token,
  };
  return { ...apiObj };
};

export const getCartShippingRates = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `checkout/shippingrate`,
    token: token,
  };
  return { ...apiObj };
};

export const postAddShippingRate = (rateId: string) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `checkout/shippingrate`,
    body: { rateID: rateId },
    token: token,
  };
  return { ...apiObj };
};
