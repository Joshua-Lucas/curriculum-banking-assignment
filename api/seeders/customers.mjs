// This seeder creates by default 3 default customers
import faker from "faker";
import { createNewCustomer } from "../src/models/customersModel.mjs";

export function seedCustomers() {
  // Generates fake customer data
  let customerData = [
    {
      first_name: faker.name.firstName().toLowerCase(),
      last_name: faker.name.lastName().toLowerCase(),
      email: "good_vibz1966@gmail.com",
      password: "purple-lizard",
    },
    {
      first_name: faker.name.firstName(2).toLowerCase(),
      last_name: faker.name.lastName(2).toLowerCase(),
      email: "surf-usa1963@yahoo.com",
      password: "yellow-finch",
    },
    {
      first_name: faker.name.firstName().toLowerCase(),
      last_name: faker.name.lastName().toLowerCase(),
      email: "kokomo_1988@hotmail.com",
      password: "blue-flamingo",
    },
  ];

  // Adds fake data to database
  customerData.forEach((customer) => {
    createNewCustomer(customer);
  });
}
