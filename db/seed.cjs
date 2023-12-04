const client = require('./client.cjs');
const { createRobot } = require('./robots.cjs');

const createTables = async() => {
  try{
    await client.query(`
    CREATE TABLE robots (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      model VARCHAR(50) UNIQUE NOT NULL,
      company VARCHAR(50) NOT NULL,
      imgUrl VARCHAR(200),
      warranty_months INT,
      is_child_safe BOOLEAN,
      release_date DATE
    );
    `)
  } catch(err) {
    console.log(err)
  }
}

const dropTables = async() => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS robots;
    `)
  } catch(err) {
    console.log(err)
  }
}

const syncAndSeed = async() => {
  try {
    await client.connect();
    console.log('weve made contact!')
  } catch(err) {
    console.log(err)
  }

  await dropTables();
  console.log('tables dropped')
  
  await createTables();
  console.log('tables created')

  const bender = await createRobot('Bender', 'bending unit', 'moms friendly robot corp', 'https://imgur.com/t/bender/o4jg3M4', 1, false, '2023-12-04')
}

syncAndSeed();