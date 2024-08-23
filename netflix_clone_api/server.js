const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/UserRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/netflix_clone_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connect to DB successfully!');
  })
  .catch((err) => {
    console.log('Connect to DB failure!', err);
  });

app.use('/api/user', userRoute);

app.listen(5000, console.log('Server is running on port 5000'));
