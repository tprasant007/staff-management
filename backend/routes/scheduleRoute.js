const express = require("express");
const {
  getSchedules,
  postSchedule,
  updateSchedule,
} = require("../controller/schedule");
const router = express.Router();

router.get("/", getSchedules);
router.post("/", postSchedule);
router.patch("/:id", updateSchedule);

module.exports = router;
