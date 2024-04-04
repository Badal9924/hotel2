const express = require('express');
const router = express.Router();
const menus = require('../models/menu');

// POST method  ( menu ) :)

router.post("/",async (req,res)=>{
    try {
      const newMenu = new menus(req.body);
      const response = await newMenu.save();
      console.log("Data saved sucessfully :)");
      res.status(200).json(response);
    } catch (error) {
      console.log("Error......");
      res.status(500).json({ error: "Internal Server Error :) " });
    }
})


// GET method  ( menu ) :)

router.get('/',async (req,res)=>{
    try {
      const data = await menus.find();
      console.log("Data fetched sucessfully :) ");
      res.status(200).json(data);
    } catch (error) {
      console.log("Error......");
      res.status(500).json({ error: "Internal Server Error :) " });
    }
})

module.exports = router;