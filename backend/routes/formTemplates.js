const express = require('express');
const router = express.Router();
const FormTemplate = require('../models/FormTemplate');

// Create a new form template
router.post('/form-templates', async (req, res) => {
  try {
    const formTemplate = await FormTemplate.create(req.body);
    res.status(201).json(formTemplate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve all form templates
router.get('/form-templates', async (req, res) => {
  try {
    const formTemplates = await FormTemplate.find();
    res.status(200).json(formTemplates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


