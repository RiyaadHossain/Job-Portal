const User = require("../Model/User")
const Candidate = require("../Model/Candidate")
const HiringManager = require("../Model/HiringManager")

exports.userExist = async (email) => {
    const result = await User.create({ email })
    return result
}

exports.signUpService = async (userInfo) => {

    const user = await User.create(userInfo)

    if (userInfo.status === 'hiring-manager') {
        await HiringManager.create({ name: user.name, user: user._id })
    } else if (userInfo.status === 'candidate') {
        await Candidate.create({ name: user.name, user: user._id })
    }

    return user
}
