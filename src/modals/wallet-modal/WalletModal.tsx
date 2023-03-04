import { useOpenSignMessage, useAuth, useAccount } from "@micro-stacks/react";
import { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";

import {
  WalletModalWrapper,
  WalletTitle,
  WalletComponent,
  CloseIconComponent,
  CloseIconImg,
  LoadingWrapper,
} from "./WalletModal-style";
import { useApi } from "../../hooks/useApi/useApi";
// import {
//   postSignInViaWallet,
//   postLoginViaCasper,
// } from "../../../../apis/authApi";
//import { setCurrentUser } from "../../../../store/user/user.action";
//import { casper_login } from "./casper-utils";

import ModalWrapper from "../modal-wrapper/ModalWrapper";
//import ConnectWalletButton from "./ConnectWalletButton";
//import Loading, { LOADING_SIZE } from "../../../../components/loading/Loading";

//import closeIcon from "../../assets/icons/multiplied-icon.svg";

// interface Props {
//   show: boolean;
//   close: () => void;
// }


interface Props {
  close: () => void;
  show: boolean;
}


const WalletModal = ({ show, close }:Props) => {
  const { openAuthRequest, signOut, isSignedIn } = useAuth();
  const { openSignMessage } = useOpenSignMessage();
  const { stxAddress } = useAccount();
  const { postApi } = useApi();
 // const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);

  // const callConnectWalletApi = async (stxAddress, walletResponse) => {
  //   setLoading(true);
  //   let result = await postApi(
  //     postSignInViaWallet(
  //       stxAddress,
  //       walletResponse.publicKey,
  //       walletResponse.signature
  //     )
  //   );
  //   setLoading(false);
  //   if (result) {
  //     localStorage.setItem("token", JSON.stringify(result.access_token));
  //     localStorage.setItem("user", JSON.stringify(result.user));
  //     dispatch(setCurrentUser(result.user));
  //     close();
  //   }
  // };

  // const signMessage = async () => {
  //   let message = stxAddress;
  //   await openSignMessage({
  //     message,
  //     onFinish: (walletResponse) => {
  //       callConnectWalletApi(stxAddress, walletResponse);
  //     },
  //   });
  // };

  // useEffect(() => {
  //   if (stxAddress) {
  //     signMessage();
  //   }
  // }, [stxAddress]);

  const loginViaWallet = async () => {
    // if (isSignedIn) await signOut();
    // else await openAuthRequest();
  };

  // const onClickCasper = () => {
  //   casper_login(async (account_info) => {
  //     const result = await postApi(
  //       postLoginViaCasper(
  //         account_info.account_hash,
  //         account_info.publicKey,
  //         account_info.signature
  //       )
  //     );
  //     localStorage.setItem("token", JSON.stringify(result.access_token));
  //     localStorage.setItem("user", JSON.stringify(result.user));
  //     dispatch(setCurrentUser(result.user));
  //     close()
  //   });
  // };

  return (
    <ModalWrapper show={show} close={close}>
      <WalletModalWrapper>
        <CloseIconComponent onClick={close}>
          {/* <CloseIconImg src={closeIcon} /> */}
        </CloseIconComponent>
        <WalletTitle>Select Wallet</WalletTitle>
        {loading ? (
          <LoadingWrapper>
            {/* <Loading size={LOADING_SIZE.MEDIUM} /> */}
          </LoadingWrapper>
        ) : (
          <>
            <WalletComponent onClick={loginViaWallet}>
              ETH Wallet
            </WalletComponent>
            <Box mb="16px"></Box>
            {/* <WalletComponent onClick={onClickCasper}>
              Casper Wallet
            </WalletComponent> */}
            {/* <Box mb="16px"></Box>
            <ConnectWalletButton /> */}
          </>
        )}
      </WalletModalWrapper>
    </ModalWrapper>
  );
};

export default WalletModal;
