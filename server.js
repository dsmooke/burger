const express = require("express");
const exphbs = require("express-handlebars");

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3360;

const app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

// Routes

// Listener
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
