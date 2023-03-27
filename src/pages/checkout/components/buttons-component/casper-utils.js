import { CLPublicKey, CLU512, DeployUtil } from "casper-js-sdk";
import * as casper_consts from './constants'

/**
 * 
 * @param {DeployUtil.Deploy} deploy_object 
 */
async function transfer_details(deploy_object) {    
    if (!deploy_object.isTransfer()){
        return false;
    }
    let amount = Number(deploy_object.session.asTransfer().args.args.get("amount").data)/(1000000000);
    let target = CLPublicKey.fromEd25519(deploy_object.session.asTransfer().args.args.get("target").data);
    let sender = deploy_object.header.account.toHex();
    return{
        'sender' : sender,
        'amount_in_cspr' : amount,
        'target' : target.toHex()
    }
}
/**
 * 
 * @param {number} usd_amount is the amount of USDs you want to convert to motes (each mote is 10^-9 CSPR) 
 * @returns  the amount of motes that are equal to $usd_amount dollars 
 */
async function getCasperRatio(usd_amount){
    let js = (await axios.post("https://apiv2.droplinked.com/payment/casper/price",{
        "usd_amount" : usd_amount
    })).data.data;
    return new CLU512(js);   
}

async function customerPayment1(sender_publicKey, reciver_publicKey, amount_in_usd){
    let amount_of_motes = (await getCasperRatio(amount_in_usd));
    const toPublicKey = CLPublicKey.fromHex(reciver_publicKey);
    const fromPublicKey = CLPublicKey.fromHex(sender_publicKey);
    const deploy = DeployUtil.makeDeploy(
        new DeployUtil.DeployParams(fromPublicKey, casper_consts.network , 1, 1800000),
        DeployUtil.ExecutableDeployItem.newTransfer(amount_of_motes.value(), toPublicKey, null, 0),
        DeployUtil.standardPayment(100000000)
    );
    const json = DeployUtil.deployToJson(deploy);
    const signature = await window.casperlabsHelper.sign(json, sender_publicKey,reciver_publicKey).catch((reason)=>{
        console.log("cancelled by ueser");
        return "cancelled";
    });
    const deployObject = DeployUtil.deployFromJson(signature);
    const signed = await casper_consts.casperClient.putDeploy(deployObject.val);
    let transfer_detail = await transfer_details(deployObject.val);
    return {
        'deploy_hash' : signed,
        'sender' : transfer_detail.sender,
        'target' : transfer_detail.target,
        'cspr_amount' : transfer_detail.amount_in_cspr
    }
}
export { customerPayment1 } 

// reciver_publicKey : 01f69e226f7273624489e5a4f0ec5ee623232d0ce75d4d488b5829b54d8e1a14ca

// usage : 
//console.log(await customerPayment1("0144f5adf499591351807bc83490314262bd6846beee80a16269a83c9901ecec8a", "01eb9b0e8e73de521f86f40666d985529ae316aff5ace6c4049a42364f442e0e76", 1));
