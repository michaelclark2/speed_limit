import { useWeb3React } from "@web3-react/core";
import { injected } from "../../app/connectors/connector";

export default function Connector() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div>
      <button onClick={connect}>Connect your wallet</button>
    </div>
  );
}
