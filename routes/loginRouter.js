const express = require('express');
const app = require('..');
const router = express.Router();
const jwt = require('jsonwebtoken');

const login = require('../data/login.json');

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (login[0].username == username) {
    if (login[0].password == password) {
      const data = login[0].id;
      const token = jwt.sign({ data }, 'jwtSecretDdataTokenServerDgerz', { expiresIn: 300 });
      res.json({ token: token });
    } else {
      res.send({ message: 'username/password is correct' });
    }
  } else {
    res.send({ message: 'username/password is correct' });
  }
});

module.exports = router;
