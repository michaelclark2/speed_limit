const SingleTransaction = ({ transaction }) => {
  const { blockNumber, timeStamp, gasPrice, gasUsed } = transaction;

  // TODO: https://ethereum.stackexchange.com/a/82318
  // in order to get transaction method names, (i.e. Stake, Mint, Approve, etc.)

  const transactionFee = (gasPrice * gasUsed) / 1000000000000000000;
  return (
    <tr>
      <td>{blockNumber}</td>
      <td>{timeStamp}</td>
      <td>{transactionFee}</td>
    </tr>
  );
};

export default SingleTransaction;
