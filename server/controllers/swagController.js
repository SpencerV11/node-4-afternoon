let swag = require('../models/swag')

module.exports = {
    read: (req, res, next) => {
        console.log('Hello')
        res.status(200).send(swag)
    }
}