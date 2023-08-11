const mongoose = require('mongoose');

const targetContainerSchema = new mongoose.Schema({
  id: String,
  items: [
    {
      id: String,
      text: String,
    },
  ],
});

const CategorySchema = new mongoose.Schema({
  sourceItems: [
    {
      id: String,
      text: String,
    },
  ],
  targetContainers: [targetContainerSchema],
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
