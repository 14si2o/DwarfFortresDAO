import {AddressZero} from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";


(async () => {
    try{
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "Dwarf Fortress Membership",
            description: "a DAO for Dwarf Fortress enthusiasts",
            image: readFileSync ("scripts/assets/dwarf.jpeg"),
            primary_sale_recipient: AddressZero,
        });

        const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

        const metadata = await editionDrop.metadata.get();

        console.log(
            "Successfully deployed editionDrop contract, address:", editionDropAddress
        )
        console.log("✅ editionDrop metadata:", metadata);
    } catch (error){
        console.log("failed to deploy editionDrop contract", error);
    }
})();
