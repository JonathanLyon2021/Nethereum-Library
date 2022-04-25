//THIS EXERCISE IS IN C# LANGUAGE 

// import Nethereum.HdWallet;

// string words = "radar blur sun chef fix engine embark joy scheme fiction master release";
// Wallet wallet = new Wallet(words, null);
// Console.WriteLine(Wallet.GetAccount(0).Address);

// wallet = new Wallet(Wordlist.English, WordCount.Twelve);

// Console.WriteLine("Addresses:");
// for(int i=0,



//Example: create a new random HD wallet

// Wallet wallet = 
//     new Wallet(Wordlist.English, WordCount.Twelve);

//     //Example: derive addresses and print them on the console.

// Console.WriteLine("Addresses:");
// for(int i = 0; i < 20; i++)
// {
//     Console.WriteLine(wallet.GetAccount(i).Address)
// }


// //SEND ETHEREUM TRANSACTION
// using System;
// using System.Threading.Tasks;
// using NBitcoins;
// using Nethereum.HdWallet;
// using Nethereum.Web3
// using Nethereum.Web3.Accounts;

// static async Task Send(Wallet wallet, string fromAddress, string toAddress, double amountOfCoins)
// {
//     Account accountFrom = wallet.GetAccount(fromAddress);
//     string privateKeyFrom = accountFrom.PrivateKey;
//     if(privateKeyFrom == string.Empty) {
//         throw new Exception("Sender address is not from the current wallet");
//     }
//     string ropsten = 'https://ropsten.infura.io/v3/c1f509a577f44113adbcfe2bfc3505cc';
//     var web3 = new Web3(accountFrom, ropsten);
//     var wei = Web3.Convert.ToWei(amountOfCoins);
//     await web3.Transactionmanager.sendTransactionAsync(
//         accountFrom.Address,
//         toAddress,
//         new Nethereum.Hex.HexTypes.HexBigInteger(wei)
//     );
// }

//new program from guy on youtube

#include<iostream>
using namespace std;
int main(){
    cout<<"Subscribe to us!!";
    return 0;
}

//