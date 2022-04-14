const BunnyVerseNFT = artifacts.require("BunnyVerse");

const tokenName = "BunnyVerse";
const tokenSymbol = "BV";
const cost = 20000000000000000;
const maxSupply = 12;
const maxMintAmountPerTx = 3;
const hiddenUri = "";


module.exports = async function (deployer) {
 await deployer.deploy(BunnyVerseNFT, tokenName,  tokenSymbol, cost, maxSupply, maxMintAmountPerTx, hiddenUri);
};
