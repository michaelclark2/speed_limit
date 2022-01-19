import { injected } from "../../app/connectors/connector";
import { useWallet } from "../../app/context/wallet";

export default function Connector() {
  const { connect, disconnect, active, account } = useWallet();

  return (
    <div>
      {active ? (
        <button onClick={() => disconnect(injected)}>{account}</button>
      ) : (
        <button onClick={() => connect(injected)}>Connect wallet</button>
      )}
    </div>
  );
}
