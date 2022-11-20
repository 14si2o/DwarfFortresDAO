import sdk from "./1-initialize-sdk.js";
import {MaxUint256} from "@ethersproject/constants";

(async () =>{
    try {
        const editionDrop = await sdk.getContract("0x0a77a4d1dA21b78CaBd5AD8394Fe71a6189792B6", "edition-drop")
        const claimConditions = [{
            startTime: new Date(),
            maxClaimable: 50_000,
            price: 0,
            maxClaimablePerWallet: 1,
            waitInSeconds: MaxUint256,
        }]

        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("Succesfully set claim condition");
    } catch (error) {
        console.log("Failed to set claim condition");
        
    }
})();