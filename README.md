This repo contains a JavaScript script to get all NFTs owned by a specified address using Alchemy's SDK V3. 

Here is the specific API reference: https://docs.alchemy.com/reference/getnftsforowner-v3
where you can see all the fields available to print in line 19 of script.js

For demo purposes, we are only printing out the following specific fields for NFTs owned by alangeek.eth: 
* Contract Address
* Image URL
* Token ID
* Token Type
* Name
* Description
* Token URI
* Time Last Updated
* Balance
* Acquired At

## Steps to Run

You'll need to already have node and npm installed to run this script. If you're using a Mac you also might need to install xcode to use the git command due to the recent OS upgrade.

1. Clone this repo locally
git clone https://github.com/alchemyplatform/get-nfts-script.git

2. cd into the project folder then run:

npm init -y

3. install the Alchemy SDK V3

npm install --save alchemy-sdk-3.0.0-beta0.0

4. Add your Alchemy API key to line 6 (we recommend storing it in a .env folder)

5. Run the script with the terminal command: node script.js