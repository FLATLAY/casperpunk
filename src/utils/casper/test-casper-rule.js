import { getMaxDiscount, gatedPassesRules } from "./check_nft";
let ruleset = {
  rules: [
    {
      addresses: [
        "730583953e102f27dcdae854aeff0647363a9e47411d8f81684a2832852bd1f5",
      ],
      discountPercentage: 10,
      nftsCount: 3,
      description: "description",
      _id: "637a043fa0581bf9d5c568c5",
    },
    {
      addresses: [
        "0cf13d01ecda84e56cc30d3bb19dc08b67a02f161ad94ece9eb8dd2c410222c0",
        "730583953e102f27dcdae854aeff0647363a9e47411d8f81684a2832852bd1f5",
      ],
      discountPercentage: 100,
      nftsCount: 44,
      description: "description",
      _id: "637a043fa0581bf9d5c568c5",
    },
    {
      addresses: [
        "0cf13d01ecda84e56cc30d3bb19dc08b67a02f161ad94ece9eb8dd2c410222c0",
        "730583953e102f27dcdae854aeff0647363a9e47411d8f81684a2832852bd1f5",
      ],
      discountPercentage: 80,
      nftsCount: 4,
      description: "description",
      _id: "637a043fa0581bf9d5c568c5",
    },
  ],
  redeemedNFTs: [],
  gated: false,
};

let account_hash =
  "b3f0d1a8e3130a33b81380b79091de89f49045e4d9ce391f0132496e1d6c14be"; // <-- you should get this from account_info object

let max_discount = await getMaxDiscount(account_hash, ruleset);
console.log("Max discount percentage : ", max_discount.discountPercentage);
console.log("NFTs passed : ", max_discount.NFTsPassed);

let ruleset2 = {
  _id: "636b61c5422f885bc43bacf0",
  collectionID: "636ac267913374ba96de3d0b",
  rules: [
    {
      addresses: [
        "0cf13d01ecda84e56cc30d3bb19dc08b67a02f161ad94ece9eb8dd2c410222c0",
      ],
      discountPercentage: null,
      nftsCount: 2,
      description: "asdfasdf",
      _id: "63c549c4a2bf46798e499531",
    },
  ],
  redeemedNFTs: [],
  gated: true,
  ownerID: "636ac1e6a8a01cfc350ac117",
  webUrl: "behdad.com",
  createdAt: "2022-11-09T08:16:05.360Z",
  updatedAt: "2023-01-16T12:57:40.669Z",
  __v: 0,
};

if (await gatedPassesRules(account_hash, ruleset2)) {
  console.log("You can pass the gate");
} else {
  console.log("You can't pass the gate");
}

//Some test cases
//account_hash : 8deabd2b54f75f0c58f9c23ce184d4b450a5faf1a6b963a0142a10d00e1932f1 : 10%  first rule, has 3 tokens on 730583953e102f27dcdae854aeff0647363a9e47411d8f81684a2832852bd1f5
//account_hash : 54de9bade558dd9422276f0b58e7aff43cb77c3bf303135dbbd9c112d7d82b33 : 100% second rule, has 44 tokens on 0cf13d01ecda84e56cc30d3bb19dc08b67a02f161ad94ece9eb8dd2c410222c0
//account_hash : b3f0d1a8e3130a33b81380b79091de89f49045e4d9ce391f0132496e1d6c14be : 80%  third rule, has 4 tokens on 730583953e102f27dcdae854aeff0647363a9e47411d8f81684a2832852bd1f5
