const express = require('express');
const controller = require("../Controller/candidate.controller");
const { authorize } = require('../Middleware/authorization');
const { verifyToken } = require('../Middleware/verifyToken');
const router = express.Router()

router.get("/jobs", controller.getAllJobs)
router.get("/jobs/:id", controller.getJob)
router.post("/jobs/:jobId/apply", verifyToken, authorize('candidate'), controller.applyJob)

module.exports = router