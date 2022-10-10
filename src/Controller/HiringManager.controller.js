const service = require("../Service/HiringManager.service")
const { findUserByEmail } = require("../Service/user.service")

exports.createJob = async (req, res) => {
    let jobInfo = req.body

    try {
        const user = await findUserByEmail(req.user.email)
        jobInfo = { ...jobInfo, postedBy: { name: user.name, id: user._id } }
        const job = await service.createJobService(jobInfo)

        res.status(201).json({ status: 'Success', message: "Job created successfully", data: job })
    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

exports.getAllJobs = async (req, res) => {

    try {
        const jobs = await service.getJobsService()
        res.status(201).json({ status: 'Success', message: "Get Job data successfully", data: jobs })

    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

exports.getJob = async (req, res) => {
    const { id } = req.params 
    
    try {
        const job = await service.getJobService(id, req.user._id)

        if (!job) {
            return res.status(400).json({ status: 'Fail', message: "No Job Data found!" })
        }

        res.status(500).json({ status: 'Success', data: job })
    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

exports.updateJob = async (req, res) => {
    const { id } = req.params
    const jobInfo = req.body
    
    try {
        const job = await service.updateJobService(id, req.user._id, jobInfo)
        if (!job) {
            return res.status(400).json({ status: 'Fail', message: "With this manager, No Job Data found!" })
        }

        res.status(500).json({ status: 'Success', data: job })
    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}