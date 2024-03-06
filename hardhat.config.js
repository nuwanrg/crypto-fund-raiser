require("dotenv").config({ path: ".env.development" });
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: process.env.ETH_NETWORK_URL,
      accounts: [process.env.ETH_PRIVATE_KEY],
      gas: parseInt(process.env.CONTRACT_GAS_LIMIT), // Specify the desired gas limit
      gasPrice: parseInt(process.env.CONTRACT_GAS_PRICE), // Specify the desired gas price
    },
  },
};
