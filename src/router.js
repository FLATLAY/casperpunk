import { createBrowserRouter } from "react-router-dom";


import Landing from "./pages/landing/Landing";
import ProductPage from "./pages/product/ProductPage";
import AddressPage from "./pages/address/Address";
import CartPage from "./pages/cart/CartPage";
import PoliciesPage from "./pages/policies/PoliciesPage"
import Shipping from "./pages/shipping/Shipping"; 
import App from "./App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "product/:productId",
          element: <ProductPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "shipping",
          element: <Shipping />,
        },
        {
          path: "address",
          element: <AddressPage />,
        },
        {
          path: "policies",
          element: <PoliciesPage />,
        },
      ],
    },
  ]);
  