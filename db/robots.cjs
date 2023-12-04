const client = require('./client.cjs');

const createRobot = async(name, model, company, imgUrl, warranty_months, is_child_safe, release_date) => {
  try {
    const {rows: [ robot ]} = await client.query(`
    INSERT INTO robots (name, model, company, imgUrl, warranty_months, is_child_safe, release_date)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
    `, [name, model, company, imgUrl, warranty_months, is_child_safe, release_date])
    return robot;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createRobot
}