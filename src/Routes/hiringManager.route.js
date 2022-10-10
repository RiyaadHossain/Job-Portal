const express = require('express');
const router = express.Router()
const controller = require("../Controller/HiringManager.controller")

router.post('/jobs', controller.createJob)
router.get('/manager/jobs', controller.getAllJobs)
router.get('/manager/jobs/:id', controller.getJob)
router.patch('/jobs/:id', controller.updateJob)

module.exports = router