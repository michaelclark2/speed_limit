import { useEffect, useState } from "react";
import { getTransactionsByAddress } from "../../app/connectors/connector";
import { useWallet } from "../../app/context/wallet";
import SingleTransaction from "./SingleTransaction";

const Transactions = (props) => {
  const { active, account, library } = useWallet();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!active || !account) {
      return;
    }
    getTransactionsByAddress(account)
      .then((transactions) => {
        console.log(transactions);
        setTransactions(transactions);
      })
      .catch((err) => console.error(err));
  }, [account]);

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
