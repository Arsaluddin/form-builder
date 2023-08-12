const express = require('express');
const router = express.Router();
const Form = require('../models/FormTemplate');

// Create a new form
router.post('/', async (req, res) => {
  try {
    const { formName, questions } = req.body;
    const newForm = new Form({
      formName,
      questions,
    });
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/:formId', async (req, res) => {
  try {
    const formId = req.params.formId;
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


module.exports = router;


