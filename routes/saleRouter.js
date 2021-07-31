const express = require('express');
const router = express.Router();

const sale = require('../data/sale.json');

router.get('/', (req, res) => {
  res.send(sale);
});

module.exports = router;
