const mongoose = require('mongoose');
const CategoryQuestion = require('./Category');
const ClozeQuestion = require('./Cloze');
const ComprehensionQuestion = require('./Comprehension');

const questionSchema = new mongoose.Schema({
  type: String, // 'category', 'cloze', or 'comprehension'
  categoryQuestion: CategoryQuestion.schema, // Subdocument for category question
  clozeQuestion: ClozeQuestion.schema, // Subdocument for cloze question
  comprehensionQuestion: ComprehensionQuestion.schema, // Subdocument for comprehension question
});

const formSchema = new mongoose.Schema({
  formName: String,
  questions: [questionSchema], // Array of question subdocuments
});

const Form = mongoose.model('FormTemplate', formSchema);

module.exports = Form;
