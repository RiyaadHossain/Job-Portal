const service = require('../Service/user.service')

exports.signUp = async (req, res) => {
    const userInfo = req.body

    try {

        const userExist = service.userExist(userInfo.email)
        if (userExist) {
            return res.status(400).json({ status: 'Failed', error: "User already Exist with the same email" })
        }

        const user = await service.signUpService(userInfo)
        res.status(400).json({ status: 'Failed', message: "User signed up successfully", data: user })

    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

exports.singIn = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}

exports.me = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message })
    }
}