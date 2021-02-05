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

insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    
    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
        if (err) {
            throw err;
        }

        callback(result);
    });
},

updateOne();

module.exports = ORM;

//(referenced unit13-activity17-orm.js)