const express = require("express");
const { getSchedules, postSchedule, getSchedule } = require("../controller/schedule");
const router = express.Router();

router.get("/", getSchedules);
router.post("/", postSchedule);
router.get("/:id", getSchedule)

module.exports = router;
