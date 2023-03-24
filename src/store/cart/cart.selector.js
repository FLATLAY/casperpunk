export const selectCurrentCart = (state) => state.cart.currentCart;

export const selectCurrentCartItems = (state) => state.cart.currentCart.items;

export const selectCurrentCartType = (state) => state.cart.currentCart.type;

export const selectCurrentNumberOfItems = (state) =>
  state.cart.currentCart.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

export const selectCurrentCartTotalPrice = (state) =>
  state.cart.currentCart.totalPriceCart;
