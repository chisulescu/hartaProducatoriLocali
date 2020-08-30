import Web3 from "web3";

let web3 = typeof window.web3 !== 'undefined' ? new Web3(window.web3.currentProvider) : new Web3();
localStorage.setItem("isMetamaskActive", typeof window.web3 !== 'undefined' ? "true": "false")

export default web3;