import sdk from './1-initialize-sdk.js';


(async () =>{
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "Dwarf DAO",
            voting_token_address: "0x8f005938701D96778B7d9E2d3dBE90E6DCfACae8",
            voting_delay_in_blocks: 0,
            voting_period_in_blocks: 6570,
            voting_quorum_fraction: 0,
            proposal_token_threshold: 0,
        });

        console.log(
            "Successfully deployed vote contract, address:", voteContractAddress
        );
    } catch (error) {
        console.error("failed to deploy vote contract", error);
        
    }
})();