import { createBrowserRouter } from "react-router-dom";


import Landing from "./pages/landing/Landing";
import ProductPage from "./pages/product/ProductPage";
import AddressPage from "./pages/address/Address";
import CartPage from "./pages/cart/CartPage";
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
          path: "address",
          element: <AddressPage />,
        },
      ],
    },
  ]);
  