let users = require('../models/users')
let id = 1
module.exports = {
    register: (req, res) => {
        let { username, password } = req.body
        users.push({
            id,
            username,
            password
        })
        id++
        req.session.user.username = username
        res.status(200).send(req.session.user)
    },

    login: (req, res) => {
        let { username, password } = req.body
        let user = users.find(user => user.username === username && user.password === password)
        if(user) {
           req.session.user.username = username
           res.status(200).send(req.session.user)
        } else {
            res.status(500).send("Naughty Naughty...")
        }
    },

    signout: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    },

    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    }
}
