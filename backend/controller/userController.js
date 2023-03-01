require('dotenv').config()
const User = require("../model/user")
const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWTSECRET


const postRegister = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body
    let error = {}

    const newUser = new User({ name, email, password, balance: 0, expense: 0, income: 0, transactions: [] })

    try {
        const user = await User.findOne({ email })
        if (user) {
            error.email = 'User Already Exist'
            return res.status(400).json({ error })
        }
        if(password!==confirmPassword) {
            error.confirmPassword = 'Password did not match'
            return res.status(400).json({error})
        }

        await newUser.save()
        res.status(200).json({message: 'User create successfully'})

    } catch (e) {
        next(e)
    }
}

const postLogin = async (req, res, next) => {
    const {email, password} = req.body
    let error = {}

    try {
        const user = await User.findOne({email})
        if(!user) {
            error.email = 'User not found'
            res.status(400).json({error})
        }
        if(password !== user.password) {
            error.password = 'Password did not match'
            res.status(400).json({error})
        }

        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        },JWTSECRET, {expiresIn: '1d'})

        res.status(200).json({
            message: 'Login successfull',
            token
        })

    } catch (e) {
        next(e)
    }
}



module.exports = { postRegister, postLogin }