const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator');

const User = require("../models/user");

router.post("/register", (req, res, next) => {

    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        user.save().then(result => {
            res.status(201).json({
                message: "User created!",
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
    });
});

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne( {email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        if (!result) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, 'secret_this_should_be_longer_like_very_longer', { expiresIn: "1h" });
        res.status(200).json({
            token: token
        });
    })
    .catch(err => {
        res.status(401).json({
            message: "Auth failed", error: err
        });
    })
})

router.get("/users", (req, res, next) => {
    User.find().then(documents => {
        res.status(200).json({
            message: "Users fetched successfully!",
            users: documents
        });
    });
});

router.get("/user/:id", (req, res, next) => {
    User.findById(req.params.id).then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    });
});


router.post("/start", [
    check('apiKey').not().isEmpty(),
    check('language').not().isEmpty()
  ], (req, res, next) => {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
  
      const { apiKey, language } = req.body;
  
      // Here you should have your logic to validate the API key and language
      // For now, let's assume that if the API key is correct, a token is generated
      if (apiKey === "your_expected_api_key") { // Replace with your actual API key check
          const token = jwt.sign(
              { apiKey: apiKey, lang: language }, // You can sign the token with any data you need
              "secret_this_should_be_longer_like_very_longer",
              { expiresIn: "1h" } // Token validity
          );
          res.status(200).json({
              success: true,
              message: "Token successfully retrieved",
              data: { token: token }
          });
      } else {
          res.status(401).json({
              success: false,
              message: "Invalid API key"
          });
      }
  });
  
 module.exports = router;