const Job = require("../Model/Job")

exports.getAllJobsService = async (filter, sort) => {
    const jobs = await Job.find(filter).sort(sort)
    return jobs
}

exports.getJobService = async (jobId) => {
    const job = await Job.findById(jobId).populate("postedBy.id")
    return job
}

exports.applyJobService = async (jobId, applicantId) => {
    const apply = await Job.findByIdAndUpdate(jobId, { $push: { appliedCandidate: applicantId } }, {runValidators: true, new: true})
    return apply
}

exports.findJobById = async (jobId) => {
    const job = await Job.findById(jobId)
    return job
}