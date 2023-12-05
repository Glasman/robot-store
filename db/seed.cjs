const client = require('./client.cjs');
const { createRobot } = require('./robots.cjs');
const { createTask } = require('./tasks.cjs');

 
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

    CREATE TABLE tasks (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30)
    );

    CREATE TABLE robottasks (
      robotid int REFERENCES robots(id),
      taskid int REFERENCES tasks(id)
    )
    `)
  } catch(err) {
    console.log(err)
  }
}

const dropTables = async() => {
  try {
    await client.query(`
    DROP TABLE IF EXISTS robottasks;
    DROP TABLE IF EXISTS robots;
    DROP TABLE IF EXISTS tasks;
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

  const bender = await createRobot('Bender', 'bending unit', "Mom's friendly robot corp", 'https://imgur.com/t/bender/o4jg3M4', 1, false, '2003-12-04')
  const helpbot = await createRobot('Helpbot', 'helping unit', "Mom's friendly robot corp", "https://i.imgur.com/V66IwWZ.jpeg", 60, true, '2023-12-04')
  const roboman = await createRobot('Roboman', 'friend unit', 'Glasman Roboco', 'https://imgur.com/t/megaman/iCPzV66', 600, true, '2020-12-01')
  const roomba = await createRobot('Roomba', 'vacuum unit', 'iRobot', 'https://i.imgur.com/0lqkPqV.jpeg', 12, false, '1999-12-31')

  const bending = await createTask('Bending')
  const vacuuming = await createTask('Vacuuming')
  const friend = await createTask('Being a friend')
  client.end();
}

syncAndSeed();