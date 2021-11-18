import faker from "faker";

var merchants = [
  {
    merchant_name: faker.company.companyName(),
    merchant_phone: faker.phone.phoneNumber("##########"),
    merchant_location: faker.address.cityName(),
    merchant_description: "Payroll",
  },
];

for (let i = 0; i < 400; i++) {
  let merchant = {
    merchant_name: faker.company.companyName().toLowerCase(),
    merchant_phone: faker.phone.phoneNumber("##########"),
    merchant_location: faker.address.cityName().toLowerCase(),
    merchant_description: faker.commerce.department().toLowerCase(),
  };

  merchants.push(merchant);
}

export function seedMerchants() {
  console.log("Merchants done");
  // merchants.forEach((merchant) => {});
}
