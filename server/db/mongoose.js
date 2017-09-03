var mongoose = require('mongoose');

var databaseName = `TodoApp`;
const connectionString = `mongodb://localhost:27017/${databaseName}`;

mongoose.Promise = global.Promise;
mongoose.connect(connectionString);

module.exports = {mongoose};