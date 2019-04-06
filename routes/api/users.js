const express = require('express');
const Validator = require('validator');

const ValidateRegister = require('../../validation/register');
const ValidateLogin = require('../../validation/login');
const User = require('../../models/UserModel');

const router = express.Router();

//Registration Validation-------------------------------------------------------------

router.post("/register", (req, res) => {
    
    const { errors, isValid } = ValidateRegister(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.newemail }).then(user => {
        if (user) {
          return res.status(400).json({ newemail: "You have already registered with us. Please Sign In" });
        }
    });   
    
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.newemail,
        password: req.body.password1,
        latime: Date.now()
        });

    newUser
    .save()
    .then( user => res.json(user) )
    .catch( err => console.log(err) )
});

//Login Validation----------------------------------------------------------------------------------

router.post("/login", (req, res) => {

    const { errors, isValid } = validateLogin(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    const email = req.body.email;
    const password = req.body.password;

    User
        .findOne({email})
        .then(user => {
            if(!user){
                return res.status(400).json({emailnotfound: "This email is not registered with us."});
                
            }


            if(!Validator.equals(password, user.password)){
                return res.status(400).json({passwordincorrect: 'Oops. That password is incorrect'});
            }

            return res.json({
                name: user.firstName,
                latime: user.latime
            })
            
        });
});

module.exports = router;