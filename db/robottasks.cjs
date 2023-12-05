const client = require('./client.cjs');

const createRobotTask = async(robotid, taskid) => {
  try {
    const {rows: [ robottask ]} = await client.query(`
    
    INSERT INTO robottasks (robotid, taskid)
    VALUES ($1, $2)
    RETURNING *;
    `,[robotid, taskid]);
    return robottask;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createRobotTask
}