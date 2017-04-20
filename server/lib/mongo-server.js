"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

module.exports = function(callback) {

  MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`);
    callback(db);
  });
};
