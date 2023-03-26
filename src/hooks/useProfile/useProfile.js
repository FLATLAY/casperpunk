import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.action";
import { getUser } from "../../apis/userApi";
import { useApi } from "../useApi/useApi";
import { casper_login } from "../../modals/wallet-modal/casper-utils";
import { postLoginViaCasper } from "../../apis/authApi";

export function useProfile() {
  const dispatch = useDispatch();
  const { getApi ,postApi  } = useApi();

  const profile = useSelector(selectCurrentUser);

  const stackAddress =
    profile && profile.stacksAddress ? profile.stacksAddress : "";

  const getWalletAddress = () => {
    if (profile) {
      if (profile.stacksAddress) {
        return profile.stacksAddress;
      }
      if (profile.casperAddress) {
        return profile.casperAddress;
      }
    } else {
      return "";
    }
  };
  //
  const walletAddress = useMemo(getWalletAddress, [profile]);

  const updateProfile = async () => {
    const result = await getApi(getUser());
    localStorage.setItem("user", JSON.stringify(result));
    dispatch(setCurrentUser(result));
  };


  const openCasperWallet = () => {
    casper_login(async (account_info) => {
      const result = await postApi(
        postLoginViaCasper(
          account_info.account_hash,
          account_info.publicKey,
          account_info.signature
        )
      );
      localStorage.setItem("token", JSON.stringify(result.access_token));
      localStorage.setItem("user", JSON.stringify(result.user));
      dispatch(setCurrentUser(result.user));
    });
  }

  return {
    profile,
    stackAddress,
    updateProfile,
    walletAddress,
    openCasperWallet
  };
}
