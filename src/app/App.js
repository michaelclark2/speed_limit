import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.scss";
import { WalletProvider } from "./context/wallet";
import Header from "../components/Header/Header";
import Transactions from "../components/Transactions/Transactions";

const getLibrary = (provider, connector) => {
  return new Web3Provider(provider);
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletProvider>
        <div className="App container-fluid">
          <Header />
          <Transactions />
        </div>
      </WalletProvider>
    </Web3ReactProvider>
  );
}

export default App;
