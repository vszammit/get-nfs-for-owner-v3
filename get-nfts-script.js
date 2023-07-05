// Setup: npm install alchemy-sdk
const { Alchemy, Network } = require("alchemy-sdk");

const config = {
  // We HIGHLY recommend storing your API Key in a .env file for production apps
  apiKey: "<-----YOUR ALCHEMY API KEY HERE",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Get all NFTs owned by 'alangeek.eth'
  // Replace 'alangeek.eth' with owner's address or ENS domain
  const nfts = await alchemy.nft.getNftsForOwner("alangeek.eth");

  // Print NFTs
  // Refer to https://docs.alchemy.com/reference/getnftsforowner-v3 to print more fields
  nfts.ownedNfts.forEach((nft) => {
    console.log("Contract Address:", nft.contract.address);
    console.log("Image URL:", nft.contract.openSeaMetadata.imageUrl);
    console.log("Token ID:", nft.tokenId);
    console.log("Name:", nft.name);
    console.log("----------------------------------");
  });
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
