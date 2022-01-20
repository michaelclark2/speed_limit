const SingleTransaction = ({ transaction }) => {
  const { blockNumber, timeStamp, gasPrice, gasUsed } = transaction;

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
