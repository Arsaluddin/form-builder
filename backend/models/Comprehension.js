const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
});

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [optionSchema],
});

const comprehensionSchema = new mongoose.Schema({
  id: String,
  passage: String,
  questions: [questionSchema],
});

const Comprehension = mongoose.model('Comprehension', comprehensionSchema);

module.exports = Comprehension;
