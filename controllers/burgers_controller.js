const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burgers.selectAll((data) => {
    const burgerObj = {
      burger: data,
    };
    console.log(burgerObj);
    res.render("index", {
      burger: data,
    });
  });
});

router.post("/api/burger", (req, res) => {
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burgers.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, the the ID must not exist, so 404 error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use
module.exports = router;

//(referenced unit13-activity17-catsController.js)
