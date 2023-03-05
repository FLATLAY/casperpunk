
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAuth } from "@micro-stacks/react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import {
  WalletDropdownBgLayout,
  WalletDropdownComponent,
  DropdownButton,
} from "./Profile-style";
import { setLogoutUser } from "../../../../store/user/user.action";
import { useProfile } from "../../../../hooks/useProfile/useProfile";

interface Props {
  close: () => void;
  show: boolean;
}


 const ProfileDropdown = ({ close, show }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const { stackAddress, walletAddress } = useProfile();
  
    const walletAddressText = useMemo(() => {
      let result = "";
      if (walletAddress != "") {
        result =
          walletAddress.slice(0, 4) +
          "...." +
          walletAddress.slice(walletAddress.length - 4, walletAddress.length);
      }
      return result;
    }, []);
  
    const handleChildClick = (event: React.MouseEvent<HTMLInputElement>) =>
      event.stopPropagation();
  
    if (!show) return null;
  
    const logout = () => {
      dispatch(setLogoutUser());
      signOut();
      close();
      window.location.reload();
    };
  
    const navigateToSetting = () => navigate("settings");
  
    return (
      <WalletDropdownBgLayout onClick={close}>
        <WalletDropdownComponent onClick={handleChildClick}>
          <DropdownButton>{walletAddressText}</DropdownButton>
          <Box mb="8px"></Box>
          <DropdownButton>Purchase History</DropdownButton>
          <Box mb="8px"></Box>
          <DropdownButton onClick={navigateToSetting}>Settings</DropdownButton>
          <Box mb="8px"></Box>
  
          <DropdownButton onClick={logout}>Logout</DropdownButton>
        </WalletDropdownComponent>
      </WalletDropdownBgLayout>
    );
}

export default ProfileDropdown