const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.static('public'));

app.use(express.json());
app.use(cors());

const saleRouter = require('./routes/saleRouter');
const categoryRouter = require('./routes/categoryRouter');
const loginRouter = require('./routes/loginRouter');
app.use('/sale', saleRouter);
app.use('/category', categoryRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server is ok PORT : ${PORT}`);
});

module.exports = app;
