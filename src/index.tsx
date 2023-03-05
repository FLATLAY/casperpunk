import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as MicroStacks from "@micro-stacks/react";

import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { router } from "./router";
import { theme } from "./chakra-theme";
import { store } from "./store/store";

import ToastifyProvider from "./context/ToastifyContext/ToastifyContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MicroStacks.ClientProvider
        appName="My sick app"
        appIconUrl="APP_ICON.png"
      >
        <ToastifyProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ToastifyProvider>
      </MicroStacks.ClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
