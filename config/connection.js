const mongoose = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMadiaDB';

connect(connectionString);

module.exports = connection;
