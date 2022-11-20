import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x0a77a4d1dA21b78CaBd5AD8394Fe71a6189792B6", "edition-drop");
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