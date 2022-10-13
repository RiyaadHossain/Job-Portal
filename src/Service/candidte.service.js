const Job = require("../Model/Job")
const Candidate = require("../Model/Candidate")

exports.getAllJobsService = async (filter, sort) => {
    const jobs = await Job.find(filter).sort(sort)
    return jobs
}

exports.getJobService = async (jobId) => {
    const job = await Job.findById(jobId).populate("postedBy.id")
    return job
}

exports.applyJobService = async (jobId, applicantId, resume) => {
    await Job.findByIdAndUpdate(jobId, { $push: { appliedCandidate: applicantId } }, {runValidators: true, new: true})
    const apply = await Candidate.findOneAndUpdate({ user: applicantId }, { $push: { appliedFor: jobId, resume } }, { runValidators: true, new: true })
    return apply
}

exports.findJobById = async (jobId) => {
    const job = await Job.findById(jobId)
    return job
}