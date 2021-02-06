// const connection = require("../config/connection.js");
const ORM = require("../config/orm.js");
// Import the ORM to create functions that will interact with the database

// Write code that will call the ORM functions (selectAll, insertOne, updateOne)

const burger = {
  selectAll(callback) {
    ORM.selectAll("burgers", (res) => callback(res));
  },

  insertOne(cols, vals, callback) {
    ORM.insertOne("burgers", cols, vals, (res) => callback(res));
  },

  updateOne(objColVals, condition, callback) {
    ORM.updateOne("burgers", objColVals, condition, (res) => callback(res));
  },
};

module.exports = burger;

//(referenced unit13-activity17-cat.js)
