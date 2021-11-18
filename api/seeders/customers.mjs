// This seeder creates default 3 default customers
import faker from "faker";
import { createNewCustomer } from "../src/models/customerModel.mjs";

export function seedCustomers() {
  // Generates fake customer data
  let customerData = [
    {
      first_name: faker.name.firstName().toLowerCase(),
      last_name: faker.name.lastName().toLowerCase(),
      email: "customer01@hotmail.com",
      password: "purple-lizard",
    },
    {
      first_name: faker.name.firstName(2).toLowerCase(),
      last_name: faker.name.lastName(2).toLowerCase(),
      email: "customer02@yahoo.com",
      password: "yellow-finch",
    },
    {
      first_name: faker.name.firstName().toLowerCase(),
      last_name: faker.name.lastName().toLowerCase(),
      email: "sherzog@yahoo.com",
      password: "blue-flamingo",
    },
  ];

  console.log(customerData);
  // Adds fake data to database
  customerData.forEach((customer) => {
    createNewCustomer(customer);
  });
}
