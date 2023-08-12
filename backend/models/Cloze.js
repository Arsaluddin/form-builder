const mongoose = require('mongoose');

const clozeQuestionSchema = new mongoose.Schema({
  
  question: String,
  options: [String],
});

const ClozeQuestion = mongoose.model('ClozeQuestion', clozeQuestionSchema);

module.exports = ClozeQuestion;
