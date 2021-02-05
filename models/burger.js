const ORM = require("../config/orm.js");
// Import the ORM to create functions that will interact with the database

// Write code that will call the ORM functions (selectAll, insertOne, updateOne)

const burger = {
    selectAll(callback) {
        ORM.all('burger', (res) => callback(res));
    },

    insertOne(cols, vals, callback) {
        ORM.insertOne('burger', cols, vals, (res) => callback(res));
    },

    updateOne()
}
module.exports = burger;
