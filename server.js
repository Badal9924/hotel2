const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
const workersRoutes = require('./routes/workersRoutes');
const menuRoutes = require('./routes/menuRouter');

app.use('/workers',workersRoutes);
app.use('/menu',menuRoutes);

app.listen(PORT, () => {
  console.log("Listening to the port number 5000");
});

