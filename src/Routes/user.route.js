const express = require('express');
const router = express.Router()

router.all('/').get().post()

module.exports = router