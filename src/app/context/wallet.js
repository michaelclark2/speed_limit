import { createContext, useContext } from "react";
import { useWeb3React } from "@web3-react/core";

const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

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
  };

  return (
    <WalletContext.Provider value={walletValues}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
