import faker from "faker";
import { createMerchant } from "../src/models/merchantsModel.mjs";

var merchants = [
  {
    merchant_name: faker.company.companyName().toLowerCase(),
    merchant_phone: faker.phone.phoneNumber("##########"),
    merchant_city: faker.address.cityName().toLowerCase(),
    merchant_state_abbreviation: faker.address.stateAbbr().toLowerCase(),
    merchant_description: "payroll",
  },
];

for (let i = 0; i < 400; i++) {
  let merchant = {
    merchant_name: faker.company.companyName().toLowerCase(),
    merchant_phone: faker.phone.phoneNumber("##########"),
    merchant_city: faker.address.cityName().toLowerCase(),
    merchant_state_abbreviation: faker.address.stateAbbr().toLowerCase(),
    merchant_description: faker.commerce.department().toLowerCase(),
  };

  merchants.push(merchant);
}

export function seedMerchants() {
  merchants.forEach((merchant) => {
    createMerchant(merchant);
  });
}
