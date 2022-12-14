import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const editionDrop = await sdk.getContract("0x937dB0C3B07D3C87dD7bEC0146F2c5866b8Cc05c", "edition-drop");
        const token = await sdk.getContract("0x8f005938701D96778B7d9E2d3dBE90E6DCfACae8", "token");
        const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
        
        if(walletAddresses.length=== 0 ){
            console.log("No NFTs have been claimed yet, may get some friends",);
            process.exit(0);
        }
    

    // Loop through the array of addresses.
    const airdropTargets = walletAddresses.map((address) => {
        // Pick a random # between 1000 and 10000.
        const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
        console.log("✅ Going to airdrop", randomAmount, "tokens to", address);
  
        // Set up the target.
        const airdropTarget = {
          toAddress: address,
          amount: randomAmount,
        };
  
        return airdropTarget;
      });
  
      // Call transferBatch on all our airdrop targets.
      console.log("🌈 Starting airdrop...");
      await token.transferBatch(airdropTargets);
      console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    } catch (err) {
      console.error("Failed to airdrop tokens", err);
    }
})();