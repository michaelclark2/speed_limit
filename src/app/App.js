import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.scss";
import Connector from "../components/Connector/Connector";

const getLibrary = (provider, connector) => {
  return new Web3Provider(provider);
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <h1>Gas Station</h1>
        <p>How much am I paying in transaction fees this week?</p>
        <Connector />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
