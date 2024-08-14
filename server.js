const express = require("express");
const mysql = require("mysql2");

const mysql_config = require("./mysql_config.js");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

const connection = mysql.createConnection(mysql_config);
