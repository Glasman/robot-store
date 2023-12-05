const express = require('express');
const app = express();

const client = require('./db/client.cjs');
client.connect();

app.get('/', (req, res, next) => {
  res.send("What's cracking, world?")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));