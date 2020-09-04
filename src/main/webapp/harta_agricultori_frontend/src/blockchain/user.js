import web3 from "./web3";

const address = '0x4a7d82226b819c9e62a3446bf085a731dad9094a';

const abi =
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_username",
                    "type": "string"
                },
                {
                    "name": "_password",
                    "type": "string"
                },
                {
                    "name": "_email",
                    "type": "string"
                }
            ],
            "name": "registerUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_username",
                    "type": "string"
                },
                {
                    "name": "_password",
                    "type": "string"
                }
            ],
            "name": "checkUserByUsernameAndPassword",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getUserById",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getUserListLength",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userMap",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "username",
                    "type": "string"
                },
                {
                    "name": "password",
                    "type": "string"
                },
                {
                    "name": "email",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

export default new web3.eth.Contract(abi, address);