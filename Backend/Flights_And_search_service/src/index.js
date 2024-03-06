// importing related express configuartion
const express = require("express");
const bodyParser = require("body-parser");

// imports realated to application level configuration
const { PORT } = require("./config/serverconfig");


// purpose : function to start and boot our server
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();

// Path: src/config/serverconfig.js
