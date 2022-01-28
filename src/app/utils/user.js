export const getApiKeyByChainId = (account, chainId) => {
  const accounts = {
    "0xd8fb90cde47d868348042f216e1f5b38911586f4": {
      43114: process.env.REACT_APP_SNOWTRACE_API_KEY,
    },
  };
  return accounts[account.toLowerCase()][chainId];
};
