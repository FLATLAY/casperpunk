import SignClient from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";

import { useEffect, useState } from "react";

import { WalletComponent } from "./WalletModal-style";
/**
 *
 * @returns {Promise<{'publicKey' : string|null , 'signature' : string|null}>}
 */

export async function connectWalletLogin() {
  const DEFAULT_MAIN_CHAINS = [
    "eip155:1",
    // "eip155:10",
    // "eip155:100",
    // "eip155:137",
    // "eip155:42161",
    // "eip155:42220",
  ];
  const web3Modal = new Web3Modal({
    projectId: "9ab28bd9133b1678f9cb98e48abc3cc7",
    standaloneChains: DEFAULT_MAIN_CHAINS,
  });
  const proposalNamespace = {
    eip155: {
      chains: DEFAULT_MAIN_CHAINS,
      methods: [
        "eth_sendTransaction",
        "eth_signTransaction",
        "eth_sign",
        "personal_sign",
        "eth_signTypedData",
      ],
      events: ["connect", "disconnect"],
    },
  };
  let account = null;
  const signClient = await SignClient.init({
    projectId: "9ab28bd9133b1678f9cb98e48abc3cc7",
  });
  const { uri, approval } = await signClient.connect({
    requiredNamespaces: proposalNamespace,
  });
  if (uri) {
    await web3Modal.openModal({
      route: "ConnectWallet",
      uri: uri,
      standaloneChains: DEFAULT_MAIN_CHAINS,
    });
    const session = await approval();
    account = session.namespaces.eip155.accounts[0].slice(9);

    web3Modal.closeModal();
    const result = await signClient.request({
      request: {
        method: "personal_sign",
        params: ["Please sign this message to prove you own this account"],
      },
      chainId: "eip155:1",
      topic: session.topic,
    });
  
    return { account: account, signature: result };
  } else {
    return null;
  }
}

const ConnectWalletButton = () => {
  const [user, setUser] = useState(null);
  // 3. Initialize sign client

  const handleConnectWallet = async () => {
    let result = await connectWalletLogin();
    if (result) setUser(result);
  };

  return user == null ? (
    <WalletComponent onClick={handleConnectWallet}>
      Connect Wallet
    </WalletComponent>
  ) : (
    <WalletComponent>Initializing...' </WalletComponent>
  );
};
export default ConnectWalletButton;
