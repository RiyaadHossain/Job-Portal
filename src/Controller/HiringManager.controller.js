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

}

exports.getJob = async (req, res) => {

}

exports.updateJob = async (req, res) => {

}