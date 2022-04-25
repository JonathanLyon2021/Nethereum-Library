let ethers = require('ethers');

//From private key to Ethereum address:
let privateKey = "0x9f51b7929d6408cf6668e47e65d181826f9dc18fb6be32d1ba066235c51acad5";

let wallet = new ethers.Wallet(privateKey);

console.log("Address: " + wallet.address);

//Create new random wallet 
let wallet = ethers.Wallet.createRandom();
console.log("Address: " + wallet.address);

