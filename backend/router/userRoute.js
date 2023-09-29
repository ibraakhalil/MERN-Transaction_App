const router = require('express').Router()
const { postLogin, postRegister, updateUser } = require('../controller/userController')
const authenticate = require('../validation/authentication')



router.post('/register', postRegister)
router.post('/login', postLogin)
router.get('/update', authenticate,  updateUser)



module.exports = router