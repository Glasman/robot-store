const client = require('./client.cjs');

const createrobottask = async(robotid, taskid) => {
  try {
    const {rows: [ robottask ]} = await client.query(`
    
    INSERT INTO robottasks (robotid, taskid)
    VALUES ($1, $2)
    RETURNING *;
    `);
    return robottask;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createrobottask
}