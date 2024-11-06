import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

// Derive public key from private key
const keypair = getKeypairFromEnvironment("SECRET_KEY");
const publicKey = keypair.publicKey.toBase58();

// Get address
const address = new PublicKey(publicKey);

// Establish connection
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Get balance in Lamports
const balanceInLamports = await connection.getBalance(address);

// Convert to SOL
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 Finished! The balance for the address ${address} is ${balanceInSOL} SOL!`);
