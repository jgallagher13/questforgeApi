const mongoose = require('mongoose');
const Schema = mongoose.Schema

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [String], // Array of strings for options
  correctAnswerIndex: { type: Number, required: true },
},{
    timestamps: true
});

const quizSchema = new Schema({
  title: { type: String, required: true },
  questions: [questionSchema], // Array of embedded question schemas
},{
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);
