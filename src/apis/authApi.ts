import { WALLET_TYPES } from "../constant/wallet-types";
export const postSignInViaWallet = (
  stacksWallet: string,
  publicKey: string,
  signature: string
) => {
  // let token = JSON.parse(window.localStorage.getItem('token'));
  let finalObj = {
    url: "auth/wallet",
    body: {
      wallet: stacksWallet,
      publicKey: publicKey,
      signature: signature,
      type: WALLET_TYPES.STACK,
    },
    token: "",
  };
  return { ...finalObj };
};

export const postLoginViaCasper = (
  wallet: string,
  publicKey: string,
  signature: string
) => {
  // let token = JSON.parse(window.localStorage.getItem('token'));
  let finalObj = {
    url: "auth/wallet",
    body: {
      wallet: wallet,
      publicKey: publicKey,
      signature: signature,
      type: WALLET_TYPES.CASPER,
    },
    token: "",
  };
  return { ...finalObj };
};
