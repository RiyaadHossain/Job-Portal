const express = require('express');
const router = express.Router()
const controller = require("../Controller/user.controller")

router.post('/signup', controller.signUp)
router.post('/signin', controller.singIn)
router.post('/me', controller.me)

module.exports = router