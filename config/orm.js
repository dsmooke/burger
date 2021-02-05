const connection = require("./connection");

// Object for all our SQL statement functions, cb: callback argument
const orm = {
    selectAll(tableInput, callback) {
        const queryString = `SELECT * FROM ${tableInput};`; 
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

insertOne();

updateOne();

module.exports = ORM;
