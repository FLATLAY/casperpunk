export const getShopifyAddressObject = (selectedAddress) => {
  return {
    first_name: selectedAddress.firstName,
    last_name: selectedAddress.lastName,
    country: selectedAddress.country,
    province: selectedAddress.state,
    city: selectedAddress.city,
    address1: selectedAddress.addressLine1,
    address2: selectedAddress.addressLine2,
    zip: selectedAddress.zip,
    phone: "",
  };
};


export const getLineItems = (cartItems) => {
    return cartItems.map((item) => {
         return {
           variant_id: item.variant.id,
           quantity: item.quantity,
           product_id: item.product._id,
         };
       });
 }

 export const getShopifyData = (selectedAddress , cartItems , email) => {
    return  {
      checkout: {
        billing_address: getShopifyAddressObject(selectedAddress),
        shipping_address: getShopifyAddressObject(selectedAddress),
        wallet:'', 
        line_items: getLineItems(cartItems),
        email: email,
      },
    };
    }
