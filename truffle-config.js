const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const MNEMONIC_KEY = process.env.MNEMONIC_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC_KEY,
          "https://rpc-mumbai.maticvigil.com/"
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC_KEY,
          "https://data-seed-prebsc-1-s1.binance.org:8545/"
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.11", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
