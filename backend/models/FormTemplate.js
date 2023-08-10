const mongoose = require('mongoose');

const formTemplateSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      type: String, // You can customize this based on your needs
      text: String,
      // Add fields for different question types
      // ...
    },
  ],
});

module.exports = mongoose.model('FormTemplate', formTemplateSchema);