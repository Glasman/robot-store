const client = require('./client.cjs');

const createRobotCustomer = async(robotid, customerid) => {
  try {
    const {rows: [ robotcustomer ]} = await client.query(`
    
    INSERT INTO robotcustomers (robotid, customerid)
    VALUES ($1, $2)
    RETURNING *;
    `,[robotid, customerid]);
    return robotcustomer;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createRobotCustomer
}