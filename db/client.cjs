const { Client } = require('pg');

const connection = new Client(process.env.DATABASE_URL || 'postgres://localhost:5432/robotstore');
const client = new Client(connection);

module.exports = client;