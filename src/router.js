import { createBrowserRouter } from "react-router-dom";


import Landing from "./pages/landing/Landing";
import ProductPage from "./pages/product/ProductPage";
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
      ],
    },
  ]);
  