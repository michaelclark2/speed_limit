import { injected } from "../../app/connectors/connector";
import { useWallet } from "../../app/context/wallet";

export default function Connector() {
  const { connect, disconnect, active, account } = useWallet();

  const buttonClass = "button is-small is-info";

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
