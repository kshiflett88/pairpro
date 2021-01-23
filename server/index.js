const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.PASSWORD

const app = express();

app.use(express.json()) //middleware that helps pass body of req

const authRoutes = require('./routes/auth');
const verifyToken = require('./routes/verifyToken');

app.get('/', (req, res) => {
  res.send('Welcome to the auth system')
})

//protecting a route using a token
app.get('/api/user/profile', verifyToken, (req, res) => {
  res.send({success: true, data: req.user})
})

app.use('/api/users', authRoutes);

mongoose.connect(`mongodb+srv://kodi_pairpro:${password}@cluster0.63ibp.mongodb.net/pairpro_app?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    //Start app when connect to DB successfully
    app.listen(3000, () => console.log('Server is running'))
  })
  .catch(err => console.log(err))
