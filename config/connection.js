const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMediaDB';

connect(connectionString);

module.exports = connection;






