const express = require('express')
const router = express.Router()
const quizzesCtrl = require('../controllers/quizzes')

router.post('/', quizzesCtrl.create)

module.exports = router