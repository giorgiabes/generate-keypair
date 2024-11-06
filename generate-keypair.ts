import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");



// console.log(`Public key is: `, keypair.publicKey.toBase58());
// console.log(`Private key is:`, keypair.secretKey);
// console.log(`✅ Finished!`)
