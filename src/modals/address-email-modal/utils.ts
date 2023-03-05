export const getShopifyBody: (
  email: string,
  address: any,
  cartItems: any
) => any = (email, address, cartItems) => {
  const lineItems = cartItems.map((item: any) => {
    return {
      variant_id: item.variant.id,
      quantity: item.quantity,
      product_id: item.product._id,
    };
  });
  
  return {
    checkout: {
      billing_address: address,
      shipping_address: address,
      wallet: "",
      line_items: lineItems,
      email: email,
    },
  };
};
