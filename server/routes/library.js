const express = require("express");
const libraryController = require("../controlers/libraryController");
const libraryUpdatecontroller = require("../controlers/libraryUpdateController");

const router = express.Router();

// Gets library
router.get("/", libraryController);

// Updates library
router.get("/update", libraryUpdatecontroller);

module.exports = router;
