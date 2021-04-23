const User = require('../model/user')
const shortid = require('shortid')
const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')


exports.signup = (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) {
            return res.status(400).json({ error: "Email has Taken" })
        }
        const { name, email, password } = req.body
        const username = shortid.generate()
        const profile = `${process.env.CLIENT_URL}/profile/${username}`
        const newUser = new User({ name, email, password, profile, username })
        newUser.save((error, data) => {
            if (error) {
                return res.status(400).json({ message: "something went wrong" })
            }
            if (data) {
                return res.status(201).json({
                    message: "Sign Up success! Please Sign in"
                })
            }

        })
    })
}

exports.signin = (req, res) => {
    const { email, password } = req.body

    //check if user exists
    User.findOne({ email }).exec((error, user) => {
        if (error || !user) {
            return res.status(400).json({ error: "User with that email doesn't exist. Please Sign Up" })
        }

        //authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email and password didn't match"
            })
        }

        //generate a token and send to client
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, { expiresIn: '1d' })
        const { _id, username, name, email, role } = user;
        return res.json({
            token,
            user: { _id, username, name, email, role }
        })
    })
}


exports.signout = (req, res) => {
    res.clearCookie("token")
    res.json({
        message: "Signout Success"
    })
}

exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET, algorithms: ['RS256']
})