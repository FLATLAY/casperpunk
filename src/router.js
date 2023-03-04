import { createBrowserRouter } from "react-router-dom";

import PageWrapper from "./pages/page-wrapper/PageWrapper";
import Landing from "./pages/landing/Landing";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PageWrapper />,
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
  