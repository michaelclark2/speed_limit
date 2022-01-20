const SNOWTRACE_API_KEY = process.env.REACT_APP_SNOWTRACE_API_KEY;

const NetworkAPIMapping = {
  // chainId: "url"
  43114: (address) =>
    `https://api.snowtrace.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${SNOWTRACE_API_KEY}`,
};

export const getTransactionsByAddress = async (address, chainId) => {
  try {
    const getTransactionsUrl = NetworkAPIMapping[chainId](address);
    return fetch(getTransactionsUrl)
      .then((res) => res.json())
      .then((json) => json.result);
  } catch (ex) {
    console.error(`chainId ${chainId} not found `, ex);
  }
};
