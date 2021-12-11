import knex from "knex";
import config from "../../knexfile.js";
const db = knex(config.development);

async function getMerchant(merchantName) {
  let name = merchantName.toString().toLowerCase();

  return await db("merchant")
    .where("merchant_name", "=", name)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
}

export async function createMerchant(merchantInfo) {
  await db("merchant").insert({
    merchant_name: merchantInfo.merchant_name,
    merchant_phone: merchantInfo.merchant_phone,
    merchant_city: merchantInfo.merchant_city,
    merchant_state_abbreviation: merchantInfo.merchant_state_abbreviation,
    merchant_description: merchantInfo.merchant_description,
  });
}

// RETURNS MERCHANT IF IT EXISTS AND CREATES ONE IF IT DOES NOT
export function getMerchantOrCreateOne(merchantInfo) {
  const theMerchant = getMerchant(merchantInfo.merchant_name);

  // IF RUN MERCHANT RETURNS FALSE OR EMPTY RUN CREATE MERCHANT
  if ((theMerchant == null) | (theMerchant.length == 0)) {
    createMerchant(merchantInfo);
    theMerchant = getMerchant(merchantInfo);
  }

  return theMerchant;
}
