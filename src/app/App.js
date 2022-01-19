import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.scss";
import Connector from "../components/Connector/Connector";
import { WalletProvider } from "./context/wallet";
import Header from "../components/Header/Header";

const getLibrary = (provider, connector) => {
  return new Web3Provider(provider);
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App container-fluid">
        <WalletProvider>
          <Header />
        </WalletProvider>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
