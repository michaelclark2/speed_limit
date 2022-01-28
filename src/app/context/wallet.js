import { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { chains } from "eth-chains";
import { getApiKeyByChainId } from "../utils/user";

const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [network, setNetwork] = useState({});
  const [explorer, setExplorer] = useState({});
  const [explorerApiKey, setExplorerApiKey] = useState("");
  const [explorerApiKeyRequired, setExplorerApiKeyRequired] = useState(true);

  const getNetwork = () => {
    library.getNetwork().then(({ chainId }) => {
      const network = chains.getById(chainId);
      setNetwork(network);
      setExplorer(network.explorers[0]);
    });
  };

  useEffect(() => {
    if (active) {
      getNetwork();
    }
  });

  useEffect(() => {
    const getExplorerApiKey = () => {
      if (explorer.standard === "none") {
        setExplorerApiKey("");
        setExplorerApiKeyRequired(false);
        return;
      }
      if (active && explorerApiKeyRequired) {
        const apiKey = getApiKeyByChainId(account, network.chainId);
        setExplorerApiKey(apiKey);
        setExplorerApiKeyRequired(true);
      }
    };

    if (active && network.chainId) {
      getExplorerApiKey();
    }
  }, [
    active,
    account,
    explorer,
    network,
    explorerApiKey,
    explorerApiKeyRequired,
  ]);

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
      setNetwork({});
      setExplorer({});
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
    explorer,
    explorerApiKeyRequired,
  };

  return (
    <WalletContext.Provider value={walletValues}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
