const Job = require("../Model/Job")

exports.createJobService = async jobInfo => {
    const job = await Job.create(jobInfo)
    return job
}