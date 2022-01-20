import { InjectedConnector } from "@web3-react/injected-connector";

const SNOWTRACE_API_KEY = process.env.REACT_APP_SNOWTRACE_API_KEY;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 52],
});

export const getTransactionsByAddress = async (address) => {
  return fetch(
    `https://api.snowtrace.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${SNOWTRACE_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.result);
};
