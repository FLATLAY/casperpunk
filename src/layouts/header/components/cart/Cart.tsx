import { useState } from "react";

import {
  CartIconWrapper,
  CartCounter,
  CartCounterNumber,
  CartIcon,
} from "./Cart-style";
//import { useCart } from "../../../../../../hooks/useCart/useCart";

import CartDropdown from "./CartDropdown";

import cartIcon from "../../../../assets/icons/cart-icon.svg";

const Cart = () => {
 // const { cartItems, numberOfItems } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((p) => !p);

  return (
    <>
      <CartIconWrapper>
        <CartIcon src={cartIcon} w="100%" h="100%" onClick={toggleDropdown} />
        {/* {cartItems.length > 0 && (
          <CartCounter>
            <CartCounterNumber>{numberOfItems}</CartCounterNumber>
          </CartCounter>
        )} */}
      </CartIconWrapper>
      {/* {showDropdown && (
        <CartDropdown
          show={showDropdown}
          close={toggleDropdown}
          cartItems={cartItems}
        />
      )} */}
    </>
  );
};

export default Cart;
