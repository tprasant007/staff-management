const express = require("express");
const { getSchedules, postSchedule } = require("../controller/schedule");
const router = express.Router();

router.get("/", getSchedules);
router.post("/", postSchedule);

module.exports = router;
