const express = require('express');
const controller = require("../Controller/candidate.controller");
const router = express.Router()

router.get("/jobs", controller.getAllJobs)
router.get("/jobs/:id", controller.getJob)
router.post("/jobs/:id/apply", controller.applyJob)

module.exports = router