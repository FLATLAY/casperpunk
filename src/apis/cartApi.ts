export const postAddSkuToCart = (
  skuID: string,
  quantity: number,
  wallet: string
) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `cart`,
    body: { skuID: skuID, quantity: quantity, wallet: wallet },
    token: token,
  };
  return { ...apiObj };
};

export const putUpdateCart = (skuID: any, quantity: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `cart/${skuID}`,
    body: { quantity: quantity },
    token: token,
  };
  return { ...apiObj };
};

export const deleteSkuFromCart = (skuID: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `cart/${skuID}`,
    token: token,
    body: null,
  };
  return { ...apiObj };
};

export const getCart = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `cart`,
    token: token,
  };
  return { ...apiObj };
};


export const deleteCart = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  let apiObj = {
    url: `cart`,
    token: token,
    body: null,
  };
  return { ...apiObj };
};
