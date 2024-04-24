const { ethers } = require('ethers');

function generateEthereumKeys() {
    // Create a random wallet
    const wallet = ethers.Wallet.createRandom();

    // Extract the private key, public key, and address from the wallet
    const privateKey = wallet.privateKey;
    const publicKey = wallet.publicKey; // Note: ethers.js v5+ doesn't expose publicKey directly
    const address = wallet.address;

    return { privateKey, publicKey, address };
}

// Run the function and print the results
const keys = generateEthereumKeys();
console.log("Private Key:", keys.privateKey);
console.log("Public Key:", keys.publicKey);  // Note: This will be undefined in ethers.js v5+
console.log("Ethereum Address:", keys.address);

