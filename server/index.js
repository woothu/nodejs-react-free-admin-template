const express = require('express')
const cors = require('cors');

const userRoutes = require('./routes/users.js')

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
});

app.use('/users', userRoutes())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});