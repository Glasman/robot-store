const express = require('express');
const app = express();

const client = require('./db/client.cjs');
client.connect();

app.use('/assets', express.static(__dirname + '/dist/assets'))

app.get('/', (req, res, next) => {
  res.type('text/html');
  res.sendFile(__dirname + '/dist/index.html')
})

app.use('/api', require('./api/index.cjs'));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));