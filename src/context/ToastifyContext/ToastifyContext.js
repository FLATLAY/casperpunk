import { ToastContainer, toast } from "react-toastify";
import { createContext, useContext } from "react";

import "react-toastify/dist/ReactToastify.css";

export const toastValue = createContext(null);

export default function ToastifyProvider({ children }) {
  
  const successToast = (text) => toast.success(text);
  const errorToast = (text) => toast.error(text);
  const warningToast = (text) => toast.warn(text);

  return (
    <toastValue.Provider value={{ successToast, errorToast, warningToast }}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </toastValue.Provider>
  );
}

export function useToastify() {
  const toast = useContext(toastValue);

  return { ...toast };
}
