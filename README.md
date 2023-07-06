## Overview
This repo contains a JavaScript script to get all NFTs owned by a specified address using Alchemy's SDK V3. 

For demo purposes, we are only printing out the following specific fields for NFTs owned by alangeek.eth: 
* Contract Address
* Image URL
* Token ID
* Name

Here is the specific API reference: https://docs.alchemy.com/reference/getnftsforowner-v3
where you can see all the NFT fields available to print out at line 19 of get-nfts-script.js

## Steps to Run

You'll need to already have node and npm installed to run this script. If you're using a Mac you also might need to install xcode to use the git command due to the recent OS upgrade.

1. Clone this repo locally
`git clone https://github.com/alchemyplatform/get-nfts-script.git`

2. `cd` into the project folder then run:

`npm init -y`

3. install the Alchemy SDK V3

`npm install --save alchemy-sdk@3.0.0-beta.0`

4. Add your Alchemy API key to line 6 (we recommend storing your key in a .env file for production apps)

5. Run the script with the terminal command `node get-nfts-script.js`
