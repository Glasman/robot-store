const client = require ('./client.cjs');


const createCustomer = async(name, email) => {
  try{
const {rows: [ customer ]} = await client.query(`
INSERT INTO customers (name, email)
VALUES($1, $2)
RETURNING *;
`, [name, email])
return customer;
  } catch(err) {
    console.log(err)
  }
}
module.exports = {
  createCustomer
}