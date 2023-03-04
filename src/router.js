import { createBrowserRouter } from "react-router-dom";


import Landing from "./pages/landing/Landing";
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
        // {
        //   path: ":shopName",
        //   element: <ShopWrapper />,
        //   children: [
        //     {
        //       index: true,
        //       element: <ShopLanding />,
        //     },
  
        //   ],
        // },
      ],
    },
  ]);
  