const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const burgerObj = {
      burger: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

// Export routes for server.js to use
module.exports = router;

//(referenced unit13-activity17-catsController.js)
