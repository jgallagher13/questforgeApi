const Quiz = require('../models/quiz')

async function create(req, res, next) {
    try {
        const quiz = await Quiz.create(req.body)
        res.status(201).json(quiz)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'something went wrong' })
    }
}

module.exports = {
    create
}