const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://root:example@database:27017";
const client = new MongoClient(uri);

module.exports = client;