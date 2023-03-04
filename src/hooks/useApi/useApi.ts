import axios from "axios";

//import { useToastify } from "../../context/toastify/ToastifyContext";
//import { ApiServiceType } from "../../types/api-types/api-service-type";


type HookProps = {
 url:string;
 token?:string;
 body?:any;
};

// const BASE_URL = process.env.REACT_APP_BASE_API_URL
const BASE_URL = "https://apiv2.droplinked.com";

export function useApi() {
//  const { errorToast } = useToastify();

  const postApi = async ({ url, token, body }:HookProps) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/${url}`,
        { ...(body && { ...body }) },
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: "Bearer " + token }),
          },
        }
      );
      return res.data.data;
    } catch (err:any) {
      if (err.response) {
       // errorToast(err.response.data.message);
      } else {
      //  errorToast(err.message);
      }
      return undefined;
    }
  };

  const patchApi = async ({ url, token, body }:HookProps) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/${url}`,
        { ...(body && { ...body }) },
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: "Bearer " + token }),
          },
        }
      );
      return res.data.data;
    } catch (err:any) {
      if (err.response) {
      //  errorToast(err.response.data.message);
      } else {
     //   errorToast(err.message);
      }
   //   return;
      return false;
    }
  };

  const getApi = async ({ url, token, body }:HookProps) => {
    try {
      const res = await axios.get(`${BASE_URL}/${url}`, {
        ...(body && { ...body }),
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: "Bearer " + token }),
        },
      });

      return res.data.data;
    } catch (err:any) {
      if (err.response) {
        //errorToast(err.response.data.message);
      } else {
      //  errorToast(err.message);
      }
      return undefined;
    }
  };

  const deleteApi = async ({ url, token, body }:HookProps) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${url}`, {
        ...(body && { ...body }),
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: "Bearer " + token }),
        },
      });
      return res.data.data;
    } catch (err:any) {
      if (err.response) {
      //  errorToast(err.response.data.message);
      } else {
      //  errorToast(err.message);
      }
      return undefined;
    }
  };

  return {
    postApi,
    patchApi,
    getApi,
    deleteApi,
  };
}
