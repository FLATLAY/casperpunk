import { CasperClient } from 'casper-js-sdk';
const apiUrl = "https://cors-anywhere.herokuapp.com/http://188.40.47.161";
const casperClient = new CasperClient(apiUrl+":7777/rpc");
let get_dictionary_item = async function(vars, contract_address) {
    let stateRootHash  = await casperClient.nodeClient.getStateRootHash();
    let dictionaryItem = await casperClient.nodeClient.getDictionaryItemByName(stateRootHash, "hash-"+contract_address, vars.dictionaryUref , vars.dictionaryItemKey).catch( (reason) => {
        return null;
    });
    if (dictionaryItem==null){
        return null;
    }
    return dictionaryItem.CLValue?.data.val.data;
};

/**
 * Gets the amount of tokens owned by the account_hash in the contract_address
 * @param {string} contract_address 
 * @param {string} owner_account_hash 
 * @returns 
 */
async function get_address_amount(contract_address, owner_account_hash){
    return Number(await get_dictionary_item({
        dictionaryUref:"balances",
        dictionaryItemKey:owner_account_hash
    } , contract_address));
}

/**
 * @param {string} account_hash 
 * @param {{addresses : [string], discountPercentage: number, nftsCount : number , description:string, _id : string}} rule 
 * @param {*} reedemedNFTs 
 * @returns 
 */
async function nonGatedPassesRules(
    account_hash,
    rule,
    reedemedNFTs,
){
    let total_amount = 0;
    let NFTsPassed = [];
    for (let i = 0 ; i < rule.addresses.length; i++){
        let contract_address = rule.addresses[i];
        total_amount += await get_address_amount(contract_address, account_hash);
        if (!reedemedNFTs.includes(contract_address)){
            NFTsPassed.push(contract_address);
        }
    }
    return {
        passes : total_amount >= rule.nftsCount,
        NFTsPassed : NFTsPassed
    }
}
/**
 * Checks if the account_hash passes any of the rules in the ruleset sorted by discount percentage
 * @param {string} account_hash 
 * @param {{redeemedNFTs: [*], gated : boolean , rules: [{addresses : [string], discountPercentage: number, nftsCount : number , description:string, _id : string}]}} ruleset 
 * @returns { Promise<{discountPercentage : number, NFTsPassed : [string]}> } the discount percentage and the NFTs that passed the rules
 */
async function getMaxDiscount(account_hash, ruleset){
    // console.log('account_hash ' ,account_hash)
    // console.log('ruleset ' ,ruleset)
    const max_discount = {
        discountPercentage :0,
        NFTsPassed : []
    };
    ruleset.rules.sort((a,b) => {
        return b.discountPercentage - a.discountPercentage;
    });
    for (let i = 0 ; i < ruleset.rules.length; i++){
        let rule = ruleset.rules[i];
        const result = await nonGatedPassesRules(account_hash, rule, ruleset.redeemedNFTs);
        if (result.passes){
            return {
                discountPercentage: rule.discountPercentage,
                NFTsPassed : result.NFTsPassed
            };
        }
    }
    return max_discount;
}
/**
 * 
 * @param {string} account_hash 
 * @param {{redeemedNFTs: [*], gated : boolean , rules: [{addresses : [string], discountPercentage: number, nftsCount : number , description:string, _id : string}]}} ruleset 
 * @returns {Promise<boolean>} true if the account_hash passes any of the rules in the ruleset 
*/
const gatedPassesRules = async(
    account_hash,
    ruleset
) => {
    let passes = false;
    for (let i = 0 ; i < ruleset.rules.length; i++){
        let rule = ruleset.rules[i];
        let total_amount = 0;
        for (let j = 0 ; j < rule.addresses.length; j++){
            let contract_address = rule.addresses[j];
            let amount = await get_address_amount(contract_address, account_hash);
            total_amount += amount;
        }
        passes = total_amount >= rule.nftsCount;
        if (passes)
            break;
    }
    return passes;
}

export { getMaxDiscount, gatedPassesRules }