import web3 from "./web3";

const address = '0x3d3355fdf8d852a4594ea0c0bc1d0c6fa8db337a';

const abi =
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_categorie",
                    "type": "string"
                },
                {
                    "name": "_descriere_producator",
                    "type": "string"
                },
                {
                    "name": "_judet",
                    "type": "string"
                },
                {
                    "name": "_nume_firma",
                    "type": "string"
                },
                {
                    "name": "_producator",
                    "type": "string"
                },
                {
                    "name": "_sub_categorie",
                    "type": "string"
                },
                {
                    "name": "_tara",
                    "type": "string"
                },
                {
                    "name": "_latitudine",
                    "type": "string"
                },
                {
                    "name": "_longitudine",
                    "type": "string"
                },
                {
                    "name": "_email",
                    "type": "string"
                },
                {
                    "name": "_telefon",
                    "type": "string"
                },
                {
                    "name": "_website",
                    "type": "string"
                },
                {
                    "name": "_facebook",
                    "type": "string"
                }
            ],
            "name": "registerPartner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_bytes32",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32ToString",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_partnerAddress",
                    "type": "address"
                }
            ],
            "name": "getPartner",
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
            "inputs": [
                {
                    "name": "_partnerAddress",
                    "type": "address"
                }
            ],
            "name": "getPartnerInfo",
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
            "name": "getPartnerList",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
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
                    "name": "_partnerAddress",
                    "type": "address"
                }
            ],
            "name": "getPartnerPlace",
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
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "partnerList",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
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
                    "type": "address"
                }
            ],
            "name": "partnerMap",
            "outputs": [
                {
                    "name": "categorie",
                    "type": "bytes32"
                },
                {
                    "name": "descriere_producator",
                    "type": "bytes32"
                },
                {
                    "name": "judet",
                    "type": "bytes32"
                },
                {
                    "name": "nume_firma",
                    "type": "bytes32"
                },
                {
                    "name": "producator",
                    "type": "bytes32"
                },
                {
                    "name": "sub_categorie",
                    "type": "bytes32"
                },
                {
                    "name": "tara",
                    "type": "bytes32"
                },
                {
                    "name": "latitudine",
                    "type": "bytes32"
                },
                {
                    "name": "longitudine",
                    "type": "bytes32"
                },
                {
                    "name": "email",
                    "type": "bytes32"
                },
                {
                    "name": "telefon",
                    "type": "bytes32"
                },
                {
                    "name": "website",
                    "type": "bytes32"
                },
                {
                    "name": "facebook",
                    "type": "bytes32"
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
                    "name": "source",
                    "type": "string"
                }
            ],
            "name": "stringToBytes32",
            "outputs": [
                {
                    "name": "result",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ];

export default new web3.eth.Contract(abi, address);