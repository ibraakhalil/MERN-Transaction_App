const router = require('express').Router()
const userRouter = require('./userRoute')
const transactionRoute = require('./transactionRoutes')


router.use('/api/user', userRouter)
router.use('/api/transaction', transactionRoute)

router.use((err, req, res, next) => {
    console.log(err.message)
})

module.exports = router