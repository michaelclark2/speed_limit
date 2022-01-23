import { createContext, useContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";

const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [chainId, setChainId] = useState(0);

  if (active) {
    library.getNetwork().then((network) => {
      setChainId(network.chainId);
    });
  }

  const connect = async (provider) => {
    try {
      await activate(provider);
    } catch (ex) {
      console.error(ex);
    }
  };

  const disconnect = async (provider) => {
    try {
      await deactivate(provider);
    } catch (ex) {
      console.error(ex);
    }
  };

  const walletValues = {
    connect,
    disconnect,
    active,
    account,
    library,
    connector,
    chainId,
  };

  return (
    <WalletContext.Provider value={walletValues}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
