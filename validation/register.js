const isEmpty = require('is-empty');
const Validator = require('validator');

validateRegister = (data) => {

    let errors = {};
    
    data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
    data.lastName = isEmpty(data.lastName) ? "" : data.lastName;
    data.newemail = isEmpty(data.newemail) ? "" : data.newemail;
    data.password1 = isEmpty(data.password1) ? "" : data.password1;
    data.password2 = isEmpty(data.password2) ? "" : data.password2;

    if (Validator.isEmpty(data.firstName)){
        errors.firstName = 'First name cannot be left blank.'
    }
    
    if (Validator.isEmpty(data.newemail)){
        errors.newemail = 'Email cannot be left blank.'
    }else if (!Validator.isEmail(data.newemail)){
        errors.newemail = "Given email is invalid."
    }    

    if (Validator.isEmpty(data.password1)){
        errors.password1 = 'Password cannot be left blank.'
    }

    if (Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm your password.'
    }

    if(!Validator.equals(data.password1, data.password2)){
        errors.password2 ='Password does not match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};


module.exports = validateRegister


