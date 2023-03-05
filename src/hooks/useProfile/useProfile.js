import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.action";
import { getUser } from "../../apis/userApi";
import { useApi } from "../useApi/useApi";

export function useProfile() {
  const dispatch = useDispatch();
  const { getApi } = useApi();

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

  return {
    profile,
    stackAddress,
    updateProfile,
    walletAddress,
  };
}
