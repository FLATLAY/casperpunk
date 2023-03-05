import axios from "axios"

/**
 * principal         -> address
 * asset_identifiers -> [address]
 * limit             -> max number of tokens to fetch
 * offset            -> index of first tokens to fetch
 */

const fetchPrincipalNFTs = (
  principal,
  asset_identifiers,
  limit,
  offset
) => {
  const url = "extended/v1/tokens/nft/holdings"
  return axios
    .get(url, {
      baseURL: "https://stacks-node-api.mainnet.stacks.co/",
      params: {
        principal,
        asset_identifiers,
        limit,
        offset,
      },
    })
    .then((response) => {
      return response.data.results.map((nft) => {
        return {
          address: nft.asset_identifier,
          id: nft.value.repr,
        }
      })
    })
}

const nonGatedPassesRules = async (
  principal,
  rule,
  redeemedNFTs
) => {
  const limit = 200
  const offset = 0
  const result = await fetchPrincipalNFTs(principal, rule.addresses, limit, offset)
  const NFTsOwned = result.map((item) => item.address)
  const NFTsPassed = []
  for (let i = 0; i < NFTsOwned.length; i += 1) {
    if (!redeemedNFTs.includes(NFTsOwned[i])) {
      NFTsPassed.push(result[i].id)
    }
  }

  return {
    passes: NFTsPassed.length >= rule.nftsCount,
    NFTsPassed: NFTsPassed.slice(0, rule.nftsCount),
  }
}


const getMaxDiscount = async (
  principal,
  ruleSet
) => {
  const maxDiscount = {
    discountPercentage: 0,
    NFTsPassed: [],
  }
  await Promise.all(
    ruleSet.rules.map(async (rule) => {
      const result = await nonGatedPassesRules(principal, rule, ruleSet.redeemedNFTs)
      if (result.passes && rule.discountPercentage > maxDiscount.discountPercentage) {
        maxDiscount.NFTsPassed = result.NFTsPassed
        maxDiscount.discountPercentage = rule.discountPercentage
      }
    })
  )

  return maxDiscount
}


const gatedPassesRules = async (
  principal,
  ruleSet
) => {
  const limit = 200
  const offset = 0

  let passes = false
  await Promise.all(
    ruleSet.rules.map(async (rule) => {
      if (!passes) {
        const result = await fetchPrincipalNFTs(principal, rule.addresses, limit, offset)
        const NFTsOwned = result.map((item) => item.address)
        const uniqueOnes = []

        for (let i = 0; i < NFTsOwned.length; i += 1) {
          if (!uniqueOnes.includes(NFTsOwned[i])) {
            uniqueOnes.push(NFTsOwned[i])
          }
        }

        if (rule.addresses.length === uniqueOnes.length) {
          passes = true
        }
      }
    })
  )

  return passes
}

export { getMaxDiscount, gatedPassesRules }
