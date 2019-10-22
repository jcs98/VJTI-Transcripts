# VJTI-Transcripts
A simple tutorial on web3.js for Blockchain elective course (CO4118T)

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

For an extended version using web3.py, see [CertiChain](https://github.com/jcs98/certichain)
