const isEmpty = require('is-empty');
const Validator = require('validator');

validateLogin = (data) => {

    let errors = {};

    data.email = isEmpty(data.email) ? "" : data.email;
    data.password = isEmpty(data.password) ? "" : data.password;

    if (Validator.isEmpty(data.email)){
        errors.fistName = 'Email is require to sign in. Please fill it in.'
    }else if (!Validator.isEmail(data.email)){
        errors.email = "Your email looks invalid."
    }    

    if (Validator.isEmpty(data.password)){
        errors.password = "You can't get in without password. Please fill it in"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateLogin;
