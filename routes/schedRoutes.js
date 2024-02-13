const express = require("express");
const router = express.Router();
const schedController = require("/controller/schedController");

// get sched
router.get("/", schedController.sched_get);

// post sched
router.post("/", schedController.sched_post);

// delete sched
router.delete("/:id", schedController.sched_delete);

module.exports = router;
