import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
   paths: {
    artifacts: './artifacts',
    sources: './contracts',
    cache: './cache',
    tests: './test',
  },

  networks: {
    ganache: {
      url: 'HTTP://192.168.137.1:7545'
    },
    arbitrum_mainnet: {
      url: 'https://rpc.ankr.com/arbitrum'
    },
    arbitrum_testnet: {
      url: 'https://goerli-rollup.arbitrum.io/rpc'
    }
  }
};

export default config;
