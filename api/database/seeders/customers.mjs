// This seeder creates default 3 default customers
import { createNewCustomer } from "../../src/models/customerModel.mjs";
var customerData = [
  {
    first_name: "Emil",
    last_name: "Nienow",
    email: "enienow@hotmail.com",
    password: "purple-lizard",
  },
  {
    first_name: "Waylon",
    last_name: "Torphy",
    email: "wtorphy@yahoo.com",
    password: "yellow-finch",
  },
  {
    first_name: "Serena",
    last_name: "Herzog",
    email: "sherzog@yahoo.com",
    password: "blue-flamingo",
  },
];

export function seedCustomers() {
  customerData.forEach((customer) => {
    createNewCustomer(customer);
  });
}
