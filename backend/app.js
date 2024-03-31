const express = require("express");

const app = express();

const BodyParser = require('body-parser');

const User = require('./models/user');

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    next();
})

app.use('/api/users', (req, res, next) => {
    // Dummy Data
    const users = [
        {
            id: 1,
            name: 'Anestis',
            email: '3Rb9t@example.com'
        },
        {
            id: 2,
            name: 'Anestis2',
            email: '3Rb9t@example.com'
        },
        {
            id: 3,
            name: 'Anestis3',
            email: '3Rb9t@example.com'
        }
    ]
    res.status(200).json({ message: 'Users fetched successfully', users: users });
});

module.exports = app;