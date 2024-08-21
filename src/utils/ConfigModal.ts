import { defaultConfig } from "@web3modal/ethers5/react";

// config.js
export const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) {
  throw new Error("VITE_PROJECT_ID is not set");
}

export const chains = [
  {
    chainId: 56,
    name: "BNB Smart Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com/",
    rpcUrl: "https://bsc-dataseed1.binance.org/",
  },
  {
    chainId: 1,
    name: "Ethereum Mainnet",
    currency: "ETH",
    explorerUrl: "https://etherscan.io/",
    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  },
  {
    chainId: 137,
    name: "Polygon",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com/",
    rpcUrl: "https://polygon-rpc.com/",
  },
  {
    chainId: 250,
    name: "Fantom",
    currency: "FTM",
    explorerUrl: "https://ftmscan.com/",
    rpcUrl: "https://rpc.ftm.tools/",
  },
];

export const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});
