"use strict";
const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 8080;
const _app_folder = 'dist/cftest';

const app = express();


// ---- SERVE STATIC FILES ---- //
app.use(express.static(path.join(__dirname, '/dist/cftest/')))

// ---- SERVE APLICATION PATHS ---- //
app.all(['*'], (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/cftest/"));
})
// ---- START UP THE NODE SERVER  ----
app.listen(PORT, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + PORT);
});