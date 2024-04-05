const express = require("express");
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

const User = require('./models/user');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://admin:6TDW75ZiCj5TGULB@backenddb.9poodmf.mongodb.net/Thesis-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(() => {
        console.log("Connection failed");
    });

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    next();
});

app.use('/api/user', userRoutes);

module.exports = app;