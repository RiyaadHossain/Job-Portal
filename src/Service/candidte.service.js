const Job = require("../Model/Job")

exports.getAllJobsService = async (filter, sort) => {
    const jobs = await Job.find(filter).sort(sort)
    return jobs
}

exports.getJobService = async (jobId) => {
    const job = await Job.findById(jobId).populate("postedBy.id")
    return job
}

exports.applyJobService = async (jobInfo) => {
    const apply = await Job.create(jobInfo)
    return apply
}