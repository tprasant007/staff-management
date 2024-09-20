const express = require("express");
const { createAdmin } = require("../controller/admin");

const router = express.Router();

router.post("/signup", createAdmin);


module.exports = router;