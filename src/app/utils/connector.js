
export const getTransactionsByAddress = async (address, apiKey) => {
    const getTransactionsUrl = `https://api.snowtrace.io/api?module=account&action=tokentx&address=${address}&sort=desc&apikey=${apiKey}`,
    return fetch(getTransactionsUrl)
      .then((res) => res.json())
      .then((result) => {
        if (result.status !== "0") {
          return result.result;
        } else {
          throw new Error(`${result.message}: ${result.result}`);
        }
      });
}
