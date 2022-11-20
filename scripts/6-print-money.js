import sdk from "./1-initialize-sdk.js";
const address = "0x8f005938701D96778B7d9E2d3dBE90E6DCfACae8";

(async() => {
    try {
        const token = await sdk.getContract(address,"token");
        const amount = 1_000_000;
        await token.mint(amount);
        const totalSupply = await token.totalSupply();

        console.log("There now is", totalSupply.displayValue, "$DWARF in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();