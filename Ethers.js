let ethers = require('ethers');

//From private key to Ethereum address:
// let privateKey = "0x9f51b7929d6408cf6668e47e65d181826f9dc18fb6be32d1ba066235c51acad5";

// let wallet = new ethers.Wallet(privateKey);

// console.log("Address: " + wallet.address);
////////////answer/address below
// Address: 0x0758E577550549C56208E292D036197cB58F6E2a

//Create new random wallet 
// let wallet = ethers.Wallet.createRandom();
// console.log("Address: " + wallet.address);

//////////////////////////////////////////////////////////////////////////////////////////
////////////////Mnemonics and Brain Wallets//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//from mnemonic phrase, to private key, to Ethereum address

let mnemonic = "enact range stone boss alone october list vast laptop sunny iron price";
let wallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log("Address: " + wallet.address);
//answer/address below
// Address: 0xa05dfb7868d5cdf655d775DA7C96269ba54AC4a4


//Derive the 3rd Ethereum account:
let mnemonic = "enact range stone boss alone october list vast laptop sunny iron price";
let accountIndex = 2
let derivationPath = `m/44'/60'/0'/0/${accountIndex}`
let wallet = ethers.Wallet.fromMnemonic(mnemonic, derivationPath);
console.log("Address: " + wallet.address);
//answer/address below
// Address: 0x6Ab83A5A33c520dC11183a3ea232bFDB5c9aE37C

