import sdk from "./1-initialize-sdk.js";
import {MaxUint256} from "@ethersproject/constants";

(async () =>{
    try {
        const editionDrop = await sdk.getContract("0x937dB0C3B07D3C87dD7bEC0146F2c5866b8Cc05c", "edition-drop")
        const claimConditions = [{
            startTime: new Date(),
            maxClaimable: 50_000,
            price: 0,
            maxClaimablePerWallet: 10,
            waitInSeconds: 0,
        }]
        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("Succesfully set claim condition");
    } catch (error) {
        console.log("Failed to set claim condition");
    }
})();