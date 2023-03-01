const router = require('express').Router()
const { postLogin, postRegister } = require('../controller/userController')



router.post('/register', postRegister)
router.post('/login', postLogin)



module.exports = router