import { useWallet } from "../../app/context/wallet";
import { InjectedConnector } from "@web3-react/injected-connector";

export default function Connector() {
  const { connect, disconnect, active, account } = useWallet();

  const buttonClass = "button is-small is-info";

  const injected = new InjectedConnector();

  return (
    <div>
      {active ? (
        <button className={buttonClass} onClick={() => disconnect(injected)}>
          {account}
        </button>
      ) : (
        <button className={buttonClass} onClick={() => connect(injected)}>
          Connect wallet
        </button>
      )}
    </div>
  );
}
