const mysql = require("mysql");

const PORT = process.env.PORT || 3360;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: PORT,
  password: "password",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to Database at port: ${PORT}`);
});
