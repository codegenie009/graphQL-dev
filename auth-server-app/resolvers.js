const db = require('../db.js')

const Query = {
  greetingWithAuth: (root, args, context, info) => {
    if  (!context.user) {
      throw new Error('Unauthorized')
    }
    return "Hello : " + context.user.firstName
  }
}