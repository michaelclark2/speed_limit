import { useEffect, useState } from "react";
import { getTransactionsByAddress } from "../../app/utils/connector";
import { useWallet } from "../../app/context/wallet";
import SingleTransaction from "./SingleTransaction";

const Transactions = (props) => {
  const { active, account, chainId } = useWallet();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!active || !chainId) {
      return;
    }
    getTransactionsByAddress(account, chainId)
      .then((transactions) => {
        setTransactions(transactions);
      })
      .catch((err) => console.error(err));
  }, [active, account, chainId]);

  const allTransactions = () => {
    return transactions.map((tx) => <SingleTransaction transaction={tx} />);
  };

  return (
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
          {allTransactions()}
        </table>
      )}
    </div>
  );
};

export default Transactions;
