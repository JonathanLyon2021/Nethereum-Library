//THIS EXERCISE IS IN C# LANGUAGE 

// import Nethereum.HdWallet;

// string words = "radar blur sun chef fix engine embark joy scheme fiction master release";
// Wallet wallet = new Wallet(words, null);
// Console.WriteLine(Wallet.GetAccount(0).Address);

// wallet = new Wallet(Wordlist.English, WordCount.Twelve);

// Console.WriteLine("Addresses:");
// for(int i=0,



//Example: create a new random HD wallet

Wallet wallet = 
    new Wallet(Wordlist.English, WordCount.Twelve);

    //Example: derive addresses and print them on the console.

Console.WriteLine("Addresses:");
for(int i = 0; i < 20; i++)
{
    Console.WriteLine(wallet.GetAccount(i).Address)
}