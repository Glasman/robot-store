const client = require('./client.cjs');

const syncAndSeed = async() => {
  try {
    await client.connect();
    console.log('weve made contact!')
  } catch(err) {
    console.log(err)
  }
}

syncAndSeed();