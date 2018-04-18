const joi = require('joi')

exports = userValidation = joi.object().keys({
    name: joi.string().alphanum().min(3).max(25),
    password: joi.string().min(8),
    email: joi.string().email(),
    surname: joi.string().min(3).max(25)
})