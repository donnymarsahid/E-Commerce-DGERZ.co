const express = require('express');
const router = express.Router();

const category = require('../data/category.json');

router.get('/', (req, res) => {
  res.send(category);
});

module.exports = router;
