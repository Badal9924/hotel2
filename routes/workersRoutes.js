const express = require('express');
const router = express.Router();
const workers = require('../models/workers')

// POST route to add a worker :)
router.post("/", async (req, res) => {
  try {
    const data = new workers(req.body);
    const response = await data.save();
    console.log("Data saved sucessfully :)");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error......");
    res.status(500).json({ error: "Internal Server Error :) " });
  }
});


// GET route for workers :)
router.get("/", async (req, res) => {
  try {
    const data = await workers.find({});
    console.log("Data fetched sucessfully :) ");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error......");
    res.status(500).json({ error: "Internal Server Error :) " });
  }
});



// GET method dynamic data :)
router.get("/:workType",async (req, res) => {
  try {
    const work = req.params.workType;
    if (work == "sef" || work == "waiter" || work == "manager") {
      const response = await workers.find({work : work})
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type :( " });
    }
  } catch (error) {
    console.log("Error......");
    res.status(500).json({ error: "Internal Server Error :) " });
  }
});


module.exports = router;