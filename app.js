let transcriptsContract;

window.addEventListener('load', async () => {

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            // User denied account access...
        }
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const abi = [{ "constant": false, "inputs": [{ "internalType": "string", "name": "_studentId", "type": "string" }, { "internalType": "string", "name": "_CPI", "type": "string" }], "name": "addTranscript", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "string", "name": "_studentId", "type": "string" }, { "internalType": "string", "name": "_CPI", "type": "string" }], "name": "verifyTranscript", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

    const address = "";

    transcriptsContract = new web3.eth.Contract(abi, address);
});

function add() {
    web3.eth.getAccounts(function (error, accounts) {
        if (error) {
            console.log(error);
        }

        const account = accounts[0];
        const studentId = document.getElementById('studentId').value;
        const cpi = document.getElementById('cpi').value;
        console.log("Adding", studentId, cpi);

        transcriptsContract.methods.addTranscript(studentId, cpi).send({ from: account }, function (err, res) {
            if (err) {
                console.log(err);
                alert("Permission Denied");
            }
            else
                alert("Record added Successfully !!");
        })

    });
}

function verify() {
    web3.eth.getAccounts(function (error, accounts) {
        if (error) {
            console.log(error);
        }

        const account = accounts[0];
        const studentId = document.getElementById('studentId').value;
        const cpi = document.getElementById('cpi').value;
        console.log("Verifying", studentId, cpi);

        transcriptsContract.methods.verifyTranscript(studentId, cpi).call({ from: account }, function (err, res) {
            if (err)
                console.log(err);
            else {
                if (res) alert("Verified Successfully !!");
                else alert("Unsuccessful Verification");
            }
        })

    });
}