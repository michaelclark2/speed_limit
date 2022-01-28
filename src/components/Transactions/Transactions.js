import { useState, useEffect } from "react";
import { useWallet } from "../../app/context/wallet";
import SingleTransaction from "./SingleTransaction";
import AddUserKey from "../UserKeys/AddUserKey";

const Transactions = (props) => {
  const { active, account, network, explorer, explorerApiKeyRequired } =
    useWallet();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!active) {
      return;
    }
  }, [active, account, network.chainId]);

  const allTransactions = () => {
    return transactions.map((tx) => <SingleTransaction transaction={tx} />);
  };

  return explorerApiKeyRequired ? (
    <AddUserKey />
  ) : (
    <div className="Transactions container">
      {!active ? (
        <p>Connect your wallet to see transactions</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>BlockNo</th>
              <th>Time</th>
              <th>Tx Fee</th>
            </tr>
          </thead>
          {transactions.length > 0 ? allTransactions() : ""}
        </table>
      )}
    </div>
  );
};

export default Transactions;
