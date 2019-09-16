'use strict';
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ============================================================================
// MONGOOSE CONNECTION
// ===========================
mongoose.connect('mongodb://localhost/loginApp', { useNewUrlParser: true })
    .then(() => console.log('Db connected'))
    .catch(() => console.error('Db connection failed'));
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

// ============================================================================
app.listen((PORT, () => {
    console.log(`Server Started At POrt Number ${PORT}`)
}));