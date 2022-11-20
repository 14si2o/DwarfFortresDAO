import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const vote = await sdk.getContract("0x6d4f3c894e98f09B533825ba8E12592a161b8FB1","vote");
        const token = await sdk.getContract("0x8f005938701D96778B7d9E2d3dBE90E6DCfACae8", "token");
        await token.roles.grant("minter", vote.getAddress());
        console.log("Successfully gave vote contract permissions to act on token contract");
    } catch (error) {
        console.error("failed to grant vote contract permission on token contract",error);
        process.exit(1);
        
    }

    try {
        const vote = await sdk.getContract("0x6d4f3c894e98f09B533825ba8E12592a161b8FB1","vote");
        const token = await sdk.getContract("0x8f005938701D96778B7d9E2d3dBE90E6DCfACae8", "token");
        const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

        const ownedAMount= ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAMount/100*90);

        await token.transfer (vote.getAddress(), percent90);

        console.log ("Successfully transferred " + percent90 + " tokens to vote contract");
        
        
    } catch (error) {
        console.error("failed to transfer tokens to the vote contract", error);
    }
})();