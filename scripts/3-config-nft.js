import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x937dB0C3B07D3C87dD7bEC0146F2c5866b8Cc05c", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Dwarf Fortress Key",
        description: "This NFT will give you access to Dwarf Fortress DAO!",
        image: readFileSync("scripts/assets/dwarfKey.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();