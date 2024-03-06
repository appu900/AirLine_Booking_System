// importing related express configuartion
const express = require("express");
const bodyParser = require("body-parser");

// imports realated to application level configuration
const { PORT } = require("./config/serverconfig");
const { City } = require("../src/models/index");
const CityRepository = require("./repository/City-repository");


// purpose : function to start and boot our server
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    // const response = await CityRepository.createCity({ name: "bhubaneswar" });
    // console.log(response);
  });
};

setupAndStartServer();

// Path: src/config/serverconfig.js
