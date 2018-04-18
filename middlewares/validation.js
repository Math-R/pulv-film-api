const { validate } = exports.joi = require('joi')


exports.validateBody = rules => async (request, next) => {
    try {
      console.log(request.body)
      await validate(request.body, rules)
      return next()
    } catch (err) {
      console.log(err)
    }
  }