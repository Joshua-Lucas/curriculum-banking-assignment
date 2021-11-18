const accounts = [
  {
    account_number: Math.random().toString().slice(2, 11),
    routing_number: 136090340,
    account_type: 1,
    customer_id: 1,
  },
  {
    account_number: Math.random().toString().slice(2, 11),
    routing_number: 136090340,
    account_type: 1,
    customer_id: 2,
  },
  {
    account_number: Math.random().toString().slice(2, 11),
    routing_number: 136090340,
    account_type: 1,
    customer_id: 2,
  },
];

export function seedAccounts() {
  console.log(" Accounts done");
  // accounts.forEach((account) => {
  // });
}
