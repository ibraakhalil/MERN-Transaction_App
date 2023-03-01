const router = require("express").Router()
const { getAllTransaction, postTransaction, deleteTransaction } = require("../controller/transactionController")
const authenticate = require("../validation/authentication")



router.get('/', authenticate, getAllTransaction)
router.post('/',authenticate, postTransaction)
router.delete('/:transactionId', authenticate, deleteTransaction)

module.exports = router