import { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { chains } from "eth-chains";

const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [network, setNetwork] = useState(0);

  const getNetwork = () => {
    library.getNetwork().then(({ chainId }) => {
      const network = chains.getById(chainId);
      setNetwork(network);
    });
  };

  useEffect(() => {
    if (active) {
      getNetwork();
    }
  }, [library]);

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
    network,
  };

  return (
    <WalletContext.Provider value={walletValues}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
