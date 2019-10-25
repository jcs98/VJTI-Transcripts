# VJTI-Transcripts
A simple DApp to add and verify student records on the ethereum blockchain  
The contract deployer can add student records (Student ID, CPI)  
Anyone can verify the added records

## Requirements
* Ganache
* Metamask (browser extension)
* live-server (npm install -g live-server)

## Setup
* Run ganache
* Compile the contract on remix using the byzantium compiler version
* For deployment select Web3provider in Environment as http://localhost:7545
* Paste the deployed contract address in app.js as the contract address
* In Metamask for wallet seed, enter the mnemonic that is displayed in Ganache
* In Metamask save a custom RPC network as http://127.0.0.1:7545
* run live-server in the root folder

### References
* [Web3.js Docs](https://web3js.readthedocs.io/en/v1.2.0/index.html)
* [Building a simple DApp](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2)
* [Using Ganache and Metamask](https://www.trufflesuite.com/tutorials/pet-shop)

For an extended version using web3.py, see [CertiChain](https://github.com/jcs98/certichain)
